import PropTypes from 'prop-types';
import styles from '../sections/Skills/SkillsStyles.module.css';

function SkillList({ src, skill }) {
  return (
    <span>
        <img  className={styles.checkmarkImage} src={src} alt='Checkmark Icon'/>
        <p>{skill}</p>
    </span>
  );
}

SkillList.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillList;