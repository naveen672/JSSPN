import nodemailer from 'nodemailer';
import { log } from './vite';

// Check if the required environment variables are available
if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_APP_PASSWORD) {
  log('Warning: Email credentials are not set. Email functionality will not work.', 'email');
}

// Create a transporter object - will be initialized lazily
let transporter: nodemailer.Transporter | null = null;

// Initialize the transporter
function getTransporter() {
  if (!transporter) {
    try {
      // Make sure we have the credentials
      if (!process.env.EMAIL_ADDRESS) {
        log('Missing EMAIL_ADDRESS environment variable', 'email');
        return null;
      }
      
      // Get the app password and remove any spaces
      const appPassword = process.env.EMAIL_APP_PASSWORD?.replace(/\s+/g, '');
      if (!appPassword) {
        log('Missing EMAIL_APP_PASSWORD environment variable', 'email');
        return null;
      }
      
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: appPassword,
        },
        logger: true,
        debug: false // set to true to see detailed logs
      });
      
      log('Email transporter created with updated credentials', 'email');
    } catch (error) {
      log(`Failed to create email transporter: ${error}`, 'email');
      return null;
    }
  }
  
  return transporter;
}

interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Send an email using the configured transporter
 * @param options Email options (to, subject, text/html content)
 * @returns Promise resolving to success (true/false)
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    if (!process.env.EMAIL_ADDRESS || !process.env.EMAIL_APP_PASSWORD) {
      log('Cannot send email: Email credentials are not set.', 'email');
      return false;
    }

    const emailTransporter = getTransporter();
    if (!emailTransporter) {
      log('Cannot send email: Failed to initialize email transporter', 'email');
      return false;
    }

    const mailOptions = {
      from: `JSS Polytechnic <${process.env.EMAIL_ADDRESS}>`,
      to: options.to,
      cc: process.env.EMAIL_ADDRESS, // Send a copy to administrator
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    const info = await emailTransporter.sendMail(mailOptions);
    log(`Email sent: ${info.messageId}`, 'email');
    return true;
  } catch (error) {
    log(`Error sending email: ${error}`, 'email');
    return false;
  }
}

/**
 * Send a contact form confirmation email to a user
 * @param name User's name
 * @param email User's email address
 * @param phone User's phone number (optional)
 * @param inquirySubject Subject of the inquiry (optional)
 * @param message User's message
 * @returns Promise resolving to success (true/false)
 */
export async function sendContactConfirmation(
  name: string, 
  email: string, 
  phone: string = '', 
  inquirySubject: string = '', 
  message: string = ''
): Promise<boolean> {
  const subject = 'Thank you for contacting JSS Polytechnic';
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <div style="background-color: #003366; padding: 15px; text-align: center; border-radius: 5px 5px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">JSS Polytechnic Nanjangud</h1>
      </div>
      
      <div style="padding: 20px;">
        <p style="font-size: 16px;">Dear <strong>${name}</strong>,</p>
        
        <p style="font-size: 16px;">Thank you for contacting JSS Polytechnic Nanjangud. We have received your message and appreciate your interest in our institution.</p>
        
        <p style="font-size: 16px;">Our team will review your inquiry and get back to you as soon as possible. Please allow 1-2 business days for a response.</p>
        
        <p style="font-size: 16px;">If your matter is urgent, please feel free to contact us directly at:</p>
        <ul style="font-size: 16px;">
          <li>Phone: 08221 – 226491 or 9886618231</li>
          <li>Email: jsspn324@gmail.com</li>
        </ul>
        
        <p style="font-size: 16px;">Thank you for your patience and interest in JSS Polytechnic.</p>
        
        <p style="font-size: 16px;">Warm regards,<br/>
        <strong>N Vidyashankar</strong><br/>
        Principal<br/>
        JSS Polytechnic, Nanjangud</p>
      </div>
      
      <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 5px 5px;">
        <p>This is an automated message. Please do not reply to this email.</p>
        <p>JSS Polytechnic, Mysore – Ooty Road, Nanjangud – 571 301, Karnataka, India</p>
      </div>
    </div>
  `;
  
  const textContent = `
Dear ${name},

Thank you for contacting JSS Polytechnic Nanjangud. We have received your message and appreciate your interest in our institution.

Our team will review your inquiry and get back to you as soon as possible. Please allow 1-2 business days for a response.

If your matter is urgent, please feel free to contact us directly at:
- Phone: 08221 – 226491 or 9886618231
- Email: jsspn324@gmail.com

Thank you for your patience and interest in JSS Polytechnic.

Warm regards,
N Vidyashankar
Principal
JSS Polytechnic, Nanjangud

---
This is an automated message. Please do not reply to this email.
JSS Polytechnic, Mysore – Ooty Road, Nanjangud – 571 301, Karnataka, India
  `;
  
  return sendEmail({
    to: email,
    subject,
    text: textContent,
    html: htmlContent,
  });
}

// Verify the email configuration on startup
(async function verifyEmailConfig() {
  if (process.env.EMAIL_ADDRESS && process.env.EMAIL_APP_PASSWORD) {
    try {
      const emailTransporter = getTransporter();
      if (emailTransporter) {
        await emailTransporter.verify();
        log('Email service ready to send messages', 'email');
      } else {
        log('Email transporter not initialized', 'email');
      }
    } catch (error) {
      log(`Email configuration error: ${error}`, 'email');
    }
  } else {
    log('Email configuration missing: EMAIL_ADDRESS or EMAIL_APP_PASSWORD not set', 'email');
  }
})();