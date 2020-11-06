import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { makeHTMLFromMD, getDate } from './getItems'

export default function getPostsByCategory(category) {
    const posts = []
    category.items.map(post => {
        const postsPath = path.join(process.cwd(), 'posts', 'items', post)
        const postFile = fs.readFileSync(postsPath, 'utf8')
        const matterData = matter(postFile)
        makeHTMLFromMD(matterData.content, (content) => {
            const post = {
                ...matterData,
                content
            }
            post.data.date = getDate(matterData.data.date).toString()
            delete post.orig
            posts.push(post)
        })
    })
    const sortedPosts = posts.slice()
    sortedPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    console.log('Sorted posts: ', sortedPosts)
    return sortedPosts
}