import Link from 'next/link'

import getPosts from '../../lib/getItems'

import PostBox from '../../components/PostBox'

export default function Posts({ posts }) {
    return (
        <>
            <h1 style={{marginBottom: ".5em"}}>Posts</h1>
            <div className="flex-container flex-wrap posts">
                {posts.map((post) => (
                    <Link href={`/posts/${post.data.slug}`} key={post.data.name}><a  className="post-box-container col-md-6">
                        <PostBox post={post} date />
                    </a></Link>
                ))}
            </div>
        </>
    )
}

export async function getStaticProps() {
    const posts = getPosts()
    return {
        props: {
            posts
        }
    }
}