import utilStyles from '../../styles/utils.module.css'; // Import utility CSS styles
import customStyles from '../../styles/CustomPost.module.css'; // Import custom post styles
import Date from '../../components/date'; // Import Date component
import Head from 'next/head'; // Import Head component for metadata
import Layout from '../../components/layout'; // Import Layout component
import { getAllPostIds, getPostData } from '../../lib/posts-json'; // Import functions from posts-json library

export default function Post({ postData }) { // Define and export Post component function with postData prop
    return ( // Return JSX content
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <div className={customStyles.articleContainer}>
          <div className={customStyles.articleHeader}>
            <h1 className={customStyles.articleTitle}>{postData.title}</h1>
            <div className={customStyles.articleMeta}>
              <div className={customStyles.metaItem}>
                <Date dateString={postData.date} />
              </div>
            </div>
          </div>
          <div className={customStyles.articleContent}>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
          <div className={customStyles.navigationSection}>
            <a href="/" className={customStyles.navButton}>
              <span className={customStyles.backArrow}>←</span>
              Back to Home
            </a>
          </div>
        </div>
      </Layout>
    ); // End return statement
  } // End component function

export async function getStaticPaths() { // Define and export getStaticPaths function
  const paths = getAllPostIds(); // Get all post IDs
  return { // Return paths object
    paths, // Set paths array
    fallback: false, // Set fallback to false
  }; // End return statement
} // End getStaticPaths function

export async function getStaticProps({ params }) { // Define and export getStaticProps function with params
  const postData = await getPostData(params.id); // Get post data for specific ID
  return { // Return props object
    props: { // Set props
      postData, // Include postData
    }, // End props
  }; // End return statement
} // End getStaticProps function