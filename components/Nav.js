import Link from 'next/link'

export default function Nav() {
    return (
        <header>
            <div className="container">
                <Link href="/"><a><h2 className="site-title">My Blog</h2></a></Link>
            </div>
        </header>
    )
}