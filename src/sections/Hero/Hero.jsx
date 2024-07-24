import { useState } from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import youtubeLight from "../../assets/youtube.png";
import youtubeDark from "../../assets/youtube.png";
import facebookLight from "../../assets/facebook.png";
import facebookDark from "../../assets/facebook.png";
import githubLight from "../../assets/github.png";
import githubDark from "../../assets/github.png";
import linkedinLight from "../../assets/linkedin.png";
import linkedinDark from "../../assets/linkedin.png";
import CV from "../../assets/cvResume.pdf"
import { useTheme } from "../../common/ThemeContext";


/* Inside the styles folder, then className container*/
/* Inside the styles folder, then className colorModeContainer, src from import */
function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const youtubeIcon = theme === 'light' ? youtubeLight : youtubeDark;
    const facebookIcon = theme === 'light' ? facebookLight : facebookDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;  

    const [isShaking, setIsShaking] = useState(false);

    const handleClick = () => {
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 800);
    };

  return (
    <section id="hero" className={styles.container}> 
       <div className={styles.colorModeContainer}>  
            <img className ={styles.hero} src={heroImg} alt="Profile picture of Douglas Marsalis"/>
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Douglas Eric <br />
                Marsalis
            </h1>
            <h2>Full Stack Web Developer</h2>
            <span>
                <a href="https://www.youtube.com/@douglasbearskitchen3718" target="_blank">
                    <img src={youtubeIcon} alt="YouTube Icon"/>
                </a>
                <a href="https://www.facebook.com/douglas.marsalis" target="_blank">
                    <img src={facebookIcon} alt="LinkedIn Icon"/>
                </a>
                <a href="https://github.com/douglasmarsalis?tab=repositories" target="_blank">
                    <img src={githubIcon} alt="Github Icon"/>
                </a>
                <a href="https://www.linkedin.com/in/douglas-marsalis-74161024b/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn Icon"/>
                </a>
            </span>    
                <p className={styles.description}>Building the Future, One Website at a Time: Tailored Solutions for Every Client.</p>
                <a href={CV} download>
                    <button className={isShaking ? styles.isShaking : ""} onClick={handleClick}>Resume</button>
                </a>
        </div>
    </section>
  );
}

export default Hero;