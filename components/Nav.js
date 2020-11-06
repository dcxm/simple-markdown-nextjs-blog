import Link from 'next/link'

export default function Nav() {
    return (
        <header>
            <nav>
                <div className="container">
                    <Link href="/"><a><h2 className="site-title">My Blog</h2></a></Link>
                    <Link href="/posts/search"><a>
                        <button className="secondary">
                            Search<img src="/icons/search-solid.svg" alt="Search icon" className="search-icon" />
                        </button>
                    </a></Link>
                </div>
            </nav>
        </header>
    )
}