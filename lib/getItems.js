import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function makeHTMLFromMD(markdown, cb) {
    let remark = require('remark')
    let recommended = require('remark-preset-lint-recommended')
    let html = require('remark-html')
    remark()
        .use(recommended)
        .use(html)
        .process(markdown, function (err, file) {
            cb(file.contents)
        })

}

const getDate = (date) => {
    const newDate = new Date(date)
    console.log('dateee', newDate)
    return newDate
}

export default function getPosts() {
    const items = fs.readdirSync(path.join(process.cwd(), 'posts', 'items'))
    let posts = []
    items.map(item => {
        const fileContents = fs.readFileSync(path.join(process.cwd(), 'posts', 'items', item), 'utf8')
        const matterData = matter(fileContents)
        makeHTMLFromMD(matterData.content, (content => {
            const post = {
                ...matterData,
                content
            }
            post.data.date = getDate(matterData.data.date).toString()
            delete post.orig
            posts = [
                ...posts,
                post
            ]
        }))
    })
    console.log('posts', posts)
    let sortedPosts = posts.slice()
    sortedPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    console.log('Sorted', sortedPosts)
    return sortedPosts
}