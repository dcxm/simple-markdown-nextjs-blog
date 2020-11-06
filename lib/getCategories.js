import fs from 'fs'
import path from 'path'

export default function getCategories() {
    const categoriesPath = path.join(process.cwd(), 'posts', 'categories.json')
    const categoriesJSON = fs.readFileSync(categoriesPath, 'utf8')
    const categories = JSON.parse(categoriesJSON)
    const paths = []
    categories.map(category => paths.push({params: {categorySlug: category.slug}}))
    return {
        categories,
        paths
    }
}