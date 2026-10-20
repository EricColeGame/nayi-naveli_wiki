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

export const siteConfig: SiteConfig = {
  name: "Nayi Naveli Wiki",
  shortName: "Nayi Naveli",
  logoText: "N",
  tagline: "Cast, Story, Trailer & Release Date",
  description: "Explore Nayi Naveli (2026), a Hindi fantasy horror comedy about a mysterious bride who transforms a chaotic household. Discover the cast, story, trailer, release date, and movie updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nayi-naveli.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nayi-naveli.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.imdb.com/title/tt40855841/",
  heroVideoId: "2OHEEy_qhyE", // Nayyi Navelli official teaser — Amazon MGM Studios India
  social: {
    youtube: "https://www.youtube.com/watch?v=2OHEEy_qhyE",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
