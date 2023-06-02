import style from '../modules/about.module.css'

const About = ()=>{
    return(
        <div className={style.contenedor}>
            <iframe width="727" height="409" src="https://www.youtube.com/embed/E6TUs69Cw94?autoplay=1" allow='autoplay' frameborder="0" ></iframe>
            <h1>RICK AND MORTY</h1>
            <p>"Rick y Morty" es una serie animada para adultos que sigue las aventuras interdimensionales del científico alcohólico Rick Sánchez y su nieto adolescente, Morty Smith. La serie se caracteriza por su humor absurdo y oscuro, que combina elementos de ciencia ficción, comedia y drama.</p>
            <p>En este proyecto lograrás interactuar con cartas de presentación de cada personaje existente de esta maravillosa serie. </p> 
            <p>¡Brrup *sonido de eructo*... disfruta!</p>
        </div>
    )
}

export default About;