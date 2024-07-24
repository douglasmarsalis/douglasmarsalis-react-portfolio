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
            <SkillList src={checkMarkIcon} skill="Node"/>
            <SkillList src={checkMarkIcon} skill="PHP"/>
            <SkillList src={checkMarkIcon} skill="MySQL"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="GIT"/>
            <SkillList src={checkMarkIcon} skill="VScode"/>
            <SkillList src={checkMarkIcon} skill="Slack"/>
        </div>
    </section>
  );
}

export default Skills;