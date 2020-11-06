import Head from 'next/head'
import Link from 'next/link'

import Card from '../components/Card'
import fs from 'fs'
import path from 'path'
import getPosts from '../lib/getItems'

import RecentPosts from '../components/RecentPosts'
import PostList from '../components/PostList'

export default function Home({ categories, posts }) {
  return (
    <>
      <Head>
        <meta name="description" content="Meta desc" />
        <title>My Blog | The best blog ever</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href={`/posts/${posts[0].data.slug}`}><a>
        <Card dir="vertical" badge badgeText="New!" image={posts[0].data.thumbnail}>
          <h2 className="card-title">{posts[0].data.title}</h2>
          <p className="card-text">{posts[0].data.description}</p>
        </Card>
      </a></Link>
      <div className="categories">
        <h2>Categories</h2>
        <div>
          {categories.map(category =>
            <Link href={`/posts/categories/${category.slug}`}><a className="category-link">
              <span key={category.name}>
                {category.name}
              </span>
            </a></Link>
          )}
        </div>
      </div>
      <RecentPosts posts={posts} />
      <h2 className="featured-posts-title">Featured posts</h2>
      <PostList posts={posts.filter(post => post.data.featured)} />
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