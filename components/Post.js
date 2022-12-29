import Link from 'next/link'
import Script from 'next/script'

export default function Post({ post }) {

    return (
        <>
            <div className='card'>
                <img src={post.frontmatter.cover_image} alt={post.frontmatter.title} />
                <div className='post-date'>Posted on {post.frontmatter.date}</div>
                <span style={{ "color": "red", "fontWeight": "bold", "fontSize": "2rem" }}>{post.frontmatter.category}</span>
                <h3>{post.frontmatter.title}</h3>
                <p>{post.frontmatter.excerpt}</p>
                <Link href={`/blog/${post.slug}`}>
                    <button className='btn'>Read More</button>
                </Link>
            </div>
            {/* 
            <div className="col">
                <div className="card">
                    <img src={post.frontmatter.cover_image} className="card-img-top" alt={post.frontmatter.title} />
                    <div className="card-body">
                        <h3 className="card-title" style={{"fontWeight":"bold"}}>{post.frontmatter.title}</h3>
                        <p className="card-text">{post.frontmatter.excerpt}</p>
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                    <button type="button" className="btn btn-success" style={{"width":"100%"}}>Read More</button>
                    </Link>
                </div>
            </div> */}
        </>
    )
}


