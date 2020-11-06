import Head from 'next/head'

import Card from '../components/Card'
import fs from 'fs'
import path from 'path'
import getPosts from '../lib/getItems'

import RecentPosts from '../components/RecentPosts'

export default function Home({ categories, posts }) {
  return (
    <>
      <Head>
        <meta name="description" content="Meta desc" />
        <title>My Blog | The best blog ever</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Card dir="vertical" badge badgeText="New!">
        <h2 className="card-title">Title</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum suscipit optio nulla perferendis doloribus veniam placeat facere et fugit illum architecto ducimus sapiente, voluptates tenetur?</p>
      </Card>
      <div className="categories">
        <h2>Categories</h2>
        <div>
          {categories.map(category =>
            <span key={category.name} className="category-link">
              {category.name}
            </span>)}
        </div>
      </div>
      <RecentPosts posts={posts} />
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