import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <>
            <header>
                <nav>
                    <Link href="/" className="nav-link">Home</Link>
                    <Link href="/create" className="nav-link">create</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    );
}