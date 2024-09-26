import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/index.module.css';
import Image from  'next/image'; 
import Link from  'next/link';

export default function Home() {
    
    return (
        <main className={styles.mainStyle}>
            
                <header className={styles.headerStyle}>
                    <div className={styles.mobile}>
                        <section className={styles.title}>
                            <h1>Marcos Esteban Berta</h1>
                        </section>
                        <section className={styles.contentImg}>
                            <Image src="/foto-perfil-cv.png"  alt="perfil" width={300} height={300} className={styles.img}/>
                        </section>
                    </div>
                    <div className={styles.title}>
                        <h2>Desarrollador especializado en: </h2>
                            <ul>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>MongoDB</li>
                                <li>Mongo Atlas</li>
                                <li>MobileFirst Concept</li>
                                <li>Manejo de Node.js</li>
                            </ul>
                    </div>
                </header>
                <div>
                    <section className={styles.resume}>
                        <h2>Resumen Profesional</h2>
                        <article className={styles.flag}>
                            <Link href='/'>
                                <Image src="/españa.png"  alt="españa" width={40} height={40} className={styles.flagE}/>
                            </Link>
                            <Link href='/indexEnglish'>
                                <Image src="/inglaterra.png"  alt="inglaterra" width={40} height={40} className={styles.flagI}/>
                            </Link>
                        </article>
                        <p>Desarrollador full-stack con sólida experiencia de HTML, CSS, JavaScript, React, Next.js, MongoDB y Mongo Atlas, implementando soluciones de IA y trabajando en equipos ágiles. Manejo avanzado del inglés, lo que me permite comunicarme eficientemente en equipos internacionales y trabajar con documentación técnica en inglés.</p>
                        <h3><a href='#contact'>Contacto: bertamarcosesteban@gmail.com</a></h3>
                    </section>
                    <section className={styles.habilidades}>
                        <h2>Habilidades Técnicas</h2>
                        <ul>
                            <li>HTML, CSS, JavaScript (ES6+)</li>
                            <li>React, Next.js</li>
                            <li>MongoDB, Mongo Atlas</li>
                            <li>Boostrap</li>
                            <li>Creación de Hoja de Estilos Nativa</li>
                            <li>Implementación de Inteligencia Artificial</li>
                            <li>Git, Visual Studio Code</li>
                            <li>Idiomas: Español(Nativo)<br/>
                            <span className={styles.idiomas}>Ingles(Avanzado)</span></li>
                        </ul>
                    </section>
                    <section className={styles.profesionalPortfolio}>
                        <h2>Experiencia Profesional</h2>
                        <article>
                            <h3>Desarrollador Full-Stack </h3>
                            <p>Febrero 2022 - Presente</p>
                            <p>Desarrollo de aplicaciones  por encargo tipo landing page y e-commerce utilizando React y Next.js, con el concepto SPA y MobileFirst optimizando la carga de páginas y mejorando el rendimiento con MongoDB y soluciones AI.</p>
                        </article>
                    </section>
                    <section className={styles.profesionalPortfolio}>
                        <h2>Portfolio</h2>
                        <article>
                            <h3><a href="https://chajariwine.vercel.app" target="_blank" rel="noopener noreferrer">ChajariWine</a></h3>
                            <p>Aplicación e-commerce de prueba y publicidad realizada con React, Next.js y MongoDB.</p>
                        </article>
                    </section>
                    <footer className={styles.footerStyle}>
                        <h3 id='contact'>Contacto</h3>
                        <Link href='/contact'>
                                <p>Haz click para dejarme un mensaje</p>
                        </Link>
                        <article>
                            <h4><a href="https://linkedin.com/in/marcos-berta-214b77257" target="_blank" rel="noopener noreferrer">LinkedIn</a></h4>
                            <h4><a href="https://github.com/mak2220/" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
                        </article>    
                    </footer>
                </div>
        </main>
    );
}