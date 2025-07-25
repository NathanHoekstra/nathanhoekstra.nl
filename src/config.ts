export const SITE = {
  website: "https://nathanhoekstra.nl",
  author: "Nathan Hoekstra",
  profile: "https://nathanhoekstra.nl",
  desc: "Nathan Hoekstra's portfolio and blog",
  title: "Nathan Hoekstra",
  ogImage: "nathanhoekstra-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/NathanHoekstra/nathanhoekstra.nl/edit/main/src/content/blog",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Amsterdam", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

export const UTTERANCES = {
  enable: true,
  repo: "NathanHoekstra/nathanhoekstra.nl",
  term: "title",
  label: "comment",
} as const;