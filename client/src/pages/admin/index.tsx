import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useAuth } from '@/hooks/use-auth';
import { useToast } from '@/hooks/use-toast';
import { useLocation } from 'wouter';
import { getQueryFn, apiRequest, queryClient } from '@/lib/queryClient';
import { NewsItem, ContactSubmission } from '@shared/schema';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Loader2, LogOut, Trash2, Edit, Check, RefreshCw } from "lucide-react";

export default function AdminDashboard() {
  const { user, logoutMutation } = useAuth();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  // If not logged in, redirect to login page
  if (!user) {
    setLocation('/admin/login');
    return null;
  }
  
  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        setLocation('/admin/login');
      }
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-primary text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">JSS Polytechnic Admin</h1>
            <p>Welcome, {user.fullName || user.username}</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="text-white">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto p-4 mt-6">
        <Tabs defaultValue="news">
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="news" className="flex-1">Flash News</TabsTrigger>
            <TabsTrigger value="messages" className="flex-1">Contact Messages</TabsTrigger>
          </TabsList>
          
          <TabsContent value="news" className="space-y-4">
            <NewsManager />
          </TabsContent>
          
          <TabsContent value="messages" className="space-y-4">
            <MessagesManager />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function NewsManager() {
  const { toast } = useToast();
  const [isAddingNews, setIsAddingNews] = useState(false);
  const [newsForm, setNewsForm] = useState({
    title: '',
    content: '',
    isActive: true,
    priority: 0
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Fetch news items
  const { 
    data: newsItems, 
    isLoading, 
    isError 
  } = useQuery<NewsItem[]>({
    queryKey: ['/api/news'],
    queryFn: getQueryFn(),
  });
  
  // Create news mutation
  const createNewsMutation = useMutation({
    mutationFn: async (data: typeof newsForm) => {
      const response = await apiRequest('POST', '/api/news', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/news'] });
      toast({
        title: "Success",
        description: "News item created successfully",
      });
      setIsAddingNews(false);
      setNewsForm({
        title: '',
        content: '',
        isActive: true,
        priority: 0
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create news item",
        variant: "destructive",
      });
      console.error(error);
    }
  });
  
  // Update news mutation
  const updateNewsMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number, data: Partial<typeof newsForm> }) => {
      const response = await apiRequest('PUT', `/api/news/${id}`, data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/news'] });
      toast({
        title: "Success",
        description: "News item updated successfully",
      });
      setEditingId(null);
      setNewsForm({
        title: '',
        content: '',
        isActive: true,
        priority: 0
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update news item",
        variant: "destructive",
      });
      console.error(error);
    }
  });
  
  // Delete news mutation
  const deleteNewsMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest('DELETE', `/api/news/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/news'] });
      toast({
        title: "Success",
        description: "News item deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete news item",
        variant: "destructive",
      });
      console.error(error);
    }
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewsForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSwitchChange = (checked: boolean) => {
    setNewsForm(prev => ({
      ...prev,
      isActive: checked
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateNewsMutation.mutate({ id: editingId, data: newsForm });
    } else {
      createNewsMutation.mutate(newsForm);
    }
  };
  
  const handleEdit = (item: NewsItem) => {
    setEditingId(item.id);
    setNewsForm({
      title: item.title,
      content: item.content,
      isActive: item.isActive,
      priority: item.priority
    });
    setIsAddingNews(true);
  };
  
  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      deleteNewsMutation.mutate(id);
    }
  };
  
  const cancelForm = () => {
    setIsAddingNews(false);
    setEditingId(null);
    setNewsForm({
      title: '',
      content: '',
      isActive: true,
      priority: 0
    });
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  if (isError) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500 mb-4">Failed to load news items</p>
        <Button onClick={() => queryClient.invalidateQueries({ queryKey: ['/api/news'] })}>
          <RefreshCw className="mr-2 h-4 w-4" /> Retry
        </Button>
      </div>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Flash News</h2>
        {!isAddingNews && (
          <Button onClick={() => setIsAddingNews(true)}>
            Add New Item
          </Button>
        )}
      </div>
      
      {isAddingNews && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{editingId ? 'Edit News Item' : 'Add News Item'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={newsForm.title}
                  onChange={handleInputChange}
                  required
                  placeholder="News title"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={newsForm.content}
                  onChange={handleInputChange}
                  required
                  placeholder="News content"
                  rows={4}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="priority">Priority (Higher numbers appear first)</Label>
                <Input
                  id="priority"
                  name="priority"
                  type="number"
                  value={newsForm.priority.toString()}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="isActive"
                  checked={newsForm.isActive}
                  onCheckedChange={handleSwitchChange}
                />
                <Label htmlFor="isActive">Active</Label>
              </div>
              
              <div className="flex space-x-2 pt-4">
                <Button
                  type="submit"
                  disabled={createNewsMutation.isPending || updateNewsMutation.isPending}
                >
                  {(createNewsMutation.isPending || updateNewsMutation.isPending) ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      {editingId ? 'Update' : 'Save'}
                    </>
                  )}
                </Button>
                <Button type="button" variant="outline" onClick={cancelForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
      
      <div className="grid gap-4 md:grid-cols-2">
        {newsItems && newsItems.length > 0 ? (
          newsItems.map(item => (
            <Card key={item.id} className={!item.isActive ? 'opacity-60' : ''}>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <div className="flex space-x-1">
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-8 w-8 p-0"
                      onClick={() => handleEdit(item)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-8 w-8 p-0 text-red-500"
                      onClick={() => handleDelete(item.id)}
                      disabled={deleteNewsMutation.isPending}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>
                  Priority: {item.priority} | Status: {item.isActive ? 'Active' : 'Inactive'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{item.content}</p>
              </CardContent>
              <CardFooter className="text-xs text-gray-500">
                Created: {new Date(item.createdAt).toLocaleDateString()}
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-2 text-center p-8 bg-gray-100 rounded-lg">
            <p className="text-gray-500">No news items found. Add your first one!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function MessagesManager() {
  const { toast } = useToast();
  
  // Fetch contact submissions
  const { 
    data: messages, 
    isLoading, 
    isError 
  } = useQuery<ContactSubmission[]>({
    queryKey: ['/api/contact'],
    queryFn: getQueryFn(),
  });
  
  // Mark as read mutation
  const markAsReadMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest('PUT', `/api/contact/${id}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
      toast({
        title: "Success",
        description: "Message marked as read",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update message status",
        variant: "destructive",
      });
      console.error(error);
    }
  });
  
  const handleMarkAsRead = (id: number) => {
    markAsReadMutation.mutate(id);
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }
  
  if (isError) {
    return (
      <div className="text-center p-8">
        <p className="text-red-500 mb-4">Failed to load messages</p>
        <Button onClick={() => queryClient.invalidateQueries({ queryKey: ['/api/contact'] })}>
          <RefreshCw className="mr-2 h-4 w-4" /> Retry
        </Button>
      </div>
    );
  }
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contact Messages</h2>
      
      {messages && messages.length > 0 ? (
        <div className="space-y-4">
          {messages.map(message => (
            <Card key={message.id} className={message.isRead ? 'opacity-70' : 'border-l-4 border-l-primary'}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{message.name}</CardTitle>
                    <CardDescription>
                      <a href={`mailto:${message.email}`} className="hover:underline">{message.email}</a>
                      {message.subject && <span> | Subject: {message.subject}</span>}
                    </CardDescription>
                  </div>
                  {!message.isRead && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleMarkAsRead(message.id)}
                      disabled={markAsReadMutation.isPending}
                    >
                      {markAsReadMutation.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <>Mark as Read</>
                      )}
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{message.message}</p>
              </CardContent>
              <CardFooter className="text-xs text-gray-500">
                Received: {new Date(message.createdAt).toLocaleString()}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 bg-gray-100 rounded-lg">
          <p className="text-gray-500">No messages received yet.</p>
        </div>
      )}
    </div>
  );
}