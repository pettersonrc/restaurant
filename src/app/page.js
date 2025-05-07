import Image from "next/image";
import estilos from "./page.module.css";
import Categorias from "@/components/Categorias";
import CampoDeBusca from "@/components/CampoDeBusca";

export default function Home() {
    return (
        <div>
            <header className={estilos.banner}>
                <div>
                    <h1>RESTAURANT</h1>
                    <p>
                        De pratos clássicos a criações surpreendentes, nosso
                        cardápio é um requinte de sabores refinados
                    </p>
                </div>
            </header>
            <main>
                <Categorias />
                <CampoDeBusca />
                <section>
                    <h2></h2>
                    <div>{}</div>
                </section>
            </main>
        </div>
    );
}
