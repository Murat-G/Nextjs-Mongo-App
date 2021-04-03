import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <Link href="/">
            <a className="navbar-brand">Note App</a>
        </Link>
        <Link href="/addnote">
            <a className="create">+ Create note</a>
        </Link>
    </nav>
)

export default Navbar;