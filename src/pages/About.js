import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <h1>About me</h1>
            <div className='about__content'>
                <div style={{fontWeight: 'bold'}}>Pak Elena, Junior Front-end developer</div>
                <br/>
                <div> My birthday is 17.09.2000</div>
                <br/>
                <div>My skills</div>
                <div>
                    <ul>
                        <li>HTML & CSS</li>
                        <li> JavaScript</li>
                        <li>ReactJS</li>
                        <li>Github</li>
                    </ul>
                </div>
                <br/>
                <div>Telegram: +996559369000</div>
                <div>E-mail: alena.pak2000@gmail.com</div>
            </div>
            <div className='about__text'>
                I graduated from Ala-Too International University last year as a world economist.
                For the entire current year, I participated in the Programmer Ayimdar II, where I studied web
                development.
                <br/>
                I'm more of an introvert than an extrovert, so in my free time I study psychology,
                play mobile games and read books. I love lazy rest and picnics. Also every week my friends and me
                are going to play board games, drink beer and have a tasty meal. Sometimes I do sport and yoga.
            </div>

        </div>);
};

export default About;