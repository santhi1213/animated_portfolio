import React, { useState } from 'react';
import styles from './Home.module.css';
import main from '../assets/main.png';
import ArrowBottom from '../assets/arrow-bottom.png';
import ArrowTop from '../assets/arrow-top.png';
import ArrowLeft from '../assets/back-arrow.png';
import ArrowRight from '../assets/arrow-right.png';
import SeeTop from '../assets/top.png';
import seeDown from '../assets/down.png';
import SeeRight from '../assets/right.png';
import SeeLeft from '../assets/left.png';

const Project = ({ Projectscale }) => {
    return (
        <div style={{ transform: `scale(${Projectscale})`, transition: 'transform 0.3s ease-in-out', width:'250px', boxShadow:'2px 2px 20px 1px white', textAlign:'center', borderRadius:'8px',padding:'5px', marginBottom:'-200px', marginTop:'-55%', marginLeft:'10%' }}>
            <h1>Projects</h1>
            <ul style={{listStyleType:'none',marginLeft:'-50px',fontSize:'18px',display:'flex',flexDirection:'column', gap:'5px'}}>
                <li><a href='https://movie-site-three-snowy.vercel.app'>Movies website Using API</a></li>
                <li><a href='https://e-commerce-phi-five-89.vercel.app'>Ecommerce Website</a></li>
                <li><a href='https://tic-iota-sage.vercel.app'>Tic Tac Toe</a></li>
                <li><a href='https://portfolio-react-omega-ecru.vercel.app/'>Portfolio</a></li>
                <li><a href='https://calculator-react-one-ashy.vercel.app/'>Calculator</a></li>
                <li><a href='https://to-do-liists.netlify.app'>To Do List</a></li>
            </ul>
        </div>
    );
};

const Skills = ({SkillScale}) =>{
    return(
        <div style={{ transform: `scale(${SkillScale})`, transition: 'transform 0.3s ease-in-out', width:'250px', boxShadow:'2px 2px 20px 1px white', textAlign:'center', borderRadius:'8px',padding:'5px', marginLeft:'70%', marginTop:'-30%', height:'300px' }}>
            <h1>Skills</h1>
            <ul style={{float:'left',marginTop:'-10px', display:'flex', flexDirection:'column', gap:'5px'}}>
                <li>React JS</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>MongoDB</li>
                <li>Github</li>
                <li>Wordpress</li>
            </ul>
        </div>
    )
}

const Education = ({EducationScale}) =>{
    return(
        <div style={{ transform: `scale(${EducationScale})`, transition: 'transform 0.3s ease-in-out', width:'250px', height:'250px', boxShadow:'2px 2px 20px 1px white', textAlign:'center', borderRadius:'8px',padding:'3px', marginTop:'2%', marginLeft:'42%', marginBottom:'63%' }}>
            <h1>Education</h1>
            <h4 style={{marginTop:'-10px'}}>B.Tech, CSE</h4>
            <p style={{marginTop:'-10px', fontSize:'12px'}}>DNR College of Engineering and Technology</p>
            <p style={{marginTop:'-8px', fontSize:'9px'}}>2021-2024, 7.77CGPA</p>
            <h4>Diploma, ECE</h4>
            <p style={{marginTop:'-15px', fontSize:'12px'}}>Smt.B.Seetha Polytechnic</p>
            <p style={{marginTop:'-8px', fontSize:'9px'}}>2018-2021, 82%</p>
        </div>
    )
}

const Resume =({ResumeScale}) =>{
    return(
        <div style={{ transform: `scale(${ResumeScale})`, transition: 'transform 0.3s ease-in-out', width:'250px', height:'150px', boxShadow:'2px 2px 20px 1px white', textAlign:'center', borderRadius:'8px',padding:'5px',marginTop:'25%', marginBottom:'-50%', marginLeft:'43%' }}>
            <h1>Resume</h1>
            <button style={{padding:'5px',borderRadius:'8px', border:'none', outline:'none', height:'40px', width:'100px',cursor:'pointer'}}><a href='https://drive.google.com/file/d/1sDSDM9xUl1W9-3SMzPabNiPRdMR3Ao8j/view?usp=drive_link' style={{textDecoration:'none',color:'black',fontSize:'15px'}}>Resume</a></button>
        </div>
    )
}



