module.exports = (req, res) => {
    const searchQuery = req.query.q.toLowerCase()
    if (searchQuery && req.method === 'GET') {
        fetch(`${process.env.APP_URL}/data/postData.json`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(parsedRes => {
            const foundPosts = parsedRes.filter(post => post.data.title.toLowerCase().includes(searchQuery))
            if (foundPosts.length > 0) res.json(foundPosts)
            else res.status(404).json({msg: 'No items found currently'})
        })
    } else res.status(400).json({error: "Please provide a text to search"})
}