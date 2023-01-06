import React from 'react';
import Marquee from "react-fast-marquee";


import './portfolio.css'


import Html5 from '../../img//skills/html.png'
import Js from '../../img/skills/js.png'
import react from '../../img/skills/react.png'
import vue from '../../img/skills/vue.png'
import jQuery from '../../img/skills/jquery.png'
import json from '../../img/skills/json.png'
import Node from '../../img/skills/nodejs.png'
import Css from '../../img/skills/css.png'
import Sass from '../../img/skills/sass.png'
import Boot from '../../img/skills/bst.png'
import Rboot from '../../img/skills/rbst.png'
import Swift from '../../img/skills/Swift.png'
import Figma from '../../img/skills/figma.png'
import Xd from '../../img/skills/xd.png'
import Sketch from '../../img/skills/sketch.png'
import Aws from '../../img/skills/aws.png'
import Sql from '../../img/skills/sql.png'
import Unity from '../../img/skills/unity.png'



const skillsData = [
    {
        id: 1,
        image:  Html5,
        skill: 'Html5',
    },
    {
        id: 2,
        image:  Js ,
        skill: 'Javascript',
    },
    {
        id: 3,
        image:  react,
        skill: 'React.js',
    },
    {
        id: 4,
        image: vue,
        skill: 'Vue.js',
    },
    {
        id: 5,
        image:  jQuery,
        skill: 'jQuery',
    },
    {
        id: 6,
        image:  json ,
        skill: 'Json',
    },
    {
        id: 7,
        image:  Node,
        skill: 'Node.js',
    },
    {
        id: 8,
        image: Css,
        skill: 'Css3',
    },
    {
        id: 9,
        image: Sass,
        skill: 'Sass',
    },
    {
        id: 10,
        image: Boot,
        skill: 'Bootstrap',
    },
    {
        id: 11,
        image: Rboot,
        skill: 'React_Bootstrap',
    },
    {
        id: 12,
        image: Swift,
        skill: 'Swift',
    },
    {
        id: 13,
        image: Figma,
        skill: 'Figma',
    },
    {
        id: 14,
        image: Xd,
        skill: 'Adobe XD',
    },
    {
        id: 15,
        image: Sketch,
        skill: 'Sketch',
    },
    {
        id: 16,
        image: Aws,
        skill: 'AWS',
    },
    {
        id: 17,
        image: Sql,
        skill: 'SQL',
    },
    {
        id: 18,
        image: Unity,
        skill: 'Unity',
    }
]


function portfolio () {

    const skillBoxStyle = {
        backgroundColor: 'rgb(63, 8, 109)',
        boxShadow: `0px 0px 30px 3px`
    }


    return (
        <div className="portfolio" >
            <div className="skillsHeader">
                <h2 style={{color: 'hsl(185, 92%, 41%)'}}>Skills</h2>
            </div>
            <div className="marque">
            <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
            {
              skillsData.map(({id, image, skill}) =>{
                return(
                <div   key={id}  className="skill--scroll">
                 
                      
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={image} alt={skill} />
                                <h3 style={{color: 'hsl(185, 92%, 41%)'}}>
                                    {skill}
                                </h3>
                            </div>
         
                    
                </div>
       
       )
    } )
   }

</Marquee>
         </div>
        </div>
    )
}

export default portfolio