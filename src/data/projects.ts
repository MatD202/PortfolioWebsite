import gamematura1 from '../assets/projects/maturaGame4.png';
import gamematura2 from '../assets/projects/maturaGame1.png';
import gamematura3 from '../assets/projects/maturaGame2.png';
import gamematura4 from '../assets/projects/maturaGame3.png';

import ChoreQuest1 from '../assets/projects/WeeklyChoreQuest.webp';
import ChoreQuest2 from '../assets/projects/SettingsChoreQuest.webp';
import ChoreQuest3 from '../assets/projects/LoginChoreQuest.webp';
import ChoreQuest4 from '../assets/projects/CreatingHouseholdChoreQuest.webp';

import homelab from '../assets/projects/homelab.jpg';


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
      homelab.src
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
      ChoreQuest1.src,
      ChoreQuest2.src,
      ChoreQuest3.src,
      ChoreQuest4.src
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
      sl: `**ChoreQuest** je spletna aplikacija za upravljanje gospodinjskih opravil, ki sem jo razvil z namenom, da bi bila razdelitev gospodinjskih obveznosti pravičnejša, bolj organizirana in zanimivejša s pomočjo gamification sistema.

Namesto klasične to-do list aplikacije sem ChoreQuest zasnoval okoli ponavljajočih se tedenskih urnikov, avtomatskega razporejanja opravil in sistema nagrajevanja. Vsako opravilo ima določeno težavnost oziroma effort score, izkustvene točke (XP) in kovance, kar člane gospodinjstva spodbuja k sodelovanju ter omogoča spremljanje individualnega in skupnega napredka.

Aplikacija je namenjena družinam, parom in sostanovalcem ter podpira članstvo v več gospodinjstvih, prilagodljive pravice upravljanja in avtomatiziran sistem razporejanja opravil.

## Tech Stack

- **Frontend:** Vue 3, TypeScript, Vite, Vue Router, Pinia
- **Styling:** Tailwind CSS, custom CSS, Lucide Icons
- **Backend:** Node.js, Express 5, REST API
- **Database:** MongoDB 8, Mongoose
- **Authentication & Security:** JWT, bcrypt, Helmet, rate limiting, CSRF protection
- **Validation & Date Handling:** Zod, Luxon
- **Testing:** Vitest, Supertest, MongoDB Memory Server, jsdom
- **Infrastructure:** Docker Compose, GitHub Actions, npm Workspaces

## Glavne funkcionalnosti

### Upravljanje več gospodinjstev

Implementiral sem sistem uporabniških računov, ki uporabnikom omogoča ustvarjanje novih gospodinjstev ali pridružitev obstoječim. Posamezen uporabnik je lahko član več gospodinjstev hkrati in med njimi preklaplja brez potrebe po dodatnih računih.

Ob ustvarjanju gospodinjstva lahko uporabnik nastavi časovni pas in način upravljanja. Pridružitev obstoječemu gospodinjstvu poteka preko varnih invitation kod, ki jih lahko pooblaščeni člani ponovno generirajo ali prekličejo.

### Chore Templates & Recurring Tasks

Razvil sem sistem ponovno uporabnih chore templateov, kjer lahko upravljavci gospodinjstva določijo:

- Naslov in opis opravila
- Effort score (1–100)
- XP in coin nagrade
- Pogostost ponavljanja (enkratno, dnevno ali tedensko)
- Želeni dan v tednu

Templatei služijo kot osnova za generiranje tedenskih opravil, kar pomeni, da ponavljajočih se nalog ni treba vsak teden ustvarjati ročno.

### Avtomatsko in pravično razporejanje opravil

Eden glavnih tehničnih izzivov projekta je bil razvoj algoritma, ki gospodinjska opravila čim bolj pravično razdeli med člane gospodinjstva.

Implementiral sem determinističen **Longest Processing Time (LPT) greedy load-balancing algoritem**, ki opravila razporeja glede na njihov effort score in trenutno obremenitev posameznega člana.

Algoritem deluje po naslednjih korakih:

1. Opravila razvrsti glede na effort score, pri čemer imajo zahtevnejša opravila prednost.
2. Preveri trenutno skupno obremenitev vsakega člana v izbranem tednu.
3. Upošteva tudi količino opravljenega dela v preteklih štirih tednih, da je razporeditev pravičnejša na daljši rok.
4. Vsako opravilo dodeli trenutno najmanj obremenjenemu članu in posodobi njegovo skupno obremenitev.

Takšen pristop zmanjšuje možnost, da bi isti član vedno dobival zahtevnejša opravila, hkrati pa zagotavlja predvidljivo in ponovljivo razporejanje.

Z uporabo knjižnice Luxon sem implementiral tudi timezone-aware scheduling, ki zagotavlja pravilno določanje začetkov tednov in rokov opravil glede na lokalni časovni pas gospodinjstva, vključno s prehodi med poletnim in zimskim časom.

### Task Completion & Approval Workflows

Člani gospodinjstva lahko pregledujejo svoja dodeljena opravila ali celoten seznam opravil gospodinjstva, označujejo naloge kot opravljene in spremljajo svoj napredek.

Implementiral sem dva načina upravljanja gospodinjstva:

- **Shared Mode:** Vsi člani lahko upravljajo opravila, nagrade, tedensko planiranje in invitation kode.
- **Manager-Led Mode:** Lastnik gospodinjstva upravlja nastavitve in lahko po želji zahteva potrditev opravljenih nalog, preden se članom dodelijo nagrade.

Če je omogočen approval workflow, se opravljena naloga najprej premakne v stanje awaiting_approval. XP in kovanci se uporabniku dodelijo šele, ko lastnik gospodinjstva potrdi opravljeno nalogo.

Implementiral sem tudi ročno prerazporejanje opravil ter role-based permissions, ki zagotavljajo, da lahko uporabniki izvajajo samo dejanja, za katera imajo ustrezne pravice.

### Gamification & Reward System

Da bi bila gospodinjska opravila bolj zanimiva, sem razvil gamification sistem, ki temelji na XP točkah, levelih, achievementih in nagradah.

Člani z opravljanjem nalog pridobivajo XP in kovance. XP vpliva na njihov level znotraj gospodinjstva, pri čemer sem uporabil kvadratno progresijsko formulo:

level = floor(sqrt(xp / 100)) + 1

Z napredovanjem vsak naslednji level zahteva več skupno pridobljenih XP točk.

Implementiral sem tudi achievement badges za individualne dosežke in skupne uspehe gospodinjstva, kot je na primer uspešno dokončanje vseh predvidenih opravil v določenem tednu.

Pridobljene kovance lahko člani porabijo v prilagodljivem **Reward Shopu**, kjer lahko gospodinjstva ustvarijo lastne nagrade, na primer izbiro filma za filmski večer ali zajtrk v postelji.

Vsi pridobljeni in porabljeni kovanci se beležijo v immutable transaction ledgerju, ki ohranja dosledno zgodovino aktivnosti posameznega člana.

## Arhitektura & Implementacija

### Full-Stack Monorepo

Projekt sem organiziral kot npm workspaces monorepo z ločenima frontend in backend aplikacijama.

Frontend je Vue 3 single-page application, napisana v TypeScriptu, medtem ko backend uporablja Express 5 in ponuja REST API.

Za centraliziran state management sem uporabil Pinio, ki upravlja podatke o prijavljenem uporabniku, gospodinjstvih, dashboardu, članih, opravilih in nagradah.

Komunikacija med frontendom in backendom poteka preko typed API wrapperja, ki skrbi za authentication cookies, request headers, obdelavo napak in idempotency keys.

### Database Design & Data Integrity

MongoDB podatkovno bazo sem zasnoval okoli osmih kolekcij:

- Users
- Households
- Household Memberships
- Chore Templates
- Chore Assignments
- Rewards
- Wallet Transactions
- Achievement Unlocks

Za zagotavljanje data consistency sem uporabil Mongoose schemas, compound unique indexes in multi-document ACID transactions.

Pri razvoju sem posebno pozornost namenil naslednjim rešitvam:

**Immutable Assignment Snapshots**

Ob generiranju tedenskih opravil se podatki iz chore templatea, kot so naslov, opis, effort score, XP in kovanci, kopirajo neposredno v ustvarjen assignment.

To zagotavlja, da kasnejše spremembe ali arhiviranje templatea ne vplivajo na že ustvarjena opravila ali zgodovinske nagrade.

**Concurrency-Safe Weekly Planning**

Implementiral sem transaction serialization z uporabo version counterja na nivoju gospodinjstva.

S tem sem preprečil podvojeno generiranje opravil ob sočasnih zahtevah in omogočil usklajeno izvajanje operacij, kot so zaključevanje nalog in unovčevanje nagrad.

**Idempotent Reward Transactions**

Za preprečevanje večkratnega odštevanja kovancev sem pri unovčevanju nagrad implementiral UUID-based idempotency keys.

Če uporabnik isto zahtevo pošlje večkrat, na primer zaradi dvojnega klika ali ponovnega pošiljanja requesta, sistem vrne rezultat obstoječe transakcije, namesto da bi kovance ponovno odštel.

Uporabil sem tudi atomic conditional database updates, ki preprečujejo unovčevanje nagrad, kadar uporabnik nima dovolj kovancev.

### Authentication & Security

Implementiral sem authentication sistem z uporabo JWT tokenov, shranjenih v HTTP-only cookies, in gesel, zaščitenih z bcrypt hashingom.

Backend vključuje tudi dodatne varnostne mehanizme:

- Role-based access control za operacije znotraj gospodinjstev
- Validacijo vhodnih podatkov z Zod
- Rate limiting na authentication in household joining endpointih
- Helmet security headers
- Origin validation in custom-header CSRF protection
- Omejen cross-origin dostop
- Secure cookie konfiguracijo za production okolje
- Preverjanje članstva v gospodinjstvu za preprečevanje nepooblaščenega dostopa in resource enumeration

Authorization logiko sem centraliziral, da so permission checks dosledni skozi celoten API.

### Responsive Frontend & Accessibility

Frontend sem razvil z Vue 3, TypeScriptom ter kombinacijo Tailwind CSS in custom CSS.

Uporabniški vmesnik vključuje:

- Login in registration strani
- Onboarding za ustvarjanje ali pridružitev gospodinjstvu
- Household dashboard
- Upravljanje in pregled opravil
- Reward Shop
- Uporabniški profil in statistiko
- Household settings

Pri razvoju sem se osredotočil na responsive design, da aplikacija pravilno deluje na različnih velikostih zaslonov.

Implementiral sem tudi več accessibility izboljšav, kot so keyboard focus trapping znotraj modalnih oken, zapiranje z Escape tipko, onemogočanje interakcije z ozadjem ob odprtem modalu, ARIA progress indicators in podpora za reduced-motion nastavitve.

### Testing & Development Infrastructure

Za večjo zanesljivost in lažje vzdrževanje aplikacije sem konfiguriral automated testing in razvojno infrastrukturo.

Backend vključuje integration teste z uporabo Vitest, Supertest in in-memory MongoDB replica seta. Testi preverjajo scheduling logiko, delovanje API-ja in pravice uporabnikov znotraj gospodinjstev.

Konfiguriral sem tudi:

- Docker Compose za lokalni MongoDB replica set
- GitHub Actions CI pipeline
- Automated linting in type checking
- Test execution in build verification
- Idempotent database seeder za ustvarjanje demo podatkov

## Tehnični izzivi

Med najzanimivejšimi tehničnimi izzivi, s katerimi sem se srečal pri razvoju, so bili:

- **Fair Scheduling:** Razvoj algoritma, ki pravično razporeja tedenska opravila in upošteva tudi preteklo obremenitev posameznih članov.
- **Concurrent Operations:** Preprečevanje podvojenega generiranja opravil, večkratnih izplačil nagrad in nekonsistentnega stanja uporabniških denarnic.
- **Timezone Handling:** Pravilno generiranje ponavljajočih se opravil v različnih časovnih pasovih in ob prehodih med poletnim in zimskim časom.
- **Multi-Tenant Authorization:** Izolacija podatkov posameznih gospodinjstev ob hkratni podpori uporabnikom, ki so člani več gospodinjstev.
- **Transactional Gamification:** Zagotavljanje, da so XP, kovanci, achievementi in statusi opravil medsebojno usklajeni tudi pri kompleksnejših approval workflowih.

## Povzetek

ChoreQuest združuje upravljanje gospodinjskih opravil, avtomatizirano razporejanje in gamification sistem v aplikacijo, ki omogoča lažjo organizacijo in pravičnejšo razdelitev vsakodnevnih obveznosti.

Pri razvoju projekta sem pridobil in poglobil praktične izkušnje s full-stack arhitekturo, razvojem algoritmov, database transactions, authentication in authorization sistemi, responsive UI razvojem ter automated testingom.

Najpomembnejši del projekta je bila implementacija zanesljivega sistema, kjer pravičnost razporejanja, uporabniške pravice in transakcije nagrajevanja zagotavlja backend logika, namesto da bi se aplikacija zanašala zgolj na frontend preverjanja.`,
      en: `**ChoreQuest** is a cooperative household task management web application I developed to make sharing household responsibilities fairer, more organized, and more engaging through gamification.

Rather than building a traditional to-do list, I designed ChoreQuest around recurring weekly schedules, automated task distribution, and a reward system. Each chore has an effort score, experience points (XP), and coins, encouraging household members to contribute while tracking their individual and collective progress.

The application supports families, couples, and roommates, with multiple household memberships, customizable management permissions, and an automated scheduling system.

## Tech Stack

- **Frontend:** Vue 3, TypeScript, Vite, Vue Router, Pinia
- **Styling:** Tailwind CSS, custom CSS, Lucide Icons
- **Backend:** Node.js, Express 5, REST API
- **Database:** MongoDB 8, Mongoose
- **Authentication & Security:** JWT, bcrypt, Helmet, rate limiting, CSRF protection
- **Validation & Date Handling:** Zod, Luxon
- **Testing:** Vitest, Supertest, MongoDB Memory Server, jsdom
- **Infrastructure:** Docker Compose, GitHub Actions, npm Workspaces

## Key Features

### Multi-Household Management

I implemented an account system that allows users to create or join multiple households and switch between them without needing separate accounts.

When creating a household, users can configure its timezone and management mode. Existing households can be joined through secure invitation codes, which can be regenerated or revoked by authorized members.

### Chore Templates & Recurring Tasks

I built a reusable chore template system where household managers can configure:

- Chore titles and descriptions
- Effort scores (1–100)
- XP and coin rewards
- One-time, daily, or weekly recurrence
- Preferred days of the week

These templates act as blueprints for generating weekly assignments, eliminating the need to recreate recurring chores manually.

### Automated Fair Task Distribution

One of the main technical challenges was designing a scheduling algorithm that distributes household responsibilities fairly.

I implemented a deterministic **Longest Processing Time (LPT) greedy load-balancing algorithm** that assigns chores based on their effort scores and each member's workload.

The algorithm:

1. Sorts chores by effort, starting with the most demanding tasks.
2. Evaluates each household member's assigned workload for the current week.
3. Considers completed effort over the previous four weeks to account for historical contributions.
4. Assigns each chore to the least-loaded member and updates their workload.

This approach helps prevent one person from consistently receiving more demanding tasks while keeping the scheduling process predictable and reproducible.

I also implemented timezone-aware scheduling using Luxon, ensuring that weekly boundaries and due dates follow each household's local timezone, including daylight saving time transitions.

### Task Completion & Approval Workflows

Household members can view their personal assignments or the full household task board, complete chores, and track their progress.

I designed two household governance modes:

- **Shared Mode:** All members can manage chores, rewards, weekly planning, and invitations.
- **Manager-Led Mode:** The household owner controls configuration and can optionally require approval before completed chores are rewarded.

When approval is enabled, submitted chores enter a pending review state. XP and coins are awarded only after the household owner approves the completion.

I also implemented manual task reassignment and role-based permissions to ensure members can only perform actions they are authorized to access.

### Gamification & Reward System

To make household responsibilities more engaging, I developed a gamification system built around XP, levels, achievements, and redeemable rewards.

Members earn XP and coins by completing chores. XP contributes to their household level using a quadratic progression formula:

level = floor(sqrt(xp / 100)) + 1

As members progress, each new level requires more cumulative XP.

I also implemented achievement badges for individual milestones and collective household accomplishments, including completing every scheduled chore in a week.

Coins can be spent in a customizable Reward Shop, where households create their own rewards, such as choosing a movie night or receiving breakfast in bed.

All earnings and redemptions are recorded in an immutable transaction ledger to maintain a consistent history of each member's activity.

## Architecture & Implementation

### Full-Stack Monorepo

I structured the project as an npm workspaces monorepo with separate frontend and backend applications.

The frontend is a Vue 3 single-page application written in TypeScript, while the backend exposes an Express 5 REST API.

I used Pinia for centralized state management, handling authentication state, active households, dashboards, members, chores, and rewards.

The frontend communicates with the backend through a typed API wrapper that handles authentication cookies, request headers, error normalization, and idempotency keys.

### Database Design & Data Integrity

I designed the MongoDB database around eight collections:

- Users
- Households
- Household Memberships
- Chore Templates
- Chore Assignments
- Rewards
- Wallet Transactions
- Achievement Unlocks

I used Mongoose schemas, compound unique indexes, and multi-document ACID transactions to enforce data consistency.

Several important design decisions helped make the application reliable:

**Immutable Assignment Snapshots**

When generating weekly chores, I store a snapshot of the original template's title, description, effort, XP, and coin values.

This ensures that modifying or archiving a chore template does not affect previously generated assignments or historical rewards.

**Concurrency-Safe Weekly Planning**

I implemented transaction serialization using a household-level version counter.

This prevents concurrent scheduling requests from generating duplicate assignments and helps coordinate operations such as chore completion and reward redemption.

**Idempotent Reward Transactions**

To prevent users from accidentally spending coins multiple times, I implemented UUID-based idempotency keys for reward redemptions.

Repeated requests return the existing transaction result instead of charging the user again.

I also used atomic conditional database updates to prevent users from redeeming rewards when they have insufficient coins.

### Authentication & Security

I implemented authentication using JWTs stored in HTTP-only cookies and passwords hashed with bcrypt.

The backend includes several additional security measures:

- Role-based access control for household operations
- Request validation using Zod
- Rate limiting on authentication and household joining endpoints
- Helmet security headers
- Origin validation and custom-header CSRF protection
- Restricted cross-origin requests
- Secure cookie configuration for production
- Household membership checks that prevent unauthorized resource enumeration

I centralized authorization logic to keep permission checks consistent throughout the API.

### Responsive Frontend & Accessibility

I built the frontend with Vue 3, TypeScript, and a combination of Tailwind CSS and custom styling.

The interface includes authentication and onboarding screens, household dashboards, chore management, reward management, user profiles, and household settings.

I focused on creating a responsive interface that works across different screen sizes.

I also implemented accessibility improvements such as keyboard focus trapping inside modal dialogs, Escape-key dismissal, background interaction locking, ARIA progress indicators, and reduced-motion support.

### Testing & Development Infrastructure

I configured automated testing and development infrastructure to improve reliability and maintainability.

The backend includes integration tests using Vitest, Supertest, and an in-memory MongoDB replica set. These cover scheduling logic, API behavior, and household permissions.

I also configured:

- Docker Compose for a local MongoDB replica set
- GitHub Actions for continuous integration
- Automated linting and type checking
- Test execution and build verification
- An idempotent database seeder for local demonstration data

## Technical Highlights

Some of the most interesting challenges I worked on were:

- **Fair scheduling:** Designing an algorithm that balances weekly responsibilities while accounting for historical workload.
- **Concurrent operations:** Preventing duplicate chore generation, double rewards, and inconsistent wallet balances.
- **Timezone handling:** Generating recurring assignments accurately across different timezones and daylight saving transitions.
- **Multi-tenant authorization:** Keeping household data isolated while supporting users who belong to multiple households.
- **Transactional gamification:** Ensuring XP, coins, achievements, and task status remain synchronized during completion and approval workflows.

## Summary

ChoreQuest combines household management with automated scheduling and gamification to make recurring responsibilities easier to coordinate.

Through this project, I worked on full-stack application architecture, algorithm design, database transactions, authentication, authorization, responsive UI development, and automated testing.

The most important part of the project was building a reliable system where fairness, permissions, and reward transactions are enforced by the backend rather than relying only on frontend behavior.`
    }
  },
   /*{
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
  },*/
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
- **Dva "Boss-a":** Uporabljata različne vrste magije in posebne napadalne poteze, ki predstavljajo dodaten izziv.

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

