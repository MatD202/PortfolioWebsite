import gamematura1 from '../assets/projects/maturaGame4.png';
import gamematura2 from '../assets/projects/maturaGame1.png';
import gamematura3 from '../assets/projects/maturaGame2.png';
import gamematura4 from '../assets/projects/maturaGame3.png';

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
    export const projects: Project[] = [
  {
    slug: 'DevOps-Platform-Engineering-Homelab',
    images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
    ],
    tags: [
      'Kubernetes',
      'K3s',
      'Linux',
      'Terraform',
      'Git',
      'CI/CD',
      'GitOps'
    ],
    title: {
      sl: 'Vzpostavitev multi-node Kubernetes okolja na lastni infrastrukturi',
      en: 'Building a Self-Hosted Kubernetes Platform Engineering Lab'
    },
    summary: {
      sl: 'Vzpostavljam multi-node Kubernetes okolje na treh fizičnih računalnikih z uporabo K3s. Projekt je namenjen pridobivanju praktičnih izkušenj z administracijo Linux sistemov, orkestracijo kontejnerjev in postopno avtomatizacijo infrastrukture.',
      en: 'Building a multi-node Kubernetes environment on three physical machines using K3s. This ongoing project focuses on Linux administration, container orchestration, and progressively introducing infrastructure automation and deployment workflows.'
    },
    details: {
      sl: `## Pregled projekta

Vzpostavljam lastno multi-node Kubernetes okolje na treh fizičnih računalnikih z uporabo K3s, lahke distribucije Kubernetes. Cilj projekta je razviti praktično razumevanje orkestracije vsebnikov, upravljanja infrastrukture in avtomatizacije uvajanja aplikacij na lastni strojni opremi.

Projekt razvijam postopoma, od začetne vzpostavitve gruče do uvajanja aplikacij in avtomatiziranih delovnih tokov.

## Trenutno stanje

- Nameščen K3s na vseh treh fizičnih računalnikih.
- Vzpostavljena začetna osnova za večvozliščno Kubernetes okolje.
- Projekt je v aktivnem razvoju; naslednji koraki vključujejo preverjanje delovanja gruče in uvajanje prvih aplikacijskih obremenitev.

## Načrtovani razvoj

- **Upravljanje virov:** raziskovanje deklarativnega upravljanja Kubernetes virov s Terraformom.
- **CI/CD:** vzpostavitev avtomatiziranih delovnih tokov za gradnjo in uvajanje aplikacij.
- **GitOps:** raziskovanje uvajanja aplikacij na podlagi različiciranih konfiguracij v Git repozitoriju.
- **Spremljanje:** dodajanje orodij za spremljanje stanja gruče in porabe virov.
- **Dokumentacija in zanesljivost:** dokumentiranje arhitekture, postopkov namestitve ter odpravljanja težav.

## Cilji

Projekt mi omogoča praktično raziskovanje Kubernetes infrastrukture na lastni strojni opremi, s poudarkom na ponovljivosti, avtomatizaciji in razumevanju posameznih komponent platforme.

Tehnologije in funkcionalnosti dodajam postopoma ter dokumentiram dejansko izvedene korake.`,
      en: `## Project Overview

I'm building a multi-node Kubernetes environment on three physical machines using K3s, a lightweight Kubernetes distribution. The goal is to develop practical experience with container orchestration, infrastructure management, and application deployment on self-managed hardware.

The project is evolving incrementally, starting with the cluster foundation and progressing towards application workloads and automated deployment workflows.

## Current Progress

- Installed K3s across all three physical machines.
- Established the initial foundation for a multi-node Kubernetes environment.
- The project is actively in development, with cluster validation and initial application deployments among the next steps.

## Planned Development

- **Infrastructure management:** Explore declarative management of Kubernetes resources using Terraform.
- **CI/CD:** Build automated workflows for application builds and deployments.
- **GitOps:** Explore deploying applications from version-controlled configuration in a Git repository.
- **Observability:** Introduce tools for monitoring cluster health and resource utilization.
- **Documentation and reliability:** Document the architecture, setup procedures, and troubleshooting process.

## Project Goals

This project provides a practical environment for exploring Kubernetes infrastructure on self-managed hardware, with an emphasis on reproducibility, automation, and understanding the platform's underlying components.

Technologies and capabilities are being introduced incrementally, with documentation reflecting the work actually completed.`
    }
  }
];
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
  },
  {
    slug: 'Unity3d-Game',
    images: [
      'gamematura1.src',
      'gamematura2.src',
      'gamematura3.src',
      'gamematura4.src'
    ],
    tags: ['Unity 3D', 'C#', '.NET Framework', 'Unity Version Control', 'URP'],
    title: {
      sl: 'Izdelava 3D Unity igre za maturitetno nalogo',
      en: 'Creation of a 3D Unity game for a graduation assignment'
    },
    summary: {
      sl: '3D dungeon crawler igra, ki vključuje proceduralno generirane nivoje, šest vrst pošasti z edinstvenim obnašanjem, sistem magije in raznoliko orožje.',
      en: 'A 3D dungeon crawler featuring procedurally generated levels, six unique enemy types with distinct behaviors, a magic system, and a variety of weapons.'
    },
    details: {
  sl: `## Opis igre

3D dungeon crawler igra, razvita v Unityju za maturitetno nalogo. Igralec raziskuje po meri izdelan začetni nivo in dva proceduralno generirana nivoja, se spopada z različnimi vrstami pošasti ter uporablja raznoliko orožje in magijo za premagovanje sovražnikov.

## Sovražniki in bojni sistem

Igra vključuje šest različnih vrst sovražnikov, od katerih ima vsak svoje značilno obnašanje in način napadanja.

- **Duh:** Napade igralca, ko se mu ta dovolj približa.
- **Goblin:** Igralca napada z metanjem kamnov, kadar ga ima v vidnem polju.
- **Vešča:** Leti skozi okolje in igralca napade z mečem, ko se ji dovolj približa.
- **Okostnjak:** Se požene proti igralcu in ob stiku z njim eksplodira.
- **Dva šefa:** Uporabljata različne vrste magije in posebne napadalne poteze, ki predstavljajo dodaten izziv.

Različni načini napadanja poskrbijo za raznoliko bojevanje in igralca spodbujajo k prilagajanju strategije glede na nasprotnika.

## Proceduralno generiranje nivojev

Sistem proceduralnega generiranja samodejno ustvarja razporeditev sob in jih povezuje v igralne nivoje.

Postopek se začne z začetno sobo, nato pa sistem naključno izbira naslednje sobe glede na možne povezave s predhodno sobo. Pri postavljanju preverja, ali se nova soba prekriva z že postavljenimi sobami. Če postavitev ni mogoča, sistem do trikrat poskusi z drugo naključno izbrano sobo.

Če tudi ti poskusi ne uspejo, sistem odstrani zadnjo dodano sobo, zabeleži neuspešno zaporedje povezav in se vrne na prejšnjo sobo, kjer nadaljuje iskanje druge možne poti. Ta postopek omogoča raziskovanje alternativnih razporeditev, kadar nadaljnje povezovanje sob ni mogoče.

Na prvem proceduralno generiranem nivoju se generiranje nadaljuje, dokler nivo ne vsebuje vsaj 30 sob in petih razvejitev. Sistem na koncu določi tudi lokacijo sobe s šefom, ki predstavlja končni izziv nivoja.

## Igralni sistemi in nadgradnje

Igra vključuje več medsebojno povezanih sistemov, med drugim sisteme za zdravje, moč in magijo. Igralec lahko svoje sposobnosti izboljšuje z uporabo različnih napojev.

Napoji imajo različne učinke. Napoj za zdravje lahko na primer obnovi izgubljene točke zdravja ali poveča največje možno število točk zdravja. Ti sistemi omogočajo napredovanje igralca in mu pomagajo pri pripravi na zahtevnejše spopade.

## Razvoj

Pri razvoju sem se osredotočil na izdelavo 3D igralnega okolja, implementacijo različnih vrst sovražnikov in njihovih načinov napadanja, razvoj sistema proceduralnega generiranja nivojev ter povezovanje različnih igralnih sistemov v celovito igralno izkušnjo.`,

  en: `## Game Overview

A 3D dungeon crawler developed in Unity as a graduation project. Players explore a custom-designed starting level and two procedurally generated levels, battle different types of monsters, and use a variety of weapons and magic to defeat their enemies.

## Enemies and Combat System

The game features six distinct enemy types, each with its own behavior and attack patterns.

- **Ghost:** Attacks the player when they get too close.
- **Goblin:** Throws rocks at the player whenever they are within its line of sight.
- **Witch:** Flies through the environment and attacks the player with a sword when they get within range.
- **Skeleton:** Charges toward the player and explodes upon contact.
- **Two bosses:** Use different types of magic and special attacks to provide an additional challenge.

These varied attack patterns create more engaging combat encounters and encourage players to adapt their strategies to each opponent.

## Procedural Level Generation

The procedural generation system automatically creates room layouts and connects individual rooms to form playable levels.

The process begins with a starting room. The system then randomly selects subsequent rooms based on the available connections to the previous room. Before placing a room, it checks whether it overlaps with any existing rooms. If placement fails, the system makes up to three additional attempts using randomly selected rooms.

If all attempts fail, the system removes the last added room, records the unsuccessful connection sequence, and backtracks to the previous room to explore an alternative path. This approach allows the algorithm to explore different layouts when further room placement is not possible.

For the first procedurally generated level, generation continues until the level contains at least 30 rooms and five branching paths. The system also determines the location of a boss room, which serves as the final challenge of the level.

## Gameplay Systems and Upgrades

The game features several interconnected gameplay systems, including health, strength, and magic. Players can improve their abilities by collecting and using different potions.

Each potion has its own effects. For example, a health potion can restore lost health points or increase the player's maximum health. These systems support player progression and help players prepare for more challenging encounters.

## Development

During development, I focused on creating the 3D game environment, implementing different enemy types and their attack behaviors, developing the procedural level generation system, and integrating the various gameplay systems into a cohesive gaming experience.`
}
  }
];