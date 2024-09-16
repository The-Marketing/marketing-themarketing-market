import { Metadata } from 'next';

import Homepage from '@/components/home/homepage';

export const metadata: Metadata = {
  title: 'AI ®TH O MARKETING É BEM-VINDO'
};
export default async function HomePage() {
  return (
    <>
      < Homepage  />
    </>
  );
}
