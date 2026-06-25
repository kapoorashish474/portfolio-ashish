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
    period: 'Aug 2025 – Present · NYC, USA',
    description:
      'Led an Ad Tech team of six engineers delivering AI-driven ad generation. Spearheaded image generation and LLM-powered ad copy, unified cross-domain auth with Okta, and cut deployment times 35% via GitHub Actions, ECR, and Argo CD.',
  },
  {
    id: 'microsoft',
    company: 'Microsoft',
    role: 'Senior Software Development Engineer',
    period: 'Jun 2022 – Jul 2025 · NYC, USA',
    description:
      'Managed and mentored a team of four engineers. Drove quarterly product initiatives from ideation to launch, built Azure Data Explorer pipelines for real-time insights, and reduced retailer onboarding time by 30%.',
  },
  {
    id: 'aws',
    company: 'Amazon Web Services',
    role: 'Software Development Engineer',
    period: 'May 2020 – Jun 2022 · Seattle, USA',
    description:
      'Built on the AWS Pricing Calculator team (1M+ daily requests). Developed reusable React components, Redux state management, CloudFormation-based IaC deployment pipelines, and real-time monitoring and alarming.',
  },
  {
    id: 'gcom',
    company: 'GCOM Software',
    role: 'Software Developer',
    period: 'Jun 2017 – May 2020 · Albany, NY',
    description:
      'Delivered full end-to-end features on ASP.NET MVC web and WPF desktop applications. Mentored new employees, reviewed architecture designs, and built the data layer with Entity Framework, ADO.NET, and LINQ.',
  },
  {
    id: 'gcom-intern',
    company: 'GCOM Software',
    role: 'Software Developer Intern',
    period: 'May 2016 – Dec 2016 · Albany, NY',
    description:
      'Developed an award-winning native Android app for NY State (NYC Parking Ticket Pay or Dispute) with MVC architecture and multi-language support, rated 4.7 stars on the Play Store.',
    logoKey: 'gcom',
  },
  {
    id: 'accenture',
    company: 'Accenture',
    role: 'Associate Software Engineer',
    period: 'Jul 2014 – Jul 2015 · Mumbai, India',
    description:
      'Developed an insurance service portal for a leading insurance provider. Created and maintained reports with Crystal Reports and developed SQL queries for the backend database system.',
  },
];
