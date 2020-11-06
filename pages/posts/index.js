import getPosts from '../../lib/getItems'

import PostList from '../../components/PostList'

export default function Posts({ posts }) {
    return (
        <>
            <h1 style={{marginBottom: ".5em"}}>Posts</h1>
            <PostList posts={posts} date />
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