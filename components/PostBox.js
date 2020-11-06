import parseDateToPrint from '../lib/parseDateToPrint'

export default function PostBox({ post, date }) {
    return (
        <>
            <div className="post-box-head">
                <h3 className="post-box-title">{post.data.title}</h3>
                {date && <span className="post-box-date">{parseDateToPrint(post.data.date)}</span>}
            </div>
            {post.data.thumbnail &&
                <div className="post-box-thumbnail" >
                    <img src={`/${post.data.thumbnail}`} />
                </div>}
            <p className="post-box-excerpt">{post.data.description}</p>
        </>
    )
}