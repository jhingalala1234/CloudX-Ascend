
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2, Check, X } from 'lucide-react';

import { verifyAdmin, getRegistrations, updateRegistrationStatus } from '@/services/admin';

type Registration = {
  id: string;
  name: string;
  registrationNumber: string;
  email: string;
  phoneNumber: string;
  paymentId: string;
  screenshotPath: string;
  status: 'pending_verification' | 'verified' | 'rejected';
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
};

export default function AdminPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isFetchingRegistrations, setIsFetchingRegistrations] = useState(true);

  useEffect(() => {
    if (isLoggedIn) {
      fetchRegistrations();
    }
  }, [isLoggedIn]);

  const fetchRegistrations = async () => {
    setIsFetchingRegistrations(true);
    try {
      const fetchedRegistrations = await getRegistrations() as Registration[];
      const sortedRegistrations = fetchedRegistrations.sort((a, b) => {
        const dateA = a.createdAt?._seconds || 0;
        const dateB = b.createdAt?._seconds || 0;
        return dateB - dateA;
      });
      setRegistrations(sortedRegistrations);
    } catch (error) {
      console.error("Error fetching registrations:", error);
    } finally {
      setIsFetchingRegistrations(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { success } = await verifyAdmin({ username, password });
      if (success) {
        setIsLoggedIn(true);
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error("Login Failed:", error);
      alert('Login Failed: Please check your username and password.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, status: 'verified' | 'rejected') => {
    const originalRegistrations = [...registrations];
    setRegistrations(regs => regs.map(r => r.id === id ? { ...r, status } : r));

    try {
      await updateRegistrationStatus({ registrationId: id, status });
    } catch (error) {
      setRegistrations(originalRegistrations);
      console.error("Update Failed:", error);
      alert('Could not update the registration status. Please try again.');
    }
  };
  
  if (!isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="w-full max-w-sm animate-slide-up-fade">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-primary">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Log In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-6 md:p-8">
      <div className="container mx-auto animate-fade-in">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
            <Button onClick={fetchRegistrations} disabled={isFetchingRegistrations}>
                {isFetchingRegistrations ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Refresh Data
            </Button>
        </div>

        {isFetchingRegistrations ? (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        ) : (
          <Card className="animate-slide-up-fade">
            <CardContent className="p-0">
                <div className="overflow-x-auto hide-scrollbar">
                <table className="w-full text-sm whitespace-nowrap">
                    <thead className="bg-muted/50">
                    <tr className="border-b border-border">
                        <th className="p-4 text-left font-medium">Name</th>
                        <th className="p-4 text-left font-medium">Reg. Number</th>
                        <th className="p-4 text-left font-medium">Email</th>
                        <th className="p-4 text-left font-medium">Payment ID</th>
                        <th className="p-4 text-left font-medium">Screenshot Path</th>
                        <th className="p-4 text-center font-medium">Status</th>
                        <th className="p-4 text-center font-medium">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {registrations.length === 0 ? (
                        <tr>
                            <td colSpan={7} className="p-8 text-center text-muted-foreground">No registrations found.</td>
                        </tr>
                    ) : (
                        registrations.map((reg) => (
                        <tr key={reg.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                            <td className="p-4">{reg.name}</td>
                            <td className="p-4 font-mono">{reg.registrationNumber}</td>
                            <td className="p-4">{reg.email}</td>
                            <td className="p-4 font-mono">{reg.paymentId}</td>
                            <td className="p-4 font-mono text-xs">
                                {reg.screenshotPath || '-'}
                            </td>
                            <td className="p-4 text-center">
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                    reg.status === 'verified' ? 'bg-green-500/20 text-green-400' :
                                    reg.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                                    'bg-yellow-500/20 text-yellow-400'
                                }`}>
                                    {reg.status.replace('_', ' ')}
                                </span>
                            </td>
                            <td className="p-4 text-center">
                                <div className="flex justify-center gap-2">
                                <Button variant="ghost" size="icon" className="text-green-500 hover:text-green-500 hover:bg-green-500/10" onClick={() => handleStatusUpdate(reg.id, 'verified')} title="Approve">
                                    <Check className="h-5 w-5" />
                                </Button>

                                <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-500 hover:bg-red-500/10" onClick={() => handleStatusUpdate(reg.id, 'rejected')} title="Reject">
                                    <X className="h-5 w-5" />
                                </Button>
                                </div>
                            </td>
                        </tr>
                        ))
                    )}
                    </tbody>
                </table>
                </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
