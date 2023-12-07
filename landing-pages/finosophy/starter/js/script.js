'use strict';

/* DATASETS */
const categories = {
  kids: {
    heroSection: {
      heading1: 'Seeking Financial Education for Your Kid?',
      heading2: 'Everything You Need is Here!!',
      heading3:
        'Make Your Child Financially Confident with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/kids-white.jpg',
    },
    featuresSection: {
      features: [
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/growth.png',
          heading: 'Build Financial Knowledge',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/equilibrium.png',
          heading: 'Manage Finance Effectively',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/audio-book.png',
          heading: 'Self-paced Learning',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/certificate.png',
          heading: 'Course Completion Certificate',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/work-from-home.png',
          heading: 'Weekly Live Sessions',
        },
      ],
    },
    faqsSection: {
      faqs: [
        {
          question: 'Why is financial literacy important for students?',
          answer:
            'Financial literacy is crucial for students as it equips them with essential LIFE SKILLS to manage their finances effectively. It helps them make informed decisions about spending, saving, and investing money, which can have a significant impact on their financial well-being in the long run.',
        },
        {
          question:
            'What topics are typically covered in a financial literacy course?',
          answer:
            'A financial literacy course usually covers a range of topics, including budgeting, saving and investing, credit and debt management, taxes, insurance, retirement planning, and financial goal-setting. It may also touch upon topics like financial scams, consumer rights, and responsible spending.',
        },
        {
          question:
            'How can financial literacy benefit me in my everyday life?',
          answer:
            'Financial literacy can benefit you in numerous ways. It helps you develop good money management habits, make informed decisions about spending and saving, avoid debt traps, understand financial products and services, plan for major life events like buying a house or starting a family, investing in stocks etc and work towards achieving your financial goals.',
        },
        {
          question: 'Can financial literacy help me in my career?',
          answer:
            'Absolutely! Financial literacy can be valuable in your career, regardless of your field. Understanding financial concepts can help you make sound business decisions, manage personal finances during job transitions, negotiate salary and benefits effectively, in short it makes you stay ahead of your game and and builds confidence towards living a better financial life.',
        },
        {
          question:
            'Are there any prerequisites for taking a financial literacy course?',
          answer:
            'Most financial literacy courses are designed to be accessible to students without any prior financial knowledge. However, basic math and arithmetic skills are helpful for understanding financial calculations and concepts.',
        },
        {
          question:
            'How can I apply what I learn in a financial literacy course to my own life?',
          answer:
            'To apply what you learn, start by assessing your current financial situation, setting specific financial goals, and creating a budget. Implement the strategies and techniques learned in the course, such as saving a portion of your income, tracking your expenses, and making informed decisions about spending. Regularly review your progress and make adjustments as needed.',
        },
        {
          question:
            'How can I continue to improve my financial literacy after completing the course?',
          answer:
            'Financial literacy is an ongoing learning process. After completing the course, you can continue to enhance your knowledge by reading personal finance books, following financial blogs, attending workshops or webinars, and staying updated on financial news and trends. Joining online communities or forums dedicated to personal finance can also provide opportunities for learning and sharing experiences.',
        },
        {
          question:
            'Can financial literacy help me avoid financial scams and frauds?',
          answer:
            'Yes, financial literacy can help you identify and avoid common financial scams and frauds. By understanding how scams operate and being aware of warning signs, you can protect yourself and your finances from fraudulent activities. Additionally, learning about consumer rights and financial regulations can empower you to make informed decisions and take appropriate action when necessary.',
        },
      ],
    },
  },
  youth: {
    heroSection: {
      heading1: 'Looking for Financial Literacy Program?',
      heading2: 'Everything You Need is Here!!',
      heading3: 'Learn to Grow Your Money with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/kids-white.jpg',
    },
    featuresSection: {
      features: [
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/plan.png',
          heading: 'Set Clear Financial Goals',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/study.png',
          heading: 'Gain Practical Knowledge',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/audio-book.png',
          heading: 'Self-paced Learning',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/certificate.png',
          heading: 'Course Completion Certificate',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/work-from-home.png',
          heading: 'Weekly Live Sessions',
        },
      ],
    },
    faqsSection: {
      faqs: [
        {
          question: 'Why is financial literacy important for students?',
          answer:
            'Financial literacy is crucial for students as it equips them with essential LIFE SKILLS to manage their finances effectively. It helps them make informed decisions about spending, saving, and investing money, which can have a significant impact on their financial well-being in the long run.',
        },
        {
          question:
            'What topics are typically covered in a financial literacy course?',
          answer:
            'A financial literacy course usually covers a range of topics, including budgeting, saving and investing, credit and debt management, taxes, insurance, retirement planning, and financial goal-setting. It may also touch upon topics like financial scams, consumer rights, and responsible spending.',
        },
        {
          question:
            'How can financial literacy benefit me in my everyday life?',
          answer:
            'Financial literacy can benefit you in numerous ways. It helps you develop good money management habits, make informed decisions about spending and saving, avoid debt traps, understand financial products and services, plan for major life events like buying a house or starting a family, investing in stocks etc and work towards achieving your financial goals.',
        },
        {
          question: 'Can financial literacy help me in my career?',
          answer:
            'Absolutely! Financial literacy can be valuable in your career, regardless of your field. Understanding financial concepts can help you make sound business decisions, manage personal finances during job transitions, negotiate salary and benefits effectively, in short it makes you stay ahead of your game and and builds confidence towards living a better financial life.',
        },
        {
          question:
            'Are there any prerequisites for taking a financial literacy course?',
          answer:
            'Most financial literacy courses are designed to be accessible to students without any prior financial knowledge. However, basic math and arithmetic skills are helpful for understanding financial calculations and concepts.',
        },
        {
          question:
            'How can I apply what I learn in a financial literacy course to my own life?',
          answer:
            'To apply what you learn, start by assessing your current financial situation, setting specific financial goals, and creating a budget. Implement the strategies and techniques learned in the course, such as saving a portion of your income, tracking your expenses, and making informed decisions about spending. Regularly review your progress and make adjustments as needed.',
        },
        {
          question:
            'How can I continue to improve my financial literacy after completing the course?',
          answer:
            'Financial literacy is an ongoing learning process. After completing the course, you can continue to enhance your knowledge by reading personal finance books, following financial blogs, attending workshops or webinars, and staying updated on financial news and trends. Joining online communities or forums dedicated to personal finance can also provide opportunities for learning and sharing experiences.',
        },
        {
          question:
            'Can financial literacy help me avoid financial scams and frauds?',
          answer:
            'Yes, financial literacy can help you identify and avoid common financial scams and frauds. By understanding how scams operate and being aware of warning signs, you can protect yourself and your finances from fraudulent activities. Additionally, learning about consumer rights and financial regulations can empower you to make informed decisions and take appropriate action when necessary.',
        },
      ],
    },
  },
  teacher: {
    heroSection: {
      heading1: 'Want to Become a Certified Financial Tutor?',
      heading2: 'Everything You Need is Here!!',
      heading3:
        'Teach Your Students Financial Literacy with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/teacher-white.jpg',
    },
    featuresSection: {
      features: [
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/online-learning.png',
          heading: 'Online/Offline Training',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/books.png',
          heading: 'Guided Teaching Resources',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/teaching.png',
          heading: 'Learn While Teaching',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/certificate.png',
          heading: 'Course Completion Certificate',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/work-from-home.png',
          heading: 'Weekly Live Sessions',
        },
      ],
    },
    faqsSection: {
      faqs: [
        {
          question:
            'What resources does Letstute provide to assist teachers in teaching the financial literacy course?',
          answer:
            'Letstute offers comprehensive teacher lesson plans designed to guide educators through each level of the financial literacy course. These plans include detailed outlines, teaching strategies, and supplementary materials.',
        },
        {
          question:
            'How are the teacher lesson plans structured for the six-level financial literacy course?',
          answer:
            "Letstute's teacher lesson plans are meticulously structured, breaking down each level into modules or sections, providing a step-by-step guide for educators to effectively teach financial concepts.",
        },
        {
          question:
            'Are the teacher lesson plans flexible enough to accommodate different teaching styles and classroom settings?',
          answer:
            "Yes, Letstute's teacher lesson plans are designed with flexibility in mind, allowing educators to adapt the materials to suit various teaching styles, classroom sizes, and student needs.",
        },
        {
          question:
            'What support does Letstute offer to ensure educators are prepared to teach the financial literacy course effectively?',
          answer:
            'Letstute offers training sessions or workshops specifically tailored for educators, focusing on how to effectively utilize the lesson plans, engage students, and navigate challenging concepts.',
        },
        {
          question:
            'Do the teacher lesson plans include assessment tools or methods to gauge student learning?',
          answer:
            "Yes, Letstute's teacher lesson plans might include assessment tools such as quizzes, worksheets, or suggested evaluation methods, enabling educators to assess students' understanding of the financial concepts taught.",
        },
        {
          question:
            'Can educators access additional resources or materials to supplement the teacher lesson plans?',
          answer:
            "Letstute provides supplementary resources, including presentations, videos, or interactive activities, to complement the teacher lesson plans and enhance students' learning experiences.",
        },
        {
          question:
            'How can educators provide feedback or share experiences with Letstute regarding the teacher lesson plans?',
          answer:
            'Letstute offers forums or platforms where educators can provide feedback, share success stories, and exchange experiences with implementing the lesson plans, fostering a collaborative teaching community.',
        },
        {
          question:
            'Are the teacher lesson plans aligned with educational standards or guidelines?',
          answer:
            "Letstute's teacher lesson plans totally align with national or international educational standards, ensuring that the financial literacy course meets educational benchmarks and objectives.",
        },
        {
          question:
            'Can the teacher lesson plans be accessed and utilized beyond the classroom environment?',
          answer:
            "Yes, Letstute's teacher lesson plans are designed to be versatile, allowing educators to adapt and utilize them in diverse settings such as workshops, seminars, or extracurricular programs specific to our Finosophy course.",
        },
        {
          question:
            "How can educators get access to Letstute's teacher lesson plans for the financial literacy course?",
          answer:
            "Educators can typically access Letstute's teacher lesson plans online through Finosophy Landing Page or direct communication with Letstute team.",
        },
      ],
    },
  },
  school: {
    heroSection: {
      heading1: 'Looking for Financial Literacy Program?',
      heading2: 'Everything You Need is Here!!',
      heading3: 'Craft Financially Savvy Students with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/school-white.jpg',
    },
    featuresSection: {
      features: [
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/deal.png',
          heading: 'NEP Encourage Financial Literacy',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/online-learning.png',
          heading: 'Teacher Training Available',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/analysis.png',
          heading: 'Monitoring Dashboard Tool',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/elearning.png',
          heading: 'Track Students Progress',
        },
        {
          icon: 'https://www.letstute.com/s/pages/assets/images/work-from-home.png',
          heading: 'Weekly Live Sessions',
        },
      ],
    },
    faqsSection: {
      faqs: [
        {
          question:
            "How can Letstute's financial literacy program - Finosophy benefit schools and students?",
          answer:
            "Letstute's program offers a structured and engaging curriculum designed to impart essential financial knowledge to students, fostering responsible financial behavior and decision-making skills.",
        },
        {
          question:
            "What distinguishes Letstute's financial literacy program from other educational resources?",
          answer:
            "Letstute's program employs interactive and visually engaging teaching methods, such as animated videos and practical exercises, ensuring student engagement and comprehension of financial concepts.",
        },
        {
          question:
            "Will Letstute's program be seamlessly integrated into our existing curriculum?",
          answer:
            "Yes, Letstute's program is designed for easy integration into school curricula, providing flexibility for educators to incorporate it into subjects like mathematics, social studies, or economics.",
        },
        {
          question:
            'Are there resources available for educators to facilitate teaching the financial literacy program effectively?',
          answer:
            'Letstute might provide comprehensive teaching materials, including lesson plans, worksheets, and assessments, to support educators in delivering the program effectively and engagingly.',
        },
        {
          question:
            "How can Letstute's program encourage parental involvement in students' financial education?",
          answer:
            'Letstute offers resources or workshops for parents to reinforce financial learning at home, ensuring a collaborative approach between school and home environments.',
        },
        {
          question:
            "Can Letstute's financial literacy program be customized to cater to different age groups or grades?",
          answer:
            "Yes, Letstute's program offers 6 modules tailored to grades 6-11 and relatable age groups within the school, ensuring that the content is age-appropriate and relevant to each grade level.s",
        },
        {
          question:
            "Will there be support or training provided to educators for implementing Letstute's program?",
          answer:
            "Letstute offers training sessions and can also offer workshops for educators to familiarize them with the program's content, teaching methodologies, and best practices for effective implementation.",
        },
        {
          question:
            "How will Letstute's program measure students' progress and understanding of financial concepts?",
          answer:
            "The program includes assessments, quizzes, oand progress tracking tools to evaluate students' comprehension and progress throughout the course, allowing educators to monitor their development.",
        },
        {
          question:
            "Can Letstute's financial literacy program contribute to extracurricular activities or student clubs?",
          answer:
            "Letstute's program offers supplementary materials and guidance for establishing financial literacy clubs or organizing related extracurricular activities within the school.",
        },
        {
          question:
            "What ongoing support or resources will be available to the school after implementing Letstute's financial literacy program?",
          answer:
            'Letstute provides continuous support, access to updated materials, and forums for educators to exchange ideas and experiences, ensuring the sustainability and effectiveness of the program.',
        },
        {
          question: 'WHat is a Finosophy School?',
          answer:
            "Partnering with Letstute for our financial literacy program  offers schools a comprehensive and engaging solution to enrich students' financial education, empowering them with essential life skills,talented pool of certified Financially Literate Teachers garnering respect amongst peer school  and become a Finosophy School.",
        },
      ],
    },
  },
};

