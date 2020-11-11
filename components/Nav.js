import Link from './Link'

export default function Nav() {
    return (
        <header>
            <nav>
                <div className="container">
                    <Link href="/"><h2 className="site-title">My Blog</h2></Link>
                    <Link href="/posts/search">
                        <button className="secondary">
                            Search<img src="/icons/search-solid.svg" alt="Search icon" className="search-icon" />
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}