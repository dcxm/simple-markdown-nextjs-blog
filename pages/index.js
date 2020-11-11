import Head from 'next/head'

import fs from 'fs'
import path from 'path'
import getPosts from '../lib/getItems'

import Link from '../components/Link'
import FeaturedCard from '../components/FeaturedCard'
import RecentPosts from '../components/RecentPosts'
import PostList from '../components/PostList'

export default function Home({ categories, posts }) {
  return (
    <>
      <Head>
        <meta name="description" content="Meta desc" />
        <title>My Blog |</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={`/posts/${posts[0].data.slug}`}>
        <FeaturedCard badge badgeText="New!" image={posts[0].data.thumbnail}>
          <h2 className="featured-card-title">{posts[0].data.title}</h2>
          <p className="featured-card-text">{posts[0].data.description}</p>
        </FeaturedCard>
      </Link>
      <div className="categories">
        <h2>Categories</h2>
        <div>
          {categories.map(category =>
            <Link href={`/posts/categories/${category.slug}`} className="category-link" key={category.slug}>
              <span key={category.name}>
                {category.name}
              </span>
            </Link>
          )}
        </div>
      </div>
      <RecentPosts posts={posts} />
      <div className="featured-posts">
        <h2>Featured posts</h2>
        <PostList posts={posts.filter(post => post.data.featured)} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const categoriesJSON = fs.readFileSync(path.join(process.cwd(), 'posts', 'categories.json'), 'utf8')
  const categories = JSON.parse(categoriesJSON)
  const posts = getPosts()
  return {
    props: {
      categories,
      posts
    }
  }
}