
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Cloud,
  Code,
  Zap,
  Star,
  Gift,
  Users,
  Linkedin,
  Utensils,
  MapPin,
  Github,
  Mail,
  Instagram,
  Menu,
  Database,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full bg-background/95 shadow-md backdrop-blur-sm animate-fade-in">
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
                href="#overview"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Overview
              </Link>
              <Link
                href="#learn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Learnings
              </Link>
              <Link
                href="#sessions"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Sessions
              </Link>
              <Link
                href="#schedule"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Schedule
              </Link>
              <Link
                href="#location"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Location
              </Link>
              <Link
                href="#faq"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                FAQ
              </Link>
            </nav>
            <Button asChild variant="glass" className="hidden md:flex">
              <Link href="/register">
                Register
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
                <SheetContent side="right">
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
                      <Link href="#overview" className="text-muted-foreground transition-colors hover:text-primary">Overview</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#learn" className="text-muted-foreground transition-colors hover:text-primary">Learnings</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#sessions" className="text-muted-foreground transition-colors hover:text-primary">Sessions</Link>
                    </SheetClose>
                     <SheetClose asChild>
                      <Link href="#schedule" className="text-muted-foreground transition-colors hover:text-primary">Schedule</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#location" className="text-muted-foreground transition-colors hover:text-primary">Location</Link>
                    </SheetClose>
                    <SheetClose asChild>
                     <Link href="#faq" className="text-muted-foreground transition-colors hover:text-primary">FAQ</Link>
                    </SheetClose>
                     <Button asChild variant="glass" className="w-full">
                      <Link href="/register">
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

        <main className="flex-1">
          <section
            id="home"
            className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-hidden text-center px-4"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            <div className="relative mx-auto max-w-5xl animate-slide-up-fade">
              <div className="flex justify-center items-center flex-col">
                <h1 className="font-headline text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                  AWS Ascend
                </h1>
                 <h1 className="font-headline text-5xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  Elevate Your Skills
                </h1>
              </div>
              <p className="mt-4 text-xl font-medium text-muted-foreground">Powered By <span className="font-bold bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">Amazon Q</span></p>
              <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                One Day. Two Sessions. Real Projects. Directly From Industry Mentors. 
              </p>
              <div className="mt-10">
                <Button
                  asChild
                  size="lg"
                  variant="glass"
                  className="h-14 px-12 text-lg font-bold"
                >
                  <Link href="/register">
                    Register
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          <section id="overview" className="py-16 sm:py-24 animate-slide-up-fade">
            <div className="container mx-auto px-4 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                  Workshop Overview
                </h2>
                 <p className="text-lg text-muted-foreground text-justify">
                  AWS Ascend is a full-day, hands-on workshop designed for anyone — no prior cloud experience required. From your very first step in the cloud to building a data lake on AWS and exploring generative AI with the AWS Q CLI, you’ll learn by doing, not just listening.
                </p>
                <p className="text-lg text-muted-foreground text-justify">
                  Guided by AWS Community Builders, this workshop is packed with labs, swags, and community learning. You’ll walk out with real projects, a certificate, and practical skills that set you apart. Miss it, and you’re missing the easiest way to step into the future of cloud.
                </p>
              </div>
              <div>
                <Image
                  src="https://picsum.photos/seed/1/600/400"
                  width={600}
                  height={400}
                  alt="Workshop in session"
                  data-ai-hint="workshop team"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </section>

          <section id="learn" className="py-16 sm:py-24 animate-slide-up-fade">
            <div className="container mx-auto text-center px-4">
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                What You’ll Learn
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                This isn’t theory. Every session is hands-on, so you walk away with real projects and skills that everyone else is scrambling to catch up on.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
                <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <CardHeader>
                    <Cloud className="mb-4 h-10 w-10 text-primary" />
                    <CardTitle>AWS Fundamentals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Start with the building blocks of the cloud. Learn core AWS services and concepts so you’re not just following along — you actually understand how the cloud works.
                    </p>
                  </CardContent>
                </Card>
                <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <CardHeader>
                    <Database className="mb-4 h-10 w-10 text-accent" />
                    <CardTitle>Data Lakes on AWS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Go beyond basics and build a working data lake. Handle, organize, and process data the way modern companies do to drive insights and innovation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <CardHeader>
                    <Zap className="mb-4 h-10 w-10 text-primary" />
                    <CardTitle>Gen-AI with AWS Q</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Step into the future of cloud development. Use the AWS Q CLI to build, debug, and automate tasks with natural language, and see firsthand how AI is reshaping the cloud.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          
          <section id="sessions" className="py-16 sm:py-24 animate-slide-up-fade">
            <div className="container mx-auto max-w-4xl text-center px-4">
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                Deep Dive into Sessions
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                Our expert-led sessions are designed to give you hands-on experience and deep insights.
              </p>
              <div className="mt-12 space-y-12 text-left">
                <Card className="overflow-hidden md:grid md:grid-cols-3 transition-shadow duration-300 hover:shadow-xl">
                  <div className="md:col-span-2">
                     <CardHeader>
                      <CardTitle className="text-2xl text-accent">Session 01 : CloudSteps</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">Kick off your cloud journey by mastering AWS fundamentals and core data concepts. Then, get hands-on with building and managing a data lake on AWS.</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="/speakers/speaker1.jpeg" alt="Abinaya S V" />
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-bold">Abinaya S V</p>
                            <span className="text-muted-foreground/50">|</span>
                            <Link href="https://www.linkedin.com/in/abinayasv/" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-5 w-5 text-blue-500 transition-colors hover:text-blue-500/80" />
                            </Link>
                          </div>
                          <p className="text-sm text-primary">AWS Community Builder - Data</p>
                          <p className="text-sm text-muted-foreground">Data Associate, PwC Acceleration Center</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                  <div className="bg-muted/50 p-6 md:col-span-1 flex flex-col justify-center">
                    <h4 className="font-bold text-lg mb-2">Key Takeaways</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Grasp AWS cloud fundamentals.</li>
                      <li>Learn the basics of data types and concepts.</li>
                      <li>Build and manage a functional data lake on AWS.</li>
                    </ul>
                  </div>
                </Card>
                
                <Card className="overflow-hidden md:grid md:grid-cols-3 transition-shadow duration-300 hover:shadow-xl">
                   <div className="md:col-span-2">
                     <CardHeader>
                      <CardTitle className="text-2xl text-accent">Session 02 : CloudUnlocked</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">Step into the future of development with the AWS Q CLI, a generative AI assistant built for the command line. Learn how to use AI to build, debug, and automate faster than ever.</p>
                       <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="/speakers/speaker2.jpeg" alt="Jeevitha M" />
                          <AvatarFallback>JM</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-bold">Jeevitha M</p>
                            <span className="text-muted-foreground/50">|</span>
                            <Link href="https://www.linkedin.com/in/jeevitha-m-357979223/" target="_blank" rel="noopener noreferrer">
                              <Linkedin className="h-5 w-5 text-blue-500 transition-colors hover:text-blue-500/80" />
                            </Link>
                          </div>
                          <p className="text-sm text-primary">AWS Community Builder - AI Engineering</p>
                          <p className="text-sm text-muted-foreground">Generative AI & Data Science Engineer, BigTapp Analytics</p>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                   <div className="bg-muted/50 p-6 md:col-span-1 flex flex-col justify-center">
                    <h4 className="font-bold text-lg mb-2">Key Takeaways</h4>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Understand Gen-AI Fundamentals</li>
                      <li>Set up and work with the AWS Q</li>
                      <li>Build & Debug Apps with AI Assistance</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-10 text-center animate-slide-up-fade">
            <div className="container mx-auto px-4">
              <p className="text-lg text-muted-foreground">
                &amp; For the CloudX touch
              </p>
              <h2 className="font-headline mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl md:text-6xl">
                NO PRIOR KNOWLEDGE REQUIRED
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground md:text-xl">
                Don’t worry if you don’t know anything. Bring your Laptop &amp; we'll have you covered.
              </p>
            </div>
          </section>
          
          <section id="schedule" className="py-16 sm:py-24 animate-slide-up-fade">
            <div className="container mx-auto max-w-3xl text-center px-4">
              <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                Workshop Schedule
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A full day of learning and networking, from morning coffee to
                evening wrap-up.
              </p>
              <ul className="mt-12 space-y-8 text-left">
                <li className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Star className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">
                      09:00 AM – 09:15 AM | Inauguration &amp; Introduction
                    </h4>
                    <p className="text-muted-foreground">
                      Kick off the day with a warm welcome, overview of the workshop, and what you’ll achieve by the end of it.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Cloud className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">
                      09:15 AM – 12:05 PM | Session 1: CloudSteps
                    </h4>
                    <p className="text-muted-foreground">
                      Your first steps with the cloud. Get hands-on with building a data lake on AWS, and gain practical experience with Docker and Kubernetes.
                    </p>
                  </div>
                </li>
                 <li className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/80 text-primary-foreground">
                     <Utensils className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">
                      12:05 PM – 12:55 PM | Lunch Break
                    </h4>
                    <p className="text-muted-foreground">
                      Refuel, network, and exchange ideas with fellow attendees. (Refreshments provided)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">
                      01:00 PM – 03:30 PM | Session 2: CloudUnlocked
                    </h4>
                    <p className="text-muted-foreground">
                      Step into the future of development by building with the AWS Q CLI. Learn how to use AI to speed up tasks, debug, and automate workflows.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 sm:gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Gift className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">
                      03:30 PM – 04:00 PM | Q&amp;A, Quiz &amp; Prize Distribution
                    </h4>
                    <p className="text-muted-foreground">
                      Test your knowledge, win exclusive AWS swag, and get all your questions answered by the experts.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          
          <section id="location" className="py-16 sm:py-24 animate-slide-up-fade">
            <div className="container mx-auto grid max-w-4xl grid-cols-1 items-center gap-12 md:grid-cols-2 px-4">
              <div className="flex flex-col gap-8 text-center md:text-left">
                <div className="space-y-4">
                  <h2 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                    Location
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Join us at the heart of innovation.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-left">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary">
                    <MapPin className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Our Venue</h4>
                    <p className="text-muted-foreground">
                      iMac Lab, 14th Floor, Tech Park 1, SRMIST, Kattankulathur
                    </p>
                  </div>
                </div>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2856053880896!2d80.04248560906781!3d12.824811887424941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70ce1c18cd9%3A0xffb39775f24c16e9!2sTech%20Park%20Building%2C%20SRM%20University%2C%20Potheri%2C%20SRM%20Nagar%2C%20Kattankulathur%2C%20Tamil%20Nadu%20603203!5e0!3m2!1sen!2sin!4v1757371884091!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </section>

          <section id="faq" className="py-16 sm:py-24 animate-slide-up-fade">
            <div className="mx-auto max-w-3xl container px-4">
              <h2 className="text-center font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="mt-12 w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    Who can attend this workshop?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Anyone! Beginners, enthusiasts, and aspiring cloud
                    professionals are all welcome. No prior knowledge of
                    cloud computing is required.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    Any Pre-requisites?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Not at all. This workshop is designed to take you from
                    zero to hands-on experience with AWS, Docker, Kubernetes,
                    and the AWS Q CLI.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    What should I bring?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Bring a laptop, a charged mind, and enthusiasm to learn.
                    Everything else — labs, guidance, and resources — will be
                    provided.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    What’s included in the ticket?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Full-day access to both sessions</li>
                      <li>Hands-on labs and projects</li>
                      <li>Swags and prizes for quiz winners</li>
                      <li>Refreshments from Burger King</li>
                      <li>Certificate of Participation</li>
                      <li>Full-day OD</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    Will I get a certificate?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Yes! All participants will receive a Certificate of
                    Participation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    Can I network with the speakers?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Absolutely. AWS Community Builders will be available
                    throughout the day to answer questions and provide
                    guidance.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="item-8">
                  <AccordionTrigger className="text-lg hover:no-underline">
                    How do I register?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    Click the “Register” button on this page and secure
                    your seat. Seats are limited and expected to fill fast.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
          
          <footer className="border-t border-border/50 animate-fade-in">
            <div className="container mx-auto pt-12 pb-8 px-4 text-center text-muted-foreground">
              <div className="mb-8">
                <Button
                  asChild
                  size="lg"
                  variant="glass"
                  className="h-14 px-12 text-lg font-bold"
                >
                  <Link href="/register">
                    Register
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm">
                © 2025 | CloudX-SRMIST. All Rights Reserved.
              </p>
              <div className="flex justify-center gap-6 mt-4">
                  <Link href="mailto:cloudx.srmist@gmail.com" className="text-muted-foreground hover:text-[#EA4335] transition-colors"><Mail className="h-6 w-6" /></Link>
                  <Link href="https://www.linkedin.com/company/cloudx-srmist/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#0077B5] transition-colors"><Linkedin className="h-6 w-6" /></Link>
                  <Link href="https://www.instagram.com/cloudx.srmist/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-[#E4405F] transition-colors"><Instagram className="h-6 w-6" /></Link>
                  <Link href="https://github.com/CloudX-SRMIST" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><Github className="h-6 w-6" /></Link>
              </div>
            </div>
          </footer>
        </main>
      </div>
      <ScrollToTop />
    </>
  );
}
