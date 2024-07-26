import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/check-mark.png';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="React"/>
            <SkillList src={checkMarkIcon} skill="TypeScript"/>
            <SkillList src={checkMarkIcon} skill="API"/>
            <SkillList src={checkMarkIcon} skill="Node"/>
            <SkillList src={checkMarkIcon} skill="PHP"/>
            <SkillList src={checkMarkIcon} skill="MySQL"/>
            <SkillList src={checkMarkIcon} skill="Python"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Vite"/>
            <SkillList src={checkMarkIcon} skill="MySQL Workbench"/>
            <SkillList src={checkMarkIcon} skill="Insomnia"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="GIT"/>
            <SkillList src={checkMarkIcon} skill="VScode"/>
            <SkillList src={checkMarkIcon} skill="Slack"/>
            <SkillList src={checkMarkIcon} skill="Discord"/>
            <SkillList src={checkMarkIcon} skill="Wordpress"/>
            <SkillList src={checkMarkIcon} skill="Keynote"/>
            <SkillList src={checkMarkIcon} skill="iMovie - Video Editing"/>
            <SkillList src={checkMarkIcon} skill="Microsoft Office 365"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Bilingual - Japanese/English"/>
            <SkillList src={checkMarkIcon} skill="Team Player, Multitasker, Problem Solver"/>
            <SkillList src={checkMarkIcon} skill="Strong Teaching and Communication Skills"/>
            <SkillList src={checkMarkIcon} skill="ABLE TO WORK REMOTELY OR RELOCATE IF NEEDED!"/>
        </div>
    </section>
  );
}

export default Skills;