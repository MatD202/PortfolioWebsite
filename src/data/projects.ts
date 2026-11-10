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
      sl: 'Iz treh računalnikov iz igralnih avtomatov sem sestavil cluster K3s z enim strežnikom in dvema agentoma. Naslednji koraki so preizkusna aplikacija, upravljanje virov s Terraformom in avtomatizacija uvajanja.',
      en: 'I built a three-node K3s cluster from repurposed slot machine computers, with one server and two agents. Next I’ll deploy a test application, manage Kubernetes resources with Terraform, and automate delivery.'
    },
    details: {
      sl: `## Arhitektura clusterja

K3s sem namestil neposredno na tri računalnike, ki so prej poganjali igralne avtomate. Strežniško vozlišče z 8 GB pomnilnika poganja nadzorno ravnino, vključno z API-jem Kubernetes in podatkovno shrambo clusterja. Drugi dve vozlišči imata 8 GB oziroma 4 GB pomnilnika in sta v cluster vključeni kot agenta. Če strežniško vozlišče odpove, API clusterja ni več dostopen.

## Namestitev in prvi preizkus

1. Na prvem računalniku sem namestil K3s v strežniškem načinu, s čimer sem vzpostavil nadzorno ravnino.
2. Na preostalih računalnikih sem namestil agenta K3s. Za pridružitev clusterja agenta potrebujeta naslov strežnika in pridružitveni žeton.
3. Naslednji korak je z ukazoma \`kubectl get nodes -o wide\` in \`kubectl get pods -A\` preveriti, ali so vsa tri vozlišča v stanju Ready in ali sistemski podi delujejo.

Namestitev K3s je končana. Prvo aplikacijo in dodatna orodja še pripravljam.

## Načrt nadaljnjega razvoja

- **Prva aplikacija:** z manifesti v Gitu nameravam uvesti manjši spletni strežnik NGINX kot Deployment in ga znotraj clusterja izpostaviti prek storitve ClusterIP. Preveril bom, na katero vozlišče se razporedi pod, in preizkusil zahteve ter omejitve za procesor in pomnilnik.
- **Terraform:** ponudnik Kubernetes bom preizkusil v ločenem imenskem prostoru. Z njim bom deklarativno upravljal Deployment in Service ter pred uporabo sprememb pregledal načrt z ukazom \`terraform plan\`. Konfiguracijo bom hranil v Gitu, datoteke s stanjem, kubeconfig in poverilnice pa zunaj repozitorija.
- **CI/CD in GitOps:** z GitHub Actions nameravam izvajati teste, graditi slike vsebnikov in objavljati njihove različice v GHCR. Ko bo ročno uvajanje ponovljivo, bom s Fluxom ali Argo CD preizkusil usklajevanje stanja clusterja z manifesti v Gitu.
- **Spremljanje in obnova:** pozneje nameravam s Prometheusom in Grafano spremljati porabo virov ter dokumentirati in preizkusiti postopek varnostnega kopiranja in obnove.`,
      en: `## Cluster architecture

I installed K3s directly on three computers that previously powered slot machines. The 8 GB server node hosts the control plane, including the Kubernetes API and the cluster datastore. The other two machines have 8 GB and 4 GB of RAM and join the cluster as agents. The cluster has a single control plane, so its API becomes unavailable if the server goes down.

## Installation and initial validation

1. I installed K3s in server mode on the first machine to bring up the control plane.
2. I installed K3s agents on the other two machines. The agents use the server endpoint and a join token to register with the cluster.
3. My next step is to run \`kubectl get nodes -o wide\` and \`kubectl get pods -A\` to check that all three nodes report Ready and that the system pods are healthy.

K3s is installed. The first application and the rest of the platform tooling are still in progress.

## Planned development

- **First workload:** I plan to deploy a small NGINX web server using manifests stored in Git. I’ll use a Deployment and an internal ClusterIP Service, then check where the pod is scheduled and test CPU and memory requests and limits.
- **Terraform:** I’ll use the Kubernetes provider to manage a Deployment and Service in a separate namespace on the existing cluster. I’ll review changes with \`terraform plan\` before applying them, and keep state, kubeconfig, and credentials outside Git.
- **CI/CD and GitOps:** I plan to use GitHub Actions to run tests, build container images, and publish versioned images to GHCR. Once manual deployments are repeatable, I’ll try Flux or Argo CD to reconcile the cluster with manifests stored in Git.
- **Monitoring and recovery:** Later I plan to track resource usage with Prometheus and Grafana, document backup and restore procedures, and run a recovery drill.`
    }
  },
  {
    slug: 'ChoreQuest',
    images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80'
    ],
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'Tailwind CSS', 'Express', 'MongoDB', 'GitHub Actions'],
    title: {
      sl: 'ChoreQuest – razvoj aplikacije za skupno opravljanje gospodinjskih opravil',
      en: 'ChoreQuest – Building a Cooperative Household Chore App'
    },
    summary: {
      sl: 'Razvil sem spletno aplikacijo, ki gospodinjska opravila povezuje s tedenskimi nalogami, izkušnjami in nagradami. Člani gospodinjstva si razdelijo delo, spremljajo skupni napredek in zaslužene kovance zamenjajo za dogovorjene nagrade.',
      en: 'I built a web app that turns household chores into weekly quests with experience points and rewards. Household members share the work, track their progress together, and exchange earned coins for rewards they agree on.'
    },
    details: {
      sl: `## Arhitektura aplikacije

ChoreQuest sem zasnoval kot aplikacijo z ločenima spletnim vmesnikom in API-jem v skupnem repozitoriju. Vmesnik uporablja Vue 3, TypeScript in Vite, za navigacijo skrbi Vue Router, za skupno stanje Pinia, za oblikovanje pa Tailwind CSS. Zaledje temelji na Expressu in podatke shranjuje v MongoDB prek knjižnice Mongoose.

## Gospodinjstva in tedenske naloge

Uporabnik lahko ustvari gospodinjstvo ali se obstoječemu pridruži s kodo za povabilo. Vsako gospodinjstvo ima svoje člane, opravila, nagrade in časovni pas, ki določa meje tedna.

1. Člani dodajo opravila ter jim določijo zahtevnost, število točk izkušenj in kovancev. Opravila so lahko enkratna, dnevna ali tedenska.
2. Za izbrani teden ustvarijo razpored nalog. Posamezna naloga hrani kopijo podatkov opravila, zato poznejše spremembe predloge ne prepišejo njene zgodovine.
3. Dodeljeni član označi nalogo kot opravljeno, nadzorna plošča pa prikazuje opravljene naloge in skupni tedenski napredek.

## Napredovanje in nagrade

- **Izkušnje in stopnje:** opravljene naloge prinašajo točke izkušenj, s katerimi član napreduje po stopnjah znotraj gospodinjstva.
- **Kovanci in nagrade:** člani določijo nagrade in njihovo ceno, nato pa zanje porabijo kovance, zaslužene z opravili. Zgodovina transakcij prikazuje zaslužek in porabo.
- **Dosežki:** aplikacija vključuje značke za prvo opravljeno nalogo, deset opravljenih nalog in v celoti opravljen skupni teden.

## Prijava in preverjanje sprememb

Prijava uporablja piškotke HttpOnly. Zahteve za spreminjanje podatkov zahtevajo preverjanje izvora in namensko glavo, unovčenje nagrad pa uporablja ključ idempotentnosti za preprečevanje ponovne obdelave iste zahteve.

V repozitoriju je nastavljen postopek GitHub Actions, ki ob potiskanju sprememb in zahtevah za združitev preveri slog kode in tipe, zažene teste ter zgradi aplikacijo.`,
      en: `## Application architecture

I structured ChoreQuest with a separate web frontend and API in a shared repository. The frontend uses Vue 3, TypeScript, and Vite, with Vue Router for navigation, Pinia for shared state, and Tailwind CSS for styling. The backend uses Express and stores data in MongoDB through Mongoose.

## Households and weekly quests

Users can create a household or join an existing one with an invite code. Each household has its own members, chores, rewards, and timezone, which determines its weekly boundaries.

1. Members create chores and set their effort, experience points, and coin rewards. Chores can occur once, daily, or weekly.
2. They generate assignments for a selected week. Each assignment keeps a snapshot of the chore details, so later edits to the template do not overwrite its history.
3. The assigned member marks a task complete, while the dashboard tracks completed assignments and the household’s shared weekly progress.

## Progression and rewards

- **Experience and levels:** completed assignments award experience points that help each member level up within their household.
- **Coins and rewards:** members define rewards and their prices, then redeem them with coins earned from chores. A transaction history records earnings and spending.
- **Achievements:** the app includes badges for a first completion, ten completed assignments, and a fully completed team week.

## Authentication and change validation

Authentication uses HttpOnly cookies. Requests that change data require an origin check and a dedicated header, while reward redemption uses an idempotency key to prevent the same request from being processed again.

The repository includes a GitHub Actions workflow that runs linting, type checks, tests, and an application build on pushes and pull requests.`
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
  },
  {
    slug: 'Unity3d-Game',
    images: [
      gamematura1.src,
      gamematura2.src,
      gamematura3.src,
      gamematura4.src
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
