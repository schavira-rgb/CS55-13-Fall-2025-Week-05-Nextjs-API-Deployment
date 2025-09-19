// Import the fs module for file system operations
import fs from 'fs';
// Import the path module for working with file and directory paths
import path from 'path';

// Create a constant that stores the path to the data directory
const dataDir = path.join(process.cwd(), 'data');

// Export function to get all posts sorted by date (newest first)
export function getSortedPostsData() {
  // Create the full path to the posts.json file
  const filePath = path.join(dataDir, 'posts.json');
  // Read the contents of the posts.json file synchronously as a string
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // Parse the JSON string into a JavaScript array
  const jsonObj = JSON.parse(jsonString);
  
  // Sort the posts array by date in descending order (newest first)
  jsonObj.sort(function (a, b) {
    // Compare dates and return appropriate value for sorting
    if (a.date < b.date) {
      // Return 1 if a.date is earlier than b.date
      return -1;
    } else {
      // Return -1 if a.date is later than or equal to b.date
      return 1;
    }
  });
  
  // Return the complete sorted array (including all properties)
  return jsonObj;
}

// Export function to get all post IDs for static generation
export function getAllPostIds() {
  // Create the full path to the posts.json file
  const filePath = path.join(dataDir, 'posts.json');
  // Read the contents of the posts.json file synchronously as a string
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // Parse the JSON string into a JavaScript array
  const jsonObj = JSON.parse(jsonString);
  // Log the parsed JSON for debugging purposes
  console.log(jsonObj);
  
  // Map over the posts array to create params objects for Next.js
  return jsonObj.map(item => {
    // Return an object with params property containing the id
    return {
      // Create params object with id property for dynamic routing
      params: {
        // Convert id to string to ensure compatibility
        id: item.id.toString()
      }
    };
  });
}

// Export function to get data for a specific post by ID
export function getPostData(id) {
  // Create the full path to the posts.json file
  const filePath = path.join(dataDir, 'posts.json');
  // Read the contents of the posts.json file synchronously as a string
  const jsonString = fs.readFileSync(filePath, 'utf8');
  // Parse the JSON string into a JavaScript array
  const jsonObj = JSON.parse(jsonString);
  
  // Filter the array to find posts that match the provided id
  const objReturned = jsonObj.filter(obj => {
    // Compare the stringified version of the post id with the provided id
    return obj.id.toString() === id;
  });
  
  // Check if no matching post was found
  if (objReturned.length === 0) {
    // Return a default "not found" object with all required properties
    return {
      // Set the id to the searched id
      id: id,
      // Set title to indicate post was not found
      title: 'Not found',
      // Set empty date
      date: '',
      // Set content to indicate post was not found
      contentHtml: 'Not found',
      // Set empty category
      category: ''
    };
  } else {
    // Return the first (and should be only) matching post
    return objReturned[0];
  }
}