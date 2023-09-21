import DefaultCarousel from "@/components/layout/Carousel";
import NavBar from "@/components/layout/header/NavBar";


export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <section className="h-72 py-2">
          <DefaultCarousel />
        </section>
        <section>
          Leiloes Online
        </section>
        <section>
          Depoimentos
        </section>

      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}
