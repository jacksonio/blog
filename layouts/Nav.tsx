import Link from 'next/link';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link href={'/'}>
                <a className="navbar-brand">Blog</a>
            </Link>

            <ul className="navbar-nav offset-10 ">
                <li className="nav-item">
                    <Link href={'/'}>
                        <a className="nav-link">
                            Posts<span className="sr-only">(current)</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href={'/create'}>
                        <a className="nav-link">
                            Create new post<span className="sr-only">(current)</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
