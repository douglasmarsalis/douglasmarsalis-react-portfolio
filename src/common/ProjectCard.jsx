import PropTypes from 'prop-types';

function ProjectCard({ src, link, h3, h4, p }) {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <h4>{h4}</h4>
      <p>{p}</p>
    </a>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  h4: PropTypes.string,
  p: PropTypes.string,
};

export default ProjectCard;