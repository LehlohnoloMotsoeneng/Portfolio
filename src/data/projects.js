export const projects = [
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    category: 'Generative AI',
    type: 'Individual Project',
    status: 'Portfolio Project',
    description:
      'An AI-powered application designed to help users generate structured written content from prompts.',
    detailedDescription:
      'A generative AI project exploring how prompt-based workflows can support content drafting and iteration.',
    technologies: ['Generative AI', 'Prompt Engineering', 'AI'],
    features: [
      'Prompt input',
      'Content generation',
      'Content regeneration',
      'Copy content',
      '[VERIFY FEATURE]',
    ],
    problem:
      'Users often need a fast, structured way to turn ideas into readable written content without starting from a blank page.',
    objective:
      'Explore how generative AI can support writing workflows and assist with early-stage content creation.',
    solution:
      'Build a prompt-driven content generation experience that allows users to generate and refine written material based on inputs and intent.',
    challenges: [
      'Designing prompts that produce useful, consistent output from different types of input.',
      'Keeping the writing workflow simple while still giving users control to refine generated content.',
    ],
    results: [
      'Created a working prompt-based flow for generating and regenerating structured content.',
      'Turned an open-ended AI idea into a focused tool with a clear input, output and refinement workflow.',
    ],
    lessons: [
      'Good AI experiences depend on clear prompts, useful constraints and a thoughtful user workflow.',
      'Small interface details such as copying and regenerating content can make an experimental tool much more practical.',
    ],
    futureImprovements: [
      'Add saved drafts, prompt templates and export options for longer writing workflows.',
      'Improve validation and feedback around generated content and API errors.',
    ],
    github: 'https://github.com/LehlohnoloMotsoeneng/idea-to-crafted-content',
    liveDemo: 'https://idea-to-crafted-content.lovable.app',
    image: 'content-generator',
    role: 'Individual developer responsible for the product concept, implementation and iteration.',
    contribution: 'Designed the prompt workflow, built the interface and refined the experience around generating and reworking content.',
    filters: ['Generative AI', 'AI', 'Software'],
    featured: false,
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis',
    category: 'Artificial Intelligence / NLP',
    type: 'Individual Project',
    status: 'Portfolio Project',
    description:
      'A natural-language processing project that analyses text and classifies sentiment such as positive, negative or neutral.',
    detailedDescription:
      'An NLP-focused project exploring how text can be processed and classified according to sentiment signals.',
    technologies: ['NLP', 'Machine Learning', 'Sentiment Analysis'],
    features: [
      'Text preprocessing',
      'Sentiment classification',
      'Model evaluation',
      'Prediction',
    ],
    problem:
      'Text-based data often contains emotional or opinion-based signals that are difficult to interpret without structured analysis.',
    objective:
      'Develop an NLP workflow to analyse textual input and classify sentiment in a meaningful way.',
    solution:
      'Use text preprocessing and classification techniques to interpret and evaluate sentiment signals in a dataset.',
    dataset: 'A labelled text dataset containing examples used to explore sentiment classification.',
    preprocessing: 'Text processing and preparation for sentiment analysis.',
    model: 'A supervised text-classification approach selected to map processed text to positive, negative or neutral sentiment.',
    testing: 'Testing focused on preprocessing behaviour, prediction flow and evaluating the model against held-out examples.',
    challenges: [
      'Preparing inconsistent natural-language text so it can be used reliably by a classification workflow.',
      'Interpreting sentiment in text where wording, context and tone can make the classification ambiguous.',
    ],
    results: [
      'Built an end-to-end workflow from text preparation through sentiment prediction.',
      'Created a practical foundation for comparing model behaviour and improving classification quality over time.',
    ],
    lessons: [
      'The quality of preprocessing and labelled data has a direct effect on the usefulness of an NLP model.',
      'Model evaluation needs to consider confusing or ambiguous examples, not only overall correctness.',
    ],
    futureImprovements: [
      'Document the dataset source and add a clearer evaluation report with class-level metrics.',
      'Compare multiple models and improve handling of context, slang and mixed sentiment.',
    ],
    github: 'https://github.com/LehlohnoloMotsoeneng/SentiX',
    liveDemo: 'https://sentixai-jrnxpceh.manus.space',
    image: 'sentiment-analysis',
    role: 'Collaborative developer contributing to the planning, product structure and implementation of the platform.',
    contribution: 'Contributed to shaping the user journey, organising the core experience and connecting the product concept to an actionable AI workflow.',
    filters: ['NLP', 'AI', 'Software'],
    featured: false,
  },
  {
    id: 'pathfinder-ai',
    title: 'PathFinder AI',
    category: 'Industry-Relevant AI Solution',
    type: 'Collaborative / Group Project',
    status: 'Collaborative Project',
    description:
      'PathFinder AI is a conversational AI platform designed to help young people explore education, employment, skills development and entrepreneurship opportunities.',
    detailedDescription:
      'A collaborative AI platform designed around Understand → Explore → Recommend → Action to help users move from uncertainty toward practical next steps.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'AI APIs', 'Lovable'],
    features: [
      'Conversational guidance',
      'Pathway recommendations',
      'Education and employment exploration',
      'Skills and entrepreneurship support',
      'User-centred recommendations',
    ],
    problem:
      'Young people may have difficulty identifying appropriate education, employment, skills development and entrepreneurship opportunities and determining what practical step to take next.',
    objective:
      'Create a conversational AI experience that helps users understand their interests, explore opportunities and receive personalised guidance.',
    solution:
      'Build a conversational platform that uses user context, interests, skills and goals to provide personalised guidance and actionable pathways.',
    challenges: [
      'Aligning different ideas and responsibilities into one focused user journey for the team project.',
      'Connecting conversational guidance with recommendations that remain practical and relevant to the user.',
    ],
    results: [
      'Created a clear conversational structure that moves users from understanding their situation toward possible next actions.',
      'Delivered a collaborative prototype covering education, work, skills development and entrepreneurship pathways.',
    ],
    lessons: [
      'Collaborative development benefits from agreeing on the user journey and responsibilities before implementation begins.',
      'AI recommendations are more useful when they are connected to clear context and actionable follow-up steps.',
    ],
    futureImprovements: [
      'Improve recommendation quality with richer user context, feedback loops and more carefully curated opportunity data.',
      'Add stronger testing for conversational edge cases, accessibility and the reliability of external integrations.',
    ],
    github: 'https://github.com/AbramOnthatile/Path_Finder',
    liveDemo: 'https://future-seeker-chat.lovable.app',
    image: 'pathfinder-ai',
    role: 'Collaborative developer contributing to the product direction, user journey and implementation of the platform.',
    contribution: 'Helped shape the Understand → Explore → Recommend → Action flow and contributed to turning the team concept into an interactive AI experience.',
    filters: ['AI', 'Software'],
    featured: false,
    teamProject: 'Team Project',
    collaborativeDevelopment: 'Collaborative Development',
    myContributionLabel: 'My Contribution',
    pathWaypoints: ['Study', 'Work', 'Skills', 'Business', 'Not Sure'],
    aiApproach: ['Understand', 'Explore', 'Recommend', 'Action'],
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    category: 'Software Development',
    type: 'Individual Project',
    status: 'In Progress',
    description:
      'A personal portfolio that presents my software projects, development journey, technical interests and approach to building practical solutions.',
    detailedDescription:
      'An evolving portfolio experience designed to document my work clearly, show the thinking behind each project and create a professional point of contact for future opportunities.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'Responsive Design'],
    features: [
      'Responsive portfolio layout',
      'Project filtering',
      'Interactive project case studies',
      'Development journey and reflections',
      'Contact and social links',
    ],
    problem:
      'A collection of projects is difficult to understand when it only shows titles and links without the decisions, challenges and learning behind the work.',
    objective:
      'Build a clear, responsive portfolio that communicates both what I have built and how I approach software development.',
    solution:
      'Create a structured React site with dedicated sections for projects, case studies, skills, journey, reflections and contact information.',
    challenges: [
      'Presenting technical work in a way that remains clear and useful to both technical and non-technical visitors.',
      'Creating a responsive layout that keeps the visual identity and information hierarchy consistent across screen sizes.',
    ],
    results: [
      'Created a working portfolio foundation with reusable React components and structured project data.',
      'Added case-study views so each project can communicate its problem, approach, lessons and next steps.',
    ],
    lessons: [
      'A portfolio is stronger when it explains the thinking and learning behind a project instead of only displaying the final result.',
      'Separating content into data and reusable components makes it easier to keep the site consistent as new projects are added.',
    ],
    futureImprovements: [
      'Add the live demo link and continue refining the case studies as projects develop.',
      'Add richer project visuals, accessibility checks and performance improvements as the portfolio grows.',
    ],
    github: 'https://github.com/LehlohnoloMotsoeneng/Portfolio',
    image: 'portfolio',
    role: 'Individual developer responsible for the design, content structure and implementation.',
    contribution: 'Designed and built the React portfolio, organised the project content and developed the reusable case-study experience.',
    filters: ['Software'],
    featured: false,
  },
]
