export const homelabData = {
  sl: {
    title: 'Moj Homelab',
    subtitle: 'Strežniška oprema, omrežja in samostojno gostovane storitve',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80',
    description: 'Moj homelab je namenjen preizkušanju novih tehnologij, avtomatizaciji in shranjevanju podatkov v varnem lokalnem okolju.',
    specs: [
      { name: 'Hipervizor', value: 'Proxmox VE Cluster (3x Mini PC)' },
      { name: 'Shramba', value: 'TrueNAS SCALE (ZFS, 20TB NAS)' },
      { name: 'Omrežje', value: 'Ubiquiti UniFi 10GbE + VLANs' },
      { name: 'Storitve', value: 'Docker, Kubernetes, Pi-hole, WireGuard, Vaultwarden' }
    ]
  },
  en: {
    title: 'My Homelab Setup',
    subtitle: 'Server hardware, custom networking, and self-hosted cloud',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80',
    description: 'My homelab serves as a sandbox for cloud architecture, network security experiments, and self-hosting.',
    specs: [
      { name: 'Hypervisor', value: 'Proxmox VE Cluster (3x Mini PCs)' },
      { name: 'Storage', value: 'TrueNAS SCALE (ZFS, 20TB NAS)' },
      { name: 'Networking', value: 'Ubiquiti UniFi 10GbE + VLANs' },
      { name: 'Services', value: 'Docker, Kubernetes, Pi-hole, WireGuard, Vaultwarden' }
    ]
  }
};