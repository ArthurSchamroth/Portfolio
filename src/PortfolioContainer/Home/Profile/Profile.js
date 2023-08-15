import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.linkedin.com/in/arthur-schamroth-a27750239/">
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href="https://github.com/ArthurSchamroth">
                                <i className='fa fa-github-square'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            Bienvenue, je m'appelle <span className='highlighted-text'>Arthur Schamroth</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            <h1>
                                <Typical 
                                    loop={Infinity}
                                    wrapper="p"
                                    steps={[
                                        "Développeur", 
                                        10000,
                                        "Passionné d'informatique", 
                                        10000,
                                        "Autonome",
                                        10000
                                    ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                FullStack Développeur, habitué à l'environnement Scrum, ...
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
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
                <div className="profile-picture">
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    )
}
