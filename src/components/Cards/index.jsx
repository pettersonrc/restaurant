import estilos from "./Cards.module.css"
import Image from "next/image"

export default function Cards(props) {
    return (
        <div className={estilos.cards}>
            <figure>
                <Image className={estilos.img} src={props.imagem} alt={props.nome}></Image>
            </figure>
            <div className={estilos.container_texto}>
                <div>
                    <h3>{props.nome}</h3>
                    <small>{props.categoria}</small>
                    <p>{props.descricao}</p>
                </div>
                <div>
                    <span>{props.preco}</span>
                </div>
            </div>
        </div>
    )
}