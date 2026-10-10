// Single source of content for the site.
// Source of truth: resume (Ashish_Resume_Project_Link_Fixed.pdf) + public GitHub repos.

import kargoLogo from '../assets/logos/kargo.svg';
import microsoftLogo from '../assets/logos/microsoft.svg';
import awsLogo from '../assets/logos/aws.svg';
import gcomLogo from '../assets/logos/gcom.png';
import accentureLogo from '../assets/logos/accenture.svg';
import photo from '../assets/ashish-b.jpg';

export const PROFILE = {
  firstName: 'ASHISH',
  lastName: 'KAPOOR',
  fullName: 'Ashish Kapoor',
  headline: 'Staff-Scope Engineer · AI & Cloud Platforms',
  years: '11',
  location: 'New York, NY',
  seasons: '2014 - 2026',
  photo,
  pitch:
    'Building high-scale backend and cloud platforms at AWS and Microsoft. Now leading six engineers at Kargo shipping LLM-driven creative generation.',
  summary: [
    'Staff-scope engineer with 11 years building high-scale backend and cloud platforms at AWS and Microsoft.',
    'At Kargo, I lead six engineers shipping LLM-driven creative generation and Kubernetes CI/CD that reduced deployment times by 35%. At Microsoft, I led four engineers on Azure data pipelines for enterprise customers, promoting one to Senior Engineer. At AWS, I shipped Pricing Calculator infrastructure handling ~1M requests daily.',
  ],
  focusTags: ['AI & Agent Systems', 'Cloud Platforms', 'Engineering Leadership'],
  heroStack: ['AWS • Azure • Kubernetes', 'LLMs & Agents'],
  roles: [
    'NOW STREAMING // AI & AGENT SYSTEMS',
    'ORIGINAL SERIES // ENGINEERING LEADERSHIP',
    'BLOCKBUSTER // HIGH-SCALE CLOUD PLATFORMS',
    'LIMITED SERIES // BACKEND ARCHITECTURE',
  ],
};

export const LINKS = {
  email: 'kapoorashish474@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ashkap/',
  github: 'https://github.com/kapoorashish474',
  credly: 'https://www.credly.com/badges/60105125-7096-4ed6-b2b0-94b310672b39/linked_in_profile',
};

// "Who's watching?" choices shown before the intro.
export const VIEWER_PROFILES = [
  { id: 'recruiter', name: 'Recruiter', color: '#E50914', shade: '#8A0610' },
  { id: 'hiring-manager', name: 'Hiring Manager', color: '#1F6FEB', shade: '#0B3A86' },
];

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const STATS = [
  { value: '11', label: 'Years Engineering' },
  { value: '6', label: 'Engineers Led at Kargo' },
  { value: '~1M', label: 'Daily Requests Served' },
  { value: '100+', label: 'Enterprise Partners' },
  { value: '35%', label: 'Faster Deployments' },
  { value: '30%', label: 'Faster Onboarding' },
];

export const EDUCATION = [
  {
    degree: 'M.S. in Information Technology & Management',
    school: 'The University of Texas at Dallas',
    period: '2015 - 2017',
  },
  {
    degree: 'B.S. in Information Technology',
    school: 'University of Mumbai',
    period: '2010 - 2014',
  },
];

export const RECOGNITION = [
  { title: 'AWS Certified Machine Learning, Specialty', detail: 'Amazon Web Services', link: LINKS.credly },
  { title: 'Company Hackathon Recognition', detail: 'Context-Aware Voice AI Assistant' },
  { title: 'Award-Winning Android App', detail: 'NYC Parking Ticket Pay or Dispute · 4.7/5 on Google Play' },
];

