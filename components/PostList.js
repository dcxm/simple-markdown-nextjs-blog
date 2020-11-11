import Link from './Link'

import PostBox from './PostBox'

export default function PostList({ posts, date }) {
    return (
        <div className="flex-container flex-wrap posts">
            {posts.map((post) => (
                <Link href={`/posts/${post.data.slug}`} className="post-box-container col-md-6" key={post.data.title} >
                    <PostBox post={post} date={date ? date : false} />
                </Link>
            ))}
        </div>
    )
}