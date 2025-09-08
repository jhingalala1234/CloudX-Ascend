import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  CalendarDays,
  Clock,
  Cloud,
  Coffee,
  Gift,
  MapPin,
  Ticket,
  Trophy,
  Users,
  Terminal,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Ticket className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">
              CloudX Workshop Hub
            </span>
          </Link>
          <Button asChild className="font-bold" variant="outline">
            <Link href="https://razorpay.me/pl/M2FFrP5P7l9KxN/view" target="_blank" rel="noopener noreferrer">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid animate-in fade-in-0 duration-500 items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-headline text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-6xl lg:text-7xl">
              Unlock the Cloud:
              <br />
              <span className="text-primary">AWS & DevOps Workshop</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              A full-day, hands-on workshop designed to supercharge your cloud
              skills. Led by AWS Community Builders.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="font-bold">
                <Link href="https://razorpay.me/pl/M2FFrP5P7l9KxN/view" target="_blank" rel="noopener noreferrer">
                  Secure Your Spot
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#schedule">
                  View Schedule
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Perks Section */}
        <section
          id="perks"
          className="w-full animate-in fade-in-0 duration-500 bg-muted py-12 md:py-24 lg:py-32"
        >
          <div className="container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                What's In It For You?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                More than just a workshop. It's a full-day experience packed with value.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  icon: <CalendarDays className="h-8 w-8 text-primary" />,
                  title: 'Full Day OD',
                  description:
                    'Get official On-Duty for the entire day to focus on learning.',
                },
                {
                  icon: <Coffee className="h-8 w-8 text-primary" />,
                  title: 'Refreshments Provided',
                  description:
                    'Stay energized with complimentary lunch and refreshments throughout the day.',
                },
                {
                  icon: <Gift className="h-8 w-8 text-primary" />,
                  title: 'Exclusive Swags',
                  description:
                    'Receive a bag of exclusive goodies and swags to remember the event.',
                },
                {
                  icon: <Award className="h-8 w-8 text-primary" />,
                  title: 'Certificate of Participation',
                  description:
                    'Add a valuable, verifiable certificate to your professional profile.',
                },
                {
                  icon: <Trophy className="h-8 w-8 text-primary" />,
                  title: 'Prizes to Win',
                  description:
                    'Participate in our fun quiz and stand a chance to win exciting prizes.',
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: 'Networking Opportunity',
                  description:
                    'Connect with speakers, peers, and build your professional network.',
                },
              ].map((perk, i) => (
                <div key={i} className="grid gap-2 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-md">
                    {perk.icon}
                  </div>
                  <h3 className="text-xl font-bold font-headline">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Workshops Section */}
        <section id="workshops" className="container animate-in fade-in-0 duration-500 py-12 md:py-24 lg:py-32">
           <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Dive Deep Into Cloud Tech
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Two hands-on sessions covering critical industry skills.
              </p>
            </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Cloud className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="font-headline text-2xl">AWS & DevOps</CardTitle>
                <CardDescription>From fundamentals to deployment pipelines.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Introduction to Cloud Computing & AWS</li>
                  <li>Core AWS Services: EC2, S3, VPC</li>
                  <li>DevOps Principles and Practices</li>
                  <li>Building a CI/CD Pipeline with AWS</li>
                  <li>Hands-on Deployment Project</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                 <Terminal className="mb-4 h-10 w-10 text-primary" />
                <CardTitle className="font-headline text-2xl">Q CLI</CardTitle>
                <CardDescription>Master the command line for quantum computing.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Introduction to Quantum Computing Concepts</li>
                  <li>Setting up the Q CLI environment</li>
                  <li>Running your first quantum circuit</li>
                  <li>Exploring quantum algorithms via CLI</li>
                  <li>Integrating Q CLI with other tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Speakers Section */}
        <section id="speakers" className="w-full animate-in fade-in-0 duration-500 bg-muted py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Meet Your Instructors
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Learn from certified AWS Community Builders with real-world experience.
              </p>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
              <Card className="text-center py-6">
                <CardHeader className="p-0">
                  <Avatar className="mx-auto h-24 w-24 border-4 border-primary">
                    <AvatarImage src="https://picsum.photos/100/100" data-ai-hint="woman smiling" alt="Abinaya S V" />
                    <AvatarFallback>ASV</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="mt-4 p-0">
                  <CardTitle className="font-headline">Abinaya S V</CardTitle>
                  <CardDescription className="text-primary font-semibold">AWS Community Builder</CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center py-6">
                <CardHeader className="p-0">
                  <Avatar className="mx-auto h-24 w-24 border-4 border-primary">
                    <AvatarImage src="https://picsum.photos/101/101" data-ai-hint="woman portrait" alt="Jeevitha M" />
                    <AvatarFallback>JM</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent className="mt-4 p-0">
                  <CardTitle className="font-headline">Jeevitha M</CardTitle>
                  <CardDescription className="text-primary font-semibold">AWS Community Builder</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Schedule Section */}
        <section id="schedule" className="container animate-in fade-in-0 duration-500 py-12 md:py-24 lg:py-32">
           <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                A Day of Learning
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Here’s what we have planned for you.
              </p>
            </div>
            <div className="relative mx-auto max-w-2xl pl-4 sm:pl-0">
              <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-border sm:left-1/2"></div>
              {[
                { time: '09:00 AM', event: 'Registration & Welcome Kit' },
                { time: '09:30 AM', event: 'Session 1: AWS & DevOps Deep Dive' },
                { time: '12:30 PM', event: 'Lunch Break' },
                { time: '01:30 PM', event: 'Session 2: Mastering Q CLI' },
                { time: '03:30 PM', event: 'Fun Quiz & Prize Distribution' },
                { time: '04:30 PM', event: 'Closing Note & Certificate Distribution' },
              ].map((item, i) => (
                 <div key={i} className="relative flex items-center sm:grid sm:grid-cols-2 sm:gap-8">
                  <div className={`mb-8 sm:mb-0 ${i % 2 === 0 ? 'sm:text-right' : 'sm:col-start-2 sm:text-left'}`}>
                    <div className="relative">
                      <div className="absolute -left-8 top-1 z-10 sm:left-auto sm:-right-12">
                        <Clock className="h-6 w-6 rounded-full bg-primary p-1 text-primary-foreground" />
                      </div>
                      <p className="font-bold text-primary">{item.time}</p>
                      <p>{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </section>

        {/* Venue Section */}
        <section id="venue" className="w-full animate-in fade-in-0 duration-500 bg-muted py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                Find Us Here
              </h2>
              <div className="mt-4 flex items-center gap-2 text-xl font-semibold text-primary">
                 <MapPin className="h-6 w-6"/>
                 iMac Lab, SRMIST
              </div>
              <p className="mt-4 text-muted-foreground">
                The workshop will be held at the state-of-the-art iMac Lab at SRM Institute of Science and Technology, equipped with powerful machines and a comfortable learning environment.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                <strong>Directions:</strong> The iMac Lab is located on the 3rd floor of the Tech Park building. Follow the signs for 'CloudX Workshop Hub' upon entering the campus.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src="https://picsum.photos/600/400"
                data-ai-hint="university campus"
                alt="SRMIST Campus"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background">
        <div className="container py-12 text-center">
            <h2 className="font-headline text-2xl font-bold tracking-tighter sm:text-3xl">Ready to Build Your Cloud Skills?</h2>
            <p className="mt-2 text-muted-foreground">Seats are limited. Register today to secure your place.</p>
            <div className="mt-6">
              <Button asChild size="lg" className="font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="https://razorpay.me/pl/M2FFrP5P7l9KxN/view" target="_blank" rel="noopener noreferrer">
                  Claim Your Ticket!
                </Link>
              </Button>
            </div>
             <p className="mt-8 text-xs text-muted-foreground">
              © {new Date().getFullYear()} CloudX Workshop Hub. All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
}
