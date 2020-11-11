import PostBox from './PostBox'
import Link from './Link'

export default function RecentPosts({ posts, numberOfPosts }) {
    return (
        <div className="recent-posts">
            <h2>Recent posts</h2>
            <div className="flex-container post-items">
                {posts.slice(0, numberOfPosts ? numberOfPosts : 3).map(post =>
                    <Link href={`/posts/${post.data.slug}`} className="col-4 col-s-12 post-item" key={post.data.title}>
                        <PostBox post={post} key={post.data.title} />
                    </Link>
                )}
            </div>
            <Link href="/posts" className="button accent">See all posts</Link>
        </div>
    )
}