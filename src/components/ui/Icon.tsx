const paths = {
  search: <><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.2-4.2" /></>,
  megaphone: <><path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" /></>,
  layout: <><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18M9 9v11" /></>,
  brain: <><path d="M9.5 4.5A3 3 0 0 0 6.6 8 3 3 0 0 0 5 13.4 3 3 0 0 0 8 18a2.5 2.5 0 0 0 4 1V5.5a2.5 2.5 0 0 0-2.5-1Z" /><path d="M14.5 4.5A3 3 0 0 1 17.4 8a3 3 0 0 1 1.6 5.4A3 3 0 0 1 16 18a2.5 2.5 0 0 1-4 1" /></>,
  flow: <><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M7 6h10M6 8l5 8.3M18 8l-5 8.3" /></>,
  chart: <><path d="M4 20V4" /><path d="M4 20h16" /><path d="m7 15 4-4 3 3 5-6" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.8" fill="currentColor" /></>,
  filter: <path d="M4 5h16l-6 7.5V19l-4-2v-4.5L4 5Z" />,
  handshake: <><circle cx="12" cy="12" r="8.5" /><path d="m8.5 12.2 2.4 2.4 4.7-5" /></>,
  repeat: <><path d="M17 3l3 3-3 3" /><path d="M4 12V9a3 3 0 0 1 3-3h13" /><path d="M7 21l-3-3 3-3" /><path d="M20 12v3a3 3 0 0 1-3 3H4" /></>,
  chat: <path d="M5 18.5 3.5 21l.8-4A8 8 0 1 1 8 19.3L5 18.5Z" />,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20a6 6 0 0 1 12 0" /><circle cx="17" cy="9" r="2.4" /><path d="M16 14.2a5 5 0 0 1 5 5" /></>,
  kanban: <><rect x="3" y="4" width="5" height="16" rx="1.5" /><rect x="10" y="4" width="5" height="10" rx="1.5" /><rect x="17" y="4" width="4" height="13" rx="1.5" /></>,
  sparkle: <path d="M12 3c.6 4.2 2.3 6.4 6 7-3.7.6-5.4 2.8-6 7-.6-4.2-2.3-6.4-6-7 3.7-.6 5.4-2.8 6-7Z" />,
  building: <><path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" /><path d="M15 10h4a1 1 0 0 1 1 1v10M3 21h18M8 8h3M8 12h3M8 16h3" /></>,
  gauge: <><path d="M4 18a8 8 0 1 1 16 0" /><path d="m12 18 4-6" /></>,
  file: <><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5M12 7v5l3 2" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  whatsapp: <><path d="M4 20l1.2-3.9A8 8 0 1 1 8 19l-4 1Z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a3.6 3.6 0 0 1-1.8-1.8l.8-1-1-2L9 9.5Z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 6 8.5 7 8.5-7" /></>,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" /></>,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  image: <><rect x="3" y="4" width="18" height="16" rx="2.5" /><circle cx="9" cy="10" r="1.8" /><path d="m21 16-5-5-9 9" /></>,
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {paths[name]}
    </svg>
  );
}
