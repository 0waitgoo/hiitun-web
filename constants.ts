import { Platform, EmojiSticker } from './types';

export const PLATFORMS: Platform[] = [
  { name: '淘宝', color: 'bg-orange-500', icon: 'T' },
  { name: '京东', color: 'bg-red-600', icon: 'J' },
  { name: '拼多多', color: 'bg-red-500', icon: 'P' },
  { name: '抖音', color: 'bg-black', icon: 'D' },
  { name: '唯品会', color: 'bg-pink-600', icon: 'V' },
];

export const EMOJIS: EmojiSticker[] = [
  { id: 1, alt: "Happy Dolphin", src: "https://picsum.photos/100/100?random=1" },
  { id: 2, alt: "Cool Dolphin", src: "https://picsum.photos/100/100?random=2" },
  { id: 3, alt: "Working Dolphin", src: "https://picsum.photos/100/100?random=3" },
  { id: 4, alt: "Excited Dolphin", src: "https://picsum.photos/100/100?random=4" },
  { id: 5, alt: "Shocked Dolphin", src: "https://picsum.photos/100/100?random=5" },
  { id: 6, alt: "Laughing Dolphin", src: "https://picsum.photos/100/100?random=6" },
];