export type ReviewItem = {
  id: string;
  name: string;
  role: string;
  metric: string;   // "7.2x"
  quote: string;
  avatar: string;   // small circular image (left/right)
  photo: string;    // large portrait (center)
};

export function useReviews() {
  // Replace the image URLs with your own public assets
  const items: ReviewItem[] = [
    {
      id: 'Noaman Ansari',
      name: 'Noaman Ansari',
      role: 'CEO, TasksExpert',
      metric: '7.2x',
      quote:
        'Working with Bluvo Digital was a game-changer for us. Within just two months, we surpassed both our lead and revenue goals. Their team truly understands performance marketing and delivers real, measurable results.',
      avatar: '/assets/profiles/Noaman.png',
      photo: '/assets/profiles/NoamanAnsari.png',
    },
    {
      id: 'Nisha Seth',
      name: 'Nisha Seth',
      role: 'Founder, Brazen born',
      metric: '5.4x',
      quote:
        'Bluvo Digital helped launch my fashion brand, Brazen Born, and we started getting orders much sooner than expected. Their strategy, audience targeting, and messaging were spot on. I’d recommend them to anyone starting a new brand.',
      avatar: '/assets/profiles/Nisha.png',
      photo: '/assets/profiles/NishaSeth.png',
    },
    {
      id: 'Promod Sahoo',
      name: 'Promod Sahoo',
      role: 'Director, Hari Om Yoga Vidya',
      metric: '5.4x',
      quote:
        'Bluvo Digital helped revive our yoga school — we went from zero visibility to getting student bookings within the first month. They transformed our website, ran effective ads, and got us ranking on Google for top keywords. Truly a game-changer for us.',
      avatar: '/assets/profiles/pramod.png',
      photo: '/assets/profiles/pramodshaoo.png',
    },
    {
      id: 'Devang Savaliya',
      name: 'Devang Savaliya',
      role: 'CMO, AlfaPTE',
      metric: '5.4x',
      quote:
        'Working with Bluvo Digital led to a clear increase in our website traffic and a noticeable drop in ad costs. Their team was highly professional, met every deadline, and maintained excellent communication throughout. Their timely support and responsiveness truly stood out.',
      avatar: '/assets/profiles/Devang.png',
      photo: '/assets/profiles/DevangSavaliya.png',
    },
  ];

  return { items };
}
