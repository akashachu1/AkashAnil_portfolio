export const HERO = {
  name: "Akash Anil",
  role: "MERN Stack Developer",
  description: "Passionate MERN Stack Developer with hands-on experience in building dynamic and responsive web applications. Proficient in React.js, Node.js, Express.js, and MongoDB."
};

export const ABOUT = {
  summary: "Passionate MERN Stack Developer with hands-on experience in building dynamic and responsive web applications. Proficient in React.js, Node.js, Express.js, and MongoDB. Adept at creating seamless user experiences, developing full-stack solutions, and working collaboratively in team environments. Continuously learning and evolving with modern technologies.",
  education: [
    {
      degree: "B.Tech in Aeronautical Engineering",
      school: "Mount Zion College of Engineering, Pathanamthitta",
      year: "2019 – 2023",
      grade: "CGPA: 7.22 (First Class)"
    },
    {
      degree: "Higher Secondary (Biology Science)",
      school: "GHSS Elampa School",
      year: "2017 – 2019"
    }
  ],
  internships: [
    {
      role: "MERN Stack Developer",
      company: "Srishti Campus, Technopark Kazhakootam",
      duration: "6 Months",
      details: [
        "Developed full-stack applications with React and Node.js",
        "Gained experience with Git, API integrations, and responsive design",
        "Worked on real-time industry projects"
      ]
    },
    {
      role: "UAV Development & Testing",
      company: "Jet Aerospace Aviation Research Centre, Palakkad",
      details: [
        "Successfully completed drone (UAV) testing",
        "Collaborated with team to deliver demo ahead of schedule"
      ]
    }
  ],
  experience: [
    {
      role: "REACT Developer Trainee",
      company: "Srishti Innovative Pvt Ltd",
      duration: "July 2025 – present",
      details: [
        "Involve in live project as designer and developer"
      ]
    }
  ]
};

