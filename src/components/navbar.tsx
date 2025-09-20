
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();

  // Don't show the full navbar on the admin page
  if (pathname === '/admin') {
    return (
       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background shadow-sm">
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
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background shadow-sm">
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
        <nav className="hidden items-center justify-center gap-8 text-sm font-medium md:flex flex-1">
          <Link
            href="/#overview"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Overview
          </Link>
          <Link
            href="/#learn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Learnings
          </Link>
          <Link
            href="/#sessions"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Sessions
          </Link>
          <Link
            href="/#schedule"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Schedule
          </Link>
           <Link
            href="/certificates"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Certificates
          </Link>
          <Link
            href="/#location"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Location
          </Link>
          <Link
            href="/#faq"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            FAQ
          </Link>
        </nav>
        <Button asChild variant="glass" className="hidden md:flex">
          <Link href="/registrations-closed">
            Register Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="AWS Ascend Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <SheetClose asChild>
                  <Link href="/#overview" className="text-muted-foreground transition-colors hover:text-primary">
                    Overview
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#learn" className="text-muted-foreground transition-colors hover:text-primary">
                    Learnings
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#sessions" className="text-muted-foreground transition-colors hover:text-primary">
                    Sessions
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#schedule" className="text-muted-foreground transition-colors hover:text-primary">
                    Schedule
                  </Link>
                </SheetClose>
                 <SheetClose asChild>
                  <Link href="/certificates" className="text-muted-foreground transition-colors hover:text-primary">
                    Certificates
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#location" className="text-muted-foreground transition-colors hover:text-primary">
                    Location
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/#faq" className="text-muted-foreground transition-colors hover:text-primary">
                    FAQ
                  </Link>
                </SheetClose>
                <Button asChild variant="glass" className="w-full">
                  <Link href="/registrations-closed">
                    Register
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
