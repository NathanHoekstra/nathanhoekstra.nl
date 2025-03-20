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
    text: "Suggest Changes",
    url: "https://github.com/NathanHoekstra/nathanhoekstra.nl/edit/main/src/content/blog",
  },
  dynamicOgImage: true,
} as const;

export const UTTERANCES = {
  enable: true,
  repo: "NathanHoekstra/nathanhoekstra.nl",
  term: "title",
  label: "comment",
} as const;