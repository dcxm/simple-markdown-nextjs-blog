import PostBox from './PostBox'
import Link from 'next/link'


export default function RecentPosts({ posts, numberOfPosts }) {
    return (
        <div className="recent-posts">
            <h2>Recent posts</h2>
            <div className="flex-container post-items">
                {posts.slice(0, numberOfPosts ? numberOfPosts : 3).map(post =>
                    <div className="col-4 col-s-12 post-item" key={post.data.title}>
                        <PostBox post={post} />
                    </div>
                )}
            </div>
            <Link href="/posts" ><a className="button accent">See all posts</a></Link>
        </div>
    )
}