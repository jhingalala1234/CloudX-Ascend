
import type { Metadata } from 'next';
import RegisterForm from './form';

export const metadata: Metadata = {
  title: 'Register for AWS Ascend',
  description: 'Secure your spot for the AWS Ascend workshop. Complete the three-step registration process to join us for a full day of cloud learning.',
  robots: {
    index: true,
    follow: true,
  }
};

export default function RegisterPage() {
  return <RegisterForm />;
}
