export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <a href="/" className="nav-link">Home</a>
                    <a href="/create" className="nav-link">create</a>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    );
}