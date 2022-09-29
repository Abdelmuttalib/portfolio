import { Layout } from '@/components/layout';
import { ButtonLink } from '@/components/links';
import Seo from '@/components/Seo';

import Vercel from '~/svg/Vercel.svg';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <Vercel className='text-7xl' />
            <h1 className='mt-6 text-7xl'>Next.js Starter</h1>

            <ButtonLink className='mt-8' href='/components' variant='light'>
              See all components
            </ButtonLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
