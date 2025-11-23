import { Project, SocialLink, Highlight, FocusArea } from './types';

// ==========================================
// EDIT CONTENT HERE
// ==========================================

export const PERSONAL_INFO = {
  name: "Franklin Ugwu",
  title: "Founder • AI Entrepreneur • Tech Innovator",
  shortIntro: "I build AI platforms, education tools, and smart hardware that connect people, technology, and opportunity across the globe.",
  aboutText: [
    "Hi, I’m Franklin Ugwu, an AI entrepreneur and founder of multiple technology and hardware companies. I focus on building practical AI tools, learning platforms, and communication products that solve real-world problems for individuals, schools, businesses, and public sector organisations.",
    "I’m passionate about making advanced technology simple, accessible, and useful for everyday people. This page is a work in progress, and I’ll be adding more of my story soon."
  ],
  email: "frankywright@hotmail.com",
  phone: "07543025555",
  location: "London, United Kingdom",
  footerText: `© ${new Date().getFullYear()} Franklin Ugwu. All rights reserved.`,
  footerNote: "Built with AI assistance and human creativity."
};

// Highlights shown under the Hero section
export const HIGHLIGHTS: Highlight[] = [
  { title: "Founder & CEO", subtitle: "Galaxyway AI" },
  { title: "AI & Digital", subtitle: "Solutions Expert" },
  { title: "Hardware", subtitle: "Telecoms & CCTV" },
  { title: "Educator", subtitle: "AI Advocate" }
];

// About Me - Key Focus Areas
export const FOCUS_AREAS: FocusArea[] = [
  { id: 1, text: "AI tools & automation" },
  { id: 2, text: "Web & mobile app development" },
  { id: 3, text: "AI education & skills training" },
  { id: 4, text: "Telecoms & smart desk phones" },
  { id: 5, text: "CCTV & safety technology" },
  { id: 6, text: "Entrepreneurial mentoring" }
];

// Projects / Companies
export const PROJECTS: Project[] = [
  {
    id: "galaxyway-ai",
    name: "Galaxyway AI Limited",
    role: "Founder & CEO",
    category: "AI • Web & Mobile Development • Automation",
    description: "Galaxyway AI is a digital and AI solutions company providing web and mobile app development, AI automation, consultancy, and access to curated AI tools and our AI playground. We help individuals, startups, and organisations turn ideas into powerful, scalable digital products.",
    url: "https://www.galaxyway.ai",
    imageAlt: "Galaxyway AI Dashboard",
    imagePlaceholderId: 1
  },
  {
    id: "galaxyway-hub",
    name: "Galaxyway AI Agent Hub",
    role: "Founder & CEO",
    category: "AI Agents • No-Code Automation • SaaS",
    description: "Galaxyway AI Agent Hub is a no-code platform that makes AI agents accessible to businesses of all sizes. It lets users build, deploy, and manage AI assistants and workflows without needing technical expertise, bringing automation within reach for everyday teams.",
    url: "https://www.galaxywayhub.com",
    imageAlt: "AI Agent Hub Interface",
    imagePlaceholderId: 2
  },
  {
    id: "galaxyway-school",
    name: "Galaxyway AI School",
    role: "Founder & CEO",
    category: "EdTech • AI for Schools • SaaS Platform",
    description: "Galaxyway AI School is a SaaS learning platform for schools and institutions. It provides multi-portal access for schools, teachers, and students, enabling teachers to create interactive AI-powered lessons and safe AI tutor agents that adapt to each learner’s abilities.",
    url: "https://www.galaxywayaischool.com",
    imageAlt: "School Learning Platform",
    imagePlaceholderId: 3
  },
  {
    id: "galaxyway-academy",
    name: "Galaxyway AI Academy",
    role: "Founder & CEO",
    category: "Online Learning • AI Education",
    description: "Galaxyway AI Academy is a global AI learning academy built on a modern, interactive learning management system. With the motto ‘Learn. Evolve. Lead.’, it offers curated courses, interactive content, progress tracking, and a supportive community to help learners build practical digital and AI skills.",
    url: "https://www.galaxywayaiacademy.com",
    imageAlt: "Online Academy Homepage",
    imagePlaceholderId: 4
  },
  {
    id: "capetune",
    name: "Capetune Limited",
    role: "Founder & CEO",
    category: "Telecoms • Wireless Desk Phones • Security Hardware",
    description: "Capetune Limited provides cutting-edge telecommunication and security products, including GSM/4G wireless desk phones, gateways, and related communication solutions for homes, care environments, vehicles, and businesses. With over a decade of experience, Capetune focuses on practical, accessible devices that make communication easier for everyone.",
    url: "https://www.capetune.com",
    imageAlt: "Wireless Desk Phone Product",
    imagePlaceholderId: 5
  },
  {
    id: "icustodian",
    name: "iCustodian Limited",
    role: "Founder & CEO",
    category: "CCTV • Security • Vehicle & Home Surveillance",
    description: "iCustodian is a specialist CCTV and security brand delivering hybrid CCTV systems for vehicles, homes, and offices. The product range includes HD cameras, mobile DVRs, GPS-enabled systems, and accessories designed to help professionals monitor, protect, and manage their assets with confidence.",
    url: "https://www.icustodian.com",
    imageAlt: "CCTV Security System",
    imagePlaceholderId: 6
  }
];

// Social Media Links
export const SOCIALS: SocialLink[] = [
  { name: "YouTube", url: "https://www.youtube.com/@FrankyUgwu", iconName: "Youtube" },
  { name: "Facebook", url: "https://www.facebook.com/frankywright", iconName: "Facebook" },
  { name: "Instagram", url: "https://www.instagram.com/frankywright", iconName: "Instagram" },
  { name: "TikTok", url: "https://www.tiktok.com/@FrankyUgwu", iconName: "Linkedin" } // Mapping TikTok to Linkedin icon temporarily as generic video or use text
];