// Ordered newest first; `season` counts up from the first role.
export const EXPERIENCE = [
  {
    id: 'kargo',
    season: 5,
    company: 'Kargo',
    role: 'Senior Software Development Engineer',
    period: 'Aug 2025 - Present',
    location: 'NYC, USA',
    logo: kargoLogo,
    synopsis:
      'Led team of six engineers building AI-powered creative automation platform, architecting scalable systems from design through production.',
    episodes: [
      'Implemented LLM-driven content synthesis pipeline enabling dynamic ad generation while maintaining quality standards and reducing manual content creation time.',
      'Designed Snowflake-based analytics infrastructure for feature importance analysis, enabling data-driven product decisions and accelerating iteration cycles.',
      'Led cross-domain authentication initiative using Okta to unify multiple systems into seamless single sign-on architecture, improving user experience and reducing security surface area.',
      'Designed and implemented personalized ad templates that adapt to user behavior patterns, translating user engagement improvements into measurable monetization impact.',
      'Implemented CI/CD automation using GitHub Actions for building, Docker for containerization, and Argo CD for orchestration, reducing deployment times by 35%.',
      'Established team leadership cadence through regular 1:1s and technical roadmap alignment, providing clear direction for six engineers operating in an ambiguous product space.',
    ],
    tech: ['React', 'Express.js', 'MySQL', 'AWS', 'Docker', 'Kubernetes', 'Agent Frameworks', 'MCP'],
  },
  {
    id: 'microsoft',
    season: 4,
    company: 'Microsoft',
    role: 'Senior Software Development Engineer',
    period: 'Jun 2022 - Jul 2025',
    location: 'NYC, USA',
    logo: microsoftLogo,
    synopsis: 'Led team of four engineers through major product initiatives, mentoring one to Senior Engineer promotion.',
    episodes: [
      'Architected large-scale data pipeline using Azure Functions to process data and feed it into Data Explorer, integrated with ML-powered anomaly detection, serving analytics to 100+ enterprise partners.',
      'Built intelligent partner onboarding automation leveraging predictive analytics to recommend optimal configurations, reducing onboarding time by 30% and increasing partner activations by 20%.',
      'Developed machine learning forecasting model to predict partner demand patterns, improving inventory planning accuracy and optimizing operational resource allocation.',
      'Redesigned critical APIs with cross-functional teams, reducing response times by 10% and implementing intelligent caching strategies to reduce database load.',
      'Led technical direction and 1:1 coaching for four engineers, driving career growth and establishing strong systems design practices across the platform.',
    ],
    tech: ['Azure Functions', 'Data Explorer', 'Python', 'Kusto', 'Cosmos DB', 'CI/CD', 'ML Anomaly Detection'],
  },
  {
    id: 'aws',
    season: 3,
    company: 'Amazon Web Services',
    role: 'Software Development Engineer',
    period: 'May 2020 - Jun 2022',
    location: 'Seattle, USA',
    logo: awsLogo,
    synopsis:
      'Shipped high-scale AWS Pricing Calculator serving 1M+ daily requests, supporting cost estimation capabilities across 100+ AWS services.',
    episodes: [
      'Implemented Infrastructure as Code using CloudFormation to automate deployment of Route 53 DNS, S3 storage, and CloudFront distribution services.',
      'Built real-time monitoring system to track calculator performance metrics and automatically alert on service anomalies and outages.',
    ],
    tech: ['React', 'Redux', 'JavaScript', 'Node.js', 'S3', 'Route 53', 'CloudFront', 'CloudFormation'],
  },
  {
    id: 'gcom',
    season: 2,
    company: 'GCOM Software',
    role: 'Software Developer',
    period: 'May 2016 - May 2020',
    location: 'Albany, NY',
    logo: gcomLogo,
    synopsis: 'Delivered end-to-end features across web, desktop, and mobile applications.',
    episodes: [
      'Designed and delivered end-to-end features for ASP.NET MVC and WPF applications, consistently shipping on schedule with high quality standards.',
      'Developed award-winning Android application for NYC Parking Ticket Pay or Dispute with multilingual support, achieving 4.7/5 stars on Google Play Store.',
      'Provided technical guidance to junior engineers through code reviews and architecture discussions, establishing engineering standards and best practices.',
    ],
    tech: ['ASP.NET MVC', 'WPF', 'Entity Framework', 'ADO.NET', 'LINQ', 'SQL', 'Android'],
  },
  {
    id: 'accenture',
    season: 1,
    company: 'Accenture',
    role: 'Associate Software Engineer',
    period: 'Jul 2014 - Jul 2015',
    location: 'Mumbai, India',
    logo: accentureLogo,
    synopsis: 'Built insurance domain systems and business intelligence reporting.',
    episodes: [
      'Developed comprehensive insurance service portal supporting policyholders across multiple service channels.',
      'Designed and maintained business intelligence reports using Crystal Reporting, enabling data-driven decision-making across the organization.',
    ],
    tech: ['SQL', 'Crystal Reporting', 'Insurance Systems'],
  },
];

export const EXPERTISE = [
  {
    title: 'Engineering Leadership',
    tag: 'TEAMS & ROADMAPS',
    text: 'Led six engineers at Kargo and four at Microsoft through regular 1:1s, technical roadmap alignment, and strong systems design practices, mentoring one engineer to a Senior promotion.',
  },
  {
    title: 'AI & Agent Systems',
    tag: 'LLMS · AGENTS · ML',
    text: 'LLM-driven content synthesis for dynamic ad generation, agent frameworks and MCP, RAG-powered voice agents, and ML anomaly detection and demand forecasting in production.',
  },
  {
    title: 'High-Scale Cloud Platforms',
    tag: 'AWS · AZURE',
    text: 'AWS Pricing Calculator infrastructure handling ~1M daily requests across 100+ services, and Azure Functions pipelines into Data Explorer serving analytics to 100+ enterprise partners.',
  },
  {
    title: 'Delivery, DevOps & Security',
    tag: 'CI/CD · IAC · SSO',
    text: 'GitHub Actions, Docker, and Argo CD on Kubernetes cutting deployment times by 35%, Infrastructure as Code with CloudFormation, real-time monitoring, and Okta single sign-on.',
  },
];

