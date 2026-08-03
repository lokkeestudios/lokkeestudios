import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

function IntroductionBooking() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'introduction-call' });
      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          dark: {
            'cal-brand': 'oklch(0.515 0.287 286)',
            'cal-bg': 'oklch(0.146 0.0331 272)',
            'cal-bg-subtle': 'oklch(0.223 0.0357 274)',
            'cal-bg-muted': 'oklch(0.146 0.0331 272)',
            'cal-bg-emphasis': 'oklch(0.223 0.0357 274)',
            'cal-text': 'oklch(0.996 0.00666 97.3)',
            'cal-text-subtle': '#96a1c0',
            'cal-text-emphasis': 'oklch(0.996 0.00666 97.3)',
            'cal-border-emphasis': 'oklch(0.515 0.287 286)',
            'cal-text-error': 'oklch(0.651 0.238 16.2)',
            'cal-border': 'oklch(0.337 0.0456 270)',
            'cal-border-default': 'oklch(0.337 0.0456 270)',
            'cal-border-subtle': 'transparent',
            'cal-border-booker': 'oklch(0.337 0.0456 270)',
          },
          light: {},
        },
        hideEventTypeDetails: true,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <Cal
      namespace="introduction-call"
      calLink="kilianpeters/introduction-call"
      config={{ layout: 'month_view', theme: 'dark' }}
    />
  );
}

export { IntroductionBooking };
