export const PROFILE = {
  name: 'Suchandra Siripuram',
  title: 'A.I. Engineer | Data Science Enthusiast',
  location: 'Hyderabad, India',
  email: 'suchandrasiripuram@gmail.com',
  phone: '+91 9849486177',
  summary:
    'Data analytics and machine learning enthusiast with experience building predictive models and AI infrastructure. Proficient in Python, SQL, and modern AI frameworks, I specialize in architecting scalable data pipelines and deploying reliable AI safety systems to drive technological advancements.',
  socials: {
    linkedin: 'https://www.linkedin.com/in/suchandra-siripuram',
    github: 'https://github.com/Tnyme0506',
    portfolio: 'https://suchandrasiripuram.netlify.app/',
  },
} as const;

export const NAV_LINKS = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
] as const;

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: 'Programming & Data Analysis',
    skills: ['Python (Pandas, NumPy, Scikit-learn)', 'SQL', 'JavaScript', 'Node.js'],
  },
  {
    category: 'Machine Learning & AI',
    skills: [
      'TensorFlow',
      'Prophet',
      'CNNs',
      'ONNX',
      'Vector Embeddings',
      'LLM Safety / Evaluation',
    ],
  },
  {
    category: 'A.I. Infrastructure',
    skills: ['AWS (Bedrock, SageMaker)', 'Azure', 'GCP', 'FastDeploy', 'Kubernetes', 'Docker'],
  },
  {
    category: 'Databases',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQLite', 'LanceDB'],
  },
  {
    category: 'Visualization',
    skills: ['Streamlit', 'Tableau', 'Matplotlib', 'Seaborn'],
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  note?: string;
  bullets: { title: string; description: string }[];
  tags: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Quilr.ai',
    role: 'Associate A.I. Engineer',
    period: 'March 2025 – Present',
    note: 'Promoted from A.I. Intern (Mar 2025 – Jun 2025) to Associate A.I. Engineer (Jun 2025 – Present)',
    bullets: [
      {
        title: 'Multi-Cloud AI Inventory & Asset Governance',
        description:
          'Architected a standardized cross-cloud extraction pipeline (AWS, GCP, Azure) to centralize visibility for 100+ AI resource types, including Amazon Bedrock, SageMaker, and Azure RAG. Engineered unified data schemas and automated transformation logic for consistent governance and security auditing.',
      },
      {
        title: 'Enterprise-Grade Data Loss Prevention (DLP) & Intent Detection',
        description:
          'Designed a high-performance "Priority-based Cascade" matching system integrating Exact Data Match (EDM), semantic embedding similarity (Falcon), and few-shot intent classification. Achieved 91.3% semantic accuracy and maintained <5ms latency via pre-computed vector embeddings and optimized SQLite/LanceDB storage.',
      },
      {
        title: 'High-Throughput ML Serving & LLM Reliability',
        description:
          'Developed a custom model serving layer (FastDeploy) using a consumer-producer batching architecture to optimize throughput for concurrent inference. Implemented ONNX-accelerated deployment for safety models (Prompt Guard) and integrated hallucination detection (Vectara) for factual consistency in production.',
      },
    ],
    tags: ['AWS', 'GCP', 'Azure', 'ONNX', 'LanceDB', 'LLM Safety'],
  },
  {
    company: 'Wavelabs Technologies',
    role: 'Full Stack Intern',
    period: 'January 2023 – June 2023',
    bullets: [
      {
        title: 'Kubernetes Automation',
        description:
          'Engineered an automated data processing pipeline for Kubernetes cluster deployment, leveraging JavaScript, Node.js, and PostgreSQL to manage and streamline data workflows.',
      },
      {
        title: 'Process Optimization',
        description:
          'Optimized deployment processes, reducing cycle time from 6 weeks to 3 weeks and significantly enhancing data accuracy and resource utilization.',
      },
      {
        title: 'System Monitoring',
        description:
          'Collaborated with cross-functional teams to implement real-time monitoring and data validation, ensuring robust system performance in virtual machine infrastructure.',
      },
    ],
    tags: ['JavaScript', 'Node.js', 'PostgreSQL', 'Kubernetes'],
  },
];

export interface Project {
  title: string;
  period: string;
  description: string;
  tags: string[];
  image: string;
  links: { label: string; href: string }[];
}

export const PROJECTS: Project[] = [
  {
    title: 'Real-Time Market Data Forecasting',
    period: 'January 2025 – February 2025',
    description:
      'An AI-powered real-time stock market forecasting system for Nifty 50 companies. Built machine learning models (Prophet) to predict price movements, surfaced via an interactive Streamlit dashboard with technical indicators (SMA, EMA) and auto-refreshing charts.',
    tags: ['Python', 'Prophet', 'Time Series', 'Streamlit'],
    // Replace with your own screenshot/image URL.
    image:
      '/real_time_forecasting_photo.jpg',
    links: [
      //{ label: 'Live Demo', href: 'https://ss-forecasting.streamlit.app/' },
      {
        label: 'Source',
        href: 'https://github.com/Tnyme0506/real-time-market-data-forecasting',
      },
    ],
  },
  {
    title: 'ML-Enabled Leak Detection in Water Networks',
    period: 'January 2022 – May 2022',
    description:
      'A CNN-based predictive model to detect leaks in water distribution networks using time-series sensor data. Identified leakage patterns with high accuracy, applying deep learning to a critical infrastructure challenge.',
    tags: ['Python', 'Keras', 'CNN', 'Deep Learning'],
    // Local image in /public (served from the site root by Vite).
    image: '/pipeline_leak_detection_photo.avif',
    links: [
      {
        label: 'Source',
        href: 'https://github.com/Tnyme0506/Machine-Learning-Enabled-Leak-Detection-in-Water-Distribution-Networks',
      },
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Post Graduate Diploma in Big Data Analytics',
    institution: 'CDAC Bangalore',
    year: '2025',
  },
  {
    degree: 'Master of Science (M.Sc.) in Biological Sciences',
    institution: 'BITS Pilani, Hyderabad',
    year: '2023',
  },
  {
    degree: 'Bachelor of Engineering (B.E.) in Civil Engineering',
    institution: 'BITS Pilani, Hyderabad',
    year: '2023',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export const CERTIFICATIONS: Certification[] = [
  { name: 'Google Advanced Data Analytics', issuer: 'Google', year: '2024' },
  {
    name: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    year: '2022',
  },
  { name: 'Hadoop Foundations – Level 1', issuer: 'IBM' },
];
