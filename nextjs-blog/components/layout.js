import Head from 'next/head'; // Import Head component for metadata
import Image from 'next/image'; // Import Image component for images
import styles from './layout.module.css'; // Import styles for the layout
import utilStyles from '../styles/utils.module.css'; // Import styles for the layout
import Link from 'next/link'; // Import Link component for navigation

export const siteTitle = 'Next.js Sample Website'; // Export site title constant

export default function Layout({ children, home }) { // Define and export Layout component function
  return ( // Return JSX content
    <div className={styles.container}> 
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}></header>
      <main>{children}</main>
    </div>
  ); // End return statement
} // End component function