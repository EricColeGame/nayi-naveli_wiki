export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://nayi-naveli.wiki").replace(/\/$/, "");

export const siteConfig: SiteConfig = {
  name: "Nayi Naveli Wiki",
  shortName: "Nayi Naveli",
  logoText: "N",
  tagline: "Cast, Story, Trailer & Release Date",
  description: "Independent fan guide to Nayi Naveli (2026), the Hindi fantasy horror comedy starring Yami Gautam. Explore the cast, story, trailer, release date, and movie updates.",
  url: siteUrl,
  supportEmail: "support@nayi-naveli.wiki",
  gameUrl: "https://www.imdb.com/title/tt40855841/",
  heroVideoId: "2OHEEy_qhyE", // Nayyi Navelli official teaser — Amazon MGM Studios India
  social: {
    youtube: "https://www.youtube.com/watch?v=2OHEEy_qhyE",
  },
  locales: ["en", "hi", "bn", "ta"],
  defaultLocale: "en",
};
