export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter';
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  socials: SocialLink[];
}
