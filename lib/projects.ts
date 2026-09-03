export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "courtrivals",
    title: "CourtRivals",
    description:
      "Multi-tenant SaaS for sports court operators and a public booking surface for players. Owners run courts, bookings, tournaments, POS, and reports; players pay online via Xendit and check in with QR tickets.",
    tags: ["Laravel", "React", "Tailwind CSS", "MySQL", "Xendit"],
    github: "https://github.com/mrcoffeex/courtrivals.app",
    images: [
      "/images/projects/courtrivals/court1.png",
      "/images/projects/courtrivals/court2.png",
      "/images/projects/courtrivals/court3.png",
    ],
  },
  {
    id: "docchain",
    title: "DocChain",
    description:
      "Government document tracking for custody, timeliness, and accountability. Registers physical and digital files, dispatches them with QR transfer codes, and measures SLA performance across offices.",
    tags: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    github: "https://github.com/mrcoffeex/docChain",
    images: [
      "/images/projects/docchain/doc1.png",
      "/images/projects/docchain/doc2.png",
      "/images/projects/docchain/doc3.png",
      "/images/projects/docchain/doc4.png",
    ],
  },
  {
    id: "flow",
    title: "Flow",
    description:
      "Queue-management platform for organizations that run counters. Visitors take standard or priority tickets by QR or kiosk, and operators advance the line in real time.",
    tags: ["Laravel", "React", "Inertia.js", "Tailwind CSS"],
    github: "https://github.com/mrcoffeex/flow",
    images: [
      "/images/projects/flow/flow1.png",
      "/images/projects/flow/flow2.png",
      "/images/projects/flow/flow3.png",
      "/images/projects/flow/flow4.png",
    ],
  },
  {
    id: "infra-monitoring",
    title: "Infra Monitoring",
    description:
      "Provincial infrastructure monitoring that follows projects from procurement through obligation, implementation, and payment. Built for the Provincial Budget Office workflow.",
    tags: ["Laravel", "Filament", "Livewire", "Tailwind CSS", "MySQL"],
    github: "https://github.com/mrcoffeex/pbo-monitoring",
    live: "https://infra.pbodavaodelsur.com/",
    images: [
      "/images/projects/infra-monitoring/infra1.png",
      "/images/projects/infra-monitoring/infra2.png",
      "/images/projects/infra-monitoring/infra3.png",
      "/images/projects/infra-monitoring/infra4.png",
    ],
  },
  {
    id: "pbo-dts",
    title: "PBO DTS",
    description:
      "Document transmission system for the Davao del Sur Provincial Budget Office. Tracks official papers from intake to receipt so routing stays secure and transparent.",
    tags: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/mrcoffeex/project1",
    live: "https://dts.pbodavaodelsur.com/",
    images: [
      "/images/projects/pbo-dts/dts1.png",
      "/images/projects/pbo-dts/dts2.png",
      "/images/projects/pbo-dts/dts3.png",
    ],
  },
  {
    id: "rumbl",
    title: "Rumbl",
    description:
      "Turns a student roster into balanced, role-aware groups. An administrator defines the seats, shares a QR code, and shuffles registered students once enrollment is ready.",
    tags: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/mrcoffeex/rumbl",
    live: "https://rumbl-flax.vercel.app",
    images: [
      "/images/projects/rumbl/rumbl1.png",
      "/images/projects/rumbl/rumbl2.png",
      "/images/projects/rumbl/rumbl3.png",
    ],
  },
  {
    id: "tabulax",
    title: "Tabulax",
    description:
      "Pageant tabulation desk with ranking, percentage, and hybrid result methods. Admins, auditors, and judges work from the same locked scoring rules.",
    tags: ["Laravel", "React", "Inertia.js", "TypeScript", "MySQL"],
    github: "https://github.com/mrcoffeex/tabulax",
    images: [
      "/images/projects/tabulax/tabulax1.png",
      "/images/projects/tabulax/tabulax2.png",
      "/images/projects/tabulax/tabulax3.png",
      "/images/projects/tabulax/tabulax4.png",
    ],
  },
  {
    id: "umric",
    title: "UMRIC",
    description:
      "Official research paper tracking for the UM Digos College Research and Innovation Center. Follows every milestone from title proposal through defense to publication.",
    tags: ["Laravel", "Vue", "Inertia.js", "Tailwind CSS"],
    github: "https://github.com/mrcoffeex/umric",
    images: [
      "/images/projects/umric/umric1.png",
      "/images/projects/umric/umric2.png",
      "/images/projects/umric/umric3.png",
      "/images/projects/umric/umric4.png",
    ],
  },
];
