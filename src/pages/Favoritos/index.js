import Titulo from "components/Titulo";
import styles from "./Favoritos.module.css";
import Card from "components/Card";
import { useFavoritoContext } from "contextos/Favoritos";
import Banner from "components/Banner";

function Favoritos() {
    const { favorito } = useFavoritoContext();

    return (
        <>
            <Banner imagem='home' />
            <Titulo>
                <h1>Filmes favoritos!</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favoritos;