const Home = () => {
    const [currentImage, setCurrentImage] = useState(main);
    const [Projectscale, setProjectScale] = useState(0); // Lifted scale state
    const [SkillScale, setSkillScale] = useState(0);
    const [EducationScale, setEducationScale] = useState(0);
    const [ResumeScale, setResumeScale] = useState(0);

    // Function to handle image change
    const HandleChange = (imageName) => {
        setCurrentImage(imageName);
    };

    // Function to increase scale
    const IncreaseProjectScale = () => {
        setProjectScale(1);
    };
    const decreaseProjectScale = () =>{
        setProjectScale(0);
    }

    const IncreaseSkillScale = () =>{
        setSkillScale(1);
    };
    const decreaseSkillScale = () =>{
        setSkillScale(0)
    }

    const IncreaseEducationScale = () =>{
        setEducationScale(1);
    }
    const decreaseEducationScale =() =>{
        setEducationScale(0);
    }

    const IncreaseResumeScale = () =>{
        setResumeScale(1);
    }
    const decreaseResumeScale = () =>{
        setResumeScale(0);
    }

    // Combined function that calls both HandleChange and IncreaseScale
    const ProjectCombinedClick = (imageName) => {
        HandleChange(imageName);
        IncreaseProjectScale();
        decreaseSkillScale();
        decreaseEducationScale();
        decreaseResumeScale();
    };

    const SkillCombinedClick = (imageName) =>{
        HandleChange(imageName);
        IncreaseSkillScale();
        decreaseProjectScale();
        decreaseEducationScale();
        decreaseResumeScale();
    }

    const EducationCombinedClick = (imageName) =>{
        HandleChange(imageName);
        IncreaseEducationScale();
        decreaseProjectScale();
        decreaseSkillScale();
        decreaseResumeScale();
    }

    const AboutCombinedClick = (imageName) =>{
        HandleChange(imageName);
        IncreaseResumeScale();
        decreaseProjectScale();
        decreaseSkillScale();
        decreaseEducationScale();
    }

    const removeallCombinedClick = (imageName) =>{
        HandleChange(imageName);
        decreaseResumeScale();
        decreaseEducationScale();
        decreaseProjectScale();
        decreaseSkillScale();
    }

    return (
        <>            
            <Education EducationScale = {EducationScale}/>
            <Project Projectscale={ Projectscale } /> {/* Passing scale as a prop */}
            <Resume ResumeScale={ResumeScale} />
            <div style={{ width: 'max-content', height: 'min-content', marginLeft: '42%', marginBottom: '-10%' }}>
                <img src={ArrowBottom} alt="bottom-img" className={styles.ArrowBottom} onClick={()=> EducationCombinedClick(SeeTop)} style={{width:'130px'}}/>
            </div>
           
            <div style={{ display: 'flex', marginLeft: '35%' }}>
                
                <div>
                    <img src={ArrowRight} alt="right-img" className={styles.ArrowRight} style={{ height: '100px' }} onClick={() => ProjectCombinedClick(SeeLeft)} />
                </div>
                <div className={styles.container}>
                    <img src={currentImage} alt="main" onClick={() => removeallCombinedClick(main)} />
                </div>
                <div>
                    <img src={ArrowLeft} alt="left-img" className={styles.ArrowLeft} onClick={()=> SkillCombinedClick(SeeRight)} />
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <img src={ArrowTop} alt="top-img" className={styles.ArrowTop} onClick={()=> AboutCombinedClick(seeDown)} />
            </div>
            <Skills SkillScale={SkillScale}/>
        </>
    );
};

export default Home;
