import kargoLogo from '../img/kargo.svg';
import gcomLogo from '../img/gcom.svg';
import microsoftLogo from '../img/microsoft.svg';
import awsLogo from '../img/aws.svg';
import accentureLogo from '../img/accenture.svg';

export const COMPANY_LOGOS = {
  kargo: kargoLogo,
  microsoft: microsoftLogo,
  aws: awsLogo,
  gcom: gcomLogo,
  accenture: accentureLogo,
};

export const EXPERIENCES = [
  {
    id: 'kargo',
    company: 'Kargo',
    role: 'Senior Software Development Engineer',
    period: 'Aug 2025 – Present',
    location: 'NYC, USA',
    isLead: true,
    teamSize: '6 engineers',
    highlights: [
      'Lead an Ad Tech team of six engineers building AI-driven ad generation products.',
      'Spearheaded AI image generation and LLM-powered ad copy, boosting engagement and creative velocity.',
      'Unified cross-domain authentication with Okta across multiple applications.',
      'Reduced deployment times by 35% via GitHub Actions, ECR, and Argo CD.',
      'Designed personalized ad templates that increased CTR by 10%.',
    ],
    tech: ['React', 'Express.js', 'MySQL', 'AWS', 'Docker', 'Kubernetes', 'LLMs'],
  },
  {
    id: 'microsoft',
    company: 'Microsoft',
    role: 'Senior Software Development Engineer',
    period: 'Jun 2022 – Jul 2025',
    location: 'NYC, USA',
    isLead: true,
    teamSize: '4 engineers',
    highlights: [
      'Managed and mentored a team of four engineers; one team member earned a promotion under my guidance.',
      'Drove quarterly product initiatives from ideation to launch with senior leadership.',
      'Built Azure Data Explorer pipelines delivering real-time insights to stakeholders.',
      'Shipped retailer onboarding tool — cut onboarding time 30% and increased quarterly onboardings 20%.',
      'Redesigned APIs with cross-functional teams, reducing load times by 10%.',
    ],
    tech: ['Azure', 'Python', 'Kusto', 'Cosmos DB', 'CI/CD', 'Data Pipelines'],
  },
  {
    id: 'aws',
    company: 'Amazon Web Services',
    role: 'Software Development Engineer',
    period: 'May 2020 – Jun 2022',
    location: 'Seattle, USA',
    isLead: false,
    highlights: [
      'Built on the AWS Pricing Calculator — a customer-facing tool serving 1M+ daily requests.',
      'Developed reusable React components and Redux state management used across calculators.',
      'Automated deployment pipelines with CloudFormation, Route 53, S3, and CloudFront.',
      'Implemented real-time monitoring and alarming for performance and outage detection.',
      'Led design reviews, recruitment, and operational initiatives in a fast-paced team.',
    ],
    tech: ['React', 'Redux', 'JavaScript', 'AWS', 'CloudFormation', 'CloudFront'],
  },
  {
    id: 'gcom',
    company: 'GCOM Software',
    role: 'Software Developer',
    period: 'Jun 2017 – May 2020',
    location: 'Albany, NY',
    isLead: false,
    highlights: [
      'Delivered end-to-end features on ASP.NET MVC web and WPF desktop applications.',
      'Mentored new hires, reviewed architecture designs, and performed code reviews.',
      'Built data layer with Entity Framework, ADO.NET, and LINQ.',
    ],
    tech: ['C#', 'ASP.NET MVC', 'WPF', 'Entity Framework', 'SQL'],
  },
  {
    id: 'gcom-intern',
    company: 'GCOM Software',
    role: 'Software Developer Intern',
    period: 'May 2016 – Dec 2016',
    location: 'Albany, NY',
    isLead: false,
    highlights: [
      'Built award-winning NYC Parking Ticket app for NY State with multi-language MVC architecture.',
      'Achieved 4.7★ rating on the Google Play Store.',
    ],
    tech: ['Android', 'Java', 'MVC'],
    logoKey: 'gcom',
  },
  {
    id: 'accenture',
    company: 'Accenture',
    role: 'Associate Software Engineer',
    period: 'Jul 2014 – Jul 2015',
    location: 'Mumbai, India',
    isLead: false,
    highlights: [
      'Developed insurance service portal for a leading insurance provider.',
      'Created Crystal Reports and SQL queries for backend reporting systems.',
    ],
    tech: ['SQL', 'Crystal Reports', 'Java'],
  },
];
