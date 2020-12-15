import React from 'react';
import './About.css';


export default function About() {
    return (
        <div className="about">
            
            <div className="about_head">
                We are the best in the world
            </div>
            <div className="about_main_head">
                We Are Here to Serve you the best
            </div>
            <div className="about_content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quaerat? <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="team_information">
                <div className="member member1">
                    <div className="member_info">
                        <span></span> <h3>  Rachael Hunter</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, illo!</p>
                    </div>
                </div>
                <div className="member member2">
                    <div className="member_info">
                        <span></span> <h3>  John Chimpu</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, illo!</p>
                    </div>
                </div>
                <div className="member member3">
                    <div className="member_info">
                        <span></span> <h3>  Alvaro Rodriguez</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, illo!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
