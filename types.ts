export interface Project {
  id: string;
  name: string;
  role: string;
  category: string;
  description: string;
  url: string;
  imageAlt: string;
  // In a real app with local images, this would be a path string
  // For this demo, we use a placeholder generator
  imagePlaceholderId: number; 
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: 'Youtube' | 'Facebook' | 'Instagram' | 'Linkedin' | 'Twitter'; // Using Lucide icon names
}

export interface Highlight {
  title: string;
  subtitle: string;
}

export interface FocusArea {
  id: number;
  text: string;
}