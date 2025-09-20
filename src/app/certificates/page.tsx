
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificates - AWS Ascend',
  description: 'Get your certificate of participation for the AWS Ascend workshop.',
};

export default function CertificatesPage() {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center bg-background text-foreground p-4 text-center">
        <div className="space-y-4 animate-slide-up-fade">
            <h1 className="text-4xl font-bold text-primary sm:text-5xl">Get your certificates of AWS Ascend.</h1>
            <p className="text-2xl text-muted-foreground">Coming Soon!</p>
        </div>
    </div>
  );
}
