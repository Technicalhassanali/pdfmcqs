import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Head from 'next/head';

export default function PostPage(
    {
        frontmatter: { title, date, cover_image, category, description, keywords },
        slug,
        content,
    }) {

    const [hasRun, setHasRun] = useState(false)
    useEffect(() => {
        if (!hasRun) {
            // Your custom JavaScript code goes here
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.display === "none") {
                        panel.style.display = "block";
                    } else {
                        panel.style.display = "none";
                    }
                });
            }
            setHasRun(true)
        }
    }, [hasRun])
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Link href='/'>
                <button className='btn btn-back'>Go Back</button>
            </Link>
            <div className='card card-page'>
                <h1 className='post-title'>{title}</h1>
                <div className='post-date'>Posted on {date} {category}</div>
                <img src={postimg} alt={title} />
                <div className='post-body'>
                    <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('posts'))
    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')
    const { data: frontmatter, content } = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug,
            content,
        },
    }
}
