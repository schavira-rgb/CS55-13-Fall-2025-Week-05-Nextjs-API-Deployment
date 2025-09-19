// `pages/_app.js`
import '../styles/global.css'; // Import global CSS styles for entire application
 
export default function App({ Component, pageProps }) { // Define and export App component function
  return <Component {...pageProps} />; // Return JSX content
} // End App component function