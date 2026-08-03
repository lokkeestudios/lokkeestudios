/**
 * Central translation dictionaries for EN and DE.
 * Add new keys here and use them via getTranslations(locale) in components.
 */

export type Locale = 'en' | 'de';

export const locales: Locale[] = ['en', 'de'];
export const defaultLocale: Locale = 'en';

export type Translations = {
  skipToContent: string;
  navigateHome: string;
  site: {
    slogan: string;
    description: string;
  };
  nav: {
    intro: string;
    projects: string;
    testimonials: string;
    services: string;
    about: string;
    contact: string;
    sourceCode: string;
    imprint: string;
    hitUsUp: string;
    viewGitHub: string;
    viewInstagram: string;
    viewLinkedIn: string;
  };

  hero: {
    title: string;
    ctaWork: string;
    ctaServices: string;
  };

  intro: {
    caption: string;
    heading: string;
    body1: string;
    body2: string;
    cta: string;
  };

  projects: {
    caption: string;
    heading: string;
  };

  testimonials: {
    caption: string;
    heading: string;
    body1: string;
    body2: string;
  };

  services: {
    caption: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    footerText: string;
    footerHighlight: string;
    cta: string;
    customQuote: string;
    serviceCardAriaLabel: string;
    priceNotice: string;
    tabs: {
      business: string;
      agency: string;
    };
    cards: {
      agency: { title: string; price: string; description: string };
      webApp: {
        title: string;
        price: string;
        description: string;
        benefits: string[];
        addons: string[];
      };
      commerce: {
        title: string;
        price: string;
        description: string;
        benefits: string[];
        addons: string[];
      };
      website: {
        title: string;
        price: string;
        description: string;
        benefits: string[];
        addons: string[];
      };
      ai: {
        title: string;
        price: string;
        description: string;
        benefits: string[];
        addons: string[];
      };
    };
  };

  about: {
    caption: string;
    body: string;
    cta: string;
    ctaAbout: string;
    imageAlt: string;
    headings: string[];
  };

  contact: {
    caption: string;
    heading: string;
    body: string;
    form: {
      bookCall: string;
      preferEmail: string;
      company: string;
      name: string;
      email: string;
      message: string;
      submit: string;
      successTitle: string;
      successMessage: string;
      successImageAlt: string;
    };
  };

  sourceCode: {
    caption: string;
    heading: string;
    body: string;
    cta: string;
  };

  footer: {
    ariaPrimary: string;
    ariaSecondary: string;
    ariaSocials: string;
  };

  project: {
    seeBreakdown: string;
    galleryLabel: string;
    pageTitleSuffix: string;
    backToProjects: string;
    viewProject: string;
    viewSourceCode: string;
    relatedCaption: string;
    relatedHeading: string;
  };

  imprint: {
    pageTitle: string;
    heading: string;
    detailsHeading: string;
    ceoLabel: string;
    contactHeading: string;
    emailLabel: string;
    emailLinkTitle: string;
    phoneNote: string;
  };

  notFound: {
    pageTitle: string;
  };

  carousel: {
    controlsLabel: string;
    previous: string;
    next: string;
    ariaLabel: string;
  };
};

