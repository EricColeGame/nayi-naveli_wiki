export type NavigationItem = {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "reviews", path: "/reviews", isContentType: true },
  { key: "streaming", path: "/streaming", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "media", path: "/media", isContentType: true },
  { key: "production", path: "/production", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
