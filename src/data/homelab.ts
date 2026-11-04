import homelab from '../assets/projects/homelab.jpg';

export const homelabData = {
  sl: {
    title: 'Moj homelab',
    subtitle: 'Kubernetes na predelani strojni opremi in samostojno gostovane storitve',
    image: homelab.src,
    description: 'Gradim homelab za praktično učenje administracije Linux sistemov, Kubernetes infrastrukture in avtomatizacije. Trije računalniki, ki so prej poganjali slot machinee v Casino-ju, zdaj sestavljajo Kubernetes cluster z enim strežniškim in dvema delovnima node-oma. Ločen NAS s TrueNAS dopolnjuje okolje s storitvami za razvojne projekte in osebno medijsko knjižnico.',
    specs: [
      { name: 'Strojna oprema', value: 'Trije ponovno uporabljeni računalniki iz igralnih avtomatov; skupaj 20 GB RAM (8 + 8 + 4 GB)' },
      { name: 'Kubernetes', value: 'Nameščen K3s: eno strežniško vozlišče in dva agenta' },
      { name: 'Ločena shramba', value: 'Samostojen NAS s TrueNAS, ločen od K3s gruče' },
      { name: 'Storitve na NAS-u', value: 'Gitea za repozitorije projektov iger in Jellyfin za osebno medijsko knjižnico' }
    ],
    sections: [
      {
        title: 'Trenutno stanje in namen',
        paragraphs: [
          'K3s je nameščen na vseh treh računalnikih: eden ima vlogo strežnika oziroma nadzorne ravnine, druga dva pa delujeta kot agenta. To je trenutna osnova projekta; dodatnih aplikacijskih obremenitev in orodij za avtomatizacijo še nisem konfiguriral.',
          'Ponovna uporaba računalnikov iz igralnih avtomatov mi omogoča, da obstoječi strojni opremi namenim novo vlogo in se učim na fizičnih sistemih. Okolje razvijam postopoma kot učni laboratorij. Z enim strežniškim vozliščem gruča ni visoko razpoložljiva, omejen pomnilnik pa spodbuja premišljeno izbiro obremenitev in upravljanje virov.'
        ]
      },
      {
        title: 'Naslednji koraki: Linux in Kubernetes',
        paragraphs: [
          'Nadaljnje delo vključuje preverjanje zdravja vozlišč in sistemskih podov, ureditev omrežnih nastavitev ter administrativnega dostopa prek SSH. Ob tem želim poglobiti znanje upravljanja uporabnikov, dovoljenj, storitev, dnevnikov in posodobitev Linux sistemov.',
          'Nato nameravam uvesti manjšo spletno aplikacijo z deklarativnimi Kubernetes manifesti ter preizkusiti Deployments, Services, konfiguracijo, shrambo in omejitve CPU ter pomnilnika. Cilj je razumeti razporejanje, skaliranje in odpravljanje napak ter dokumentirati ponovljiv postopek uvajanja.'
        ]
      },
      {
        title: 'Načrtovana avtomatizacija s Terraformom',
        paragraphs: [
          'Naslednja faza je uporaba Terraformovega Kubernetes ponudnika za deklarativno upravljanje imenskih prostorov, manjših aplikacijskih obremenitev in storitev v obstoječi K3s gruči. Terraform v tej zasnovi ne bo nameščal operacijskih sistemov ali K3s na fizične računalnike.',
          'Konfiguracijo nameravam različicirati v Gitu ter vaditi pregled sprememb z ukazom terraform plan, uporabo sprememb, upravljanje stanja in odkrivanje odstopanj. Občutljive datoteke, kot so Terraform state, kubeconfig in poverilnice, bodo ostale zunaj repozitorija.'
        ]
      },
      {
        title: 'Načrtovani CI/CD, GitOps in spremljanje',
        paragraphs: [
          'Načrtujem gradnjo in lokalno preverjanje kontejnerske slike manjše aplikacije, nato pa delovni tok v GitHub Actions za teste, gradnjo in objavo različic slik v GHCR. Ko bo ročno uvajanje razumljivo in ponovljivo, želim dodati GitOps s Fluxom ali Argo CD za usklajevanje stanja gruče s konfiguracijo v Gitu.',
          'Poznejši koraki vključujejo pakiranje aplikacij s Helmom ter osnovno spremljanje s Prometheusom in Grafano, prilagojeno razpoložljivemu pomnilniku. Načrtujem tudi dokumentacijo arhitekture, varnostnega kopiranja in obnove ter praktične vaje odpravljanja napak. Ti deli so še v načrtu.'
        ]
      },
      {
        title: 'Ločen TrueNAS za razvoj in domače storitve',
        paragraphs: [
          'Poleg Kubernetes laboratorija uporabljam ločen NAS s TrueNAS. Na njem gostujem Gitea za različiciranje svojih projektov iger in Jellyfin za organizacijo ter predvajanje osebne medijske knjižnice.',
          'Ta del okolja povezuje moje razvojno delo z vsakodnevno uporabo samostojno gostovanih storitev, medtem ko K3s gruča ostaja prostor za nadaljnje infrastrukturne poskuse.'
        ]
      }
    ]
  },
  en: {
    title: 'My Homelab',
    subtitle: 'Kubernetes on repurposed hardware and self-hosted services',
    image: homelab.src,
    description: 'I am building a home lab to gain practical experience with Linux administration, Kubernetes infrastructure, and automation. Three computers originally used in slot machines now form a Kubernetes cluster with one server and two agents. A separate TrueNAS system complements the lab with services for development projects and a personal media library.',
    specs: [
      { name: 'Hardware', value: 'Three repurposed slot machine computers; 20 GB RAM in total (8 + 8 + 4 GB)' },
      { name: 'Kubernetes', value: 'K3s installed: one server / control-plane node and two agents' },
      { name: 'Separate storage', value: 'A standalone TrueNAS NAS, separate from the K3s cluster' },
      { name: 'NAS services', value: 'Gitea for game project repositories and Jellyfin for a personal media library' }
    ],
    sections: [
      {
        title: 'Current progress and purpose',
        paragraphs: [
          'K3s is installed across all three computers: one serves as the server / control-plane node, and the other two run as agents. This is the current foundation of the project; additional application workloads and automation tools have not yet been configured.',
          'Repurposing computers from slot machines gives existing hardware a new purpose and lets me learn on physical systems. I am developing the environment incrementally as a learning lab. With one server node, the cluster is not highly available, and its limited memory encourages careful workload selection and resource management.'
        ]
      },
      {
        title: 'Next steps: Linux and Kubernetes',
        paragraphs: [
          'The next steps include validating node and system pod health and reviewing network configuration and SSH administration. Alongside this, I want to deepen my understanding of Linux users, permissions, services, logs, and updates.',
          'I then plan to deploy a small web application using declarative Kubernetes manifests and explore Deployments, Services, configuration, storage, and CPU and memory limits. The aim is to understand scheduling, scaling, and troubleshooting while documenting a repeatable deployment process.'
        ]
      },
      {
        title: 'Planned automation with Terraform',
        paragraphs: [
          'The next phase introduces Terraform’s Kubernetes provider to declare and manage namespaces, small application workloads, and services within the existing K3s cluster. In this design, Terraform will manage Kubernetes resources after bootstrap rather than install operating systems or K3s on the physical hosts.',
          'I plan to version configuration in Git and practise reviewing changes with terraform plan, applying updates, managing state, and identifying drift. Sensitive files such as Terraform state, kubeconfig, and credentials will remain outside the repository.'
        ]
      },
      {
        title: 'Planned CI/CD, GitOps, and monitoring',
        paragraphs: [
          'I plan to build and test a small application container locally, then introduce a GitHub Actions workflow to run tests, build images, and publish versioned artifacts to GHCR. Once manual deployments are understood and repeatable, I want to add GitOps with Flux or Argo CD to reconcile the cluster with configuration stored in Git.',
          'Later milestones include application packaging with Helm and basic Prometheus and Grafana monitoring sized for the available memory. I also plan to document the architecture, backup and recovery procedures, and troubleshooting exercises. These parts of the platform are still on the roadmap.'
        ]
      },
      {
        title: 'A separate TrueNAS system for development and home services',
        paragraphs: [
          'Alongside the Kubernetes lab, I run a separate NAS powered by TrueNAS. It hosts Gitea for version control of my game development projects and Jellyfin for organising and streaming my personal media library.',
          'This part of the environment connects my development work with everyday use of self-hosted services, while the K3s cluster provides a space for further infrastructure experiments.'
        ]
      }
    ]
  }
};
