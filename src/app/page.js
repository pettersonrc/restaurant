"use client";

import Image from "next/image";
import estilos from "./page.module.css";
import Categorias from "@/components/Categorias";
import CampoDeBusca from "@/components/CampoDeBusca";
import Cards from "@/components/Cards";
import banner from "/public/banner.png";
import { useState } from "react";
import {
    filtrarProdutos,
    buscarProduto,
    produtosEntradas,
} from "@/services/servicos";

export default function Home() {
    const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
    const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");
    const [botaoClicado, setBotaoClicado] = useState("");

    const handleBusca = (textoDigitado) => {
        setTextoBuscaDigitado(textoDigitado);
        textoDigitado.length >= 3 &&
            setDadosFiltrados(buscarProduto(textoDigitado));
        setBotaoClicado("");
    };

    const handleFiltro = (categoria) => {
        setTextoBuscaDigitado("");
        setDadosFiltrados(filtrarProdutos(categoria));
        setBotaoClicado(categoria);
    };

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
                <Categorias
                    handleFiltro={handleFiltro}
                    botaoClicado={botaoClicado}
                />
                <CampoDeBusca
                    textoBuscaDigitado={textoBuscaDigitado}
                    handleBusca={handleBusca}
                />
                <section className={estilos.secao_cards}>
                    <h2>Cardápio</h2>
                    <div className={estilos.cards}>
                        {dadosFiltrados.map((produto) => (
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
