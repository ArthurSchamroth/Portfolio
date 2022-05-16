import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const SCREEN_CONSTANTS = {
        description: "Étudiant en dernière année d'un bachelier en Informatique et Systèmes finalité Technologie de l'informatique à l'EPHEC de Louvain-la-Neuve, je désire réaliser un master dans le cadre d'un approfondissement de mes connaissances dans le domaine de l'informatique. Au cours des années d'étude et ma période de stage chez Siemens Mobility, j'ai eu l'opportunité de beaucoup travailler dans un cadre de travail Scrum ainsi que de côtoyer des langages comme Python, JavaScript, ... avec lesquels je me sens maintenant à l'aise.",
        highlights: {
            bullets: [
                "Full stack Développeur Web et Mobile",
                "React et React Native",
                "Création d'API REST",
                "Gestion de base de données",
                "Gestion de framework tel que Django, Symfony, ..."
            ],
            heading: "Voici quelques points que je souhaite mettre en avant :"
        }
    }
    const renderHighlight = () => {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={'Me concernant'} subHeading={'Je me présente'}/>
                <div className="about-me-card">
                    <div className="about-me-profile">
                        <div className='coordonnees-container'>
                            <h1>Présentation Générale</h1>
                            <div className='coordonees-items'>
                                <p>Age : 21 ans</p>
                                <p>Langues : Français, Anglais</p>
                            </div>
                            <h1>Me contacter</h1>
                            <div className='coordonees-items'>
                                <p>Arthur Schamroth</p>
                                <p>Adresse Mail : schamrotharthur@gmail.com</p>
                                <p>Adresse : 56 rue Hector Denis, 7090 Braine-le-Comte</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-me-details">
                        <div className='coordonnees-container-petit'>
                                <h1>Présentation Générale</h1>
                                <div className='coordonees-items'>
                                    <p>Age : 21 ans</p>
                                    <p>Langues : Français, Anglais</p>
                                </div>
                                <h1>Me contacter</h1>
                                <div className='coordonees-items'>
                                    <p>Arthur Schamroth</p>
                                    <p>Adresse Mail : schamrotharthur@gmail.com</p>
                                    <p>Adresse : 56 rue Hector Denis, 7090 Braine-le-Comte</p>
                                </div>
                        </div>
                        <i className='fa fa-quote-left'/>
                            <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <i className='fa fa-quote-right'/>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                        <div className='about-me-options'>
                            <a href="preuves_pdf/Arthur_Schamroth.pdf" target="_blank" rel="noreferrer">
                                <button className='btn primary-btn'>
                                    Voir CV
                                </button>
                            </a>
                            
                            <a href="Arthur_Schamroth.pdf" download="CV Arthur_Schamroth.pdf">
                                <button className="btn highlighted-btn">Télécharger</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
