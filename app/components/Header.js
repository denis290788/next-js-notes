import Link from 'next/link';
const Header = () => {
    return (
        <header>
            <strong>itProger</strong>
            <nav>
                <Link href="/">Главная</Link>
                <Link href="/about">О нас</Link>
            </nav>
        </header>
    );
};

export default Header;
