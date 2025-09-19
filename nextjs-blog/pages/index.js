import Link from 'next/link'; // Import Link component for navigation
import Date from '../components/date'; // Import Date component
import { getSortedPostsData } from '../lib/posts-json'; // Import getSortedPostsData function from lib/posts-json.js
import Head from 'next/head'; // Import Head component for metadata
import Layout, { siteTitle } from '../components/layout'; // Import Layout component and siteTitle
import utilStyles from '../styles/utils.module.css'; // Import utility CSS styles
import customStyles from '../styles/CustomHome.module.css'; // Import custom home styles

export default function Home({ allPostsData }) { // Define and export Home component function with allPostsData
  return ( // Return JSX content
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <div className={customStyles.container}>
        <section className={customStyles.heroSection}>
          <div className={customStyles.profileImageContainer}>
            <img
              src="/images/profile.jpg"
              className={customStyles.profileImage}
              alt="Estevan Chavira"
              width={200}
              height={200}
            />
          </div>
          <h1 className={customStyles.heroTitle}>Estevan Chavira</h1>
          <p className={customStyles.heroSubtitle}>Cybersecurity Student & Web Developer</p>
          <a href="#blog" className={customStyles.blogLink}>
            Read My Blog
          </a>
        </section>

        <section className={customStyles.section}>
          <h2 className={customStyles.sectionTitle}>About</h2>
          <p className={customStyles.aboutText}>
            I'm a cybersecurity student at SRJC learning how technology works at every level. 
            After completing web development coursework in HTML and CSS, I'm now exploring 
            server-side technologies to build a complete understanding of web systems from a 
            security perspective. I want a deeper understanding of the technology we use and 
            go beyond just the code. I want to understand why it does what it does and how to 
            build innovative solutions with it.
          </p>
        </section>

        <section className={customStyles.section}>
          <h2 className={customStyles.sectionTitle}>Skills & Technologies</h2>
          <div className={customStyles.skillsGrid}>
            <div className={customStyles.skillCategory}>
              <h3 className={customStyles.skillCategoryTitle}>Security & Networking</h3>
              <ul className={customStyles.skillsList}>
                <li className={customStyles.skillItem}>Security+ Certified</li>
                <li className={customStyles.skillItem}>Cybersecurity Principles</li>
                <li className={customStyles.skillItem}>Network Fundamentals</li>
                <li className={customStyles.skillItem}>Protocol Analysis</li>
              </ul>
            </div>
            <div className={customStyles.skillCategory}>
              <h3 className={customStyles.skillCategoryTitle}>Server Technologies</h3>
              <ul className={customStyles.skillsList}>
                <li className={customStyles.skillItem}>Linux Administration</li>
                <li className={customStyles.skillItem}>Virtualization/Cloud</li>
                <li className={customStyles.skillItem}>Server-Side Development</li>
              </ul>
            </div>
            <div className={customStyles.skillCategory}>
              <h3 className={customStyles.skillCategoryTitle}>Programming</h3>
              <ul className={customStyles.skillsList}>
                <li className={customStyles.skillItem}>Python</li>
                <li className={customStyles.skillItem}>HTML & CSS</li>
                <li className={customStyles.skillItem}>JavaScript</li>
                <li className={customStyles.skillItem}>Next.js</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={customStyles.section}>
          <h2 className={customStyles.sectionTitle}>Education</h2>
          <ul className={customStyles.educationList}>
            <li className={customStyles.educationItem}>
              <div className={customStyles.courseTitle}>Current Coursework (Fall 2025)</div>
              <div className={customStyles.courseDescription}>
                CS180.3 (Virtualization/Cloud Computing), CS55.13 (Server-Side Web Development), ETHS20 (Ethnic Studies)
              </div>
            </li>
            <li className={customStyles.educationItem}>
              <div className={customStyles.courseTitle}>Completed Certifications & Courses</div>
              <div className={customStyles.courseDescription}>
                Security+ Certification, Linux Administration 1 & 2, Python Programming, 
                Networking Fundamentals (2 courses), Web Development (HTML/CSS)
              </div>
            </li>
          </ul>
        </section>

        <section className={customStyles.section}>
          <div className={customStyles.contactInfo}>
            <h2 className={customStyles.sectionTitle}>Contact</h2>
            <a href="mailto:schavira@bearcubs.santarosa.edu" className={customStyles.contactEmail}>
              schavira@bearcubs.santarosa.edu
            </a>
          </div>
        </section>

        <section className={customStyles.section} id="blog">
          <h2 className={customStyles.sectionTitle}>Blog</h2> 
          <ul>
            {allPostsData.map(({ id, date, title }) => ( // Map through allPostsData array to display each post
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
          </section>

      </div>
    </Layout>
  ); // End return statement
} // End component function

// Export getStaticProps function to get static props
export async function getStaticProps() { // Define and export getStaticProps function
  const allPostsData = getSortedPostsData(); // Get all posts data
  return { // Return props
    props: {
      allPostsData, // Return all posts data
    },
  }; // Return props
} // End getStaticProps function