import Link from 'next/link';
import React from 'react'

export const Hero = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage: "url(/img/heroimg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="grid gap-10 text-center">
        <Link href={"/"} className="text-6xl font-bold hero-text">
          Men
        </Link>
        <Link href={"/"} className="text-6xl font-bold hero-text">
          Women
        </Link>
        <Link href={"/"} className="text-6xl font-bold hero-text">
          Accesories
        </Link>
      </div>
    </section>
  );
}
