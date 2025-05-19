const axios = require('axios');

// Strapi API configuration
const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = 'c19281d8d95440a616d4287073bdf4f2bb1101266ba206c815886d6a6ea2ad0c2d1a0ad1bf86526272f60afef8ef9577e1b6b122eb9fa89961a4d81d37afeb44ec9d30270dc895dd6c4814a5546bde629e9bf8bc1420bb232e5c7b8d0548f37bd447ad1fc7c933b961e8d1975da4d0884a026f4a70b23320d3fe848cbbcbdba9';

// Sample tools data - using the existing AI tag for all tools
const tools = [
  {
    title: 'Figma',
    description: 'The collaborative interface design tool for teams.',
    link: 'https://www.figma.com',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg'
  },
  {
    title: 'VS Code',
    description: 'Free source-code editor made by Microsoft for Windows, Linux and macOS.',
    link: 'https://code.visualstudio.com',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg'
  },
  {
    title: 'GitHub',
    description: 'The world\'s leading software development platform.',
    link: 'https://github.com',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg'
  },
  {
    title: 'Slack',
    description: 'Collaboration hub for work, with channels, messaging, and file sharing.',
    link: 'https://slack.com',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg'
  },
  {
    title: 'Trello',
    description: 'Collaboration tool that organizes your projects into boards.',
    link: 'https://trello.com',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/trello-logo-blue.svg'
  },
  {
    title: 'Zoom',
    description: 'Video conferencing, web conferencing, webinars, screen sharing.',
    link: 'https://zoom.us',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/zoom-1.svg'
  },
  {
    title: 'Canva',
    description: 'Design anything. Publish anywhere.',
    link: 'https://www.canva.com',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/canva-1.svg'
  },
  {
    title: 'Notion',
    description: 'All-in-one workspace for notes, tasks, wikis, and databases.',
    link: 'https://www.notion.so',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/notion-logo-1.svg'
  },
  {
    title: 'Postman',
    description: 'API platform for building and using APIs.',
    link: 'https://www.postman.com',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/postman.svg'
  },
  {
    title: 'Airtable',
    description: 'Part spreadsheet, part database, and entirely flexible.',
    link: 'https://www.airtable.com',
    thumbnail: 'https://cdn.worldvectorlogo.com/logos/airtable-2.svg'
  }
];

// The ID of the existing AI tag
const AI_TAG_ID = 2; // From the API response

async function createTool(toolData) {
  try {
    // Create the tool with the AI tag
    const toolPayload = {
      data: {
        title: toolData.title,
        description: toolData.description,
        link: toolData.link,
        tool_tag: AI_TAG_ID, // Using the existing AI tag
        publishedAt: new Date().toISOString()
      }
    };

    console.log('Creating tool:', toolData.title);
    
    const response = await axios.post(
      `${STRAPI_URL}/api/tools`,
      toolPayload,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      }
    );
    
    console.log(`Successfully created tool: ${toolData.title}`);
    return response.data;
  } catch (error) {
    console.error(`Error creating tool ${toolData.title}:`, error.message);
    if (error.response) {
      console.error('Error details:', error.response.data);
    }
    return null;
  }
}

async function seedTools() {
  console.log('Starting to seed tools...');
  
  for (const tool of tools) {
    await createTool(tool);
    // Add a small delay between creations to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('Finished seeding tools!');
}

seedTools().catch(console.error);
