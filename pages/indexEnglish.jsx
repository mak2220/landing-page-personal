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
                    <h2>Developer specialized in:</h2>
                        <ul>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>MongoDB</li>
                            <li>Mongo Atlas</li>
                            <li>MobileFirst Concept</li>
                            <li>Handling Node.js</li>
                        </ul>
                </div>
            </header>
            <div>
                <section className={styles.resume}>
                    <h2>Professional Summary</h2>
                        <article className={styles.flag}>
                            <Link href='/'>
                                <Image src="/españa.png"  alt="españa" width={40} height={40} className={styles.flagE}/>
                            </Link>
                            <Link href='/indexEnglish'>
                                <Image src="/inglaterra.png"  alt="inglaterra" width={40} height={40} className={styles.flagI}/>
                            </Link>
                        </article>
                    <p>Full-stack developer with solid experience in HTML, CSS, JavaScript, React, Next.js, MongoDB and Mongo Atlas, implementing AI solutions and working in agile teams. Advanced command of English, allowing me to communicate efficiently in international teams and work with technical documentation in English.</p>
                    <h3><a href='#contact'>Contacto: bertamarcosesteban@gmail.com</a></h3>
                </section>
                <section className={styles.habilidades}>
                    <h2>Technical Skills</h2>
                    <ul>
                        <li>HTML, CSS, JavaScript (ES6+)</li>
                        <li>React, Next.js</li>
                        <li>MongoDB, Mongo Atlas</li>
                        <li>Boostrap</li>
                        <li>Creating Native CSS</li>
                        <li>Implementation of Artificial Intelligence</li>
                        <li>Git, Visual Studio Code</li>
                        <li>Languages: Spanish (Native)<br/>
                        <span className={styles.idiomas}>English (Advanced)</span></li>
                    </ul>
                </section>
                <section className={styles.profesionalPortfolio}>
                    <h2>Professional Experience</h2>
                    <article>
                        <h3>Full-Stack Developer</h3>
                        <p>February 2022 - Present</p>
                        <p>Development of custom landing page and e-commerce applications using React and Next.js, with the SPA and MobileFirst concept, optimizing page loading and improving performance with MongoDB and AI solutions.</p>
                    </article>
                </section>
                <section className={styles.profesionalPortfolio}>
                    <h2>Portfolio</h2>
                    <article>
                        <h3><a href="https://chajariwine.vercel.app" target="_blank" rel="noopener noreferrer">ChajariWine</a></h3>
                        <p>E-commerce test and advertising application made with React, Next.js and MongoDB.</p>
                    </article>
                </section>
                <footer className={styles.footerStyle}>
                    <h3 id='contact'>Contact</h3>
                    <Link href='/contactEnglish'>
                            <p>Click here to leave me a menssage</p>
                    </Link>
                    <article>
                        <h4><a href="https://linkedin.com/in/marcos-berta-214b77257" target="_blank" rel="noopener noreferrer">LinkedIn</a></h4>
                        <h4><a href="https://github.com/mak2220/" target="_blank" rel="noopener noreferrer">GitHub</a></h4>
                    </article>    
                </footer>
            </div>
        </main>
    )
}