import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import fs from 'fs' //node.js file system
import path from 'path' //node.js path 
import matter from 'gray-matter'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { nodeModuleNameResolver } from 'typescript';
import Post from '../components/Post'
import { sortByDate } from '../utils'
import Script from 'next/script'
import Header from '../components/Navbar'

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>pdfmcqs.com</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="pdfmcqs.com is provide you the latest mcqs,communication skills mcqs,reading skills mcqs,speaking skills mcqs" />
        <meta name="keywords" content="communication skills mcqs,speaking skills mcqs,reading skills mcqs,pdfmcqs.com,presentation skills mcqs" />
        <meta name="author" content="Hassan Ali" />
      </Head>
      <main>
          <div className='posts'>
              {posts.map((post, index) => (
                <Post key={index} post={post} />
              ))}
        </div>
      </main>
    </>
  )
}


export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {           // Get slug and frontmatter from posts
    const slug = filename.replace('.md', '')       // Create slug
    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
