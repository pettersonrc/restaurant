import Image from "next/image"
import estilos from "./Categorias.module.css"
import entrada from "../../../public/entrada.png"
import massas from "/public/massa.png"
import carnes from "/public/carne.png"
import bebidas from "/public/bebidas.png"
import saladas from "/public/salada.png"
import sobremesas from "/public/sobremesa.png"

export default function Categorias({ handleFiltro, botaoClicado}) {
    return (
        <section className={estilos.container_categorias}>
            <button className={`${botaoClicado === "Entradas" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Entradas")}>
                <Image src={entrada} alt="Icon entradas" className={estilos.img}></Image>
                <span>Entradas</span>
            </button>
            <button className={`${botaoClicado === "Massas" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Massas")}>
                <Image src={massas} alt="Icon Massas" className={estilos.img}></Image>
                <span>Massas</span>
            </button>
            <button className={`${botaoClicado === "Carnes" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Carnes")}>
                <Image src={carnes} alt="Icon Carnes" className={estilos.img}></Image>
                <span>Carnes</span>
            </button>
            <button className={`${botaoClicado === "Bebidas" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Bebidas")}>
                <Image src={bebidas} alt="Icon Bebidas" className={estilos.img}></Image>
                <span>Bebidas</span>
            </button>
            <button className={`${botaoClicado === "Saladas" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Saladas")}>
                <Image src={saladas} alt="Icon Saladas" className={estilos.img}></Image>
                <span>Saladas</span>
            </button>
            <button className={`${botaoClicado === "Sobremesas" ? estilos.acender_botao : estilos.apagar_botao} ${estilos.botao}`}
            onClick={() => handleFiltro("Sobremesas")}>
                <Image src={sobremesas} alt="Icon Sobremesas" className={estilos.img}></Image>
                <span>Sobremesas</span>
            </button>
        </section>
    )
}