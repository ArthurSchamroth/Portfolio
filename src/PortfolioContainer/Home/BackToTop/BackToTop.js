import React from 'react';
import {useEffect, useState} from 'react';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export default function BackToTop() {
    
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 400){
                setBackToTopButton(true)
            }else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopButton ?
                <button onClick={scrollUp} style={{
                position: "fixed",
                bottom: "50px",
                right: "50px",
                height: "50px",
                width: "50px",
                fontSize: "50px",
                borderRadius: "20px",
                color: "tomato",
                border: "transparent",
                backgroundColor: "transparent"
                }}><FontAwesomeIcon icon={faArrowUp}/>
                </button>
                : null
            }
            
        </div>
    )
}
