
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Linkedin, Github, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
        <header className="fixed top-0 z-50 w-full bg-background/95 shadow-md animate-fade-in">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/logo.png"
                    alt="AWS Ascend Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                />
                </Link>
            </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <div className="w-full max-w-md p-8 space-y-6 bg-card text-card-foreground rounded-lg shadow-lg animate-slide-up-fade">
                <div className="flex justify-center">
                    <CheckCircle className="h-20 w-20 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-primary">Registration Submitted!</h1>
                <p className="text-muted-foreground">
                    Thank you! Your ticket will be sent to your registered email address by E.O.D.
                </p>

                <div className="border-t border-border/50 pt-6 space-y-4">
                    <p className="text-muted-foreground">
                        Click the link below to join the official WhatsApp group for registered participants.
                    </p>
                    <Button asChild className="w-full">
                        <Link href="https://chat.whatsapp.com/GD2NsC74EMY8arm7g6sxVE?mode=ems_copy_t" target="_blank" rel="noopener noreferrer">
                            Join WhatsApp Group
                        </Link>
                    </Button>
                </div>
                
                <div className="text-sm text-muted-foreground pt-4">
                    <p>In case of any issues or questions, feel free to reach out to us on our socials.</p>
                     <div className="flex justify-center gap-6 mt-4">
                        <Link href="https://www.linkedin.com/company/cloudx-srmist/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077B5] transition-colors"><Linkedin className="h-6 w-6" /></Link>
                        <Link href="https://github.com/CloudX-SRMIST" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Github className="h-6 w-6" /></Link>
                        <Link href="mailto:cloudx.srmist@gmail.com" className="text-muted-foreground hover:text-[#EA4335] transition-colors"><Mail className="h-6 w-6" /></Link>
                        <Link href="https://www.instagram.com/cloudx.srmist/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#E4405F] transition-colors"><Instagram className="h-6 w-6" /></Link>
                    </div>
                </div>

                <Button asChild variant="outline" className="w-full">
                    <Link href="/">Return to Homepage</Link>
                </Button>
            </div>
        </main>
    </div>
  );
}
