import React, {useState} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    const ResumeHeading = (props) => {
        return(
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                    </div>
                    <div className="resume-sub-heading">
                        <span>{props.subHeading ? props.subHeading : ""}</span>
                    </div>
                    <div className="resume-heading-description">
                        <span>{props.description ? props.description : ""}</span>
                    </div>
                
            </div>
        )
    };

    const resumeBullets = [
        {label: "Formations", logoSrc: "education.svg"},
        {label: "Historique Professionnel", logoSrc: "work-history.svg"},
        {label: "Aptitudes de Programmation", logoSrc: "programming-skills.svg"},
        {label: "Projets", logoSrc: "projects.svg"},
        {label: "Hobbies", logoSrc: "interests.svg"},
    ];

    const programmingSkillDetails = [
        {skill: "JavaScript", ratingPercentage: 85},
        {skill: "React Js", ratingPercentage: 70},
        {skill: "TypeScript", ratingPercentage: 70},
        {skill: "Python", ratingPercentage: 85},
        {skill: "Django", ratingPercentage: 80},
        {skill: "C", ratingPercentage: 50},
        {skill: "HTML", ratingPercentage: 85},
        {skill: "CSS", ratingPercentage: 60},
    ];

    const projectsDetails = [
        {
            title: "Contribution au projet EBP pour Siemens Mobility", 
            duration: {fromDate: "2022", toDate: "2022"},
            description: "Projet ayant pour but l'automatisation et la sécurisation des lignes de chemin de fer en Belgique avec Siemens Mobility et Infrabel",
            subHeading: "Technologies used: Python, TypeScript, ..."
        },
        {
            title: "Site Web et Application pour Kiné indépendant", 
            duration: {fromDate: "2022", toDate: "2022"},
            description: "Projet réalisé dans le cadre de mon projet de fin d'étude.",
            subHeading: "Réalisation d'un site web et d'une application mobile pour la gestion de patients d'un kinésithérapeute indépendant."
        },
        {
            title: "Portfolio 2022", 
            duration: {fromDate: "2022", toDate: "2022"},
            description: "Création d'un portfolio en React",
            subHeading: "Technologies utilisées: React JS, Boostrap"
        }
    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"UCL, Louvain-la-Neuve"}
                subHeading = {"Début Passerelle du Master en Sciences informatiques"}
                fromDate = {"2022 "}
                toDate = {" 2023"}
            />
            <ResumeHeading
                heading={"EPHEC Louvain-la-Neuve, Belgique"}
                subHeading = {"Bachelier en Informatique et Systèmes finalité Technologie de l'informatique"}
                fromDate = {"2019 "}
                toDate = {" 2022"}
            />
            <ResumeHeading
                heading={"UCL Louvain-la-Neuve, Belgique"}
                subHeading = {"Bachelier Sciences Informatiques"}
                fromDate = {"2018 "}
                toDate = {" 2019"}
            />
            <ResumeHeading
                heading={"INDBE Braine-le-Comte, Belgique"}
                subHeading = {"Certificat d'Enseignement Secondaire Supérieur"}
                fromDate = {"2012 "}
                toDate = {" 2018"}
            />
        </div>,

        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"Siemens Mobility, Belgique"}
                    subHeading = {"Stage et Job Étudiant"}
                    fromDate = {"Février 2022"}
                    toDate = {"Juillet 2022"}
                />
                <div className="experience-description">
                    <span className='resume-description-text'>
                        - Actuellement en stage chez Siemens Mobility, une démarche administrative a été entamée chez Siemens pour que je puisse y réaliser un job étudiant.
                    </span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Travaille en sur le projet EBP afin d'améliorer l'automatisation et la sécurisation du réseau féroviaire dans les différents secteurs de Belgique.
                    </span><br/>
                    <span className="resume-description-text">
                        - J'ai pris l'habitude de travailler et de collaborer dans des équipes multilingues, ce qui est pour moi une très bonne expérience.
                    </span>
                    <br/>
                </div>
            </div>
            <div className="experience-container">
                <ResumeHeading
                    heading={"Pyronix Production"}
                    subHeading = {"Artiste"}
                    fromDate = {"2023 "}
                    toDate = {"Aujourd'hui"}
                />
                <div className="experience-description">
                    <span className='resume-description-text'>
                        - Développement de mes facultés de communication, d'organisation, du sens des responsabilités, ...
                    </span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        - Artiste pyrotechnique et feu dans la troupe Pyronix Production.
                    </span><br/>
                </div>
            </div>
        </div>,
        <div className="resume-screen-container programming-skills-container"
        key="programmning-skills">
            {programmingSkillDetails.map((skill, index)=>(
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div style={{width: skill.ratingPercentage + "%"}}
                        className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index)=>(
                <ResumeHeading
                    key={index}
                    heading={projectsDetails.title}
                    subHeading={projectsDetails.subHeading}
                    description={projectsDetails.description}
                    fromDate={projectsDetails.duration.fromDate}
                    toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,

        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Informatique et programmation"
                description="L'informatique est une de mes nombreuses passions, je reste le plus possible connecté pour ne jamais rater la moindre sortie tech. J'adore également programmer et tente de me challenger au maximum dans ce domaine de la programmation."
            />
            <ResumeHeading
                heading="Sport"
                description="J'adore également faire du sport, que ce soit du foot, tennis, badminton. Je pense qu'il est important de se dépenser, surtout lorsque l'on occupe un poste de travail fixe comme dans l'informatique."
            />
            <ResumeHeading
                heading="Musique"
                description="La musique est pour moi incontournable lorsqu'il s'agit de travailler à toute heure de la journée, un fond musical m'est primordial pour me concentrer au mieux."
            />
        </div>
    ];
    
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id)
    };
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"}
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
            onClick={() => handleCarousal(index)}
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}
            >
                <img className='bullet-logo' 
                src={require (`../../assets/Resume/${bullet.logoSrc}`)} 
                alt="oops... Pas de connexion" />
                <span className='bullet-label'>
                    {bullet.label}
                </span>
            </div>
        ))
    };

    const getResumeScreen = () => {
        return(
            <div
            style={carousalOffSetStyle.style}
            className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
    }; 

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={'Mon Parcours'} subHeading={'Mes formations, mes expériences, ...'}/>
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>
                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}
