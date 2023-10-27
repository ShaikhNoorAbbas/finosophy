'use strict';

// Datasets
const student = [
  {
    heroSection: {
      heading: 'What is Finosophy?',
      para: 'Pathway to build financially literate and financially resilient students through scientifically curated course with lesson plans, interactive games, flashcards and live projects.',
      img: 'https://www.letstute.com/s/pages/assets/images/student-hero-img.jpg',
      formBtnText: 'Enquire Now',
    },
    coursesSection: {
      header: 'Financial Literacy Courses',
      courses: [
        {
          id: 1,
          name: 'Finosophy Level 1',
          age: 'Age group 8-9 yrs',
          desc: 'This extensive online course will educate you on vital financial literacy skills. Through real-world examples and activities, you may learn how to set up a budget, save money, invest, manage your credit, and handle debt. We will build up your confidence and you can control your financial future.',
          features: [
            '8 Interactive Activities',
            '14 Interactive Flashcards',
            '14 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
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
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-1-cover.png',
        },
        {
          id: 2,
          name: 'Finosophy Level 2',
          age: 'Age group 9-10 yrs',
          desc: 'The Financial Literacy Online Course Level 2 is a thorough course that builds on Level 1, focusing on advanced concepts and strategies in finance, such as investing, retirement planning, and risk management, through interactive lessons and practical exercises.',
          features: [
            '9 Interactive Activities',
            '20 Interactive Flashcards',
            '20 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
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
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-2-cover.png',
        },
        {
          id: 3,
          name: 'Finosophy Level 3',
          age: 'Age group 10-11 yrs',
          desc: 'Master advanced finance in Level 3: from Household Economics to Securities Market. Gain expertise in Savings, Investments, and Behavior Aspects. Acquire practical skills for confident financial decision-making.',
          features: [
            '11 Interactive Activities',
            '22 Interactive Flashcards',
            '22 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
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
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-3-cover.png',
        },
        {
          id: 4,
          name: 'Finosophy Level 4',
          age: 'Age group 11-12 yrs',
          desc: 'Improve your financial understanding with Level 4. Discover complex subjects including banking and consumer protection, as well as investments and behavioral aspects. learn how to protect your assets and make good financial decisions.',
          features: [
            '12 Interactive Activities',
            '24 Interactive Flashcards',
            '24 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
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
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-4-cover.jpg',
        },
        {
          id: 5,
          name: 'Finosophy Level 5',
          age: 'Age group 12-13 yrs',
          desc: 'This Course takes your financial knowledge to new heights. Explore advanced banking, investment, and behavior aspects. Get savvy with asset allocation and risk assessment. Plan for retirement, safeguard against scams, and master tax return essentials.',
          features: [
            '12 Interactive Activities',
            '24 Interactive Flashcards',
            '24 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
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
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-5-cover.jpg',
        },
        {
          id: 6,
          name: 'Finosophy Level 6',
          age: 'Age group 13-14 yrs',
          desc: "With Level 6, you'll be a financial expert. Explore the ways in which you can make informed financial decisions, including banking intricacies and investment strategies. Find out how to plan for retirement, avoid scams, and reduce taxes.",
          features: [
            '11 Interactive Activities',
            '28 Interactive Flashcards',
            '28 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Coming soon...',
          purchaseLink: '#',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-6-cover.jpg',
        },
      ],
    },
    faqsSection: {
      faqs: [
        {
          id: 1,
          question: 'Why is financial literacy important for students?',
          answer:
            'Financial literacy is crucial for students as it equips them with essential LIFE SKILLS to manage their finances effectively. It helps them make informed decisions about spending, saving, and investing money, which can have a significant impact on their financial well-being in the long run.',
        },
        {
          id: 2,
          question:
            'What topics are typically covered in a financial literacy course?',
          answer:
            'A financial literacy course usually covers a range of topics, including budgeting, saving and investing, credit and debt management, taxes, insurance, retirement planning, and financial goal-setting. It may also touch upon topics like financial scams, consumer rights, and responsible spending.',
        },
        {
          id: 3,
          question:
            'How can financial literacy benefit me in my everyday life?',
          answer:
            'Financial literacy can benefit you in numerous ways. It helps you develop good money management habits, make informed decisions about spending and saving, avoid debt traps, understand financial products and services, plan for major life events like buying a house or starting a family, investing in stocks etc and work towards achieving your financial goals.',
        },
        {
          id: 4,
          question: 'Can financial literacy help me in my career?',
          answer:
            'Absolutely! Financial literacy can be valuable in your career, regardless of your field. Understanding financial concepts can help you make sound business decisions, manage personal finances during job transitions, negotiate salary and benefits effectively, in short it makes you stay ahead of your game and and builds confidence towards living a better financial life.',
        },
        {
          id: 5,
          question:
            'Are there any prerequisites for taking a financial literacy course?',
          answer:
            'Most financial literacy courses are designed to be accessible to students without any prior financial knowledge. However, basic math and arithmetic skills are helpful for understanding financial calculations and concepts.',
        },
        {
          id: 6,
          question:
            'How can I apply what I learn in a financial literacy course to my own life?',
          answer:
            'To apply what you learn, start by assessing your current financial situation, setting specific financial goals, and creating a budget. Implement the strategies and techniques learned in the course, such as saving a portion of your income, tracking your expenses, and making informed decisions about spending. Regularly review your progress and make adjustments as needed.',
        },
        {
          id: 7,
          question:
            'How can I continue to improve my financial literacy after completing the course?',
          answer:
            'Financial literacy is an ongoing learning process. After completing the course, you can continue to enhance your knowledge by reading personal finance books, following financial blogs, attending workshops or webinars, and staying updated on financial news and trends. Joining online communities or forums dedicated to personal finance can also provide opportunities for learning and sharing experiences.',
        },
        {
          id: 8,
          question:
            'Can financial literacy help me avoid financial scams and frauds?',
          answer:
            'Yes, financial literacy can help you identify and avoid common financial scams and frauds. By understanding how scams operate and being aware of warning signs, you can protect yourself and your finances from fraudulent activities. Additionally, learning about consumer rights and financial regulations can empower you to make informed decisions and take appropriate action when necessary.',
        },
      ],
    },
  },
];

const teacher = [
  {
    heroSection: {
      heading: 'What is Finosophy?',
      para: 'Pathway to build financially literate and financially resilient Students through scientifically curated course with lesson plans, interactive games, flashcards and live projects.',
      img: 'https://www.letstute.com/s/pages/assets/images/teacher-hero-img.jpg',
      formBtnText: 'Enquire Now',
    },
    coursesSection: {
      header: 'Finosophy Lesson Plans',
      courses: [
        {
          id: 1,
          name: 'Finosophy Level 1',
          age: 'Age group 8-9 yrs',
          desc: 'This extensive online course will educate you on vital financial literacy skills. Through real-world examples and activities, you may learn how to set up a budget, save money, invest, manage your credit, and handle debt. We will build up your confidence and you can control your financial future.',
          features: [
            '8 Interactive Activities',
            '14 Interactive Flashcards',
            '14 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Enroll Now for FREE',
          purchaseLink:
            'https://www.letstute.com/single-checkout/64f81896e4b002bd529682a9?pid=p1',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-1-cover.png',
        },
        {
          id: 2,
          name: 'Finosophy Level 2',
          age: 'Age group 9-10 yrs',
          desc: 'The Financial Literacy Online Course Level 2 is a thorough course that builds on Level 1, focusing on advanced concepts and strategies in finance, such as investing, retirement planning, and risk management, through interactive lessons and practical exercises.',
          features: [
            '9 Interactive Activities',
            '20 Interactive Flashcards',
            '20 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Coming soon...',
          purchaseLink: '#',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-2-cover.png',
        },
        {
          id: 3,
          name: 'Finosophy Level 3',
          age: 'Age group 10-11 yrs',
          desc: 'Master advanced finance in Level 3: from Household Economics to Securities Market. Gain expertise in Savings, Investments, and Behavior Aspects. Acquire practical skills for confident financial decision-making.',
          features: [
            '11 Interactive Activities',
            '22 Interactive Flashcards',
            '22 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Coming soon...',
          purchaseLink: '#',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-3-cover.png',
        },
        {
          id: 4,
          name: 'Finosophy Level 4',
          age: 'Age group 11-12 yrs',
          desc: 'Improve your financial understanding with Level 4. Discover complex subjects including banking and consumer protection, as well as investments and behavioral aspects. learn how to protect your assets and make good financial decisions.',
          features: [
            '12 Interactive Activities',
            '24 Interactive Flashcards',
            '24 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink: '#',
          price: 'Coming soon...',
          purchaseLink:
            'https://www.letstute.com/single-checkout/64f02ffee4b0d0e2871bd909?pid=p1',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-4-cover.jpg',
        },
        {
          id: 5,
          name: 'Finosophy Level 5',
          age: 'Age group 12-13 yrs',
          desc: 'This Course takes your financial knowledge to new heights. Explore advanced banking, investment, and behavior aspects. Get savvy with asset allocation and risk assessment. Plan for retirement, safeguard against scams, and master tax return essentials.',
          features: [
            '12 Interactive Activities',
            '24 Interactive Flashcards',
            '24 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Coming soon...',
          purchaseLink: '#',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-5-cover.jpg',
        },
        {
          id: 6,
          name: 'Finosophy Level 6',
          age: 'Age group 13-14 yrs',
          desc: "With Level 6, you'll be a financial expert. Explore the ways in which you can make informed financial decisions, including banking intricacies and investment strategies. Find out how to plan for retirement, avoid scams, and reduce taxes.",
          features: [
            '11 Interactive Activities',
            '28 Interactive Flashcards',
            '28 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Coming soon...',
          purchaseLink: '#',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-6-cover.jpg',
        },
      ],
    },
    faqsSection: {
      faqs: [
        {
          id: 1,
          question:
            'What qualifications or expertise do I need to teach a financial literacy course?',
          answer:
            'While specific qualifications may vary depending on your educational institution or region, having a background or expertise in finance, economics, or related fields can be beneficial. Additionally, familiarity with financial concepts, personal finance management, and teaching methodologies is crucial. Professional development courses or certifications in financial literacy education can also enhance your knowledge and skills.',
        },
        {
          id: 2,
          question:
            'How can I integrate financial literacy into my existing curriculum?',
          answer:
            'Integrating financial literacy into your curriculum can be done in various ways. Look for opportunities to connect financial concepts to subjects like mathematics, social studies, or business. For example, teaching financial calculations in math class or discussing economic principles and personal finance in social studies. You can also consider standalone units or dedicated lessons on financial literacy within your subject area.',
        },
        {
          id: 3,
          question:
            'Are there any specific resources or materials available for teaching financial literacy?',
          answer:
            'Letstute provides Teacher training lesson plans for Teachers to learn how to teach Financial Literacy to students.',
        },
        {
          id: 4,
          question:
            'How can I make financial literacy engaging and relevant for my students?',
          answer:
            'Making financial literacy engaging involves teaching methods mentioned in Letstute LessonPlans. Letstute has Incorporated gaming activities and flash cards to make learning more engaging. Teachers can also include group discussions, case studies, and role-playing exercises. Encourage students to connect financial concepts to their own lives, such as budgeting for a trip or understanding the costs of college. Guest speakers from financial institutions or experts in personal finance can also provide real-world insights.',
        },
        {
          id: 5,
          question:
            'How can I assess students understanding of financial literacy concepts?',
          answer:
            'Letstute provided a live project at the end of the course for students to put their learning in real life use. Further, assessment methods can include quizzes, tests, projects, presentations, financial simulations, and group assignments. Consider using real-life scenarios or case studies that require students to apply their knowledge and make informed financial decisions. Assessing financial literacy skills may also involve evaluating budgeting exercises, investment portfolios, or analyzing financial data.',
        },
      ],
    },
  },
];

const school = [
  {
    heroSection: {
      heading: 'What is Finosophy?',
      para: 'Pathwayy to build financially literate and financially resilient Students through scientifically curated course with lesson plans, interactive games, flashcards and live projects.',
      img: 'https://www.letstute.com/s/pages/assets/images/teacher-hero-img.jpg',
      formBtnText: 'Book a FREE Demo',
    },
    coursesSection: {
      header: 'Financial Literacy Courses',
      courses: [
        {
          id: 1,
          name: 'Finosophy Level 1',
          age: 'Age group 8-9 yrs',
          desc: 'This extensive online course will educate you on vital financial literacy skills. Through real-world examples and activities, you may learn how to set up a budget, save money, invest, manage your credit, and handle debt. We will build up your confidence and you can control your financial future.',
          features: [
            '8 Interactive Activities',
            '14 Interactive Flashcards',
            '14 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Enroll Now for FREE',
          purchaseLink:
            'https://www.letstute.com/single-checkout/64f81896e4b002bd529682a9?pid=p1',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-1-cover.png',
        },
        {
          id: 2,
          name: 'Finosophy Level 2',
          age: 'Age group 9-10 yrs',
          desc: 'The Financial Literacy Online Course Level 2 is a thorough course that builds on Level 1, focusing on advanced concepts and strategies in finance, such as investing, retirement planning, and risk management, through interactive lessons and practical exercises.',
          features: [
            '9 Interactive Activities',
            '20 Interactive Flashcards',
            '20 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Coming soon...',
          purchaseLink: '#',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-2-cover.png',
        },
        {
          id: 3,
          name: 'Finosophy Level 3',
          age: 'Age group 10-11 yrs',
          desc: 'Master advanced finance in Level 3: from Household Economics to Securities Market. Gain expertise in Savings, Investments, and Behavior Aspects. Acquire practical skills for confident financial decision-making.',
          features: [
            '11 Interactive Activities',
            '22 Interactive Flashcards',
            '22 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Coming soon...',
          purchaseLink: '#',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-3-cover.png',
        },
        {
          id: 4,
          name: 'Finosophy Level 4',
          age: 'Age group 11-12 yrs',
          desc: 'Improve your financial understanding with Level 4. Discover complex subjects including banking and consumer protection, as well as investments and behavioral aspects. learn how to protect your assets and make good financial decisions.',
          features: [
            '12 Interactive Activities',
            '24 Interactive Flashcards',
            '24 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink: '#',
          price: 'Coming soon...',
          purchaseLink:
            'https://www.letstute.com/single-checkout/64f02ffee4b0d0e2871bd909?pid=p1',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-4-cover.jpg',
        },
        {
          id: 5,
          name: 'Finosophy Level 5',
          age: 'Age group 12-13 yrs',
          desc: 'This Course takes your financial knowledge to new heights. Explore advanced banking, investment, and behavior aspects. Get savvy with asset allocation and risk assessment. Plan for retirement, safeguard against scams, and master tax return essentials.',
          features: [
            '12 Interactive Activities',
            '24 Interactive Flashcards',
            '24 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Coming soon...',
          purchaseLink: '#',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-5-cover.jpg',
        },
        {
          id: 6,
          name: 'Finosophy Level 6',
          age: 'Age group 13-14 yrs',
          desc: "With Level 6, you'll be a financial expert. Explore the ways in which you can make informed financial decisions, including banking intricacies and investment strategies. Find out how to plan for retirement, avoid scams, and reduce taxes.",
          features: [
            '11 Interactive Activities',
            '28 Interactive Flashcards',
            '28 Amazing Chapters',
            'Access Anywhere 24/7',
            'Students Assessments',
            'Course Certificate',
          ],
          game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
          flashcard:
            'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
          videoLink:
            'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
          price: 'Coming soon...',
          purchaseLink: '#',
          brochureLink:
            'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
          thumbnail:
            'https://www.letstute.com/s/pages/assets/images/letstute-level-6-cover.jpg',
        },
      ],
    },
    faqsSection: {
      faqs: [
        {
          id: 1,
          question:
            'Should financial literacy be incorporated into the curriculum?',
          answer:
            'Yes, incorporating Letstute financial literacy program FInosophy into the curriculum is highly beneficial. It equips students with essential life skills that contribute to their personal and financial well-being. Financial literacy education promotes responsible financial behavior, helps students navigate the complex financial landscape, and prepares them for the challenges of adulthood.',
        },
        {
          id: 2,
          question:
            'At what grade level should financial literacy be introduced?',
          answer:
            'Financial literacy can be introduced at various grade levels, starting as early from grade 5th / 6th. Basic concepts like money recognition, saving, and simple budgeting can be introduced in primary grades, while more advanced topics like investing and credit management can be covered in middle and high school. A progressive approach that builds on previous knowledge is effective.',
        },
        {
          id: 3,
          question:
            'Are there any partnerships or collaborations that schools can engage in for financial literacy education?',
          answer:
            'Yes, Letstue can help schools in collaboration with financial institutions, local businesses, nonprofit organizations, and community groups to enhance financial literacy education. These partners can provide resources, guest speakers, mentorship programs, or even sponsor financial literacy events and workshops. Collaborations can bring real-world expertise and practical experiences into the classroom.',
        },
        {
          id: 4,
          question:
            'How can schools support teachers in teaching financial literacy?',
          answer:
            'Schools can support teachers by providing professional development opportunities focused on financial literacy education. This can include workshops, seminars, and conferences that enhance teachers knowledge and teaching strategies. Allocating resources for financial literacy materials and technology, as well as creating a supportive network for sharing best practices, can also be beneficial.',
        },
        {
          id: 5,
          question:
            'Is it possible to measure the impact of financial literacy education in schools?',
          answer:
            'Measuring the impact of financial literacy education can be challenging but is possible. Letstute provides its LMS where Schools can assess students financial knowledge and skills progress while the students are learning and share the same with parents too. Letstute course provides warm ups and test to check pre and post learning of students. Surveys or questionnaires can also gather feedback from students about their financial behaviors and attitudes. Long-term studies tracking students financial outcomes can provide valuable insights.',
        },
      ],
    },
  },
];

// Components
// Modal
const modal = function () {
  const modal = document.getElementById('modal');
  const modalIframe = document.querySelector('.modal__iframe');
  const modalOpenBtn = document.querySelectorAll('.modal-open-btn');
  const modalCloseBtn = document.querySelector('.modal__close-btn');

  function openModal(src) {
    modalIframe.src = src;
    modal.style.display = 'flex';
  }

  function closeModal() {
    modal.style.display = 'none';
    modalIframe.src = '';
  }

  modalOpenBtn.forEach((mob) => {
    mob.addEventListener('click', function () {
      openModal(mob.dataset.interactive);
    });
  });

  modalCloseBtn.addEventListener('click', closeModal);

  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };
};

// Tabs
const tabs = function () {
  const tabsBtnContainer = document.querySelector('.tabs__btn-container');
  const tabsBtns = document.querySelectorAll('.tabs__btn');
  const tabsContents = document.querySelectorAll('.tabs__content');

  tabsBtnContainer.addEventListener('click', function (e) {
    const tabsBtn = e.target.closest('.tabs__btn');

    if (!tabsBtn) return;

    tabsBtns.forEach((tb) => tb.classList.remove('tabs__btn--active'));
    tabsContents.forEach((tc) => tc.classList.remove('tabs__content--active'));

    tabsBtn.classList.add('tabs__btn--active');

    const tabsContent = document.querySelector(
      `.tabs__content--${tabsBtn.dataset.tabsbtn}`
    );

    tabsContent.classList.add('tabs__content--active');
  });
};

// Slider
const slider = function () {
  const slider = document.querySelector('.slider');
  const sliderLeftBtn = document.querySelector('.slider__btn--left');
  const sliderRightBtn = document.querySelector('.slider__btn--right');
  let sliderSlides = Array.from(document.querySelectorAll('.slider__slide'));

  const updateSlides = function () {
    sliderSlides.forEach((slide) => {
      slider.appendChild(slide);
    });
  };

  const rotateSliderLeft = function () {
    const el = sliderSlides.shift();
    sliderSlides.push(el);
    updateSlides();
  };

  const rotateSliderRight = function () {
    const el = sliderSlides.pop();
    sliderSlides.unshift(el);
    updateSlides();
  };

  sliderLeftBtn.addEventListener('click', rotateSliderRight);

  sliderRightBtn.addEventListener('click', rotateSliderLeft);

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && rotateSliderLeft();
    e.key === 'ArrowRight' && rotateSliderRight();
  });
};

// Accordion
const accordion = function () {
  const accordionItems = document.querySelectorAll('.accordion__item');
  const accordionIcons = document.querySelectorAll('.accordion__icon');

  accordionItems.forEach((accordionItem, i) => {
    accordionItem.addEventListener('click', () => {
      const isOpen = accordionItem.classList.contains('accordion__active');

      if (!isOpen) {
        accordionItems.forEach((accordionItem) => {
          accordionItem.classList.remove('accordion__active');
        });

        accordionIcons.forEach((accordionIcon) => {
          accordionIcon.innerHTML = '+';
        });

        accordionItem.classList.add('accordion__active');

        accordionIcons[i].innerHTML = '-';
        return;
      } else {
        accordionItem.classList.remove('accordion__active');

        accordionIcons[i].innerHTML = '+';
      }
    });
  });
};

// Variables
// Nav btn section
const navBtns = document.querySelectorAll('.nav-btn__btn');

// Hero section
const heroContainer = document.querySelector('.hero__container');

// Courses section
const coursesContainer = document.querySelector('.courses__container');

// FAQs section
const faqsFaqsContainer = document.querySelector('.faqs__faqs-container');

// Functions
// Insert dynamic code
const insertDynamicCode = function (place, position, code) {
  place.insertAdjacentHTML(position, code);
};

// Render content function
const renderContent = function (dataset) {
  // Hero section

  const heroCode = `
    <div class="hero__content-container move-in-left">
      <h1 class="hero__heading heading-1">${dataset[0].heroSection.heading}</h1>

      <p class="hero__para para">
        ${dataset[0].heroSection.para}
      </p>

      <img
        src="${dataset[0].heroSection.img}"
        alt=""
        class="hero__img hero__img--mob move-in-right"
      />

      <form action="#" method="POST" class="form">
        <div class="form__header">
          <h4 class="form__heading heading-4">
            Enquire Now for FREE Demo
          </h4>
          <p class="form__para para">Or, call +91 93214 21265</p>
        </div>

        <div class="form__phone-input">
          <select name="countryCode">
            <option value="+91">+91</option>
          </select>

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            required
          />
        </div>

        <input
          type="submit"
          value="${dataset[0].heroSection.formBtnText}"
          class="form__btn btn btn--fill"
        />
      </form>
    </div>

    <img
      src="${dataset[0].heroSection.img}"
      alt=""
      class="hero__img hero__img--desk move-in-right"
    />
  `;

  heroContainer.innerHTML = '';

  insertDynamicCode(heroContainer, 'beforeend', heroCode);

  // Courses section
  const header = `
    <div class="header">
      <h2 class="header__heading header__heading--purple heading-2 move-in-top">
        ${dataset[0].coursesSection.header}
      </h2>
    </div>
  `;

  const courses = dataset[0].coursesSection.courses;

  const tabs = `
    <div class="tabs">
      <div class="tabs__btn-container slider">
        ${courses
          .map((c, i) => {
            return `
            <div class="slider__slide">
              <img src=${c.thumbnail} alt="" class="tabs__btn tabs__btn--${
              i + 1
            } ${i === 0 ? 'tabs__btn--active' : ''}" data-tabsbtn="${i + 1}"/>
            </div>
          `;
          })
          .join('')}

          <button class="slider__btn slider__btn--left"><i class="ri-arrow-left-s-fill"></i></button>
          <button class="slider__btn slider__btn--right"><i class="ri-arrow-right-s-fill"></i></button>
      </div>

      ${courses
        .map((c, i) => {
          return `
            <div class="tabs__content tabs__content--${i + 1} ${
            i === 0 ? 'tabs__content--active' : ''
          }">
              <div class="courses__tabs-content-label-container">
                <span class="courses__tabs-content-label courses__tabs-content-label--primary">${
                  c.name
                }</span>
                <span class="courses__tabs-content-label courses__tabs-content-label--secondary">${
                  c.age
                }</span>
              </div>
      
              <div class="courses__tabs-content-header">
                <h3 class="courses__tabs-content-heading heading-3">About ${
                  c.name
                }</h3>
                <p class="courses__tabs-content-para para">${c.desc}</p>
              </div>
  
              <ul class="courses__tabs-content-list">
                ${c.features
                  .map((feature) => {
                    return `
                    <li><i class="ri-verified-badge-fill"></i> <span>${feature}</span></li>
                  `;
                  })
                  .join('')}
              </ul>
              
              <div class="courses__tabs-content-demo">
                <div class="courses__tabs-content-demo-img-container">
                  <img src="https://www.letstute.com/s/pages/assets/images/interactive-activity-thumbnail.png" alt="">
                  <a class="modal-open-btn" data-interactive="${
                    c.game
                  }">Play Now</a>
                </div>
                
                <div class="video-player">
                  <iframe class="video-player__video" src="https://player.vimeo.com/video/870947079?autoplay=1&loop=1&muted=1" frameborder="0" allowfullscreen></iframe>
                </div>

                <div class="courses__tabs-content-demo-img-container">
                  <img src="https://www.letstute.com/s/pages/assets/images/flashcard-thumbnail.png" alt="">
                  <a class="modal-open-btn" data-interactive="${
                    c.flashcard
                  }">Open Now</a>
                </div>
              </div>
              
              <div class="courses__tabs-content-ctas">
                <a href="${
                  c.purchaseLink
                }" class="courses__tabs-content-cta btn btn--fill">${
            c.price
          }</a>
              
                <a href="${
                  c.brochureLink
                }" class="courses__tabs-content-cta btn btn--outline">Download Brochure</a>
              </div>
            </div>
          `;
        })
        .join('')}
    </div>
  `;

  coursesContainer.innerHTML = '';

  insertDynamicCode(coursesContainer, 'beforeend', header);
  insertDynamicCode(coursesContainer, 'beforeend', tabs);

  // FAQs section
  const faqs = dataset[0].faqsSection.faqs;

  const accordion = `
    <div class="accordion">
      ${faqs
        .map((f, i) => {
          return `
            <div class="accordion__item ${i == 0 ? 'accordion__active' : ''}">
              <p class="accordion__num">0${i + 1}</p>
              <h4 class="accordion__title">
                ${f.question}
              </h4>
              <span class="accordion__icon">+</span>
              <p class="accordion__content">
                ${f.answer}
              </p>
            </div>
          `;
        })
        .join('')}
    </div>
  `;

  faqsFaqsContainer.innerHTML = '';

  insertDynamicCode(faqsFaqsContainer, 'beforeend', accordion);
};

// Init
renderContent(student);
tabs();
slider();
modal();
accordion();

// Nav Btn Section
navBtns.forEach((nb, i, arr) => {
  nb.addEventListener('click', () => {
    arr.forEach((i) => {
      i.classList.remove('nav-btn__btn--active');
    });

    nb.classList.add('nav-btn__btn--active');

    let dataSet;

    if (nb.textContent.trim() === 'Student') {
      dataSet = student;
    } else if (nb.textContent.trim() === 'Teacher') {
      dataSet = teacher;
    } else if (nb.textContent.trim() === 'School') {
      dataSet = school;
    }

    renderContent(dataSet);
    tabs();
    slider();
    modal();
    accordion();
  });
});
