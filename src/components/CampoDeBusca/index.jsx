import estilos from "./CampoDeBusca.module.css"
import Image from "next/image"
import Lupa from "/public/lupa.png"

export default function CampoDeBusca({ textoBuscaDigitado, handleBusca }) {
    return (
        <div className={estilos.container_campo_busca}>
            <Image 
                src={Lupa} 
                className={estilos.img_lupa} 
                alt="Icon Lupa">
            </Image>
            <input
                type="text"
                value={textoBuscaDigitado}
                onChange={(event) => handleBusca(event.target.value)}
                className={estilos.campo_de_busca}
                placeholder="Pesquise aqui um dos pratos do nosso cardápio">
            </input>
        </div>
    )
}