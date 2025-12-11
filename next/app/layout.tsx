import type { Metadata } from 'next'
import { Poppins, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import ErrorBoundary from '@/components/ErrorBoundary'
import ScrollProgress from '@/components/ScrollProgress'
import CursorFollower from '@/components/CursorFollower'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ValuStrat - Transforming Businesses with Innovative Technology',
  description:
    'We help businesses leverage cutting-edge technology to drive growth, improve efficiency, and stay ahead of the competition.',
  keywords: 'AI, ML, Cloud Consulting, Data Engineering, Web Development',
  openGraph: {
    title: 'ValuStrat - Transforming Businesses with Innovative Technology',
    description:
      'We help businesses leverage cutting-edge technology to drive growth, improve efficiency, and stay ahead of the competition.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ValuStrat - Transforming Businesses with Innovative Technology',
    description:
      'We help businesses leverage cutting-edge technology to drive growth, improve efficiency, and stay ahead of the competition.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fission-chatbot.s3.ap-south-1.amazonaws.com/styles.css"
        />
      </head>
      <body className={dmSans.className}>
        <ScrollProgress />
        <CursorFollower />
        <ErrorBoundary>
          <Script
            src="https://cdn.prod.website-files.com/61ffed246e785f28c1a44633/js/webflow.7efbc656.24fc3353de8a599b.js"
            strategy="lazyOnload"
          />
          <Script
            src="https://fission-chatbot.s3.ap-south-1.amazonaws.com/script.js"
            type="text/babel"
            data-presets="env,react"
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
          {children}
          <div id="chatbot-root"></div>
          <Script
            id="chatbot-init"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  if (
                    typeof window !== 'undefined' &&
                    typeof React !== 'undefined' &&
                    typeof ReactDOM !== 'undefined' &&
                    typeof App !== 'undefined'
                  ) {
                    var container = document.getElementById('chatbot-root');
                    if (container) {
                      if (ReactDOM.createRoot) {
                        const root = ReactDOM.createRoot(container);
                        root.render(React.createElement(App));
                      } else if (ReactDOM.render) {
                        ReactDOM.render(React.createElement(App), container);
                      }
                    }
                  }
                })();
              `,
            }}
          />
          <Script
            id="testimonial-navigation"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  if (typeof window.jQuery !== 'undefined') {
                    (function($) {
                      $(document).ready(function() {
                        $("#testimonialfakeleft").click(function(){
                          $("#testimonialleft").click(); 
                          return false;
                        });
                        
                        $("#testimonialfakeright").click(function(){
                          $("#testimonialright").click(); 
                          return false;
                        });
                      });
                    })(window.jQuery);
                  }
                })();
              `,
            }}
          />
          <Script
            id="strategy-scroll-trigger"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  if (typeof window.jQuery !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                    (function($) {
                      function initStrategyScrollTrigger() {
                        if (typeof ScrollTrigger === 'undefined') {
                          setTimeout(initStrategyScrollTrigger, 100);
                          return;
                        }
                        
                        $(".strat_wrapper").each(function () {
                          let childTriggers = $(this).find(".strat_cards_wrapper");
                          let childTargets = $(this).find(".strat_card_left");

                          function makeItemActive(index) {
                            childTriggers.removeClass("is-active");
                            childTargets.removeClass("is-active");
                            childTriggers.eq(index).addClass("is-active");
                            childTargets.eq(index).addClass("is-active");
                          }

                          makeItemActive(0);

                          childTriggers.each(function (index) {
                            ScrollTrigger.create({
                              trigger: $(this)[0],
                              start: "top center",
                              end: "bottom center",
                              onToggle: (isActive) => {
                                if (isActive) {
                                  makeItemActive(index);
                                }
                              }
                            });
                          });
                        });
                      }
                      
                      $(document).ready(function() {
                        initStrategyScrollTrigger();
                      });
                    })(window.jQuery);
                  }
                })();
              `,
            }}
          />
        </ErrorBoundary>
      </body>
    </html>
  )
}