const courses = {
  academic: [
    {
      name: 'Level 1',
      age: '10-11',
      desc: 'This extensive online course will educate you on vital financial literacy skills. Through real-world examples and activities, you may learn how to set up a budget, save money, invest, manage your credit, and handle debt. We will build up your confidence and you can control your financial future.',
      features: [
        '8 Pre-recorded Videos',
        '14 Amazing Chapters',
        '8 Interactive Activities',
        '14 Interactive Flashcards',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/870947079?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/644fa8cfe4b04f2ff1c08255?pid=p1',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1ukE9yeKfUNiNdE77Gimhg87DnOx5EqyV&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-1-cover.png',
      colorCode: '#53c7f8',
    },
    {
      name: 'Level 2',
      age: '11-12',
      desc: 'The Financial Literacy Online Course Level 2 is a thorough course that builds on Level 1, focusing on advanced concepts and strategies in finance, such as investing, retirement planning, and risk management, through interactive lessons and practical exercises.',
      features: [
        '9 Pre-recorded Videos',
        '20 Amazing Chapters',
        '9 Interactive Activities',
        '20 Interactive Flashcards',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/64817b66e4b09ba937123fb9?pid=p1',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1cA5XoK7OEK32O8myvZoL5mXifI-STEj9&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-2-cover.png',
      colorCode: '#b1cd67',
    },
    {
      name: 'Level 3',
      age: '12-13',
      desc: 'Master advanced finance in Level 3: from Household Economics to Securities Market. Gain expertise in Savings, Investments, and Behavior Aspects. Acquire practical skills for confident financial decision-making.',
      features: [
        '11 Pre-recorded Videos',
        '22 Amazing Chapters',
        '11 Interactive Activities',
        '22 Interactive Flashcards',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/64b7b516e4b067424cc6f47b?pid=p1',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=12RHA4KU-y9n6FNttFdnKkNK5-QEkIIY5&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-3-cover.png',
      colorCode: '#f5b51f',
    },
    {
      name: 'Level 4',
      age: '13-14',
      desc: 'Improve your financial understanding with Level 4. Discover complex subjects including banking and consumer protection, as well as investments and behavioral aspects. learn how to protect your assets and make good financial decisions.',
      features: [
        '12 Pre-recorded Videos',
        '24 Amazing Chapters',
        '12 Interactive Activities',
        '24 Interactive Flashcards',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/64f02ffee4b0d0e2871bd909?pid=p1',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1MWhfG5nOaiIrtYUcaqVCsH4ogTXpUmA1&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-4-cover.jpg',
      colorCode: '#f06ea6',
    },
    {
      name: 'Level 5',
      age: '14-15',
      desc: 'This Course takes your financial knowledge to new heights. Explore advanced banking, investment, and behavior aspects. Get savvy with asset allocation and risk assessment. Plan for retirement, safeguard against scams, and master tax return essentials.',
      features: [
        '12 Pre-recorded Videos',
        '24 Amazing Chapters',
        '12 Interactive Activities',
        '24 Interactive Flashcards',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/65325bb9e4b020072f2094ac?pid=p1',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=14tnfjFulbq_6sAOkWGFRVPYlgwU7iwG3&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-5-cover.jpg',
      colorCode: '#49c085',
    },
    {
      name: 'Level 6',
      age: '15-16',
      desc: "With Level 6, you'll be a financial expert. Explore the ways in which you can make informed financial decisions, including banking intricacies and investment strategies. Find out how to plan for retirement, avoid scams, and reduce taxes.",
      features: [
        '11 Pre-recorded Videos',
        '28 Amazing Chapters',
        '11 Interactive Activities',
        '28 Interactive Flashcards',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
      price: 'Coming soon...',
      purchaseLink: '#',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1UKLJaAZBH6W3QfJam46mq0XlCf-gFWzA&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-6-cover.jpg',
      colorCode: '#fd906f',
    },
  ],
  youth: [
    {
      name: 'Online Course',
      age: '16+',
      desc: 'This extensive online course will educate you on vital financial literacy skills. Through real-world examples and activities, you may learn how to set up a budget, save money, invest, manage your credit, and handle debt. We will build up your confidence and you can control your financial future.',
      features: [
        '25 Pre-recorded Videos',
        '31 Amazing Chapters',
        '24 Interactive Activities',
        '31 Interactive Flashcards',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/870947079?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/654b316ce4b02a857b5537bd?pid=p1',
      downloadBtnText: 'Download Brochure',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/youth-thumbnail.png',
      colorCode: '#f5b51f',
    },
    {
      name: 'Book / eBook',
      age: '16+',
      desc: 'This extensive online course will educate you on vital financial literacy skills. Through real-world examples and activities, you may learn how to set up a budget, save money, invest, manage your credit, and handle debt. We will build up your confidence and you can control your financial future.',
      features: ['31 Chapters Book / eBook', '10+ Complementary Videos'],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/870947079?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/654b316ce4b02a857b5537bd?pid=p1',
      downloadBtnText: 'Download Brochure',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/youth-thumbnail.png',
      colorCode: '#f5b51f',
    },
  ],
  school: [
    {
      name: 'Level 1-6 Combo',
      age: '16+',
      desc: 'This extensive online course will educate you on vital financial literacy skills. Through real-world examples and activities, you may learn how to set up a budget, save money, invest, manage your credit, and handle debt. We will build up your confidence and you can control your financial future.',
      features: [
        '25 Pre-recorded Videos',
        '31 Amazing Chapters',
        '24 Interactive Activities',
        '31 Interactive Flashcards',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/870947079?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/654b316ce4b02a857b5537bd?pid=p1',
      downloadBtnText: 'Download Brochure',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/youth-thumbnail.png',
    },
  ],
};

/* VARIABLES */
const switcherDropdown = document.getElementById('switcher__dropdown');
const heroContainer = document.querySelector('.hero__container');
const featuresContainer = document.querySelector('.features__container');
const coursesContainer = document.querySelector('.courses__container');
const faqsContainer = document.querySelector('.faqs__container');

/* COMPONENTS */
/* Tabs */
const tabs = function () {
  const btnContainer = document.querySelector('.tabs__btn-container');
  const btns = document.querySelectorAll('.tabs__btn');
  const contents = document.querySelectorAll('.tabs__content');

  btnContainer.addEventListener('click', function (e) {
    const btn = e.target.closest('.tabs__btn');

    if (!btn) return;

    btns.forEach((tb) => tb.classList.remove('tabs__btn--active'));
    contents.forEach((tc) => tc.classList.remove('tabs__content--active'));

    btn.classList.add('tabs__btn--active');

    const content = document.querySelector(
      `.tabs__content--${btn.dataset.tabsbtn}`
    );

    content.classList.add('tabs__content--active');
  });
};

/* Accordion */
const accordion = function () {
  const accordionItems = document.querySelectorAll('.accordion__item');
  const accordionIcons = document.querySelectorAll('.accordion__icon');

  accordionItems.forEach((accordionItem, i) => {
    let isOpen = accordionItem.classList.contains('accordion__active');

    if (isOpen) accordionIcons[i].innerHTML = '-';

    accordionItem.addEventListener('click', () => {
      isOpen = accordionItem.classList.contains('accordion__active');

      if (!isOpen) {
        accordionItems.forEach((item) =>
          item.classList.remove('accordion__active')
        );
        accordionIcons.forEach((icon) => (icon.innerHTML = '+'));
        accordionItem.classList.add('accordion__active');
        accordionIcons[i].innerHTML = '-';
      } else {
        accordionItem.classList.remove('accordion__active');
        accordionIcons[i].innerHTML = '+';
      }
    });
  });
};

/* FUNCTIONS */
/* Insert Dynamic Code */
const insertDynamicCode = function (place, position, code) {
  place.insertAdjacentHTML(position, code);
};

/* Render Content */
const renderContent = function (key) {
  const heroSectionCode = `
    <div class="hero__content-container fade-in">
      <h2 class="hero__heading--1">${categories[key].heroSection.heading1}</h2>
      <h2 class="hero__heading--2">${categories[key].heroSection.heading2}</h2>
      <h2 class="hero__heading--3">${categories[key].heroSection.heading3}</h2>

      <div class="hero__btns-container">
        <a href="#" class="hero__btn btn btn--outline">Download Complete Brochure</a>
        <a href="#courses" class="hero__btn btn btn--fill">Explore Finosophy Products</a>
      </div>
    </div>

    <div class="hero__img-container fade-in">
      <img src="${categories[key].heroSection.img}" alt="" class="hero__img" />
    </div>
  `;

  heroContainer.innerHTML = '';
  insertDynamicCode(heroContainer, 'beforeend', heroSectionCode);

  const featuresSectionCode = `
    <div class="header">
      <h2 class="header__heading">Why Finosophy?</h2>
      <div class="header__underline"></div>
    </div>

    ${categories[key].featuresSection.features
      .map((f) => {
        return `
          <div class="feature-card">
            <img
              src="${f.icon}"
              alt=""
              class="feature-card__icon"
            />
            <h3 class="feature-card__heading">${f.heading}</h3>
          </div>
        `;
      })
      .join('')}
  `;

  featuresContainer.innerHTML = '';
  insertDynamicCode(featuresContainer, 'beforeend', featuresSectionCode);

  const coursesSectionCode = `
    <div class="header container">
      <h2 class="header__heading">Choose Your Finosophy Product</h2>
      <div class="header__underline"></div>
    </div>

  <div class="tabs">
    <div class="tabs__btn-container container">
      ${courses[
        key === 'kids' || key === 'teacher'
          ? 'academic'
          : key === 'youth'
          ? 'youth'
          : 'school'
      ]
        .map((c, i) => {
          return `
            <button
              class="tabs__btn tabs__btn--${i + 1} ${
            i === 0 && 'tabs__btn--active'
          }"
              data-tabsbtn="${i + 1}"
            >
            ${c.name}
            </button>
          `;
        })
        .join('')}
    </div>

    ${courses[
      key === 'kids' || key === 'teacher'
        ? 'academic'
        : key === 'youth'
        ? 'youth'
        : 'school'
    ]
      .map((c, i) => {
        return `
        <div class="tabs__content tabs__content--${i + 1} ${
          i === 0 && 'tabs__content--active'
        }">
          <div class="courses__bg-img-container">
            <img
              src="https://www.letstute.com/s/pages/assets/images/music-bg.png"
              alt=""
              class="courses__bg-img"
            />
          </div>

          <div class="courses__courses-container container fade-in">
            <div class="courses__course-header">
              <div class="courses__course-img-container">
                <img src="${c.thumbnail}" alt="" class="courses__course-img" />
              </div>
  
              <div class="courses__course-content-container">
              <h3 class="courses__course-heading heading-3" style="background-color: ${
                c.colorCode
              }">
                Learn About Finosophy ${c.name}
              </h3>
              <span class="courses__course-subheading">Suitable for the age group ${
                c.age
              } years</span>
              </div>
            </div>

            <div class="courses__course-container" style="border-top: 1rem solid ${
              c.colorCode
            }">
              <p class="courses__course-desc para">${c.desc}</p>

              <div class="courses__course-features-container">
                <div class="header">
                  <h2 class="header__heading">What You'll Get</h2>
                  <div class="header__underline" style="background-color: ${
                    c.colorCode
                  }"></div>
                </div>

                ${c.features
                  .map((f) => {
                    return `
                    <div class="feature-card">                        
                    <h3 class="feature-card__heading">${f}</h3>
                    <a href="#" class="feature-card__btn">> Preview</a>
                  </div>
                  `;
                  })
                  .join('')}
              </div>

              <div class="courses__course-btns-container">
              <a href="${
                c.downloadBtnLink
              }" class="courses__course-btn btn btn--outline">${
          c.downloadBtnText
        }</a>
                <a href="${
                  c.purchaseLink
                }" class="courses__course-btn btn btn--fill">${c.price}</a>
              </div>
              
            </div>
          </div>
        </div>
      `;
      })
      .join('')}
    </div>
  `;

  coursesContainer.innerHTML = '';
  insertDynamicCode(coursesContainer, 'beforeend', coursesSectionCode);

  const faqsSectionCode = `
    <div class="header">
      <h2 class="header__heading">Frequently Asked Questions</h2>
      <div class="header__underline"></div>
    </div>

    <div class="accordion">
      ${categories[key].faqsSection.faqs
        .map((f, i) => {
          return `
          <div class="accordion__item ${
            i == 0 && 'accordion__active'
          }"> <p class="accordion__num">${i <= 8 ? '0' : ''}${
            i + 1
          }</p> <h4 class="accordion__title"> ${
            f.question
          } </h4> <span class="accordion__icon">+</span> <p class="accordion__content"> ${
            f.answer
          } </p> </div>
        `;
        })
        .join('')}
    </div>
  `;

  faqsContainer.innerHTML = '';
  insertDynamicCode(faqsContainer, 'beforeend', faqsSectionCode);
};

/* Init */
const init = function (category) {
  if (categories[category]) {
    renderContent(category);
  } else {
    alert('Category not found!');
  }

  tabs();
  accordion();
};

/* Update Dropdown and Hash */
const updateSwitcherDropdownAndURL = function (category) {
  switcherDropdown.value = category;
  window.location.hash = category;

  init(category);
};

/* Load Content Based on URL Hash */
window.addEventListener('load', function () {
  let categoryURL = window.location.hash.substring(1);

  if (!categories[categoryURL]) {
    let defaultCategory = Object.keys(categories)[0];

    updateSwitcherDropdownAndURL(defaultCategory);
  } else {
    updateSwitcherDropdownAndURL(categoryURL);
  }
});

/* SECTIONS */
/* Switcher Section */
switcherDropdown.addEventListener('change', function () {
  updateSwitcherDropdownAndURL(this.value);
});
