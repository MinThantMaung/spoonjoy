'use client'
import Nav from "@/app/components/_nav/page"
import Hero from "@/app/components/hero/page"
export default function Home() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <section>
        <Hero />
      </section>
    </>
  );
}
