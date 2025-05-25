import { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import { useLocation } from 'wouter';
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function AdminLoginPage() {
  const { loginMutation, user } = useAuth();
  const [, setLocation] = useLocation();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  // If user is already logged in, redirect to admin dashboard
  if (user) {
    setLocation('/admin');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(credentials, {
      onSuccess: () => {
        setLocation('/admin');
      }
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6 p-4">
        <div className="bg-primary text-white p-8 rounded-lg flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">JSS Polytechnic</h1>
          <h2 className="text-xl mb-6">Admin Portal</h2>
          <p className="mb-4">
            Welcome to the administrative dashboard for JSS Polytechnic. This secure area allows authorized staff to manage website content.
          </p>
          <p>
            Login with your administrator credentials to access the dashboard.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
            <CardDescription>
              Sign in to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                  placeholder="Enter your username"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
              
              {loginMutation.isError && (
                <div className="text-red-500 text-sm mt-2">
                  Invalid username or password. Please try again.
                </div>
              )}
            </form>
          </CardContent>
          <CardFooter className="flex justify-center text-sm text-gray-500">
            <p>Default credentials: username "admin" password "admin"</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}