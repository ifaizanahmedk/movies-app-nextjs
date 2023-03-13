import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <header className="bg-red-600">
      <nav className="container mx-auto mb-14 py-4 text-center">
        <Link href="/" className="text-4xl">
          Movie App
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
