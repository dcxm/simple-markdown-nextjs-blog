import Link from 'next/link'

import PostBox from './PostBox'

export default function PostList({ posts, date }) {
    return (
        <div className="flex-container flex-wrap posts">
            {posts.map((post) => (
                <Link href={`/posts/${post.data.slug}`} key={post.data.title}><a className="post-box-container col-md-6">
                    <PostBox post={post} date={date ? date : false} />
                </a></Link>
            ))}
        </div>
    )
}