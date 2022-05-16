import React from 'react';
import './Home.css';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import BackToTop from './BackToTop/BackToTop';

export default function Home() {
    return (
        <div className='home-container'>
            <BackToTop/>
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    )
}
