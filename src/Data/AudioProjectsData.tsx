export type AudioProjectItems = {
  year: number;
  title: string;
  subheader: string;
  chips: string[];
  links: {
    platform: "soundcloud" | "youtube";
    url?: string;
  };
};

export type AudioProjectProps = {
  header: string;
  items: AudioProjectItems[];
};

export const audioProjects: AudioProjectProps[] = [
  {
    header: "Featured",
    items: [
      {
        year: 2025,
        title: "Transience",
        subheader: "Live at the Workers Club, Melbourne",
        chips: ["Mixing", "Mastering", "Producing"],
        links: {
          platform: "youtube",
          url: "https://www.youtube.com/watch?v=M3Gu1ER1e2k",
        },
      },
      {
        year: 2022,
        title: "Adman",
        subheader: "My Eyes (cover)",
        chips: ["Mixing", "Producing"],
        links: {
          platform: "soundcloud",
          url: "https://soundcloud.com/adman-2/my-eyes?si=323a5117809b48429857d597d657bb7b&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        },
      },
      {
        year: 2020,
        title: "Rob Cuzens",
        subheader: "Desolation",
        chips: ["Mixing", "Mastering", "Producing"],
        links: {
          platform: "youtube",
          url: "https://www.youtube.com/watch?v=5cP_RVuzsQk",
        },
      },
      {
        year: 2014,
        title: "Transience",
        subheader: " Bad Things (True Blood Theme Cover)",
        chips: ["Mixing", "Mastering", "Drumming"],
        links: {
          platform: "youtube",
          url: "https://www.youtube.com/watch?v=MQo_G5XFulo",
        },
      },
    ],
  },
  {
    header: "Music",
    items: [
      {
        year: 2018,
        title: "Above All (EP)",
        subheader: "Seize the Day",
        chips: ["Mixing", "Mastering", "Producing"],
        links: {
          platform: "youtube",
          url: "https://www.youtube.com/watch?v=SJc3eBrksXw",
        },
      },
    ],
  },
  {
    header: "Film",
    items: [
      // {
      //   year: "TBA",
      //   title: "Momentum Gym – Advertisement",
      //   subheader: "Short film by Shannon Glover",
      //   chips: ["Mixing", "Mastering", "Producing", "Original composition"],
      //   links: { platform: "none" },
      // },
      {
        year: 2025,
        title: "In a Place Like This",
        subheader: "Short film by Shannon Glover",
        chips: ["Music composition", "Mixing", "Mastering"],
        links: {
          platform: "youtube",
          url: "https://www.youtube.com/watch?v=BcKYqoWTy20",
        },
      },
      // {
      //   year: "2023",
      //   title: "Jessica",
      //   subheader: "Short film by Shannon Glover",
      //   chips: ["Post-production", "Sound design", "Music"],
      //   links: { platform: "none" },
      // },
    ],
  },
  {
    header: "Personal side projects (covers)",
    items: [
      {
        year: 2024,
        title: "Dire, Dire Docks",
        subheader: "Mario 64",
        chips: ["Mixing", "Mastering", "Producing"],
        links: {
          platform: "youtube",
          url: "https://www.youtube.com/watch?v=h88sO2SW-K4",
        },
      },
      {
        year: 2023,
        title: "Mine Cart Madness",
        subheader: "Donkey Kong Country",
        chips: ["Mixing", "Mastering", "Producing"],
        links: {
          platform: "youtube",
          url: "https://www.youtube.com/watch?v=u0s2pqdXwMA",
        },
      },
    ],
  },
  {
    header: "Lofi beats (original)",
    items: [
      {
        year: 2021,
        title: "Glide",
        subheader: "Luke Mastrocola",
        chips: ["Mixing", "Mastering", "Producing"],
        links: {
          platform: "soundcloud",
          url: "https://soundcloud.com/luke-mastrocola/glide?si=eed0d3182af94f05ad563163aa9449b8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        },
      },
      {
        year: 2023,
        title: "Aglow",
        subheader: "Luke Mastrocola",
        chips: ["Mixing", "Mastering", "Producing"],
        links: {
          platform: "soundcloud",
          url: "https://soundcloud.com/luke-mastrocola/aglow?si=00b784a74cc14f779d3932b3cfd52cab&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        },
      },
      {
        year: 2023,
        title: "Peaks",
        subheader: "Luke Mastrocola",
        chips: ["Mixing", "Mastering", "Producing"],
        links: {
          platform: "soundcloud",
          url: "https://soundcloud.com/luke-mastrocola/peaks?si=dca25979d7fd43d8ae136db1b1bbde5a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        },
      },
      {
        year: 2023,
        title: "Trails",
        subheader: "Luke Mastrocola",
        chips: ["Mixing", "Mastering", "Producing"],
        links: {
          platform: "soundcloud",
          url: "https://soundcloud.com/luke-mastrocola/trails?si=615d481ff43044049344371193d51c51&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        },
      },
    ],
  },
];
