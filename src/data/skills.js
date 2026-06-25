const ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

export const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    title: 'Front-End',
    skills: [
      { name: 'React', icon: `${ICON}/react/react-original.svg` },
      { name: 'Redux', icon: `${ICON}/redux/redux-original.svg` },
      { name: 'JavaScript', icon: `${ICON}/javascript/javascript-original.svg` },
      { name: 'TypeScript', icon: `${ICON}/typescript/typescript-original.svg` },
      { name: 'HTML5', icon: `${ICON}/html5/html5-original.svg` },
      { name: 'CSS3', icon: `${ICON}/css3/css3-original.svg` },
      { name: 'Tailwind CSS', icon: `${ICON}/tailwindcss/tailwindcss-original.svg` },
    ],
  },
  {
    id: 'backend',
    title: 'Back-End',
    skills: [
      { name: 'Node.js', icon: `${ICON}/nodejs/nodejs-original.svg` },
      { name: 'Express.js', icon: `${ICON}/express/express-original.svg` },
      { name: 'Python', icon: `${ICON}/python/python-original.svg` },
      { name: 'C#', icon: `${ICON}/csharp/csharp-original.svg` },
      { name: 'ASP.NET', icon: `${ICON}/dot-net/dot-net-original.svg` },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    highlight: true,
    skills: [
      { name: 'LLMs', icon: `${ICON}/openai/openai-original.svg` },
      { name: 'RAG Pipelines' },
      { name: 'OpenAI API', icon: `${ICON}/openai/openai-original.svg` },
      { name: 'Amazon Lex', icon: `${ICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: 'Ollama' },
      { name: 'Prompt Engineering' },
      { name: 'AWS ML Specialty', icon: `${ICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: `${ICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: 'Azure', icon: `${ICON}/azure/azure-original.svg` },
      { name: 'Docker', icon: `${ICON}/docker/docker-original.svg` },
      { name: 'Kubernetes', icon: `${ICON}/kubernetes/kubernetes-plain.svg` },
      { name: 'GitHub Actions', icon: `${ICON}/github/github-original.svg` },
      { name: 'Argo CD' },
      { name: 'CloudFormation', icon: `${ICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: 'Terraform', icon: `${ICON}/terraform/terraform-original.svg` },
      { name: 'CI/CD', icon: `${ICON}/jenkins/jenkins-original.svg` },
    ],
  },
  {
    id: 'data',
    title: 'Data & Databases',
    skills: [
      { name: 'MySQL', icon: `${ICON}/mysql/mysql-original.svg` },
      { name: 'Cosmos DB', icon: `${ICON}/azure/azure-original.svg` },
      { name: 'Azure Data Explorer', icon: `${ICON}/azure/azure-original.svg` },
      { name: 'SQL', icon: `${ICON}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: `${ICON}/git/git-original.svg` },
      { name: 'Okta' },
      { name: 'Android', icon: `${ICON}/android/android-original.svg` },
    ],
  },
];
