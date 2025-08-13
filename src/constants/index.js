import {
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  // Programming Languages
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/python/python-original.svg",
    name: "Python",
    type: "Programming Language",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/cplusplus/cplusplus-original.svg",
    name: "C++",
    type: "Programming Language",
  },

  // Frameworks / Libraries
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/zustand/zustand-original.svg",
    name: "Zustand",
    type: "State Management",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/reactrouter/reactrouter-original-wordmark.svg",
    name: "React-Router-Dom",
    type: "Navigation",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/axios/axios-plain.svg",
    name: "Axios",
    type: "Requests",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/reactbootstrap/reactbootstrap-original.svg",
    name: "React-Bootstrap",
    type: "Styling",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original.svg",
    name: "Mongoose",
    type: "Models",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/babel/babel-original.svg",
    name: "Babel",
    type: "Transpiler",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/vitejs/vitejs-original.svg",
    name: "ViteJS",
    type: "Development",
  },

  // Other (Databases, Tools, Platforms, Services)
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
    name: "Firebase",
    type: "Backend/Hosting",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/supabase/supabase-original.svg",
    name: "Supabase",
    type: "BaaS",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/appwrite/appwrite-original.svg",
    name: "Appwrite",
    type: "BaaS",
  },
  {
    imageUrl:
      "https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000",
    name: "JWT",
    type: "Token",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/eslint/eslint-original.svg",
    name: "Eslint",
    type: "Code Quality",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/postman/postman-original.svg",
    name: "PostMan",
    type: "Api Testing",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/netlify/netlify-original.svg",
    name: "Netlify",
    type: "Deployment",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/vercel/vercel-original.svg",
    name: "Vercel",
    type: "Deployment",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    name: "Visual Studio Code",
    type: "IDE",
  },
  {
    imageUrl: "https://www.cursor.com/assets/images/logo.svg",
    name: "Cursor",
    type: "IDE",
  },
  {
    imageUrl:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    name: "Figma",
  },
  {
    imageUrl: "https://appexchange.salesforce.com/image_host/2b53bb52-3256-4cdb-860b-cbe896427aeb.png",
    name: "Cloudinary",
    type: "Image Hosting",
  },
  {
    imageUrl: "https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/20161105/shadcn-ui-logo-EF735EC0E5-seeklogo.com.png",
    name: "Shadcn/UI",
    type: "Frontend",
  },
  {
    imageUrl: "https://lucide.dev/logo.dark.svg",
    name: "Lucide",
    type: "Icons",
  },
  {
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodemon/nodemon-original.svg",
    name: "Nodemon",
    type: "Development",
  },
  {
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/npm/npm-original-wordmark.svg",
    name: "NPM",
    type: "Package Manager",
  },
  {
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/jest/jest-plain.svg",
    name: "Jest",
    type: "Testing",
  },
  {
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/socketio/socketio-original.svg",
    name: "Socket.io",
    type: "Real-time Communication",
  },
  {
    imageUrl: "https://nodemailer.com/img/nm_logo_200x136.png",
    name: "nodemailer",
    type: "Email",
  },
  {
    imageUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    name: "NextJS",
    type: "Frontend",
  },
  {
    imageUrl: "https://static.vecteezy.com/system/resources/previews/055/687/063/non_2x/circle-gemini-google-icon-symbol-logo-free-png.png",
    name: "Google Gemini",
    type: "LLM"
}
  
];

export const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Internee.pk",
    icon: "./internee.png",
    iconBg: "#accbe1",
    date: "Feb 2024 - Mar 2024",
    points: [
      "Refactored existing Reactjs components and applied performance optimisations, improving frontend load times by 35%.",
      "Contributed to developing client-facing web pages using Reactjs, Expressjs, and Tailwind CSS, directly supporting the company's website's deployment and implementing separate features.",
      "Collaborated in agile sprints and code reviews, gaining hands-on exposure to Git-based workflows and modern development standards.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "SaffaEnterprises",
    icon: "https://saffaenterprises.vercel.app/saffaenterprises.png",
    iconBg: "#accbe1",
    date: "Mar 2024 - Present",
    points: [
      "Designed and implemented a full-stack Invoice Management System using Next.js, Node.js, and Mongodb, increasing invoice processing efficiency by 40% through digital workflow automation.",
      "Led end-to-end development of the company’s mobile and web platforms using React Native and React.js, ensuring seamless cross-platform experience and data accessibility.",
      "Integrated dynamic form validation, PDF generation, and Stripe payment APIs, reducing administrative overhead by automating key business processes.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/0vai5",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/0vai5",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "SaffaEnterprises - Invoice Management Software",
    description:
      "Developed a web application to store company Invoices in DataBase",
    link: "https://saffaenterprises-dashboard.vercel.app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-orange",
    name: "BITDrive - A Cloud Storage Application",
    description: "Developed a web application to store files in the cloud",
    link: "https://bitdrive.vercel.app",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-blue",
    name: "DocX - Effortless Animated and Interactive documents",
    description:
      "Create Dynamic Documents with React DocX Powered by Framer Motion: Effortlessly Craft Interactive and Animated Documents!",
    link: "https://github.com/0vai5/DocX",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "SaffaEnterprises Portfolio Website",
    description:
      "SaffaEnterprises Portfolio Application showing the Products and the Works of the Company",
    link: "https://saffaenterprises.vercel.app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Blogify - A Blogging Platform",
    description: "Developed a web application to write and share blogs",
    link: "https://github.com/0vai5/Blogify",
  },
  {
    iconUrl: "https://w7.pngwing.com/pngs/150/625/png-transparent-artificial-intelligence-ai-chip-computer-technology-artificial-intelligence-icon.png",
    theme: "btn-back-yellow",
    name: "KamkaAI - AI-Powered Documentation",
    description: "Kamka AI writes your README for you, intelligently analyzing your code, dependencies, and intent to produce developer-friendly documentation that speaks clearly.",
    link: "https://kamka-ai.vercel.app",
  },
];
