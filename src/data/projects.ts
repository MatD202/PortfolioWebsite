export interface Project {
  slug: string;
  images: string[];
  tags: string[];
  title: { sl: string; en: string };
  summary: { sl: string; en: string };
  details: { sl: string; en: string };
}

export const projects: Project[] = [
  {
    slug: 'smart-home-automation',
    images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
    ],
    tags: ['Kubernetes', 'Docker', 'Helm', 'Infrastructure as Code', 'CI/CD'],
    title: {
      sl: 'Zasnova in implementacija platforme CI/CD na osnovi sistema Kubernetes za avtomatizirano ustvarjanje spletnih aplikacij',
      en: 'Design and Implementation of a Kubernetes-based CI/CD Platform for Automated Web Application Deployment'
    },
    summary: {
      sl: '{povzetek Povzetek Povzetek Povzetek Povzetek Povzetek}.',
      en: 'Summary Summary Summary Summary Summary Summary Summary.'
    },
    details: {
      sl: 'Detailed description Detailed descriptionDetailed description slo',
      en: 'Detailed description Detailed description Detailed description Detailed description.'
    }
  },
  {
    slug: 'network-monitor-dashboard',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    ],
    tags: ['Vue.js', 'ELK', 'Docker', 'Prometheus', 'Grafana'],
    title: {
      sl: 'Omrežna Nadzorna Plošča',
      en: 'Network Telemetry Dashboard'
    },
    summary: {
      sl: 'Aplikacija za prikaz stanja strežnikov in prepustnosti omrežja v realnem času.',
      en: 'Web platform for monitoring server health and real-time network throughput.'
    },
    details: {
      sl: 'Zbiranje podatkov poteka preko Prometheus izvoznika, vizualizacija pa s pomočjo prilagojenega spletnega vmesnika.',
      en: 'Data metrics are ingested via Prometheus and rendered using an bla bla bla.'
    }
  }
];