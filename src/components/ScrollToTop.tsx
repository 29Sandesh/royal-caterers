import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Royal Caterers India | Wedding & Event Catering in Pardesipura, Indore',
  '/home': 'Royal Caterers India | Wedding & Event Catering in Pardesipura, Indore',
  '/about-us': 'About Us & Culinary Heritage | Royal Caterers India, Indore',
  '/catering-services': 'Catering Services & Live Counters | Royal Caterers India, Indore',
  '/menu': 'Curated Pure Veg & Jain Menu | Royal Caterers India, Indore',
  '/gallery': 'Event & Banquet Gallery | Royal Caterers India, Indore',
  '/contact-booking': 'Contact & Catering Enquiry | Royal Caterers India, Indore',
};

/**
 * Updates document title and scrolls window to top on route change, or to hash target if present.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title =
      ROUTE_TITLES[pathname] ??
      'Royal Caterers India | Wedding & Event Catering in Pardesipura, Indore';

    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
};
