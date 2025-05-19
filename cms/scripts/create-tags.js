const axios = require('axios');

// Strapi API configuration
const STRAPI_URL = 'http://localhost:1337';
const API_TOKEN = 'c19281d8d95440a616d4287073bdf4f2bb1101266ba206c815886d6a6ea2ad0c2d1a0ad1bf86526272f60afef8ef9577e1b6b122eb9fa89961a4d81d37afeb44ec9d30270dc895dd6c4814a5546bde629e9bf8bc1420bb232e5c7b8d0548f37bd447ad1fc7c933b961e8d1975da4d0884a026f4a70b23320d3fe848cbbcbdba9';

// Tags to create
const tags = [
  { title: 'Design' },
  { title: 'Development' },
  { title: 'Communication' },
  { title: 'Productivity' }
];

async function createTag(tagData) {
  try {
    console.log(`Creating tag: ${tagData.title}`);
    
    const response = await axios.post(
      `${STRAPI_URL}/api/tool-tags`,
      { data: tagData },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_TOKEN}`
        }
      }
    );
    
    console.log(`Successfully created tag: ${tagData.title}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error creating tag ${tagData.title}:`, error.message);
    if (error.response) {
      console.error('Error details:', error.response.data);
    }
    return null;
  }
}

async function getAllTags() {
  try {
    const response = await axios.get(
      `${STRAPI_URL}/api/tool-tags`,
      {
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`
        }
      }
    );
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching tags:', error.message);
    return [];
  }
}

async function createTags() {
  console.log('Starting to create tags...');
  
  // First, check if tags already exist
  const existingTags = await getAllTags();
  const existingTagTitles = new Set(existingTags.map(tag => tag.attributes.title));
  
  const tagsToCreate = tags.filter(tag => !existingTagTitles.has(tag.title));
  
  if (tagsToCreate.length === 0) {
    console.log('All tags already exist. No new tags to create.');
    return existingTags;
  }
  
  console.log(`Creating ${tagsToCreate.length} new tags...`);
  
  const createdTags = [];
  for (const tag of tagsToCreate) {
    const createdTag = await createTag(tag);
    if (createdTag) {
      createdTags.push(createdTag);
    }
    // Add a small delay between creations
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('Finished creating tags!');
  return [...existingTags, ...createdTags];
}

// If run directly, execute the function
if (require.main === module) {
  createTags().catch(console.error);
}

module.exports = { createTags };

// This script creates the necessary tool tags in Strapi. After running this script,
// you can run the seed-tools.js script to create tools with these tags.
