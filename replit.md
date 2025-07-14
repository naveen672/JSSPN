# JSS Polytechnic Nanjangud - Official Website

## Overview

This is a comprehensive digital platform for JSS Polytechnic, Nanjangud that provides an immersive online experience for students, faculty, and campus visitors. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring modern web technologies and a focus on educational institution needs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React.js with TypeScript**: Modern component-based UI library for type-safe development
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Framer Motion**: Animation library for smooth transitions and micro-interactions
- **Wouter**: Lightweight client-side routing solution
- **Vite**: Fast build tool and development server
- **shadcn/ui**: Radix UI-based component library for consistent design

### Backend Architecture
- **Express.js**: Node.js web application framework
- **TypeScript**: Type-safe server-side development
- **Session-based Authentication**: Using Passport.js with local strategy
- **RESTful API Design**: Standard HTTP methods for resource management

### Database Architecture
- **PostgreSQL**: Primary relational database for data persistence
- **Drizzle ORM**: Type-safe database operations with schema validation
- **Zod**: Runtime type validation for API endpoints

## Key Components

### Authentication System
- Admin-only access for content management
- Session-based authentication with secure password hashing (scrypt)
- Role-based access control (admin/user roles)
- Protected routes for administrative functions

### Content Management
- **News and Announcements**: Dynamic content system with priority ordering
- **Contact Form Management**: Submission handling with email notifications
- **Visitor Counter**: Real-time visitor tracking and analytics
- **Admissions Inquiries**: Dedicated form for prospective students

### Public Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Smooth animations and transitions
- **Department Information**: Comprehensive program details
- **Campus Information**: Faculty profiles, facilities, and resources

## Data Flow

### User Authentication Flow
1. User submits login credentials
2. Server validates against database using Passport.js
3. Session created and stored in memory store
4. Protected routes accessible based on user role

### Content Management Flow
1. Admin creates/updates content through admin dashboard
2. Data validated using Zod schemas
3. Database updated via Drizzle ORM
4. Frontend automatically reflects changes via React Query

### Visitor Tracking Flow
1. Visitor lands on homepage
2. Visitor count incremented via API call
3. Count stored in PostgreSQL
4. Real-time updates displayed in footer

## External Dependencies

### Email Service
- **Nodemailer**: SMTP email service for contact form notifications
- **Gmail Integration**: Using app-specific passwords for authentication
- Configuration via environment variables

### Database Service
- **Neon Database**: PostgreSQL hosting service
- Connection via environment variable (DATABASE_URL)
- Connection pooling for performance

### Development Tools
- **ESLint & Prettier**: Code quality and formatting
- **Replit Integration**: Development environment optimization

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static files
2. **Backend Build**: esbuild bundles Express server
3. **Database Migration**: Drizzle handles schema migrations
4. **Asset Optimization**: Images and static files served efficiently

### Environment Configuration
- **Development**: Local development with hot reload
- **Production**: Optimized build with secure session handling
- **Database**: PostgreSQL with connection pooling
- **Email**: Gmail SMTP with app passwords

### Security Considerations
- Session secrets via environment variables
- HTTPS in production (trust proxy configuration)
- Input validation with Zod schemas
- SQL injection prevention via parameterized queries

### Performance Optimizations
- React Query for efficient data fetching and caching
- Lazy loading for images and components
- CDN integration for external assets (fonts, icons)
- Database query optimization with proper indexing

The application follows modern web development best practices with a focus on maintainability, security, and user experience suitable for an educational institution's digital presence.