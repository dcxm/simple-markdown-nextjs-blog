import { useState } from 'react'

import PostList from '../../components/PostList'

export default function Search() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [resMessage, setResMessage] = useState('')

    const handleSearch = () => {
        if (searchValue.length > 0) {
            fetch(`/api/search?q=${searchValue}`)
                .then(res => res.json())
                .then(res => {
                    if (res.msg) {
                        setResMessage(res.msg)
                        setPosts([])
                    } else setPosts(res)
                })
        } else setError('Please fill the search form')
    }

    const handleSearchInputChange = e => {
        setError('')
        setResMessage('')
        setSearchValue(e.target.value)
    }

    return (
        <>
            <h1>Search</h1>
            {error.length > 0 && <div style={{ marginBottom: ".5em", color: "red" }}>{error}</div>}
            <div className="search-input-container">
                <input type="text" placeholder="Type post title here..." className="search-input" onChange={handleSearchInputChange} />
                <button onClick={handleSearch} className="secondary">Search</button>
            </div>
            {resMessage.length > 0 ? <div style={{ marginTop: "2em" }}>{resMessage}</div> :
                posts.length > 0 && <>
                    <div style={{ marginTop: "2em" }}><strong>{posts.length} posts found</strong></div>
                    <PostList posts={posts} date/>
                </>
            }
        </>
    )
}