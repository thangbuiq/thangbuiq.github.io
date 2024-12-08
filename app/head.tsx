'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Thang Q. Bui | Portfolio ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! My name is Thang Bui. I am a Data Engineer. I am passionate about technology and I love to learn new things.`,
    keywords: 'Thang Q. Bui, Data Engineer, thangbuiq, thangqbui',
    type: 'website',
    image: '/og-image.png'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`https://thangbuiq.work${pathname}`} />
      <link rel='canonical' href={`https://thangbuiq.work${pathname}`} />
      <link rel="icon" href="/favicon.svg" />
      <link rel='me' href='mailto:thangbuiq@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property="og:image" content={meta.image} />
      <meta property='og:site_name' content='Thang Q. Bui | Portfolio' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@thangbuiq' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
    </>
  )
}

export default Head;