// GoogleAnalytics.tsx
import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-RB7PL7C03K`}
      />

      <Script id='' strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RB7PL7C03K', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;