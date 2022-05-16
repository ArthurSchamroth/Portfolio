import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import shape from "../../assets/Testimonial/shape-bg.png";

import './Testimonial.css';
import devDay from '../../../src/img/Testimonial/DevDay.jpg';
import cyberSec from '../../../src/img/Testimonial/cyber_secu_challenge.jpg';
import hackathon from '../../../src/img/Testimonial/Hackathon.jpg';
import tutorat from '../../../src/img/Testimonial/Tutorat.jpg';
import udemy from '../../../src/img/Testimonial/Udemy.png';

export default function Testimonial(props) {

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bouceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1000:{
                items:3,
            },
        }
    }

    return (
        <div>
            <ScreenHeading
                title={'Portfolio'}
                subHeading={"Activités effectuées durant mon bachelier"}
            />
            <section className='tableau_container'>
                <table>
                    <thead>
                        <tr>
                            <th>Thèmes abordés</th>
                            <th>Activités</th>
                            <th>Heures réelles</th>
                            <th>Heures valorisées</th>
                            <th>Preuves</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Salon Informatique</td>
                        <td>DevDays 2021 - Louvain-la-Neuve</td>
                        <td className='heures'>10h</td>
                        <td className='heures'>10h</td>
                        <td className='td_btn'><a href="preuves_pdf/preuves_devday.pdf" target="_blank" rel="noreferrer"><button>Photos</button></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Hackathon</td>
                        <td>Hackathon "Développement Durable" EPHEC - Louvain-la-Neuve</td>
                        <td className='heures'>± 72h</td>
                        <td className='heures'>10h</td>
                        <td className='td_btn'><a href="preuves_pdf/preuves_hackathon.pdf" target="_blank" rel="noreferrer"><button>Photos</button></a></td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>CyberSécurité</td>
                        <td>CyberSecurity Belgium 2021 - Distanciel</td>
                        <td className='heures'>± 12h</td>
                        <td className='heures'>10h</td>
                        <td className='td_btn'><a href="preuves_pdf/preuves_cyberSecurity.pdf" target="_blank" rel="noreferrer"><button>Screenshot</button></a></td></tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Formation Web</td>
                        <td>React/Django Full Stack - Formation Udemy</td>
                        <td className='heures'>± 20h</td>
                        <td className='heures'>10h</td>
                        <td className='td_btn'><a href="preuves_pdf/preuves_django_react.pdf" target="_blank" rel="noreferrer"><button>Screenshot</button></a></td></tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Formation Analyse de données</td>
                        <td>Data Science: Analyse de Données avec Python - Formation Udemy</td>
                        <td className='heures'>± 20h</td>
                        <td className='heures'>10h</td>
                        <td className='td_btn'><a href="preuves_pdf/preuves_data.pdf" target="_blank" rel="noreferrer"><button>Screenshot</button></a></td></tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Tutorat Mathématique</td>
                        <td>Tutorat Mathématique - Teams et Discord</td>
                        <td className='heures'>9h</td>
                        <td className='heures'>9h</td>
                        <td className='td_btn'><a href="preuves_pdf/preuves_tutorats.pdf" target="_blank" rel="noreferrer"><button>Screenshot</button></a></td></tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td>Réseau Ferroviaire</td>
                        <td>Formation Fonctionnement et Automatisation Réseau ferroviaire en Belgique - Siemens</td>
                        <td className='heures'>10h</td>
                        <td className='heures'>10h</td>
                        <td className='td_btn'><a href="preuves_pdf/preuves_reseau_ferro.pdf" target="_blank" rel="noreferrer"><button>Screenshot</button></a></td></tr>
                    </tbody>
                    <tbody>
                        <tr>
                        <td id='total'>Total</td>
                        <td></td>
                        <td id='total' className='heures'>± 150h</td>
                        <td id='total' className='heures'>+ 60h</td>
                        <td></td></tr>
                    </tbody>
                </table>
            </section>
            <div className='button_tableau'>
                <a href="preuves_pdf/PreuvesAll.pdf" target="_blank" rel="noreferrer"><button>Portfolio</button></a>
            </div>
            <section className='testimonial-section' id={props.id || ""}>
                <div className='container'>
                    <div className="row">
                        <OwlCarousel className='owl-carousel' id='testimonial-carousel' {...options}>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            Participation au Cyber Security Challenge Belgium en 2021. Édition organisée en distanciel suite au coronavirus.
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <img src={cyberSec} alt="pas de connexion" />
                                        <div>
                                            <h5>Cyber Security Challenge Belgium 2021</h5>
                                            <p>Distanciel</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            J'ai participé au salon du DevDay 2021 au Cinéscope de Louvain-la-Neuve ! Je m'y suis rendu à de multiples salons.
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <img src={devDay} alt="pas de connexion" />
                                        <h5>DevDay 2021</h5>
                                        <p>Cinéscope Louvain-la-Neuve</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            J'ai participé à l'hackathon, organisé par l'EPHEC à LLN, sur le thème du développement durable.
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <img src={hackathon} alt="pas de connexion" />
                                        <h5>Hackaton 2021</h5>
                                        <p>EPHEC Louvain-la-Neuve</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            J'ai suivi quelques formations sur Udemy dans le cadre de mes différents cours de programmation.
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <img src={udemy} alt="pas de connexion" />
                                        <h5>Formations Udemy</h5>
                                        <p>En distanciel sur Udemy</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            J'ai donné quelques tutorats de mathématiques et d'électrocinétiques à des élèves de première année.
                                        </p>
                                    </div>
                                    <div className="client-info">
                                        <img src={tutorat} alt="pas de connexion" />
                                        <h5>Tutorats 2020-2021</h5>
                                        <p>En distanciel sur Teams</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
            <div className="footer-image">
                <img src={shape} alt="Phot0 not responding" />
            </div>
        </div>
    )
}
