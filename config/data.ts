import DevIcons from "./devicons";
import images from "./images";

export const data = {
  navbar: [
    {
      title: "Home",
      href: "/",
      subMenu: [],
    },
    {
      title: "About Us",
      href: "/about",
      subMenu: [],
    },
    {
      title: "Services",
      href: "/service",
      subMenu: [
        {
          title: "SOFTWARE DEVELOPMENT",
          href: "/service",
          query: "software-development",
          subLinks: [],
        },
        {
          title: "IT RECRUITING & STAFFING",
          href: "/service",
          query: "recruiting-staffing",
          subLinks: [],
        },
        {
          title: "SOFTWARE QUALITY ASSURANCE",
          href: "/service",
          query: "quality-assurance",
          subLinks: [],
        },
        {
          title: "AI & ML BASED SOLUTIONS",
          href: "/service",
          query: "ai-solutions",
          subLinks: [],
        },
        {
          title: "IT Maintenance & Support",
          href: "/service",
          query: "maintenance-support",
          subLinks: [],
        },
        {
          title: "UI/UX Solutions",
          href: "/service",
          query: "ui-ux",
          subLinks: [],
        },
      ],
    },
    // {
    //   title: "Projects",
    //   href: "/projects",
    //   subMenu: [],
    // },
    // {
    //   title: "Portfolio",
    //   href: "/portfolio",
    //   subMenu: [],
    // },
    {
      title: "Career",
      href: "/career",
      subMenu: [],
    },
  ],
  services: [
    {
      title: "Software Development",
      image: images.service1,
      icon: images.serviceLogo1,
      description:
        "We develop future-proof products and platforms through top-class engineering and solutions",
      href: "/service",
      query: "software-development",
    },
    {
      title: "IT Recruiting & Staffing",
      image: images.service2,
      icon: images.serviceLogo6,
      description:
        "We have the finest tech minds and skilled professionals tailored to meet your specific staffing needs",
      href: "/service",
      query: "recruiting-staffing",
    },
    {
      title: "Software Quality Assurance Service",
      image: images.service3,
      icon: images.serviceLogo5,
      description:
        "We elevate software quality and ensure your applications’ integrity with our meticulous precision testing",
      href: "/service",
      query: "quality-assurance",
    },
    {
      title: "AI Based Solutions",
      image: images.service5,
      icon: images.serviceLogo4,
      description:
        "Our cutting-edge AI solutions redefine what’s possible, from automation, predictive analytics to driving innovation in products & services",
      href: "/service",
      query: "ai-solutions",
    },
    {
      title: "IT Maintenance & Support",
      image: images.service4,
      icon: images.serviceLogo3,
      description:
        "We are your IT lifeline, here to help you navigate IT challenges with ease",
      href: "/service",
      query: "maintenance-support",
    },
    {
      title: "UI/UX Solution",
      image: images.service6,
      icon: images.serviceLogo2,
      description:
        "We elevate user engagement and satisfaction with exceptionally captivating digital experiences and visual narratives",
      href: "/service",
      query: "ui-ux",
    },
  ],
  summary: [
    {
      title: "Projects",
      number: 100,
      icon: images.summary1,
    },
    {
      title: "Products",
      number: 40,
      icon: images.summary2,
    },
    {
      title: "Experts",
      number: 300,
      icon: images.summary3,
    },
    {
      title: "Countries",
      number: 25,
      icon: images.summary4,
    },
    {
      title: "Clients",
      number: 80,
      icon: images.summary5,
    },
    {
      title: "Years Experienced",
      number: 11,
      icon: images.summary6,
    },
  ],
  industries: [
    {
      title: "E-Commerce",
      icon: images.industry1,
    },
    {
      title: "Education",
      icon: images.industry2,
    },
    {
      title: "Retail",
      icon: images.industry3,
    },
    {
      title: "Real Estate",
      icon: images.industry4,
    },
    {
      title: "Telecom",
      icon: images.industry5,
    },
    {
      title: "Fintech",
      icon: images.industry6,
    },
    {
      title: "Food",
      icon: images.industry7,
    },
    {
      title: "Banking",
      icon: images.industry8,
    },
    {
      title: "Health",
      icon: images.industry9,
    },
    {
      title: "Travel",
      icon: images.industry10,
    },
    {
      title: "Entertainment",
      icon: images.industry11,
    },
    {
      title: "Startup",
      icon: images.industry12,
    },
    {
      title: "Non-Profit",
      icon: images.industry13,
    },
    {
      title: "Hospitality",
      icon: images.industry14,
    },
    {
      title: "Public Sector",
      icon: images.industry15,
    },
    {
      title: "Automotive",
      icon: images.industry16,
    },
    {
      title: "Software",
      icon: images.industry17,
    },
    {
      title: "Miscellaneous",
      icon: images.industry18,
    },
  ],

  brands: [
    {
      group: [
        {
          title: "Google",
          logo: images.brand1,
        },
        {
          title: "Apple",
          logo: images.brand2,
        },
        {
          title: "Google",
          logo: images.brand1,
        },
        {
          title: "Apple",
          logo: images.brand2,
        },
      ],
    },
    {
      group: [
        {
          title: "Google",
          logo: images.brand1,
        },
        {
          title: "Apple",
          logo: images.brand2,
        },
        {
          title: "Google",
          logo: images.brand1,
        },
        {
          title: "Apple",
          logo: images.brand2,
        },
      ],
    },
    {
      group: [
        {
          title: "Google",
          logo: images.brand1,
        },
        {
          title: "Apple",
          logo: images.brand2,
        },
        {
          title: "Google",
          logo: images.brand1,
        },
        {
          title: "Apple",
          logo: images.brand2,
        },
      ],
    },
    {
      group: [
        {
          title: "Google",
          logo: images.brand1,
        },
        {
          title: "Apple",
          logo: images.brand2,
        },
        {
          title: "Google",
          logo: images.brand1,
        },
        {
          title: "Apple",
          logo: images.brand2,
        },
      ],
    },
  ],

  footer: {
    address1: "26 Broadway, Suite 934, New York, New York 10004, United States",
    address2: "B-25, Mannan Plaza, 4th Floor Khilkhet, Dhaka-1229, Bangladesh",
    contact_number: "(212) 884-8837",
    email1: "HR@xfosoft.com",
    email2: "connect@Xfosoft.tech",
    facebook: "https://www.facebook.com",
    pinterest: "https://www.pinterest.com",
    linkedin: "https://www.linkedin.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
    youtube: "https://www.youtube.com",
    useful_links: [
      {
        title: "About Us",
        href: "/about",
        query: "",
      },
      {
        title: "Terms of Use",
        href: "/policy-condition",
        query: "terms-condition",
      },
      {
        title: "Career - We are Hiring",
        href: "/career",
        query: "",
      },
      {
        title: "Privacy Policy",
        href: "/policy-condition",
        query: "privacy-policy",
      },
      // {
      //   title: "Blog",
      //   href: "/blog",
      //   query: "",
      // },
    ],
    services: [
      {
        title: "Software Development",
        href: "/service",
        query: "software-development",
      },
      {
        title: "Recruiting & Staffing",
        href: "/service",
        query: "recruiting-staffing",
      },
      {
        title: "Quality Assurance",
        href: "/service",
        query: "quality-assurance",
      },
      {
        title: "AI Based Solutions",
        href: "/service",
        query: "ai-solutions",
      },
      {
        title: "Maintenance & Support",
        href: "/service",
        query: "maintenance-support",
      },
      {
        title: "UI/UX Solutions",
        href: "/service",
        query: "ui-ux",
      },
    ],
    support: [
      {
        title: "Contact Us",
        href: "/contact-us",
      },
      {
        title: "FAQ",
        href: "/faq",
      },
    ],
  },

  aboutSummary: [
    {
      title: "Our Mission",
      description:
        "Our mission is to catalyze your success. We specialize in dynamic software and web development, alongside strategic recruitment and staffing solutions, all meticulously tailored to empower your growth. Your success is at the heart of our mission, and we are committed to being your dedicated partner on the path to excellence.",
      icon: images.mission,
    },
    {
      title: "Our Core Values",
      description:
        "Our core values are the pillars of our identity. We ardently pursue excellence, infuse innovation & creativity into every endeavor, and uphold unwavering integrity. Collaboration is our strength, and our client-centric approach fuels exceptional results. With a commitment to continuous learning, community engagement, agility, and a passion for excellence, we define success together.",
      icon: images.value,
    },
    {
      title: "Our Vision",
      description:
        "Our vision at Xfosoft is to be a global leader at the intersection of technology and talent. We aim to revolutionize industries through innovative software and web development solutions while shaping careers and fostering a vibrant, inclusive, and dynamic community of professionals. Our vision is to continually push boundaries, exceed expectations, and be the driving force behind transformative change in the tech and staffing landscape.",
      icon: images.goal,
    },
  ],

  whoWeAre: {
    description: `At Xfosoft IT Solutions Inc, we’re the champions of charting our course. We are a unique development company seamlessly merging creativity with feasibility. While we offer competitively priced development projects, we never compromise on quality. Our hallmark is delivering on our promises.

As a top-tier software development company, we understand that our work doesn't end with project delivery. Our mission is to create success stories by adding substantial value to brands and helping them shine brightly in the tech sphere.

Our purpose is to fuel your company's exemplary growth through our strategic and comprehensive solutions. Whether you're eager to collaborate with us or have inquiries, please don't hesitate to reach out. We're excited to assist you in achieving remarkable success with our dynamic solutions, including high-quality Recruitment outsourcing, that meet your business needs.`,
    images: [images.team1, images.team2, images.team3, images.team4],
  },

  visionaries: [
    {
      title: "Chief Product & Technology Officer ",
      name: "Tanvir Ahmed",
      description:
        "At XFOSOFT, we lead the charge in fostering innovation across software development, recruitment, and consultancy. Our utmost dedication to excellence serves as the driving force behind technological advancement and our ability to seamlessly connect you with top-tier talent. We stand as your trusted partner in the ever-evolving tech and staffing landscape, wholeheartedly committed to propelling your success to greater heights. With a proven track record of innovation and a relentless pursuit of creative bounds, we are here to guide you on your journey towards progress.",
      image: images.visionary3,
    },
    {
      title: "Chief Operating Officer",
      name: "Tarique Hassan",
      description:
        "As the Chief Operating Officer, I am your trusted collaborator in achieving success. With a powerful fusion of software prowess, talent solutions, and expert consultancy, we pave the way for your company's boundless growth and prosperity. Our mission is to understand your unique needs, envision innovative solutions, and create value that sets you on top of the map. Together, let’s embark on a journey to unlock your company's full potential and reach new heights of achievement.",
      image: images.visionary2,
    },
    {
      title: "Chief Revenue & Financial Officer",
      name: "Mohammad Ullah",
      description:
        "As Chief Revenue and Financial Officer, my goal is to not just meet but exceed your financial objectives. We've harnessed the power of software excellence, strategic talent acquisition, and expert consultancy to consistently propel us toward remarkable milestones. This is a testament to our commitment to your success and our proven track record in delivering tangible financial results that work best for your business.",
      image: images.visionary1,
    },
  ],

  aboutHeader: {
    image: images.about,
    title: ["KNOW", "US"],
    description1:
      "Xfosoft IT Solutions Inc. is a maestro in website design, development, and comprehensive IT solutions serving the USA and clients worldwide. Our unwavering dedication to excellence propels businesses to success through top-tier IT services.",

    description2:
      "Since our inception in 2014 in New York, our team of 50+ skilled professionals have been crafting robust web presences. Our strength lies in designing visually captivating, expert solutions tailored to your business needs. We collaborate with local and global clients, offering strategically sound design expertise across diverse domains.",
  },

  serviceHeader: {
    image: images.service,
    description1:
      "At Xfosoft, Digital IT Solutions meet cutting-edge technology to transform your business. We develop top of the line applications and solutions that meet market needs, empower brands, and encourage growth.",

    description2:
      "With our diverse team of experts, we strive to deliver world-class solutions tailored to fit your requirements. Get in touch with us to find out how we can help your business achieve newer heights.",
    title: ["DIGITAL + CLOUD + AI "],
  },

  contactUs: {
    image: images.contactUs,
    description1:
      "Innovate with Confidence. Use our top-tier expertise and explore the uncharted realms of innovation. Get in touch with us to find out how we can help you transform your business and reach newer heights. ",

    description2: "",
    title: ["CONTACT", "US"],
  },
  contactInfo: {
    phone1: "(212) 884-8837",
    phone2: "+8801618871514",
    email1: "connect@Xfosoft.com",
    email2: "HR@xfosoft.com",
    address: "26 Broadway, Suite 934, New York, New York 10004, United States",
  },
  contactForm: {
    services: [
      "Software Development",
      "IT Recruiting & Staffing",
      "Software Quality Assurance Service",
      "AI Based Solutions",
      "IT Maintenance & Support",
      "UI/UX Solution",
      "Mobile Development",
      "Custom Software Development",
      "Systems Integration",
      "Part Time/Contractual",
      "Full Time/Project",
      "API Testing",
      "Performance Testing",
      "Selenium Testing",
      "Security Testing",
      "Generative AI Development",
      "Custom AI Integration",
      "AI Powered Chatbot",
      "HR & E-commerce Solutions",
      "Machine Learning Model Development",
      "Deep Learning Model Development",
      "Natural Language Processing",
      "Software Lifecycle Maintenance",
      "Management Support",
      "DevOps",
      "Interface Designs",
      "Visuals / Wireframing",
      "Experience Design",
    ],
  },
  WCU: [
    {
      title: "Innovation",
      description:
        "We believe in pushing the boundaries of what is possible. We always look into dynamic technologies and explore new frontiers in the field.",
      image: images.wcu1,
      order: "first",
    },
    {
      title: "Collaboration",
      description:
        "We foster collaboration in everything we do. Our team's combined effort brings out the absolute best result-driven solution to any given problem.",
      image: images.wcu2,
      order: "first",
    },
    {
      title: "Dedication",
      description:
        "We strive for excellence and integrity in all aspects of our work. We use every resource at our disposal to ensure results that elevate businesses to newer heights.",
      image: images.wcu3,
      order: "first",
    },
  ],

  softwareDevelopemnt: {
    title: ["Software", "Development"],
    description:
      "We develop future-proof products and platforms through top-class engineering and solutions tailored to meet the requirements of different organizations across multiple industries.",
    subServices: [
      {
        title: "Mobile Development",
        description1:
          "From initial concept, app design to development and deployment we have got you covered. We develop custom applications and integrate existing business processes into your mobile app. We deliver heavy-duty, collaborative, performance-centric, and revenue-generating mobile applications to diverse businesses across different industry verticals.",
        description2:
          "Our user-centric solutions aim to solve business specific problems while reducing costs, maximizing efficiency, and increasing profitability.",
        image: images.sd2,
      },
      {
        title: "Web Development",
        description1:
          "We design, develop, and deliver personalized websites through intuitive planning, customer-centric approach, and latest technologies. We never approach a problem with a one-size-fits-all solution, instead we focus on individual business requirements and provide high-functioning, lead-generating, and responsive web app solutions.",
        description2:
          "Our versatile domain experience and expertise in different technologies enable us to deliver cost-effective, scalable, brand-oriented, and future-ready web development services.",
        image: images.sd5,
      },
      {
        title: "Custom Software Development",
        description1:
          "We bring together frontend, backend, full stack development, and database technologies to deliver end-to-end user-centric custom applications to businesses of all size. We ensure seamless integration, smooth user experience, maximum engagement, and rich functionalities across all layers of our custom software applications.",
        description2:
          "Our applications come with dynamic integrations and functions, from payment gateways, attractive & interactive UI, and wallet management to social media integration, chat services, and real-time tracking.",
        image: images.sd3,
      },
      {
        title: "Systems Integration",
        description1:
          "From API, Database, Legacy re-platforming to Accounting, ERP, and Payment Gateway, we provide a wide variety of backend integration services to help businesses connect their systems and data. Whether it be to connect the API to power applications, or to connect accounting systems to databases and business applications, we ensure seamless integrations across multiple channels. ",
        description2:
          "Our integration services provide a detailed pathway from evaluation and architecture to development and management for businesses of all size across different industries.",
        image: images.sd4,
      },
    ],
    languages: [
      DevIcons.apache,
      DevIcons.apachekafka,
      DevIcons.azure,
      DevIcons.bootstrap,
      DevIcons.bitbucket,
      DevIcons.cakephp,
      DevIcons.chrome,
      DevIcons.codepen,
      DevIcons.css3,
      DevIcons.django,
      DevIcons.dotnet,
      DevIcons.figma,
      DevIcons.flask,
      DevIcons.firebase,
      DevIcons.firefox,
      DevIcons.facebook,
      DevIcons.git,
      DevIcons.github,
      DevIcons.gitlab,
      DevIcons.html5,
      DevIcons.javascript,
      DevIcons.materialui,
      DevIcons.nestjs,
      DevIcons.redis,
      DevIcons.postgresql,
      DevIcons.nextjs,
      DevIcons.typescript,
      DevIcons.spring,
      DevIcons.wordpress,
      DevIcons.csharp,
      DevIcons.flutter,
      DevIcons.nuxtjs,
      DevIcons.phpstorm,
      DevIcons.rust,
    ],
  },
  itRecuiting: {
    title: ["IT Recruiting &", "Staffing"],
    description:
      "We have the finest tech minds and skilled professionals tailored to meet your specific staffing needs. Our cohesive partnerships bring results for any individual or organization, one hire at a time.",
    subServices: [
      {
        title: "Short-term Contract",
        description1:
          "We believe that top talents are the key to any businesses' success. We understand that for any project to be successful, it's vital to expand cross-functional teams with people who have very niche expertise.",
        description2:
          "To meet that end, we provide top-of-the-line IT experts, on short-term contracts, to bridge the gap between potential and performance, all while keeping in mind the needs and demands of different businesses.",
        image: images.recuting1,
      },
      {
        title: "Long-term Contract",
        description1:
          "We handpick top IT experts with a lot of care. We are always committed to finding the right fit for our clients, whether it be contractual or full-time employees for a company, vacancy, or project of any size.",
        description2:
          "We help navigate the challenges to IT staffing and provide the most ideal talents, on long-term contracts, to different businesses. We cross-check their background, stability, expertise, and other related information to match them with our clients.",
        image: images.recuting2,
      },
      {
        title: "Full Time",
        description1:
          "We believe that people are a resource and always a good investment. We are always looking to provide top talents and certified IT experts to help businesses update their team, improve the pace of their projects, and speed up the entire development process for on-time delivery.",
        description2:
          "We provide full time staffing solutions to different businesses to support and enhance their technology initiatives while maintaining specific business requirements.",
        image: images.recuting3,
      },
    ],
    languages: [
      DevIcons.shotgrid,
      DevIcons.salesforce,
      DevIcons.processing,
      DevIcons.perl,
      DevIcons.opera,
      DevIcons.nixos,
      DevIcons.networkx,
      DevIcons.linux,
      DevIcons.linkedin,
      DevIcons.postman,
      DevIcons.qtest,
      DevIcons.latex,
      DevIcons.labview,
      DevIcons.knockout,
      DevIcons.hugo,
      DevIcons.google,
      DevIcons.googlecloud,
      DevIcons.firefox,
      DevIcons.chrome,
      DevIcons.crystal,
      DevIcons.debian,
    ],
  },
  qualityAssurance: {
    title: ["Software Quality ", "Assurance"],
    description:
      "We elevate software quality and ensure your applications’ integrity with our meticulous precision testing. We ensure the reliability and performance of your software with our comprehensive testing and assurance service.",
    subServices: [
      {
        title: "API Testing",
        description1:
          "We believe that a successful product is the cornerstone of any business’ reputation and the foundation of a customer’s brand loyalty. Which is why, we aim to bulletproof your code by leveraging different technologies and API testing methods to identify and fix potential defects in web, mobile, and enterprise applications.",
        description2:
          "We design our testing methods to efficiently deliver robust results that reduce the costs related to software bugs.",
        image: images.quality1,
      },
      {
        title: "Performance Testing",
        description1:
          "We provide software testing automation service to measure the scalability, reliability, and performance of different business applications. We closely monitor their ability to handle high traffic, workload, speed, and resource usage to eliminate any performance bottlenecks.",
        description2:
          "We test software applications using a variety of tools to determine responsiveness and stability.",
        image: images.quality2,
      },
      {
        title: "Automation Testing",
        description1:
          "We provide QA automation testing services to ensure functionality, stability, and personalized user experience. We use multi-platform and regression testing with increased coverage to accurately, consistently, and seamlessly maintain the integrity of the application regardless of the platform or device in-use.",
        description2:
          "We actively work on automation testing analytics to improve user experience and functionality.",
        image: images.quality3,
      },
      {
        title: " Security Testing",
        description1:
          "We use our security testing services to detect and mitigate malware in your software applications. We implement static or dynamic testing, and application security assessments to improve data infrastructure and safety of applications. We integrate CI & CD in the development lifecycle to reduce downtime errors and increase security.",
        description2:
          "We ensure that all applications are given structured testing throughout their lifecycle, from analysis and planning to development and support.",
        image: images.quality4,
      },
    ],
    languages: [
      DevIcons.express,
      DevIcons.foundation,
      DevIcons.gcc,
      DevIcons.gentoo,
      DevIcons.gitlab,
      DevIcons.google,
      DevIcons.go,
      DevIcons.grafana,
      DevIcons.groovy,
      DevIcons.haskell,
      DevIcons.gulp,
      DevIcons.java,
      DevIcons.jeet,
      DevIcons.meteor,
      DevIcons.modx,
      DevIcons.ocaml,
      DevIcons.pandas,
      DevIcons.putty,
      DevIcons.salesforce,
      DevIcons.sequelize,
      DevIcons.microsoftsqlserver,
      DevIcons.unix,
      DevIcons.visualstudio,
      DevIcons.vscode,
      DevIcons.windows8,
      DevIcons.webstorm,
      DevIcons.selenium,
    ],
  },
  aiSolutions: {
    title: ["AI & ML Based ", "Solutions"],
    description:
      "Our cutting-edge AI & ML solutions redefine what’s possible, from automation, predictive analytics to driving innovation in products & services. We harness the power of AI & ML to transform different businesses across multiple industry verticals.",
    subServices: [
      {
        title: "Generative AI Development",
        description1:
          "We strongly believe that AI managed services are the key to the future. Which is why, we assist businesses with high-functioning generative AI development services that solve complex problems, generate unique content, and customize user experience, all while meeting business specific needs.",
        description2:
          "We speed-up product development through routine tasks automation. Our generative AI model unlocks creativity and innovation through unique contents, interactive arts & designs.",
        image: images.ai1,
      },
      {
        title: "Custom AI Integration",
        description1:
          "We integrate the power of AI into business processes by connecting AI adeptness into existing software systems. We develop custom APIs for seamless consumption of personalized AI services. We aim to meet the strategic requirements of businesses of all sizes though our custom AI solutions.",
        description2:
          "We gather data for sequential analysis & assessment, validation, and transformation to enhance the overall user experience and load-time.",
        image: images.ai2,
      },
      {
        title: "AI Powered Chatbot",
        description1:
          "We deliver end-to-end AI chatbot development services to ease communication, boost customer satisfaction, maximize retention, and accelerate business growth. With our AI aided voice assistants and chatbots, businesses increase customer interaction, sales, and enhance overall customer experience.",
        description2:
          "We leverage advanced AI technologies, such as machine learning and deep learning, to consecutively develop and update intelligent AI chatbots that cater to different businesses.",
        image: images.ai3,
      },
      {
        title: "HR & E-commerce Solutions",
        description1:
          "We deliver automated workforce management systems to reduce unwanted bottlenecks and increase efficiency and performance. We provide B2B, B2C, D2C solutions to businesses across diversified sectors.",
        description2:
          "We actively work on eCommerce automations, omnichannel experiences, payment gateways, and other automated processes.",
        image: images.ai4,
      },
      {
        title: "Machine Learning Model",
        description1:
          "We utilize the latest Machine Learning Development methodologies to leverage advanced algorithms, predictive analytics, and pattern identification. We help businesses create innovative models that automate processes, improve operations, stimulate efficient intelligence-based decisions, and ultimately, drive growth.",
        description2:
          "We streamline the process of building, training, deploying, and managing bespoke learning models using cutting-edge technologies and industry-based practices to deliver world-class results.",
        image: images.ai5,
      },
      {
        title: "Deep Learning Model",
        description1:
          "We strongly believe that Deep Learning can harness the power of AI and help craft transformative AI based solutions. Which is why, our team of expert data scientists and engineers analyzes vast streams of data, recognize patterns, and provide informed and intelligent decisions to different businesses.",
        description2:
          "We develop Deep Learning Model using complex algorithms and large data sets to enable accurate predictions, efficient data analysis, personalized suggestions, fraud detection, and predictive maintenance.",
        image: images.ai6,
      },
      {
        title: "Natural Language Processing",
        description1:
          "We develop personalized NLP solutions to analyze and understand human language for automating tasks and processing unstructured data streams. From ideation and design to development and deployment, we provide end-to-end NLP services to enhance user engagement and overall communication.",
        description2:
          "We create innovative & multi-lingual applications that understand diverse languages, contextual subtleties, and sector-specific jargons for different businesses.",
        image: images.ai7,
      },
    ],
    languages: [
      DevIcons.opencv,
      DevIcons.yii,
      DevIcons.anaconda,
      DevIcons.packer,
      DevIcons.prometheus,
      DevIcons.argocd,
      DevIcons.typo3,
      DevIcons.ubuntu,
      DevIcons.thealgorithms,
      DevIcons.towergit,
      DevIcons.terraform,
      DevIcons.tensorflow,
      DevIcons.ssh,
      DevIcons.sequelize,
      DevIcons.selenium,
      DevIcons.sdl,
      DevIcons.qt,
      DevIcons.pytorch,
      DevIcons.pytest,
      DevIcons.python,
      DevIcons.opengl,
      DevIcons.matlab,
      DevIcons.jupyter,
      DevIcons.git,
      DevIcons.codecov,
    ],
  },
  maintenanceSupport: {
    title: ["IT Maintenance &", " Support"],
    description:
      "We are your IT lifeline, here to help you navigate IT challenges with ease. We keep your systems running flawlessly with our seamless IT maintenance and support service. We keep you ahead in the market by resolving issues swiftly, preventing downtime, and ensuring uninterrupted productivity.",
    subServices: [
      {
        title: "Software Lifecycle Maintenance",
        description1:
          "We stay by our clients throughout the entire lifecycle of a software product, from ideation and design to development and deployment. We actively support, update, and maintain software even after deployment to ensure efficiency and customer satisfaction.",
        description2:
          "We continuously provide product monitoring, support, and lifecycle maintenance service to businesses across diversified industries to ensure they are always fueled and ready.",
        image: images.ms1,
      },
      {
        title: "DevOps",
        description1:
          "We provide end-to-end qualitative service across all channels. We actively work on server and pipeline management with automated testing and design tools. We manage cloud hosting platforms where applications are deployed and continuously provision, monitor, and optimize their performance.",
        description2:
          "Our engineers don't just code; they also monitor infrastructure-related tasks, health of the software applications, infrastructure components, and servers.",
        image: images.ms2,
      },
      {
        title: "Management Support",
        description1:
          "We truly believe that the most important part of successful product development, consultation, and management is a continual thrust on quality, support, and management. From ideation to support, we always prioritize the operational effectiveness of different businesses.",
        description2:
          "We intend to be a partner to our clients and not a vendor. We believe that applications need continuous support and maintenance, even after projects end, to continue functioning as required.",
        image: images.ms3,
      },
    ],
    languages: [
      DevIcons.apachekafka,
      DevIcons.appwrite,
      DevIcons.bitbucket,
      DevIcons.behance,
      DevIcons.bulma,
      DevIcons.circleci,
      DevIcons.ceylon,
      DevIcons.composer,
      DevIcons.docker,
      DevIcons.doctrine,
      DevIcons.digitalocean,
      DevIcons.eslint,
      DevIcons.embeddedc,
      DevIcons.filezilla,
      DevIcons.gcc,
      DevIcons.googlecloud,
      DevIcons.gitter,
      DevIcons.jest,
      DevIcons.kubernetes,
      DevIcons.oracle,
      DevIcons.redhat,
      DevIcons.spss,
      DevIcons.subversion,
      DevIcons.pytest,
    ],
  },
  uxSolution: {
    title: ["UI/UX", "Solutions"],
    description:
      "We elevate user engagement and satisfaction with exceptionally captivating digital experiences and visual narratives. We create world-class UI/UX designs that resonate with users and drives customer loyalty.",
    subServices: [
      {
        title: "Interface Design",
        description1:
          "We provide cutting-edge interface designs that bring attention, elevates user experience, and fit the needs of different businesses and their customers. We always aim to add a new dynamic to a web or mobile application's interface for easy, user-friendly, and personalized experience for all.",
        description2:
          "We develop functional interfaces that are tailor made to be intuitive, expandable, convertible, consistent, and economic for all businesses.",
        image: images.ux1,
      },
      {
        title: "Visual Design",
        description1:
          "We design intuitive and interactive visuals custom made for different businesses, from conception and design to execution and deployment. We develop beautiful and high-end visuals that engage viewers, increase conversion and customer retention, and yield exemplary results.",
        description2:
          "We survey the market, stay updated with latest trends & technologies, and craft uniquely compelling visuals that help businesses stand-out from their competitors.",
        image: images.ux2,
      },
      {
        title: "Experience Design",
        description1:
          "We build aesthetically pleasing and intuitively interactive designs that compliment the overall experience of the users and gain their trust. We maintain a sound balance between style, graphics, and performance to avoid bottlenecks, captivate users, and retain customers.",
        description2:
          "We anticipate the user's needs and ensure the user experience is both flexible and scalable so that it can be altered according to the times and demand.",
        image: images.ux3,
      },
    ],
    languages: [
      DevIcons.canva,
      DevIcons.aftereffects,
      DevIcons.illustrator,
      DevIcons.phoenix,
      DevIcons.photoshop,
      DevIcons.bootstrap,
      DevIcons.gimp,
      DevIcons.figma,
      DevIcons.inkscape,
      DevIcons.xd,
      DevIcons.flutter,
      DevIcons.crystal,
      DevIcons.centos,
      DevIcons.premierepro,
      DevIcons.xcode,
      DevIcons.react,
      DevIcons.webflow,
    ],
  },

  goals: [
    {
      title: "Highly Skilled Team of Developers",
      description:
        "Our team of custom software developers is highly skilled and experienced in the latest programming languages and technologies. They have expertise in a wide range of programming languages and different technologies like web development frameworks, cloud-based solutions, databases, and mobile development platforms, enabling them to build solutions that are robust, scalable, and adaptable to the client’s changing needs. ",
      image: images.goal1,
      order: "first",
    },
    {
      title: "Communicative & Responsive",
      description:
        "InApp takes pride in the communicative and responsive nature of our software development experts. We keep our clients updated on the progress of their projects and are always available to answer any questions. Our goal is to provide our customers with the best possible experience. InApp works closely with our clients to ensure that they are happy with our work and their needs are met.",
      image: images.goal2,
      order: "last",
    },
    {
      title: "Flexible Team of Resources",
      description:
        "InApp’s software development services are highly flexible, allowing us to adapt to the needs of our clients. Our experienced developers work with a variety of programming languages and development frameworks. We are also able to utilize a variety of tools and technologies to create custom solutions for our clients.",
      image: images.goal3,
      order: "first",
    },
  ],

  whatWeDeliver: {
    contents: [
      {
        title: "Customer-Centricity",
        description:
          "We prioritize the needs of our clients. Our core focus is to deliver personalized solutions that meet your unique requirements and add value to your business. Whether you are a start-up, SME, or an MNC -we will design, craft, & deliver IT Solutions to enable you to disrupt the status quo and emerge as a market leader.",
        image: images.wwd1,
        order: "first",
      },
      {
        title: "Agility",
        description:
          "We demolish the barriers between design, development, and deployment to strengthen feedback, security, and scalability. Our dynamic team never tires because of our agile model. Scrum framework ensures that our development cycle maintains a consistent pace without roadblocks. Whether you want end-to-end service or a product infrastructure, we will complete your project in time with measurable deliverables along the way.",
        image: images.wwd2,
        order: "last",
      },
      {
        title: "Co-Creation",
        description:
          "We collaborate with your team to deliver end-to-end design, engineering, and development services. We work with your team to remove any bureaucratic red tape and enable swift, seamless software delivery cycles. Whether you're a team of 5 or 50, we will work with you hand-in-hand to deliver tangible results.",
        image: images.wwd3,
        order: "first",
      },
    ],
  },

  careerHeader: {
    image: images.careerBanner,
    description1:
      "Here at Xfosoft, we believe in finding the right talents and providing them the best working environment and organizational culture. We cultivate a collective goal to bring the best in everyone through continuous support and motivation. We value creativity and consistent efforts which make our work force dynamic and ready for the future.",

    description2:
      "People at Xfosoft harness the essence of teamwork and good leadership. We provide comprehensive training to our workforce to develop and empower their journey at Xfosoft. We closely monitor and maintain a place where talents can be nurtured in the best way. So, Join Us and be the changemaker in the ever-evolving tech landscape!",
    title: ["LIFE AT", "XFOSOFT"],
  },

  careerPosts: {
    jobs: [
      {
        title: "Sr. Node js Developer",
        experience: "+3 Years",
        created_at: "5 hours ago",
        applicants: "11",
        requirements: [
          "Strong experience with C#, .NET Core, ASP .NET MVC.",
          "Experienced SOA, Micro services.",
        ],
        responsibilities: [
          "Design, analysis, architecture and development of applications using .NET Core, C#, ASP.NET MVC, Entity Framework, SOA, Microservices.",
          "Works with OOAD Object Oriented Analysis and Design patterns.",
          "Works with ASP.NET MVC, Microservices, SOA, LINQ, Entity Framework.",
          "API Development using Web API, REST, RESTFUL.",
        ],
        requiredSkills: [
          "3-5 years professional software development experience using .NET, .NET Core, Web API, C#, ASP.NET MVC, Microservices, and related Microsoft technologies.",
          ".NET Core, dependency injection and IOC containers, and containerized .NET core solutions.",
          "Solid understanding of microservices architecture and distributed, cloud-native systems.",
          "Strong workflow design and implementation skills, including custom-coded workflows, state machines, fault handling and workflow event communication.",
          "Experience in Agile Application Development & Scrum methodologies.",
          "Experience implementing automated build and release deployment methodologies in a DevOps or continuous deployment environment.",
          "Thorough understanding of the full software life cycle, including requirements, design, development, testing, and maintenance.",
        ],
        role: "We’re looking for an experienced Python Developer to join our team. In this position, you’ll work closely with your colleagues, leveraging your technical skills and collaborative mindset to make meaningful contributions to our project development and improvement efforts. Your expertise and teamwork will be key to delivering top-notch solutions that propel our projects to success.",
        technologies: [
          "Application Development",
          "Python",
          "microservices",
          "CI/CD",
          "Flask",
          "SQS",
          "Spark",
          "DWH",
          "SQL",
          "Data Engineering",
          "Elasticsearch",
          "DynamoDB and Data Bricks",
          "App dev",
          "UNit Test",
          "pipelines",
        ],
        ourOffers: [
          "Join us for the opportunity to address intricate technical challenges that have the potential to make a significant impact on a global scale.",
          "You'll have plenty of chances to learn and grow with access to online courses, global knowledge-sharing events, and opportunities to earn external certifications",
          "The freedom to shape your personal and professional development.",
          "A diverse and inclusive culture that supports both individuality and teamwork.",
          "Opportunity to share your idea Learning opportunities to help you acquire new skills or deepen existing expertise.",
          "Non-hierarchical structure that will enable you to work with senior managers and directly with clients.",
          "A diverse, inclusive, meritocratic cultures on international platforms",
          "Benefit package: Health benefits, Retirement benefits, Paid time off, Flexible benefits.",
        ],
        salary: {
          usd: "800",
          bdt: "80000",
        },
      },
      {
        title: "Sr. Frontend Developer",
        experience: "+3 Years",
        created_at: "5 hours ago",
        applicants: "11",
        requirements: [
          "Strong experience with C#, .NET Core, ASP .NET MVC.",
          "Experienced SOA, Micro services.",
        ],
        responsibilities: [
          "Design, analysis, architecture and development of applications using .NET Core, C#, ASP.NET MVC, Entity Framework, SOA, Microservices.",
          "Works with OOAD Object Oriented Analysis and Design patterns.",
          "Works with ASP.NET MVC, Microservices, SOA, LINQ, Entity Framework.",
          "API Development using Web API, REST, RESTFUL.",
        ],
        requiredSkills: [
          "3-5 years professional software development experience using .NET, .NET Core, Web API, C#, ASP.NET MVC, Microservices, and related Microsoft technologies.",
          ".NET Core, dependency injection and IOC containers, and containerized .NET core solutions.",
          "Solid understanding of microservices architecture and distributed, cloud-native systems.",
          "Strong workflow design and implementation skills, including custom-coded workflows, state machines, fault handling and workflow event communication.",
          "Experience in Agile Application Development & Scrum methodologies.",
          "Experience implementing automated build and release deployment methodologies in a DevOps or continuous deployment environment.",
          "Thorough understanding of the full software life cycle, including requirements, design, development, testing, and maintenance.",
        ],
        role: "We’re looking for an experienced Python Developer to join our team. In this position, you’ll work closely with your colleagues, leveraging your technical skills and collaborative mindset to make meaningful contributions to our project development and improvement efforts. Your expertise and teamwork will be key to delivering top-notch solutions that propel our projects to success.",
        technologies: [],
        ourOffers: [],
        salary: {
          usd: "800",
          bdt: "80000",
        },
      },
      {
        title: "Sr. Dot Net Core developer",
        experience: "+3 Years",
        created_at: "5 hours ago",
        applicants: "11",
        requirements: [
          "Strong experience with C#, .NET Core, ASP .NET MVC.",
          "Experienced SOA, Micro services.",
        ],
        responsibilities: [
          "Design, analysis, architecture and development of applications using .NET Core, C#, ASP.NET MVC, Entity Framework, SOA, Microservices.",
          "Works with OOAD Object Oriented Analysis and Design patterns.",
          "Works with ASP.NET MVC, Microservices, SOA, LINQ, Entity Framework.",
          "API Development using Web API, REST, RESTFUL.",
        ],
        requiredSkills: [
          "3-5 years professional software development experience using .NET, .NET Core, Web API, C#, ASP.NET MVC, Microservices, and related Microsoft technologies.",
          ".NET Core, dependency injection and IOC containers, and containerized .NET core solutions.",
          "Solid understanding of microservices architecture and distributed, cloud-native systems.",
          "Strong workflow design and implementation skills, including custom-coded workflows, state machines, fault handling and workflow event communication.",
          "Experience in Agile Application Development & Scrum methodologies.",
          "Experience implementing automated build and release deployment methodologies in a DevOps or continuous deployment environment.",
          "Thorough understanding of the full software life cycle, including requirements, design, development, testing, and maintenance.",
        ],
        role: "We’re looking for an experienced Python Developer to join our team. In this position, you’ll work closely with your colleagues, leveraging your technical skills and collaborative mindset to make meaningful contributions to our project development and improvement efforts. Your expertise and teamwork will be key to delivering top-notch solutions that propel our projects to success.",
        technologies: [],
        ourOffers: [
          "Join us for the opportunity to address intricate technical challenges that have the potential to make a significant impact on a global scale.",
          "You'll have plenty of chances to learn and grow with access to online courses, global knowledge-sharing events, and opportunities to earn external certifications",
          "The freedom to shape your personal and professional development.",
          "A diverse and inclusive culture that supports both individuality and teamwork.",
          "Opportunity to share your idea Learning opportunities to help you acquire new skills or deepen existing expertise.",
          "Non-hierarchical structure that will enable you to work with senior managers and directly with clients.",
          "A diverse, inclusive, meritocratic cultures on international platforms",
          "Benefit package: Health benefits, Retirement benefits, Paid time off, Flexible benefits.",
        ],
        salary: {
          usd: "800",
          bdt: "80000",
        },
      },
      {
        title: "Sr. Dot Net Core developer",
        experience: "+3 Years",
        created_at: "5 hours ago",
        applicants: "11",
        requirements: [
          "Strong experience with C#, .NET Core, ASP .NET MVC.",
          "Experienced SOA, Micro services.",
        ],
        responsibilities: [
          "Design, analysis, architecture and development of applications using .NET Core, C#, ASP.NET MVC, Entity Framework, SOA, Microservices.",
          "Works with OOAD Object Oriented Analysis and Design patterns.",
          "Works with ASP.NET MVC, Microservices, SOA, LINQ, Entity Framework.",
          "API Development using Web API, REST, RESTFUL.",
        ],
        requiredSkills: [
          "3-5 years professional software development experience using .NET, .NET Core, Web API, C#, ASP.NET MVC, Microservices, and related Microsoft technologies.",
          ".NET Core, dependency injection and IOC containers, and containerized .NET core solutions.",
          "Solid understanding of microservices architecture and distributed, cloud-native systems.",
          "Strong workflow design and implementation skills, including custom-coded workflows, state machines, fault handling and workflow event communication.",
          "Experience in Agile Application Development & Scrum methodologies.",
          "Experience implementing automated build and release deployment methodologies in a DevOps or continuous deployment environment.",
          "Thorough understanding of the full software life cycle, including requirements, design, development, testing, and maintenance.",
        ],
        role: "We’re looking for an experienced Python Developer to join our team. In this position, you’ll work closely with your colleagues, leveraging your technical skills and collaborative mindset to make meaningful contributions to our project development and improvement efforts. Your expertise and teamwork will be key to delivering top-notch solutions that propel our projects to success.",
        technologies: [
          "Application Development",
          "Python",
          "microservices",
          "CI/CD",
          "Flask",
          "SQS",
          "Spark",
          "DWH",
          "SQL",
          "Data Engineering",
          "Elasticsearch",
          "DynamoDB and Data Bricks",
          "App dev",
          "UNit Test",
          "pipelines",
        ],
        ourOffers: [],
        salary: {
          usd: "",
          bdt: "",
        },
      },
    ],
  },

  ourExpertise: {
    contents: [
      {
        title: "High-functioning Team",
        description:
          "We have an all-encompassing team of highly skilled developers and engineers experienced in the latest programming languages, technologies, and data science. From web development frameworks and cloud-based solutions to databases and mobile development platforms, we have expertise in a variety of technologies that enables us to build solutions that are smart, robust, scalable, and flexible to different business needs.",
        image: images.expertise1,
        order: "first",
      },
      {
        title: "Dynamic Resources",
        description:
          "We provide top-tier services to our clients by utilizing a pool of dynamic, flexible, and highly adaptable resources. Our software developers, engineers, and experts pick a wide variety of latest tools, platforms, and technologies to create tailor-made solutions that fit our clients’ unique business goals. We strive to provide the highest quality of work using top-of-the-line technologies and our dynamic pool of resources.",
        image: images.expertise2,
        order: "last",
      },
      {
        title: "Real-time Communication",
        description:
          "We strongly believe that communication is at the forefront of any successful project. Which is why we continuously keep our clients updated on the progress of their projects and communicate in real-time in case of any last-minute changes. Since we apply agile principles to our work, we are always in contact with our clients. We aim to provide the best possible experience for our clients while ensuring their business-specific needs.",
        image: images.expertise3,
        order: "first",
      },
    ],
  },

  howWeWork: {
    title: ["HOW WE", "WORK"],
    content: [
      {
        title: "Strategy",
        description:
          "We strive for excellence in everything we do. We ascertain the core problem that our clients are facing when running their business processes and develop cost-effective strategies to find the best possible outcome that will fit their specific needs.",
        image: images.howWeWork1,
      },
      {
        title: "Solution",
        description:
          "With a well-crafted strategy at hand, we assess the business requirements of our clients and lay a solid foundation. We define optimum quality by meticulously using dynamic technologies and flexible resources to build sustainable solutions.",
        image: images.howWeWork2,
      },
      {
        title: "Service",
        description:
          "Once the groundwork is done and the solution is market-ready, we move for deployment while ensuring product security, scalability, and adaptability. We continuously scale, optimize, and augment solutions through our maintenance & support service.",
        image: images.howWeWork3,
      },
    ],
  },

  policyHeader: {
    image: images.policyConditionHeader,
    description1:
      "Here at Xfosoft, we believe in finding the right talents and providing them the best working environment and organizational culture. We cultivate a collective goal to bring the best in everyone through continuous support and motivation. We value creativity and consistent efforts which make our work force dynamic and ready for the future.",

    description2:
      "People at Xfosoft harness the essence of teamwork and good leadership. We provide comprehensive training to our workforce to develop and empower their journey at Xfosoft. We closely monitor and maintain a place where talents can be nurtured in the best way. So, Join Us and be the changemaker in the ever-evolving tech landscape!",
    title: ["LEGAL", "CONDITION"],
  },

  faqHeader: {
    image: images.faqHeader,
    description1: "You've got questions ? We've got answers .",

    description2: "",
    title: ["FAQ", "?"],
  },

  faqs: [
    {
      question: "Where are your offices?",
      answer: "Our HQ is in New York, United States",
    },
    {
      question: "Are you a registered company?",
      answer: "Yes, we are registered in USA.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We take pride in our ability to learn the fundamentals of virtually any industry or technology quickly. Some of the markets we have served include real estate, financial services, healthcare services, manufacturing, retail, food service, consumer products, media and entertainment, enterprise software, insurance.",
    },
    {
      question:
        "What are the details you need in the requirements for my project?",
      answer:
        "We are good to get into NDA (Non-Disclosure Agreement) before sharing your idea and any documents. We have internal NDA with all our employees that will bind them to keep every information confidential. We can share the NDA of every team participant if you are interested to review.",
    },
    {
      question: "What is the best mode of communication to reach you?",
      answer:
        "We strongly recommend all our clients to communicate with assigned Product Owner via their Skype or IM chat or email ID. You can always reach us directly at our US number with your point of contact.",
    },
    {
      question:
        "How can I monitor my project development progress and control them?",
      answer:
        "Once the project commences, we shall provide access to Pivotal Tracker (Project Management Tool) and Slack (Communication Tool) for a client to directly participate in Project Discussion, View Use Cases, and Download/Upload all relevant information to project needs. Also, we shall provide regular status reports based on time sheets from our developers. Regular updates of the schedule with specified current status provide an excellent perspective of the state of the project.",
    },
    {
      question: "How quickly can you start after I sign up to our service?",
      answer:
        "Generally, the day after payment is received. We pride ourselves in ensuring quick starts for our clients.",
    },
    {
      question:
        "If I want to be involved in the development process, is it okay?",
      answer:
        "Absolutely yes. Xfosoft is incepted based on Agile principles. With this Agile software development iterative approach, the 'client – product owner' is always involved in the software development process. The development process is not one-size-fits for all. With that consideration, from the ideation to deployment on each stage and on a daily basis, you will have an update from the team about project progress through Sprint. We let you have one to one interaction with the developer. Our daily scrum includes adaptive planning, continuous improvement, implementation, and rapid response to the changes.",
    },
    {
      question:
        "Will you assign a dedicated “Project Manager- Scrum Master” as a point of contact?",
      answer:
        "Yes. Dedicated project manager – Scrum master will be assigned throughout our engagement. With whom you can get in touch for any sort of assistance, query, or resolution",
    },
    {
      question: "What project management tools do you use?",
      answer:
        "We use industry-standard project management tools like Jira, Trello, Pivotal Tracker, Asana, and Slack. Where you will be able to track developers' productivity and monitor the daily progress of your project, you can create the task, assign the work, and monitor the development progress.",
    },
    {
      question:
        "Do you provide support and maintenance service after deployment?",
      answer:
        "Yes, we do provide support and maintenance services after successful project completion. Our after services include bug fixes, framework upgrade, continuous monitoring, and technical glitch resolution for the enhancements of your product.",
    },
  ],
};
