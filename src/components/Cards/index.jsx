import estilos from "./Cards.module.css"
import Image from "next/image"

export default function Cards(props) {
    return (
        <div className={estilos.cards}>
            <figure>
                <Image className={estilos.img} src={props.imagem} alt={props.nome}></Image>
            </figure>
            <div className={estilos.container_texto}>
                <div className={estilos.container_descricao}>
                    <h3>{props.nome}</h3>
                    <small className={estilos.texto_categoria}>{props.categoria}</small>
                    <p>{props.descricao}</p>
                </div>
                <div className={estilos.container_preco}>
                    <span>R${props.preco.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}