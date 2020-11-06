import path from 'path'
import fs from 'fs'

export default function getPostsPaths() {
    let paths = []
    const postsPath = path.join(process.cwd(), 'posts', 'items')
    const posts = fs.readdirSync(postsPath)
    console.log(posts)
    return paths
}