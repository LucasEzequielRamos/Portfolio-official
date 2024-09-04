export type Project = {
  id:number;
    title: string;
    subtitle: string;
    description: string[];
    images: {
      url: string;
      alt: string;
    }[];
    technologies: string[];
    links: {
      liveDemo: string;
      sourceCode: string;
    };
  };