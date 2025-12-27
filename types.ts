export interface Platform {
  name: string;
  color: string;
  icon: string; // Using simplistic representation for demo
}

export interface FeatureStep {
  id: number;
  title: string;
  description: string;
}

export interface EmojiSticker {
  id: number;
  alt: string;
  src: string;
}