import Image from "next/image";
import estilos from "./page.module.css";
import Categorias from "@/components/Categorias";
import CampoDeBusca from "@/components/CampoDeBusca";
import Cards from "@/components/Cards";
import { produtos } from "@/dados/data_produtos";
import banner from "/public/banner.png";

export default function Home() {
    return (
        <div>
            <header className={estilos.cabecalho}>
                <Image
                    src={banner}
                    className={estilos.banner}
                    alt="banner"
                ></Image>
                <div className={estilos.texto_container}>
                    <h1>RESTAURANT</h1>
                    <p className={estilos.paragrafo_cabecalho}>
                        De pratos clássicos a criações surpreendentes, nosso
                        cardápio é um requinte de sabores refinados
                    </p>
                </div>
            </header>
            <main className={estilos.container_main}>
                <Categorias />
                <CampoDeBusca />
                <section className={estilos.secao_cards}>
                    <h2>Cardápio</h2>
                    <div className={estilos.cards}>
                        {produtos.map((produto) => (
                            <Cards
                                key={produto.id}
                                imagem={produto.imagem}
                                nome={produto.nome}
                                categoria={produto.categoria}
                                descricao={produto.descricao}
                                preco={produto.preco}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
