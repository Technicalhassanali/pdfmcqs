import Link from 'next/link'
import Script from 'next/script'

export default function Post({ post }) {

    return (
        <>
            <div className='card'>
                <img src=`/nextjs-blog/{post.frontmatter.cover_image}` alt='' />
                <div className='post-date'>Posted on {post.frontmatter.date}</div>
                <span style={{ "color": "red", "fontWeight": "bold", "fontSize": "2rem" }}>{post.frontmatter.category}</span>
                <h3>{post.frontmatter.title}</h3>
                <p>{post.frontmatter.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                    <button className='btn'>Read More</button>
                </Link>
            </div>

        </>
    )
}


