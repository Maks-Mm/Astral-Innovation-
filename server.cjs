const express = require("express");
const cors = require("cors");

const PORT = 3001; // Port for your backend server
const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

const technologies = [
  {
    id: 1,
    name: "React",
    imageUrl: "https://reactjs.org/logo-og.png",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    name: "Node.js",
    imageUrl: "https://nodejs.org/static/images/logo.svg",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine.",
  },
  {
    id: 3,
    name: "Angular",
    imageUrl: "https://angular.io/assets/images/logos/angular/angular.svg",
    description: "A platform for building mobile and desktop web applications.",
  },
  {
    id: 4,
    name: "Vue.js",
    imageUrl: "https://vuejs.org/images/logo.png",
    description: "A progressive framework for building user interfaces.",
  },
  {
    id: 5,
    name: "Django",
    imageUrl: "https://www.djangoproject.com/m/img/logos/django-logo-positive.png",
    description: "A high-level Python Web framework that encourages rapid development.",
  },
  {
    id: 6,
    name: "Flask",
    imageUrl: "https://flask.palletsprojects.com/en/2.0.x/_images/flask-logo.png",
    description: "A lightweight WSGI web application framework in Python.",
  },
  {
    id: 7,
    name: "Ruby on Rails",
    imageUrl: "https://rubyonrails.org/assets/images/rails/rails-logo.svg",
    description: "A server-side web application framework written in Ruby.",
  },
  {
    id: 8,
    name: "Spring Boot",
    imageUrl: "https://spring.io/images/spring-boot.png",
    description: "A framework that simplifies the setup and development of new Spring applications.",
  },
  {
    id: 9,
    name: "Flutter",
    imageUrl: "https://flutter.dev/assets/homepage/carousel/slide_1-bg-opaque-6c1323e6de5e043a1a6af657c1285cb0f8c8c49c17fd5cdba505f06c26c3c69c3.jpg",
    description: "An open-source UI software development toolkit for building natively compiled applications.",
  },
  {
    id: 10,
    name: "Kubernetes",
    imageUrl: "https://kubernetes.io/images/header/logo.svg",
    description: "An open-source system for automating the deployment, scaling, and management of containerized applications.",
  },
  {
    id: 11,
    name: "Docker",
    imageUrl: "https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png",
    description: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
  },
  {
    id: 12,
    name: "MySQL",
    imageUrl: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
    description: "An open-source relational database management system.",
  },
  {
    id: 13,
    name: "PostgreSQL",
    imageUrl: "https://www.postgresql.org/media/img/about/press/pglogofromweb.png",
    description: "A powerful, open-source object-relational database system.",
  },
  {
    id: 14,
    name: "MongoDB",
    imageUrl: "https://www.mongodb.com/assets/images/global/leaf.svg",
    description: "A document database with the scalability and flexibility that you want.",
  },
  {
    id: 15,
    name: "GraphQL",
    imageUrl: "https://graphql.org/img/logo.svg",
    description: "A query language for APIs and a runtime for fulfilling those queries with your existing data.",
  },
  {
    id: 16,
    name: "TypeScript",
    imageUrl: "https://www.typescriptlang.org/assets/images/icons/apple-touch-icon-120x120.png",
    description: "A superset of JavaScript that compiles to clean JavaScript output.",
  },
  {
    id: 17,
    name: "Swift",
    imageUrl: "https://swift.org/assets/images/swift.svg",
    description: "A powerful programming language for iOS and macOS development.",
  },
  {
    id: 18,
    name: "PHP",
    imageUrl: "https://www.php.net/images/logos/php-logo.svg",
    description: "A popular general-purpose scripting language that is especially suited to web development.",
  },
  {
    id: 19,
    name: "C#",
    imageUrl: "https://docs.microsoft.com/en-us/dotnet/csharp/images/csharplogo.svg",
    description: "A modern, object-oriented programming language developed by Microsoft.",
  },
  {
    id: 20,
    name: "Go",
    imageUrl: "https://golang.org/doc/gopher/appengine/gopher.png",
    description: "An open-source programming language that makes it easy to build simple, reliable, and efficient software.",
  },
  {
    id: 21,
    name: "CSS",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo.svg",
    description: "A style sheet language used for describing the presentation of a document written in HTML.",
  },
  {
    id: 22,
    name: "HTML",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    description: "The standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    id: 23,
    name: "Express",
    imageUrl: "https://expressjs.com/images/express-facebook-share.png",
    description: "A minimal and flexible Node.js web application framework.",
  },
  {
    id: 24,
    name: "Tailwind CSS",
    imageUrl: "https://tailwindcss.com/_next/static/media/logo.8a6b33f4.svg",
    description: "A utility-first CSS framework for creating custom designs.",
  },
  {
    id: 25,
    name: "npm",
    imageUrl: "https://raw.githubusercontent.com/npm/logos/master/npm-plain.png",
    description: "A package manager for JavaScript that is the default for the JavaScript runtime environment Node.js.",
  },
  {
    id: 26,
    name: "package.json",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HnIT-50kMJ4crwqW3sG7GA.png",
    description: "A file that contains metadata about your project and its dependencies in a Node.js environment.",
  },
  {
    id: 27,
    name: "Next.js",
    imageUrl: "https://nextjs.org/static/images/nextjs-logo.svg",
    description: "A React framework for production that enables server-side rendering and generating static websites.",
  },
  {
    id: 28,
    name: "Jest",
    imageUrl: "https://jestjs.io/img/jest.png",
    description: "A delightful JavaScript testing framework with a focus on simplicity.",
  },
  {
    id: 29,
    name: "Redux",
    imageUrl: "https://redux.js.org/img/redux-logo.png",
    description: "A predictable state container for JavaScript apps.",
  },
  {
    id: 30,
    name: "React Toolkit",
    imageUrl: "https://redux-toolkit.js.org/static/logo.9b9ec24a.png",
    description: "A set of tools for efficient Redux development.",
  },
  {
    id: 31,
    name: "Laravel",
    imageUrl: "https://laravel.com/img/logotype.min.svg",
    description: "A PHP framework for web artisans.",
  },
  {
    id: 32,
    name: "Symfony",
    imageUrl: "https://symfony.com/logos/symfony_black_logo.svg",
    description: "A PHP framework for web applications.",
  },
  {
    id: 33,
    name: "Sass",
    imageUrl: "https://sass-lang.com/assets/img/logos/logo.svg",
    description: "A preprocessor scripting language that is interpreted or compiled into CSS.",
  },
  {
    id: 34,
    name: "Less",
    imageUrl: "https://lesscss.org/public/logo.svg",
    description: "A backward-compatible language extension for CSS.",
  },
  {
    id: 35,
    name: "Bootstrap",
    imageUrl: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social-logo.png",
    description: "A popular HTML, CSS, and JS framework for developing responsive, mobile-first projects.",
  },
  {
    id: 36,
    name: "jQuery",
    imageUrl: "https://jquery.com/jquery-logo.svg",
    description: "A fast, small, and feature-rich JavaScript library.",
  },
  {
    id: 37,
    name: "Apache",
    imageUrl: "https://apache.org/img/apache_logo.svg",
    description: "An open-source web server software.",
  },
  {
    id: 38,
    name: "Nginx",
    imageUrl: "https://www.nginx.com/wp-content/themes/nginx/images/logo.svg",
    description: "A high-performance HTTP and reverse proxy server.",
  },
  {
    id: 39,
    name: "Redis",
    imageUrl: "https://redis.io/images/redis-white.svg",
    description: "An in-memory data structure store, used as a database, cache, and message broker.",
  },
  {
    id: 40,
    name: "Firebase",
    imageUrl: "https://firebase.google.com/images/branding/logo/2x/firebase_192x192.png",
    description: "A platform developed by Google for creating mobile and web applications.",
  },
  {
    id: 41,
    name: "GraphQL",
    imageUrl: "https://graphql.org/img/logo.svg",
    description: "A data query language for APIs.",
  },
  {
    id: 42,
    name: "C++",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    description: "A high-level programming language with low-level memory manipulation.",
  },
  {
    id: 43,
    name: "Rust",
    imageUrl: "https://www.rust-lang.org/logo.svg",
    description: "A systems programming language focused on safety and speed.",
  },
  {
    id: 44,
    name: "Kotlin",
    imageUrl: "https://kotlinlang.org/assets/images/kotlin-logo.svg",
    description: "A modern programming language that makes coding easier and more efficient.",
  },
  {
    id: 45,
    name: "Scala",
    imageUrl: "https://www.scala-lang.org/resources/images/scala.svg",
    description: "A programming language that fuses functional and object-oriented programming.",
  },
  {
    id: 46,
    name: "Objective-C",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Objective-C_logo.png",
    description: "A general-purpose, object-oriented programming language used for macOS and iOS development.",
  },
  {
    id: 47,
    name: "R",
    imageUrl: "https://www.r-project.org/logo/Rlogo.png",
    description: "A programming language and free software environment for statistical computing and graphics.",
  },
  {
    id: 48,
    name: "MATLAB",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
    description: "A programming platform designed for engineers and scientists.",
  },
  {
    id: 49,
    name: "Perl",
    imageUrl: "https://www.perl.org/img/Perl-logo.svg",
    description: "A high-level, general-purpose, interpreted, dynamic programming language.",
  },
  {
    id: 50,
    name: "Haskell",
    imageUrl: "https://www.haskell.org/logos/haskell-logo.svg",
    description: "A standardized, general-purpose purely functional programming language.",
  },
  {
    id: 51,
    name: "Ada",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Ada_logo.svg",
    description: "A structured, statically typed, imperative, and object-oriented high-level computer programming language.",
  },
  {
    id: 52,
    name: "Lua",
    imageUrl: "https://www.lua.org/images/lua-logo.svg",
    description: "A lightweight, high-level, multi-paradigm programming language.",
  },
  {
    id: 53,
    name: "Solidity",
    imageUrl: "https://soliditylang.org/images/solidity-logo.svg",
    description: "A programming language for writing smart contracts on various blockchain platforms.",
  },
  {
    id: 54,
    name: "Clojure",
    imageUrl: "https://clojure.org/logo/clojure.svg",
    description: "A dynamic, functional programming language that runs on the Java Virtual Machine.",
  },
  {
    id: 55,
    name: "PowerShell",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/PowerShell_5.0.png",
    description: "A task automation and configuration management framework from Microsoft.",
  },
  {
    id: 56,
    name: "Shell",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Bash_logo.svg",
    description: "A command-line interpreter for Unix-like operating systems.",
  },
  {
    id: 57,
    name: "Apache Hadoop",
    imageUrl: "https://hadoop.apache.org/images/hadoop-logo.png",
    description: "An open-source software framework for storing and processing large datasets.",
  },
  {
    id: 58,
    name: "Apache Spark",
    imageUrl: "https://spark.apache.org/docs/latest/img/spark-logo.png",
    description: "An open-source unified analytics engine for big data processing.",
  },
  {
    id: 59,
    name: "TensorFlow",
    imageUrl: "https://www.tensorflow.org/images/tensorflow_logo_social.png",
    description: "An end-to-end open-source platform for machine learning.",
  },
  {
    id: 60,
    name: "PyTorch",
    imageUrl: "https://pytorch.org/assets/images/pytorch-logo-dark.svg",
    description: "An open-source machine learning library based on the Torch library.",
  },
  {
    id: 61,
    name: "OpenCV",
    imageUrl: "https://opencv.org/assets/images/opencv_logo_wide.png",
    description: "An open-source computer vision and machine learning software library.",
  },
  {
    id: 62,
    name: "Selenium",
    imageUrl: "https://www.selenium.dev/images/selenium_logo_square_green.png",
    description: "A portable framework for testing web applications.",
  },
  {
    id: 63,
    name: "Cypress",
    imageUrl: "https://www.cypress.io/images/cypress_logo.svg",
    description: "A front-end testing tool built for the modern web.",
  },
  {
    id: 64,
    name: "Postman",
    imageUrl: "https://www.postman.com/img/postman-logo.png",
    description: "A collaboration platform for API development.",
  },
  {
    id: 65,
    name: "Swagger",
    imageUrl: "https://swagger.io/assets/images/swagger-logo.png",
    description: "A framework for API specification and documentation.",
  },
  {
    id: 66,
    name: "Jenkins",
    imageUrl: "https://www.jenkins.io/images/logos/jenkins.svg",
    description: "An open-source automation server for continuous integration and delivery.",
  },
  {
    id: 67,
    name: "Git",
    imageUrl: "https://git-scm.com/images/logos/git-logo.svg",
    description: "A distributed version control system for tracking changes in source code.",
  },
  {
    id: 68,
    name: "GitHub",
    imageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    description: "A platform for version control and collaboration.",
  },
  {
    id: 69,
    name: "Bitbucket",
    imageUrl: "https://wac-cdn.atlassian.com/dam/jcr:a4b18e1b-ff0f-467e-91c6-f8f3a33f443e/bitbucket-icon.png",
    description: "A web-based version control repository hosting service.",
  },
  {
    id: 70,
    name: "GitLab",
    imageUrl: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png",
    description: "A web-based DevOps lifecycle tool that provides a Git repository manager.",
  },
  {
    id: 71,
    name: "Figma",
    imageUrl: "https://www.figma.com/favicon.ico",
    description: "A web-based UI/UX design application.",
  },
  {
    id: 72,
    name: "Adobe XD",
    imageUrl: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/xd.svg",
    description: "A vector-based user experience design tool for web apps and mobile apps.",
  },
  {
    id: 73,
    name: "Sketch",
    imageUrl: "https://www.sketch.com/favicon.ico",
    description: "A digital design app from MacOS for UI/UX design.",
  },
  {
    id: 74,
    name: "InVision",
    imageUrl: "https://www.invisionapp.com/favicon.ico",
    description: "A prototyping tool for designers to create interactive mockups.",
  },
  {
    id: 75,
    name: "Canva",
    imageUrl: "https://www.canva.com/favicon.ico",
    description: "A graphic design platform for creating social media graphics and presentations.",
  },
  {
    id: 76,
    name: "Microsoft Excel",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Microsoft_Excel_Logo.svg",
    description: "A spreadsheet program used for data analysis and visualization.",
  },
  {
    id: 77,
    name: "Tableau",
    imageUrl: "https://www.tableau.com/sites/default/files/2021-08/logo_0.png",
    description: "A data visualization tool that is used for converting raw data into an understandable format.",
  },
  {
    id: 78,
    name: "Power BI",
    imageUrl: "https://powerbi.microsoft.com/favicon.ico",
    description: "A business analytics tool that delivers insights through interactive visualizations.",
  },
  {
    id: 79,
    name: "Google Analytics",
    imageUrl: "https://analytics.google.com/images/favicon.ico",
    description: "A web analytics service that tracks and reports website traffic.",
  },
  {
    id: 80,
    name: "Salesforce",
    imageUrl: "https://www.salesforce.com/favicon.ico",
    description: "A customer relationship management solution for managing customer data.",
  },
  {
    id: 81,
    name: "Shopify",
    imageUrl: "https://www.shopify.com/favicon.ico",
    description: "An e-commerce platform for online stores and retail point-of-sale systems.",
  },
  {
    id: 82,
    name: "Stripe",
    imageUrl: "https://stripe.com/img/favicon.ico",
    description: "An online payment processing platform for internet businesses.",
  },
  {
    id: 83,
    name: "PayPal",
    imageUrl: "https://www.paypal.com/favicon.ico",
    description: "An online payment system that supports online money transfers.",
  },
  {
    id: 84,
    name: "Trello",
    imageUrl: "https://trello.com/favicon.ico",
    description: "A collaboration tool that organizes projects into boards.",
  },
  {
    id: 85,
    name: "Asana",
    imageUrl: "https://asana.com/favicon.ico",
    description: "A web and mobile application designed to help teams organize, track, and manage their work.",
  },
  {
    id: 86,
    name: "Slack",
    imageUrl: "https://slack.com/favicon.ico",
    description: "A messaging app for teams that makes it easy to communicate and collaborate.",
  },
  {
    id: 87,
    name: "Discord",
    imageUrl: "https://discord.com/favicon.ico",
    description: "A VoIP, instant messaging and digital distribution platform.",
  },
  {
    id: 88,
    name: "Zoom",
    imageUrl: "https://zoom.us/favicon.ico",
    description: "A video communication platform for meetings and webinars.",
  },
  {
    id: 89,
    name: "Microsoft Teams",
    imageUrl: "https://teams.microsoft.com/favicon.ico",
    description: "A collaboration app that helps your team stay organized and has conversations all in one place.",
  },
  {
    id: 90,
    name: "Salesforce",
    imageUrl: "https://www.salesforce.com/favicon.ico",
    description: "A cloud-based customer relationship management service.",
  },
  {
    id: 91,
    name: "Notion",
    imageUrl: "https://www.notion.so/favicon.ico",
    description: "An all-in-one workspace for notes, tasks, wikis, and databases.",
  },
  {
    id: 92,
    name: "Evernote",
    imageUrl: "https://evernote.com/favicon.ico",
    description: "A note-taking application that helps users organize their notes.",
  },
  {
    id: 93,
    name: "Google Drive",
    imageUrl: "https://drive.google.com/favicon.ico",
    description: "A file storage and synchronization service created by Google.",
  },
  {
    id: 94,
    name: "Dropbox",
    imageUrl: "https://www.dropbox.com/favicon.ico",
    description: "A file hosting service that offers cloud storage, file synchronization, and client software.",
  },
  {
    id: 95,
    name: "OneDrive",
    imageUrl: "https://onedrive.live.com/favicon.ico",
    description: "A cloud storage service from Microsoft that allows users to store files and data.",
  },
  {
    id: 96,
    name: "WordPress",
    imageUrl: "https://wordpress.org/favicon.ico",
    description: "A content management system (CMS) for creating and managing websites.",
  },
  {
    id: 97,
    name: "Wix",
    imageUrl: "https://www.wix.com/favicon.ico",
    description: "A cloud-based website development platform.",
  },
  {
    id: 98,
    name: "Squarespace",
    imageUrl: "https://www.squarespace.com/favicon.ico",
    description: "A website building and hosting service.",
  },
  {
    id: 99,
    name: "Weebly",
    imageUrl: "https://www.weebly.com/favicon.ico",
    description: "A web hosting service featuring a drag-and-drop website builder.",
  },
  {
    id: 100,
    name: "Ghost",
    imageUrl: "https://ghost.org/favicon.ico",
    description: "A free and open-source publishing platform for creating blogs and online publications.",
  },
];


// Route to handle search
app.get("/search", (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  const filteredResults = technologies.filter((tech) =>
    tech.name.toLowerCase().includes(query.toLowerCase())
  );

  console.log("Filtered results:", filteredResults);
  res.json(filteredResults);
});

// Route to get all technologies
app.get("/technologies", (req, res) => {
  res.json(technologies);
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
//where do we have the other port in Terminal?
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running HI new run onhttp://localhost:${PORT}`);
});