export const en: Translations = {
  skipToContent: 'Skip to main content',
  navigateHome: 'Navigate home',

  site: {
    slogan: 'Web Development and Design Studio from the Future',
    description:
      "We at LOKKEE STUDIOS are problem solvers at heart, fueled by a shared passion for exceptional web development & design from the future. Founder and visionary behind LOKKEE STUDIOS is Kilian Peters, an expert in transforming ideas into future-ready digital realities, with his roots in Hamburg, Germany. Go big or go home! Why don't you check out the fancy time machine we built over there?",
  },

  nav: {
    intro: 'Intro',
    projects: 'Projects',
    testimonials: 'Testimonials',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    sourceCode: 'Source code',
    imprint: 'Imprint',
    hitUsUp: 'Get in touch',
    viewGitHub: 'View GitHub profile',
    viewInstagram: 'View Instagram profile',
    viewLinkedIn: 'View LinkedIn profile',
  },

  hero: {
    title: 'Web Development and Design Studio from the Future',
    ctaWork: 'Dig into our universe',
    ctaServices: 'View services',
  },

  intro: {
    caption: 'Intro',
    heading: '-',
    body1:
      "Design meets development. We are the best-of-both-worlds team building websites, webshops, and apps that don't just look stunning - they perform, automate, and scale. We create thoughtful, user-centered interfaces and develop them with design precision, efficiency, and future-proofing in mind.",
    body2:
      'Our standard? Websites and web applications that go beyond aesthetics and deliver technical excellence. Built for mid-sized and enterprise-level businesses aiming to scale without compromise.',
    cta: 'Discover what sets us apart',
  },

  projects: {
    caption: 'Projects',
    heading: 'Dig into our universe',
  },

  testimonials: {
    caption: 'Testimonials',
    heading: 'Trusted by the kindest clients',
    body1: "Here's a glimpse into the heartfelt experiences of our incredible clients.",
    body2: 'Your trust fuels our passion.',
  },

  services: {
    caption: 'Services',
    heading: 'Launching visions, building websites',
    paragraph1:
      'Fasten your seatbelt, and join us on an interstellar journey to turn your web vision into a next-level reality. Ideally, you already have your logo, brand identity, and content. Based on your input (text, visuals and references), we create a first draft, collect feedback, and refine everything together. Fast. Efficient. Collaborative.',
    paragraph2:
      'Missing content? No worries! We can connect you with trusted professionals from our network.',
    footerText: "Need a unique solution? Don't hesitate to ask ― We are your problem solvers.",
    footerHighlight: "Let's discuss your requirements and create a tailored package!",
    cta: 'Book a call',
    customQuote: 'Individual quote',
    serviceCardAriaLabel: 'Secure your package now',
    priceNotice: '* Starting price, varies with project scope and additional requirements',
    tabs: {
      business: 'Business',
      agency: 'Agency',
    },
    cards: {
      agency: {
        title: 'White-labeling',
        price: 'Your white-label partner for digital excellence',
        description:
          'We work behind the scenes so you can shine up front. As your white-label partner, we provide digital solutions seamlessly integrated into your agency workflows. Invisible to the client, high-impact for your brand. Reliable, discreet, and fully collaborative.',
      },
      webApp: {
        title: 'Web application',
        price: 'Custom quote',
        description:
          "Tailored web apps, paired with a marketing website, or cross-platform solutions. Let's get together and discuss your vision to provide an individual quote.",
        benefits: [
          'Modern, individual design',
          'Responsive & accessible',
          'Optimized performance',
          'Animations & interactions',
          'Scalable backend solutions or bring your own backend',
        ],
        addons: ['Multi-platform support'],
      },
      commerce: {
        title: 'E-Commerce (Shopify)',
        price: '€5.400',
        description:
          'Level up your Shopify store with an individual theme, tailored to your products and customer audience.',
        benefits: [
          'Modern, individual design',
          'Responsive & accessibility-conform (WCAG 3)',
          'Seamless store integration with Shopify',
          'Self-customizable content',
          'Conversion & SEO optimization',
          'One bundled revision cycle',
        ],
        addons: [
          'Extra revision cycles',
          'Multilingual support',
          'Analytics',
          'Additional custom app functionality',
        ],
      },
      website: {
        title: 'Website',
        price: '€3.800',
        description: "There are no limits to your website vision ― Let's make it happen!",
        benefits: [
          'Modern, individual design',
          'Responsive & accessibility-conform (WCAG 3)',
          'Animations & interactions',
          'Conversion & SEO optimization',
          'Engaging user experience',
          'One bundled revision cycle',
        ],
        addons: [
          'Extra revision cycles',
          'Multiple pages',
          'CMS (self-customizability) implementation',
          'Multilingual support',
          'Analytics',
        ],
      },
      ai: {
        title: 'AI & Automations',
        price: 'Custom quote',
        description:
          'Save on human resources with Voice AI that sounds like humans, AI-powered automated workflows or traditional AI chatbots. You name it, we build it.',
        benefits: [
          'Streamlined business workflows',
          'Seamless integration with existing tools',
          '24/7 automated customer interaction',
          'Data-driven insights & processing',
          'Reduced operational overhead',
          'One bundled revision cycle',
        ],
        addons: [
          'Extra revision cycles',
          'Ongoing maintenance & fine-tuning',
          'Voice cloning & custom branding',
        ],
      },
    },
  },

  about: {
    caption: 'About',
    body: 'We at LOKKEE STUDIOS are problem solvers at heart, fueled by a shared passion for exceptional web development and design from the future. Founder and visionary behind LOKKEE STUDIOS is Kilian Peters, an expert in transforming ideas into future-ready digital realities, with his roots in Hamburg, Germany. Go big or go home!',
    cta: 'Discover what makes us different',
    ctaAbout: 'Ready for the jump?',
    imageAlt: 'Kilian Peters, founder and visionary behind LOKKEE STUDIOS',
    headings: [
      'Problem Solvers',
      'Visionaries',
      'Developers',
      'Shopify Partners',
      'Free Thinkers',
      'Coffeeholics',
      'Digital Strategists',
      'Perfectionists',
      'Framer Experts',
      'Creative Minds',
      'Passionists',
    ],
  },

  contact: {
    caption: 'Contact',
    heading: 'Book a free intro call',
    body: 'Get your space suit ready and tell us your ideas to develop your dream web solution. Ready when you are.',
    form: {
      bookCall: 'Book a call',
      preferEmail: 'Prefer to email?',
      company: 'Company',
      name: 'Name',
      email: 'Email',
      message: 'How can we help you?',
      submit: 'Get in touch',
      successTitle: 'We will be in touch with you',
      successMessage: 'Successful',
      successImageAlt: 'A flying paper plane',
    },
  },

  sourceCode: {
    caption: 'Source code',
    heading: 'Behind the simulation',
    body: 'You take the blue pill - you keep scrolling, you leave this website and believe whatever you want to believe. You take the red pill - you stay in wonderland, and we show you how deep the rabbit hole goes.',
    cta: 'Show me',
  },

  footer: {
    ariaPrimary: 'Primary',
    ariaSecondary: 'Secondary',
    ariaSocials: 'Socials',
  },

  project: {
    seeBreakdown: 'See project breakdown',
    galleryLabel: 'Project Gallery',
    pageTitleSuffix: 'Projects',
    backToProjects: 'Back to projects',
    viewProject: 'View project',
    viewSourceCode: 'View source code',
    relatedCaption: 'Similar projects',
    relatedHeading: 'Discover new worlds',
  },

  imprint: {
    pageTitle: 'Imprint',
    heading: 'Imprint',
    detailsHeading: 'Details',
    ceoLabel: 'CEO',
    contactHeading: 'Contact',
    emailLabel: 'E-Mail',
    emailLinkTitle: 'Hit us up',
    phoneNote: 'Phone number is given out on request.',
  },

  notFound: {
    pageTitle: 'Page not found',
  },

  carousel: {
    controlsLabel: 'Carousel Controls',
    previous: 'Previous project slide',
    next: 'Next project slide',
    ariaLabel: 'Project Carousel',
  },
};

