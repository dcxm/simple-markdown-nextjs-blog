module.exports = (req, res) => {
    const searchQuery = req.query.q.toLowerCase()
    if (searchQuery && req.method === 'GET') {
        fetch(`${process.env.APP_URL}/data/postData.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'same-origin'
        })
        .then(response => response.json())
        .then(parsedRes => {
            const foundPosts = parsedRes.filter(post => post.data.title.toLowerCase().includes(searchQuery))
            if (foundPosts.length > 0) res.json(JSON.stringify(foundPosts))
            else res.status(404).json(JSON.stringify({msg: 'No items found currently'}))
        })
        .catch(err => res.status(505))
    } else res.status(400).json(JSON.stringify({error: "Please provide a text to search"}))
}