import getItems from '../../lib/getItems'

export default function Post({ post }) {
    return (
        <>
            <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </>
    )
}


const posts = getItems()

export function getStaticPaths() {
    const paths = []
    posts.map(({ data }) => paths.push({ params: { postSlug: data.slug } }))
    console.log('Post paths: ', paths)
    return {
        paths,
        fallback: false
    }
}

export function getStaticProps({ params }) {
    const postIndex = posts.findIndex(post => post.data.slug === params.postSlug)
    const post = posts[postIndex]
    console.log('FilteredPost: ', post)
    return {
        props: {
            post
        }
    }
}
