import getCategories from '../../../lib/getCategories'
import getPostsByCategory from '../../../lib/getPostsByCategory'

import PostList from '../../../components/PostList'

export default function Category({ posts, categoryName }) {
    return (
        <>
            <h1>{categoryName}</h1>
            <PostList posts={posts} />
        </>
    )
}

const categories = getCategories()

export function getStaticPaths() {
    return {
        paths: categories.paths,
        fallback: false
    }
}

export function getStaticProps({ params }) {
    const currentCategoryIndex = categories.categories.findIndex(category => category.slug === params.categorySlug)
    const currentCategory = categories.categories[currentCategoryIndex]
    const posts = getPostsByCategory(currentCategory)
    return {
        props: {
            posts,
            categoryName: currentCategory.name
        }
    }
}