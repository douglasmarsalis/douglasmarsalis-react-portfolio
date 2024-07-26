import styles from './ProjectsStyles.module.css';
import bluesCafe from '../../assets/bluesCafe.png';
import youtube from '../../assets/beard.png';
import weatherNews from '../../assets/weather-news.png';
import login from '../../assets/login.png';
import passwordGen from '../../assets/password.png';
import stopwatch from '../../assets/stopwatch.png';
import clock from '../../assets/clock.png';
import portfolio from '../../assets/portfolio.png';
import marketingAgency from '../../assets/marketing.png'
import ProjectCard from '../../common/ProjectCard';

/*
When needing to add more projects to your portfolio webpage:
** https://www.flaticon.com/ -> Don't forget to source the image
1. Add an image/icon/logo to the assets folder
2. Import that image above by creating a variable and linking the location to the image
3. Copy and paste the ProjectCard below to the desired location
4. Update the information inside the ProjectCard
5. Check to see if all links work correctly
*/

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={weatherNews} 
            link='https://douglasmarsalis.github.io/weather_app_react_basic/'
            h3='Weather News'
            h4='Latest City Weather News'
            p='React, API, Javascript, HTML, CSS'
        />
            <ProjectCard 
            src={login} 
            link='https://douglasmarsalis.github.io/login_registration_react_basic/'
            h3='Login & Sign Up'
            h4='Login and Sign Up Card'
            p='React, Javascript, HTML, CSS'
        />
            <ProjectCard 
            src={passwordGen} 
            link='https://douglasmarsalis.github.io/Mod-3_password_generator/'
            h3='Password Generator'
            h4='Multi-prompt Password Generator'
            p='Javascript, HTML, CSS'
        />
            <ProjectCard 
            src={stopwatch} 
            link='https://douglasmarsalis.github.io/JS-Practice-Stopwatch/'
            h3='Stopwatch'
            h4='Basic Stopwatch - Start,Stop,Reset'
            p='Javascript, HTML, CSS'
        />
            <ProjectCard 
            src={clock} 
            link='https://douglasmarsalis.github.io/JS-Practice-Clock/'
            h3='Digital Clock'
            h4='Basic Clock - Hours,Minutes,Seconds,AM,PM'
            p='Javascript, HTML, CSS'
        />
            <ProjectCard 
            src={portfolio} 
            link='https://douglasmarsalis.github.io/mod-2-douglas-portfolio/'
            h3='Portfolio Homepage'
            h4='Basic Portfolio Homepage'
            p='HTML, CSS'
        />
           <ProjectCard 
            src={marketingAgency} 
            link='https://douglasmarsalis.github.io/mod-1-marketing-agency/'
            h3='Marketing Agency'
            h4='Homepage for a Marketing Agency'
            p='HTML, CSS'
        />
        </div>
    </section>
  );
}

export default Projects