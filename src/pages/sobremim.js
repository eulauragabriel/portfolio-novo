import React from 'react';
import Layout from '@/components/layout';
import styles from '@/styles/sobremim.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.imageContainerI}>
                <img src="/images/cmiygl.png" alt="" className={styles.imageLeft} /> 
            </div>
                <p>Meu nome é Laura, tenho 20 anos e estou cursando o terceiro semestre de Desenvolvimento de Software
                    Multiplataforma na Faculdade de Tecnologia do Estado de São Paulo (Fatec) Prof. Jessen Vidal.
                </p>
                <p>Paralelamente, sou bolsista de Iniciação Tecnológica no Instituto Nacional de Pesquisa Espacial (INPE) desenvolvendo uma pesquisa relaciona utilizando Processamento de Imagens e Inteligência Artificial com o intuito de auxiliar no Programa <a href="https://terrabrasilis.dpi.inpe.br/queimadas/portal/" target="_blank" >Queimadas</a>.</p>
                <p>
                    Possuo diversos hobbies, consigo me adaptar bem a novos ambientes e faço amizades com facilidade. Sempre
                    disposta a aprender mais.
                </p>
                <p>Gosto bastante de sair, viajar e estar com os meus amigos e família.
                    Aos finais de semana não há nada melhor do que sair da rotina!</p>
                <p>Tenho alguns hobbies aos quais sempre dedico algum tempo. Alguns exemplos são: desenhar, assistir
                    documentários sobrenaturais e de crimes reais, anime, vôlei, ler, correr, aprender novas línguas e
                    fotografar.</p>
                <p>Você consegue ver mais sobre clicando <a href="hobbies">AQUI</a>!</p>
                <div  className={styles.imageContainerII}>
                    <img src="/images/starsII.png" alt="" className={styles.imageRight} /> 
                </div>
            </div>
    );
};

export default About;