export const de: Translations = {
  skipToContent: 'Zum Hauptinhalt springen',
  navigateHome: 'Zur Startseite',

  site: {
    slogan: 'Webentwicklungs- und Design-Studio aus der Zukunft',
    description:
      'Bei LOKKEE STUDIOS sind wir von Natur aus Problemlöser - angetrieben von einer gemeinsamen Leidenschaft für herausragende Webentwicklung und Webdesign aus der Zukunft. Gründer und Visionär hinter LOKKEE STUDIOS ist Kilian Peters: Experte dafür, Ideen in zukunftsfähige digitale Realitäten zu verwandeln, mit Wurzeln in Hamburg, Deutschland. Go big or go home! Schau dir unsere verrückte Zeitmaschine dort drüben an.',
  },

  nav: {
    intro: 'Intro',
    projects: 'Projekte',
    testimonials: 'Testimonials',
    services: 'Leistungen',
    about: 'Über uns',
    contact: 'Kontakt',
    sourceCode: 'Quellcode',
    imprint: 'Impressum',
    hitUsUp: 'Schreib uns',
    viewGitHub: 'GitHub-Profil ansehen',
    viewInstagram: 'Instagram-Profil ansehen',
    viewLinkedIn: 'LinkedIn-Profil ansehen',
  },

  hero: {
    title: 'Webentwicklungs- und Design-Studio aus der Zukunft',
    ctaWork: 'Tauch ein in unser Universum',
    ctaServices: 'Leistungen ansehen',
  },

  intro: {
    caption: 'Intro',
    heading: '-',
    body1:
      'Design trifft Entwicklung. Wir sind das Best-of-both-Worlds Team für Websites, Webshops und Apps, die nicht nur begeistern, sondern auch performen, automatisieren und mitwachsen. Wir gestalten durchdachte, nutzerzentrierte Interfaces und entwickeln sie mit Blick auf Design, Effizienz und Zukunftssicherheit.',
    body2:
      'Unser Anspruch: Websites und Webanwendungen, die nicht nur visuell überzeugen, sondern auch technisch richtig was draufhaben! Für mittelständische und große Unternehmen, die digital wachsen wollen - ohne Kompromisse.',
    cta: 'Entdecke was uns auszeichnet',
  },

  projects: {
    caption: 'Projekte',
    heading: 'Tauch ein in unser Universum',
  },

  testimonials: {
    caption: 'Testimonials',
    heading: 'Geschätzt von den herzlichsten Kunden',
    body1: 'Ein Einblick in die ehrlichen Erfahrungen unserer großartigen Kunden.',
    body2: 'Euer Vertrauen beflügelt unsere Leidenschaft.',
  },

  services: {
    caption: 'Leistungen',
    heading: 'Visionen starten, Websites bauen',
    paragraph1:
      'Mach dich bereit und begib dich mit uns auf eine interstellare Reise, um deine Web-Vision gemeinsam zu realisieren. Idealerweise liegen Logo, Corporate Design sowie Texte bereits vor. Auf Basis Ihrer Inhalte (Texte, Bilder, Referenzen) entwickeln wir einen ersten Entwurf, holen Feedback ein und verfeinern das Ganze im direkten Austausch. Schnell. Effizient. Gemeinsam.',
    paragraph2:
      'Sie haben noch keine fertigen Inhalte? Kein Problem! Auf Wunsch empfehlen wir zuverlässige Profis aus unserem Netzwerk.',
    footerText: 'Brauchst du eine individuelle Lösung?',
    footerHighlight:
      'Wir schnüren ein Paket für dich, das genau auf deine Anforderungen zugeschnitten ist.',
    cta: 'Kostenloses Gespräch buchen',
    customQuote: 'Individuelles Angebot',
    serviceCardAriaLabel: 'Jetzt Paket sichern',
    priceNotice: '* Startpreis, abhängig vom Projektumfang und weiteren Anforderungen',
    tabs: {
      business: 'Unternehmen',
      agency: 'Agenturen',
    },
    cards: {
      agency: {
        title: 'White-labeling',
        price: 'Dein White-label Partner für digitale Exzellenz',
        description:
          'Im Hintergrund agieren, im Frontend begeistern. Als Ihr White-label Partner liefern wir digitale Lösungen, die nahtlos in Ihre Agenturprozesse integriert sind. Ganz ohne sichtbare Spur, aber mit maximaler Wirkung. Verlässlich, diskret und auf Augenhöhe.',
      },
      webApp: {
        title: 'Webanwendung',
        price: 'Individuelles Angebot',
        description:
          'Maßgeschneiderte Web-Apps, mit Marketing-Website oder plattformübergreifende Lösungen. Sprich mit uns über deine Vision – wir erstellen ein individuelles Angebot.',
        benefits: [
          'Modernes, individuelles Design',
          'Responsiv & barrierefrei',
          'Optimierte Performance',
          'Animationen & Interaktionen',
          'Skalierbare Backend-Lösungen oder eigenes Backend',
        ],
        addons: ['Multi-Plattform-Support'],
      },
      commerce: {
        title: 'E-Commerce (Shopify)',
        price: '€5.400',
        description:
          'Upgrade deinen Shopify-Store mit einem Custom-Theme, angepasst an deine Produkte und Zielgruppe.',
        benefits: [
          'Modernes, individuelles Design',
          'Responsiv & barrierefrei',
          'Nahtlose Shopify-Integration',
          'Selbst anpassbare Inhalte',
          'Conversion-Optimierung',
        ],
        addons: ['Mehrsprachigkeit', 'Analytics'],
      },
      website: {
        title: 'Website',
        price: '€3.800',
        description: 'Deiner Website-Vision sind keine Grenzen gesetzt - lass uns loslegen!',
        benefits: [
          'Modernes, individuelles Design',
          'Responsiv & barrierefrei',
          'Animationen & Interaktionen',
          'SEO & Ladezeit-Optimierung',
          'Überzeugende User Experience',
        ],
        addons: ['CMS-Integration (selbst pflegbar)', 'Mehrsprachigkeit', 'Analytics'],
      },
      ai: {
        title: 'KI & Automatisierung',
        price: 'Individuelles Angebot',
        description:
          'Spare Personalkosten mit Voice AI die wie Menschen klingt, KI-gesteuerten Workflows oder klassischen KI-Chatbots. Du nennst es, wir bauen es.',
        benefits: [
          'Optimierte Geschäftsabläufe',
          'Nahtlose Integration in bestehende Tools',
          'Automatisierte Kundeninteraktion (24/7)',
          'Datengestützte Insights & Verarbeitung',
          'Reduzierter operativer Aufwand',
          'Ein gebündelter Revisionszyklus',
        ],
        addons: [
          'Zusätzliche Revisionszyklen',
          'Laufende Wartung & Feinabstimmung',
          'Voice Cloning & individuelles Branding',
        ],
      },
    },
  },

  about: {
    caption: 'Über uns',
    body: 'Wir von LOKKEE STUDIOS sind Problemlöser aus Leidenschaft – mit dem Anspruch an außergewöhnliche Webentwicklung und Design von morgen. Gründer und Visionär ist Kilian Peters, Experte für zukunftssichere digitale Produkte, mit Wurzeln in Hamburg. Go big or go home!',
    cta: 'Entdecke was uns ausmacht',
    ctaAbout: 'Bereit für den Sprung?',
    imageAlt: 'Kilian Peters, Gründer und Visionär hinter LOKKEE STUDIOS',
    headings: [
      'Problemlöser',
      'Visionäre',
      'Entwickler',
      'Shopify-Partner',
      'Freidenker',
      'Kaffee-Junkies',
      'Digitale Strategen',
      'Perfektionisten',
      'Framer-Partner',
      'Kreative Köpfe',
      'Leidenschaftler',
    ],
  },

  contact: {
    caption: 'Kontakt',
    heading: 'Buche einen kostenlosen Intro-Call',
    body: 'Mach dich bereit und erzähl uns von deiner Idee für deine Traum-Weblösung. Wir sind bereit wenn du es bist.',
    form: {
      bookCall: 'Kostenloses Gespräch buchen',
      preferEmail: 'Lieber per E-Mail?',
      company: 'Unternehmen',
      name: 'Name',
      email: 'E-Mail',
      message: 'Wie können wir dir helfen?',
      submit: 'Schreib uns',
      successTitle: 'Wir melden uns bei dir',
      successMessage: 'Erfolgreich',
      successImageAlt: 'Eine fliegende Papierflieger',
    },
  },

  sourceCode: {
    caption: 'Quellcode',
    heading: 'Hinter der Simulation',
    body: 'Du nimmst die blaue Pille - du scrollst weiter, verlässt diese Website und glaubst, was du glauben willst. Du nimmst die rote Pille - du bleibst im Wunderland, und wir zeigen dir, wie tief der Kaninchenbau reicht.',
    cta: 'Entdecken',
  },

  footer: {
    ariaPrimary: 'Primär',
    ariaSecondary: 'Sekundär',
    ariaSocials: 'Soziale Netzwerke',
  },

  project: {
    seeBreakdown: 'Projekt-Details ansehen',
    galleryLabel: 'Projekt-Galerie',
    pageTitleSuffix: 'Projekte',
    backToProjects: 'Zurück zu den Projekten',
    viewProject: 'Projekt ansehen',
    viewSourceCode: 'Quellcode ansehen',
    relatedCaption: 'Ähnliche Projekte',
    relatedHeading: 'Entdecke neue Welten',
  },

  imprint: {
    pageTitle: 'Impressum',
    heading: 'Impressum',
    detailsHeading: 'Angaben',
    ceoLabel: 'Geschäftsführer',
    contactHeading: 'Kontakt',
    emailLabel: 'E-Mail',
    emailLinkTitle: 'Schreib uns',
    phoneNote: 'Telefonnummer wird auf Anfrage mitgeteilt.',
  },

  notFound: {
    pageTitle: 'Seite nicht gefunden',
  },

  carousel: {
    controlsLabel: 'Karussell-Steuerung',
    previous: 'Vorheriges Projekt',
    next: 'Nächstes Projekt',
    ariaLabel: 'Projekt-Karussell',
  },
};

export const translations: Record<Locale, Translations> = { en, de };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale];
}
