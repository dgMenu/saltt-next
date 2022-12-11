import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Header() {
  const { asPath } = useRouter();

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Menu",
      path: "/menu",
    },
  ];

  return (
    <header className="shadow-md z-10 max-h-[10vh] bg-white text-black">
      <div className="flex items-center justify-between py-5 box">
        <div>
          <Link href="/">
            <a>
              <img src="/logo.svg" alt="Archie Restaurant" className="h-12" />
            </a>
          </Link>
        </div>
        <nav className="flex items-center gap-3 text-lg">
          {navLinks.map((link) => (
            <Link href={link.path} key={link.name}>
              <a
                className={
                  asPath.replace("/", "").includes(link.name.toLowerCase()) ||
                  (asPath == "/" && link.path == "/")
                    ? "relative after:h-2 after:w-2 after:block after:bg-saltt after:absolute after:rounded-full after:right-1/2 after:translate-x-1/2"
                    : ""
                }
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