export const SKILLS = [
  {
    title: 'AI & Agents',
    tag: 'INTELLIGENCE',
    desc: 'LLM content synthesis, agent frameworks, MCP tooling, RAG pipelines, and ML-powered anomaly detection and forecasting.',
    skills: ['LLMs', 'Agent Frameworks', 'MCP', 'RAG', 'Amazon Lex', 'OpenAI API', 'ML Forecasting'],
  },
  {
    title: 'Cloud Platforms',
    tag: 'INFRASTRUCTURE',
    desc: 'Designing and operating high-scale services on AWS and Azure, provisioned with Infrastructure as Code.',
    skills: ['AWS', 'S3', 'Route 53', 'CloudFront', 'Azure Functions', 'CloudFormation'],
  },
  {
    title: 'DevOps & Delivery',
    tag: 'CI/CD',
    desc: 'Containerized build-and-deploy automation and real-time monitoring that keep releases fast and safe.',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Argo CD', 'CI/CD', 'Monitoring'],
  },
  {
    title: 'Data & Analytics',
    tag: 'DATA',
    desc: 'Analytics infrastructure and data pipelines that turn raw events into product and partner insights.',
    skills: ['Snowflake', 'Data Explorer', 'Kusto', 'Cosmos DB', 'MySQL', 'SQL'],
  },
  {
    title: 'Full-Stack Engineering',
    tag: 'WEB',
    desc: 'Customer-facing web apps and APIs, from reusable React components to backend services.',
    skills: ['React', 'Redux', 'JavaScript', 'Node.js', 'Express.js', 'Python'],
  },
  {
    title: 'Platforms & Identity',
    tag: 'ECOSYSTEM',
    desc: 'Enterprise .NET applications, native Android, and unified authentication across systems.',
    skills: ['Okta SSO', 'ASP.NET MVC', 'WPF', 'Entity Framework', 'LINQ', 'Android'],
  },
];

// Public repos on github.com/kapoorashish474
export const PROJECTS = [
  {
    title: 'Context-Aware Voice AI Assistant',
    category: 'Multi-Agent RAG System',
    description:
      'Conversational AI agent with modular speech-in, LLM reasoning, speech-out pipeline and real-time state management. Won company hackathon recognition.',
    tags: ['Voice AI', 'LLM', 'Speech-to-Text', 'Node.js'],
    badge: 'Hackathon',
    link: 'https://github.com/kapoorashish474/voiceAIAgent',
  },
  {
    title: 'Enterprise RAG Chatbot',
    category: 'AI Agents on AWS',
    description: 'RAG chatbot on AWS Bedrock with an S3 knowledge base, Lambda, and CloudFormation infrastructure as code.',
    tags: ['Bedrock', 'RAG', 'Lambda', 'Python'],
    link: 'https://github.com/kapoorashish474/AIAgents',
  },
  {
    title: 'MCP Agent',
    category: 'Agent Tooling',
    description: 'Production MCP agent pairing a Gemini LLM with real-time tools for weather, news, and markets.',
    tags: ['MCP', 'Gemini', 'AI Agents', 'Python'],
    link: 'https://github.com/kapoorashish474/mcp-agent',
  },
  {
    title: 'LLM Vector DB',
    category: 'RAG Ingestion',
    description: 'RAG ingestion pipeline with PDF chunking, OpenAI embeddings, and vector search.',
    tags: ['Embeddings', 'Vector DB', 'OpenAI', 'Python'],
    link: 'https://github.com/kapoorashish474/llm-vectordb',
  },
  {
    title: 'Track Market',
    category: 'Market Intelligence',
    description: 'Full-stack market intelligence app with SEC 13F holdings analysis.',
    tags: ['React', 'Express', 'Docker', 'SEC 13F'],
    link: 'https://github.com/kapoorashish474/trackMarket',
  },
  {
    title: 'Ad Industry Intelligence',
    category: 'Data Visualization',
    description: 'US ad industry intelligence dashboard with rankings, a market guide, and funding trends.',
    tags: ['Analytics', 'JavaScript', 'Docker'],
    badge: 'Live',
    link: 'https://kapoorashish474.github.io/ads/',
  },
  {
    title: 'FIFA World Cup 2026',
    category: 'Prediction & Analytics',
    description: 'Prediction and analysis platform for the FIFA World Cup 2026.',
    tags: ['React', 'TypeScript', 'Analytics', 'Docker'],
    link: 'https://github.com/kapoorashish474/fifaWorldCup2026',
  },
  {
    title: 'Image Recognition',
    category: 'Computer Vision',
    description: 'Computer vision pipeline for image attribute extraction in ML workflows.',
    tags: ['Computer Vision', 'ML', 'Python'],
    link: 'https://github.com/kapoorashish474/ImageRecognition',
  },
];