Pri razvoju sem se osredotočil na izdelavo 3D igralnega okolja, implementacijo različnih vrst sovražnikov in njihovih načinov napadanja, razvoj sistema proceduralnega generiranja nivojev ter povezovanje različnih igralnih sistemov v celovito igralno izkušnjo. Kmalu po začetku izdelave igre sem se tudi soočal z izzivi optimizacije, katere sem odpravil z Occlusion Culling-om ter Light Baking-om, kjer sem ga lahko vklučil. Razmišljal sem tudi o dodajanju LOD sistema, ampak ta ni zares prišel v poštev zaradi manjših nivojev in že optimiziranih low-poly modelov.`,
      en: `## Game Overview

A 3D dungeon crawler developed in Unity as a graduation project. Players explore a custom-designed starting level and two procedurally generated levels, battle different types of monsters, and use a variety of weapons and magic to defeat enemies.

## Enemies and Combat System

The game features six distinct enemy types, each with its own behavior and attack patterns.

- **Ghost:** Attacks the player when they get too close.
- **Goblin:** Throws rocks at the player whenever they are within its line of sight.
- **Witch:** Flies through the environment and attacks the player with a sword when they get within range.
- **Skeleton:** Charges toward the player and explodes upon contact.
- **Two bosses:** Use different types of magic and special attacks to challange the player.

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

During development, I focused on creating the 3D game environment, implementing different enemy types and their attack behaviors, developing the procedural level generation system, and integrating the various gameplay systems into a cohesive gaming experience. A little after starting the project, I had to face with some optimizational challaneges, as the game was running slowly. To fix this, I implemented Occlusion Culling and light baking. I also thought about implementing an LOD system but decided against it because the game has small levels and already optimized low-poly assets.`
    }
  }
];
