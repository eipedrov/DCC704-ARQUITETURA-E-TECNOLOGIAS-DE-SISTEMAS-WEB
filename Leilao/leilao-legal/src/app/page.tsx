import DefaultCarousel from "@/components/layout/Carousel";
import NavBar from "@/components/layout/header/NavBar";
import Leiloes from "@/components/layout/leiloes_online/Leiloes";
import Image from "next/image";
import UserImg from "@/assets/imgs/user.jpg"
import BasicFooter from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
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

        </section>

      </main>
      <footer>
        <BasicFooter />
      </footer>
    </div>
  )
}