export const SKILLS = [
  { category: "Frontend", skills: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap", "Material-UI", "React Bits"] },
  { category: "Backend", skills: ["Node.js", "Express.js", "RESTful APIs"] },
  { category: "Database", skills: ["MongoDB"] },
  { category: "Version Control", skills: ["Git", "GitHub"] },
  { category: "Others", skills: ["AutoCAD", "SolidWorks", "Catia", "Ansys", "MS Office"] },
  { category: "Soft Skills", skills: ["Effective Communication", "Team Collaboration", "Adaptability", "Critical Thinking"] }
];

export const PROJECTS = [
  {
    id: 7,
    title: "Kalisto",
    description: "Frontend built with React, deployed on Vercel.",
    tech: ["React", "Vercel"],
    image: "/kalisto.png",
    link: "https://kallisto-eight.vercel.app/",
    gallery: [
      "/kalisto.png",
      "/kalisto-1.png",
      "/kalisto-2.png",
      "/kalisto-3.png"
    ],
    features: [
      "Responsive Frontend Design",
      "Deployed on Vercel",
      "Modern UI/UX"
    ]
  },
  {
    id: 3,
    title: "HRMS (Human Resource Management System)",
    description: "A complete HR solution for employee management, attendance, and payroll.",
    tech: ["MERN Stack", "Redux", "JWT"],
    image: "/hrms-dashboard.png",
    gallery: [
      "/hrms-login.png",
      "/hrms-dashboard.png",
      "/hrms-employees.png",
      "/hrms-leave.png",
      "/hrms-payroll.png"
    ],
    features: [
      "Employee Database Management",
      "Leave & Attendance Tracking",
      "Payroll Processing",
      "Role-based Access Control"
    ],
    workflow: [
      { step: "Login & Authentication", description: "Secure entry point with separate dashboards for Admin and Employee roles." },
      { step: "Administrative Dashboard", description: "Comprehensive view of 'Time at Work', pending actions, and quick launch shortcuts for management tasks." },
      { step: "Employee Management", description: "Unified interface for adding employees, viewing data, and managing organizational roles." },
      { step: "Leave Administration", description: "Simplified workflow for requesting leave, monitoring team attendance, and reviewing leave history." },
      { step: "Payroll Allocation", description: "Category-wise salary allocation and employee-level payroll management for precise financial tracking." }
    ]
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "A comprehensive full-stack e-commerce solution featuring a product catalog, secure payments, and a powerful admin dashboard.",
    tech: ["React.js", "Node.js", "Stripe", "MongoDB"],
    image: "/ecommerce.png",
    gallery: [
      "/ecommerce.png",
      "/ecommerce-products.png",
      "/ecommerce-dashboard.png",
      "/ecommerce-orders.png",
      "/ecommerce-analytics.png"
    ],
    features: [
      "Product Catalog & Search",
      "Secure Payment Gateway",
      "User Authentication & Orders",
      "Admin Dashboard for Products"
    ],
    workflow: [
      { step: "Product Discovery", description: "Browsing through a dynamic catalog with advanced search and category filtering." },
      { step: "Shopping Experience", description: "Seamless cart management and a multi-step checkout process for user convenience." },
      { step: "Secure Transactions", description: "Integration with Stripe for industry-standard secure payment processing." },
      { step: "Order Tracking", description: "Real-time updates on order status and historical data for users." },
      { step: "Admin Management", description: "Full control over inventory, product listings, and detailed sales analytics via the dashboard." }
    ]
  },
  {
    id: 2,
    title: "Whatsapp Clone",
    description: "A real-time messaging application clone with secure authentication and group chat capabilities.",
    tech: ["Firebase", "MongoDB", "Express.js", "React.js"],
    image: "/whatsapp.png",
    gallery: [
      "/whatsapp.png",
      "/whatsapp-1.png",
      "/whatsapp-2.png"
    ],
    features: [
      "Authentication: Firebase for secure sign-ins.",
      "Group Chat: Create and manage multiple participants.",
      "Backend: MongoDB for user and message storage.",
      "Integration: Seamless frontend-backend with Express.js."
    ],
    workflow: [
      { step: "User Authentication", description: "Secure login system using Firebase to authenticate users and manage sessions." },
      { step: "Contact Discovery", description: "Search and connect with other users via their contact information/UID." },
      { step: "Real-time Messaging", description: "Instant message delivery and receipt status updates using Socket.io/Realtime Database." },
      { step: "Profile Management", description: "Customize user profile, status, and profile picture for personal identity." },
      { step: "Group Conversations", description: "Create and manage multiple group chats with real-time participation." }
    ]
  },
  {
    id: 1,
    title: "Library Management System",
    description: "A comprehensive digital solution for managing library operations, book inventory, and member transactions.",
    tech: ["MongoDB", "Express.js", "Node.js", "React.js"],
    image: "/library.png",
    gallery: [
      "/library.png",
      "/library-1.png",
      "/library-2.png"
    ],
    features: [
      "CRUD Operations: Add, update, delete book records.",
      "Issuing & Returning: Real-time inventory updates.",
      "Database: MongoDB for data integrity.",
      "APIs: RESTful APIs built with Express.js."
    ],
    workflow: [
      { step: "Authentication Page", description: "Secure login interface for librarians and members to access the system." },
      { step: "Book Catalog Page", description: "Main dashboard displaying the entire collection with multi-criteria search filters." },
      { step: "Issue/Return Module", description: "Dedicated page for handling book transactions and managing real-time inventory." },
      { step: "Profile & History", description: "Member-specific page showing borrowing history, due dates, and fine tracking." },
      { step: "Admin Control Panel", description: "Backend interface for adding new books, managing categories, and member registration." }
    ]
  },
  {
    id: 5,
    title: "Task Management App",
    description: "A collaborative productivity tool designed for teams to organize, track, and complete projects efficiently.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    image: "/task.png",
    gallery: [
      "/task.png",
      "/task-1.png",
      "/task-2.png"
    ],
    features: [
      "Kanban Board Interface",
      "Real-time Updates",
      "Team Collaboration Tools",
      "Progress Tracking"
    ],
    workflow: [
      { step: "Project Dashboard", description: "Central overview page showing all active projects and team progress at a glance." },
      { step: "Kanban Board Page", description: "Interactive page for moving tasks across columns (To-Do, In Progress, Done)." },
      { step: "Task Detail View", description: "Deep-dive page for individual tasks with subtasks, comments, and attachments." },
      { step: "Team Workspace", description: "Collaboration area for managing team members, roles, and communication." },
      { step: "Report & Analytics", description: "Data visualization page showing project velocity and productivity metrics." }
    ]
  },
  {
    id: 6,
    title: "Numerical Analysis On Effusion Cooling",
    description: "Comparison of Air and Different Aerogel as Coolant (B.Tech Capstone)",
    tech: ["Ansys Workbench", "Solidworks", "Catia"],
    image: "/analysis.png",
    gallery: [
      "/analysis.png",
      "/analysis-1.png",
      "/analysis-2.png"
    ],
    features: [
      "Analysis using Ansys",
      "Modeling with Solidworks/Catia",
      "Aerogel coolant research"
    ]
  }
];

export const CONTACT = {
  email: "akashanil344@gmail.com",
  phone: "+917306482917",
  address: "Attingal Trivandrum",
  linkedin: "https://www.linkedin.com/in/akash-anil-", 
  github: "https://github.com/akashachu1"
};
