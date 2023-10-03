import DefaultCarousel from "@/components/layout/Carousel";
import NavBar from "@/components/layout/header/NavBar";
import Leiloes from "@/components/layout/leiloes_online/Leiloes";
import BasicFooter from "@/components/layout/footer/Footer";
import Depoimentos from "@/components/layout/depoimentos/Depoimentos";

export default function Home() {
  return (
    <div>
      <main>
        <section className="px-28">
          <DefaultCarousel />
          <div className="bg-purple-500 h-10 py-2">
            <p className=" text-white pl-2">
              Leilões Online
            </p>
          </div>
          <div className="flex justify-around py-2">
            <Leiloes />
            <Leiloes />
            <Leiloes />
            <Leiloes />
          </div>
        </section>
        <section className="flex items-center">
          <h1 className="">DEPOIMENTOS DE QUEM ARREMATOU NOSSOS LEILÕES</h1>
          {/* <Depoimentos/> */}

        </section>

      </main>
      <footer>
      </footer>
    </div>
  )
}
