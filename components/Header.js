import Link from "next/link";

export default function Header() {
  return (
    <header className="shadow-md z-10 max-h-[10vh] bg-white text-black">
      <div className="box flex items-center justify-between py-5">
        <div>
          <Link href="/">
            <a>
              <img src="/logo.png" alt="Saltt Logo" className="h-12 w-32" />
            </a>
          </Link>
        </div>
        <nav className="flex items-center gap-3 text-lg">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/menu">
            <a>Menu</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
