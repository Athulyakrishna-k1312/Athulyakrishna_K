// Central content store — update this file to change site content
// without touching any component code.

export const profile = {
  name: 'Athulyakrishna K',
  shortName: 'Athulya',
  role: 'Aspiring Software Engineer',
  tagline:
    'Driven by curiosity, continuous learning, and a passion for building meaningful software.',
  location: 'Palakkad, Kerala, India',
  email: 'athulyakrishnaskp75@gmail.com',
  resumeUrl: '/resume/Athulyakrishna_K_Resume.pdf',
  photo: '/src/assets/images/profile/profile.png',
  social: {
    github: 'https://github.com/Athulyakrishna-k1312',
    linkedin: 'https://www.linkedin.com/in/athulyakrishna-k-a176462a6',
    instagram: 'https://www.instagram.com/athulyam_?igsh=c3I3bWp5ZmE2ZW1i',
    medium:'https://medium.com/@athulyakrishnaskp75'
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  summary:
  "I'm a final-year Information Technology student at Government Engineering College Palakkad, building toward a career in software engineering by combining strong academic foundations with hands-on, real-world projects. " +
  "My work spans full-stack web development, AI/ML applications, and open-source contributions. I enjoy turning ideas into practical software solutions while continuously learning modern technologies and improving my problem-solving skills. " +
  "I'm currently preparing for software engineering roles, with a focus on developing scalable applications, writing clean code, and creating meaningful user experiences.",
  education: [
    {
      degree: 'B.Tech, Information Technology',
      institution: 'Government Engineering College Palakkad',
      duration: '2023 — 2027',
      detail: 'CGPA 8.94 ·',
    },
  ],
  cards: [
    {
      title: 'Leadership',
      description:
        'Served as a Media Team Member in μLearn GECPKD EXECOM, contributing to community initiatives, event promotion, technical campaigns, and student engagement. Also worked as a Compass Ambassador at Qnayds, supporting learners and fostering community participation.',
      icon: 'leadership',
    },
    {
      title: 'Open Source',
      description:
        'Contributed to community-driven open-source projects through SSOC, with merged pull requests focused on accessibility improvements, UI enhancements, bug fixes, and feature development while collaborating with mentors and fellow contributors.',
      icon: 'opensource',
    },
    {
      title: 'Internships',
      description:
        'Completed internships at Infosys Springboard, developing an AI-based AnimeGAN Image Transformation Tool, and at Edunet Foundation × IBM SkillsBuild, building an employee salary prediction model using machine learning techniques.',
      icon: 'internship',
    },
    {
      title: 'Learning Journey',
      description:
        'Driven by curiosity and continuous improvement, I enjoy learning through practical projects, exploring modern technologies, refining my problem-solving skills, and building software that prepares me for a successful software engineering career.',
      icon: 'learning',
    },
  ]
}

export const skills = {
  Frontend: [
    { name: 'React', icon: 'SiReact' },
    { name: 'Next.js', icon: 'SiNextdotjs' },
    { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    { name: 'TypeScript', icon: 'SiTypescript' },
    { name: 'HTML5 / CSS3', icon: 'SiHtml5' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'SiNodedotjs' },
    { name: 'Express.js', icon: 'SiExpress' },
    { name: 'REST APIs', icon: 'TbApi' },
    { name: 'Supabase', icon: 'SiSupabase' },
    { name: 'Firebase', icon: 'SiFirebase' },
  ],
  Languages: [
    { name: 'JavaScript', icon: 'SiJavascript' },
    { name: 'Python', icon: 'SiPython' },
    { name: 'Java', icon: 'FaJava' },
    { name: 'C', icon: 'SiC' },
    { name: 'PHP', icon: 'SiPhp' },
  ],
  Databases: [
    { name: 'MongoDB', icon: 'SiMongodb' },
    { name: 'PostgreSQL', icon: 'SiPostgresql' },
    { name: 'MySQL', icon: 'SiMysql' },
    { name: 'Firebase Firestore', icon: 'SiFirebase' },
  ],
  Tools: [
    { name: 'Git & GitHub', icon: 'SiGit' },
    { name: 'Vite', icon: 'SiVite' },
    { name: 'Vercel', icon: 'SiVercel' },
    { name: 'Figma', icon: 'SiFigma' },
    { name: 'Postman', icon: 'SiPostman' },
    { name: 'VS Code', icon: 'FaCode' },
  ],
  'Soft Skills': [
    { name: 'Team Leadership', icon: 'FaUsers' },
    { name: 'Communication', icon: 'FaComments' },
    { name: 'Problem Solving', icon: 'FaPuzzlePiece' },
    { name: 'Adaptability', icon: 'FaSyncAlt' },
  ],
}

export const projects = [
  {
    id: 'amlps',
    title: 'AMLPS — School Bus Fee Management System',
    short:
      'A production school transport management platform used by a real institution, handling student records, fee tracking and route management.',
    image: '/src/assets/images/projects/amlps-cover.jpg',
    gallery: [
      '/src/assets/images/projects/sbms.png',
      '/src/assets/images/projects/sbms1.png',
      '/src/assets/images/projects/sbms2.png',
    ],
    tech: ['React', 'Supabase', 'Tailwind CSS', 'Vercel'],
    features: [
      'Bulk student import via Excel with drag-and-drop upload',
      'Filterable, searchable student records table with edit/delete',
      'Excel export for administrative reporting',
      'Shared layout architecture using React Router Outlet pattern',
    ],
    challenges:
      'Designing a schema and UI that real, non-technical school staff could use daily without training, while keeping bulk-import operations fast and error-tolerant.',
    learnings:
      'Deepened my understanding of production data flows, environment variable security, and building layouts that scale cleanly as features are added.',
  },
  {
    id: 'image-transformation',
    title: 'AI-Based Image Transformation Platform',
    short:
      'A deep learning-based web application that transforms real-world images into Cartoon, Pencil Sketch, and Anime-style visuals using AI-powered image processing.',
    image: '/src/assets/images/projects/image-transformation-cover.png',
    gallery: [
      '/src/assets/images/projects/cartoonify1.png',
      '/src/assets/images/projects/cartoonify2.png',
      '/src/assets/images/projects/cartoonify3.png',
      '/src/assets/images/projects/cartoonify4.png',
    ],
    tech: ['Python', 'PyTorch', 'Flask', 'Computer Vision', 'MySQL'],
    features: [
      'AI-powered Cartoon, Pencil Sketch, and Anime-style image transformation',
      'Pretrained AnimeGAN model for anime-style image generation',
      'Image processing pipeline for efficient transformation and output generation',
      'Watermark controls and subscription-based features',
      'Admin dashboard for managing platform operations',
      'Interactive games integrated into the application',
    ],
    challenges:
      'Integrating deep learning-based image transformation into a web application while maintaining reasonable processing performance and preserving important visual details such as facial features and edges.',
    learnings:
      'Gained practical experience in PyTorch, computer vision, deep learning model integration, Flask-based web development, and connecting AI processing pipelines with database-driven application features.',
    github: 'https://github.com/Athulyakrishna-k1312/Image_transformation_tool',
  },
  {
    id: 'blood-bank',
    title: "Blood bank management System",
    short:
      'A web-based blood bank management system designed to digitize donor, patient, doctor and blood stock records for efficient blood bank operations.',
    image: '/src/assets/images/projects/bbms-cover.jpg',
    gallery: [
      '/src/assets/images/projects/bbms1.jpg',
      '/src/assets/images/projects/bbms2.jpg',
      '/src/assets/images/projects/bbms3.jpg',
      '/src/assets/images/projects/bbms4.jpg',


    ],
    tech: ['PHP', 'MySQL', 'JavaScript', 'SQL', 'PhpMyAdmin'],
    features: [
      'Donor, patient and doctor record management',
      'Blood stock monitoring and management',
      'Centralized storage of blood bank records',
      'Admin-focused interface for managing blood bank operations',
    ],
    challenges:
    'Designing a reliable database structure for managing interconnected donor, patient, doctor and blood stock records while keeping the system simple for administrators to use.',
    learnings:
    'Strengthened my understanding of PHP-MySQL integration, database design, SQL queries, CRUD operations, and building data-driven web applications.',
    github: 'https://github.com/Anujakunniyarath/BBMS_Project',
    demo: '',
  },
  {
    id: 'voltcloud',
    title: 'VoltCloud — Smart Energy Monitoring Platform',
    short:
      'A cloud-based smart energy monitoring platform that collects, processes, and aggregates IoT energy data into real-time and historical analytics.',
    image: '/src/assets/images/projects/voltcloud-cover.png',
    gallery: [
      '/src/assets/images/projects/voltcloud1.png',
      '/src/assets/images/projects/voltcloud2.png',
      '/src/assets/images/projects/voltcloud3.png',
      '/src/assets/images/projects/voltcloud4.png',
      '/src/assets/images/projects/voltcloud5.png',
    ],
    tech: [
      'Node.js',
      'Express.js',
      'Firebase',
      'Cloud Firestore',
      'Cron Jobs',
    ],
    features: [
      'IoT energy data collection and cloud storage using Firestore',
      'Automated aggregation of energy readings into 15-minute, daily, and monthly analytics',
      'Scheduled background processing using Node.js cron jobs',
      'Secure user authentication with Firebase Authentication',
      'RESTful backend services using Node.js and Express.js',
      'Interactive energy monitoring and data visualization',
    ],
    challenges:
      'Designing a reliable cloud data pipeline that could continuously process incoming IoT energy readings and efficiently generate multiple levels of aggregated analytics without manually processing the raw data.',
    learnings:
      'Deepened my understanding of cloud computing, Firebase Authentication and Firestore, REST API development with Node.js and Express.js, scheduled background jobs, and designing automated IoT data-processing pipelines.',
    github:'https://github.com/Athulyakrishna-k1312/voltcloud',
    demo:'',
  },
  {
    id: 'employee-salary-prediction',
    title: 'Employee Salary Prediction',
    short:
      'A machine learning-based web application that predicts employee salaries using experience, test scores, and interview performance.',
    image: '/src/assets/images/projects/salary-prediction-cover.png',
    gallery: [
      '/src/assets/images/projects/salary1.png',

    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit'],
    features: [
      'Salary prediction based on experience, test scores, and interview performance',
      'Data preprocessing and feature engineering for model-ready datasets',
      'Regression-based machine learning model for salary estimation',
      'Interactive Streamlit interface for real-time predictions',
      'Web application deployment using ngrok for external access',
    ],
    challenges:
      'Preparing the dataset and selecting relevant features to build a reliable regression model while integrating the trained model into an interactive web application.',
    learnings:
      'Gained practical experience in data preprocessing, feature engineering, regression modeling, model integration, and deploying machine learning applications with Streamlit.',
      github:'https://github.com/Athulyakrishna-k1312/Employee-salary-prediction',
      demo:'https://employee-salary-prediction-gzfqrblx2ekppf4xd2c5ff.streamlit.app/'
 },
]

export const experience = [

  {
    company: 'SSOC',
    logo: '/src/assets/images/companies/SSOC.png',
    role: 'Open Source Contributor',
    duration: '2026',
    description:
      'Contributed to SafeHaven, a crowdsourced disaster management platform, with 12 merged PRs covering UI improvements, feature development, and bug fixes. Worked on dashboards including Evacuation Safety and Disaster Coordination, while gaining hands-on experience with Git, GitHub, code reviews, merge conflicts, and collaborative open-source development.',
    skills: ['Git','GitHub','HTML','Cascading Style Sheets (CSS)','Open Source Contribution','Code Review','JavaScript'],
    certificateUrl: 'https://www.linkedin.com/in/athulyakrishna-k-a176462a6/overlay/Position/2995181562/treasury/?profileId=ACoAAEnHGjMBnSA6M2Py0IOv_qmOMV6Ndghs4o4',
    projectUrl: '',
  },
  {
    company: 'μLearn',
    logo: '/src/assets/images/companies/μLearn.png',
    role: 'Media Team Member',
    duration: '2025-2026',
    description:
      'Managed and supported μLearn’s social media presence by creating and coordinating content, promoting community activities and events, and contributing to digital outreach. Actively participated in collaborative learning and technical initiatives, developing skills in communication, teamwork, content management, and community engagement.',
    skills: ['Communication', 'Team Collaboration', 'Event Coordination', 'Time Management'],
    certificateUrl: 'https://www.linkedin.com/in/athulyakrishna-k-a176462a6/overlay/Position/2545588024/treasury/?profileId=ACoAAEnHGjMBnSA6M2Py0IOv_qmOMV6Ndghs4o4',
    projectUrl: '',
  },
  {
    company: 'Infosys Springboard',
    logo: '/src/assets/images/companies/Infosys.png',
    role: 'Python developer Intern',
    duration: '2025',
    description:
      'Built an AnimeGAN-based image stylization pipeline, exploring generative adversarial networks for style transfer on real images.',
    skills: ['Python', 'GANs', 'OpenCV', 'Deep Learning'],
    certificateUrl: 'https://www.linkedin.com/in/athulyakrishna-k-a176462a6/overlay/Position/2758896972/treasury/?profileId=ACoAAEnHGjMBnSA6M2Py0IOv_qmOMV6Ndghs4o4',
    projectUrl: 'https://github.com/Athulyakrishna-k1312/Image_transformation_tool',
  },
  {
    company: 'Edunet Foundation × IBM SkillsBuild',
    logo: '/src/assets/images/companies/edunet-ibm.png',
    role: 'AI/ML Intern',
    duration: '2025',
    description:
      'Developed an employee salary prediction pipeline using regression models, covering preprocessing, feature engineering and evaluation.',
    skills: ['Python', 'scikit-learn', 'Pandas', 'Data Preprocessing'],
    certificateUrl: 'https://www.linkedin.com/in/athulyakrishna-k-a176462a6/overlay/Position/2955736964/treasury/?profileId=ACoAAEnHGjMBnSA6M2Py0IOv_qmOMV6Ndghs4o4',
    projectUrl: 'https://github.com/Athulyakrishna-k1312/Employee-salary-prediction',
  },
  {
    company: 'QNAYDS',
    logo: '/src/assets/images/companies/qnayds.png',
    role: 'Campus Ambassador',
    duration: '2024 — 2025',
    description:
      'Promoted QNAYDS workshops and learning programs among students through campus outreach and social media. Encouraged student participation, shared workshop information, and drove registrations through my referral code. Earned incentives based on successful student referrals, gaining practical experience in marketing, communication, networking, and student engagement.',
    skills: ['Student Outreach', 'Communication', 'Networking'],
    certificateUrl: 'https://www.linkedin.com/in/athulyakrishna-k-a176462a6/overlay/Position/2499142715/treasury/?profileId=ACoAAEnHGjMBnSA6M2Py0IOv_qmOMV6Ndghs4o4',
    projectUrl: '',
  },

]

export const certificates = [
  {
    title: 'NPTEL Elite Certification',
    issuer: 'NPTEL',
    date: '2025',
    image: '/src/assets/images/certificates/nptel.jpeg',
    url: '',
  },
  {
    title: 'AnimeGAN Image Stylization — Internship Certificate',
    issuer: 'Infosys Springboard',
    date: '2025',
    image: '/src/assets/images/certificates/infosys.jpg',
    url: '',
  },
  {
    title: 'Salary Prediction Pipeline — Internship Certificate',
    issuer: 'Edunet Foundation × IBM SkillsBuild',
    date: '2025',
    image: '/src/assets/images/certificates/edunet-ibm.png',
    url: '',
  },
  {
    title: 'Social Summer of Code — Contributor',
    issuer: 'SSOC',
    date: '2025',
    image: '/src/assets/images/certificates/ssoc.jpg',
    url: '',
  },
]

export const achievements = [
  {
    title: 'NPTEL Elite',
    description: 'Earned Elite status in an NPTEL certification through consistent performance and successful completion of the course.',
    icon: 'award',
  },
  {
    title: 'Open Source Contributions',
    description: 'Made multiple merged contributions to open-source projects, including feature development, improvements, and accessibility fixes.',
    icon: 'code',
  },
  {
    title: 'Internships',
    description: 'Completed multiple structured internships focused on AI/ML, Python, and applied data science.',
    icon: 'briefcase',
  },
  {
    title: 'Leadership Positions',
    description: 'Held active team and leadership roles in student-led technical communities and initiatives.',
    icon: 'users',
  },
  {
    title: 'Community Contributions',
    description: 'Built and contributed practical technology solutions addressing real-world problems and community needs.',
    icon: 'heart',
  },
]

export const contact = {
  heading: "Let's build something",
  subheading:
    "Open to software engineering roles, internships and collaborative projects. I'll usually reply within a day.",
}
