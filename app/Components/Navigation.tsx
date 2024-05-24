import Link from 'next/link';
import React from 'react';

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link href="/product">
              <p>Products</p>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <p>Blog</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p>Contact</p>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <p>FAQ</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}