const { default: next } = require("next");
import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <>
            <Nav>

            </Nav>
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
            <footer></footer>
        </>
    )
}