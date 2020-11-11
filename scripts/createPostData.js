const fs = require('fs')
const path = require('path')

const remark = require('remark')
const recommended = require('remark-preset-lint-recommended')
const html = require('remark-html')
const matter = require('gray-matter')

function makeHTMLFromMD(markdown, cb) {
    remark()
        .use(recommended)
        .use(html)
        .process(markdown, function (err, file) {
            cb(file.contents)
        })

}

function getDate(date) {
    const newDate = new Date(date)
    return newDate
}

function getPosts() {
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
    let sortedPosts = posts.slice()
    sortedPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
    return sortedPosts
}

function createPostData(postDataPath, fileContents) {
    fs.writeFile(postDataPath, JSON.stringify(fileContents), (err) => {
        if (err) return console.log(err)
    })
}

(function () {
    const dataDirPath = path.join(process.cwd(), 'public', 'data')
    const postDataPath = path.join(dataDirPath, 'postData.json')
    const posts = getPosts()
    const result = []
    posts.map(post => {
        delete post.content
        result.push({
            ...post
        })
    })
    fs.access(dataDirPath, fs.constants.R_OK, (err) => {
        if (err) {
            console.log('Creating /public/data folder...')
            fs.mkdir(dataDirPath, (err) => {
                if (err) return console.log(err)
                createPostData(postDataPath, result)
            })
        } else createPostData(postDataPath, result)
    })
    return console.log('Post data have been created')
})()