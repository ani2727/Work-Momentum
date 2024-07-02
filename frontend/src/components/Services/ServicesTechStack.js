import styles from "./Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faJava,
  faPhp,
  faJs,
  faAws,
  faDocker,
  faGithub,
  faGit,
  faGoogle,
  faMicrosoft,
  faJsSquare,
  faCss3Alt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase,
  faTools,
  faVial,
  faFire,
  faSearch,
  faCog,
  faCloud,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { MdReadMore } from "react-icons/md";

const ServicesTechStack = () => {
  return (
    <div className={styles.servicesHeader}>
      <div className={styles.stackGrid}>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faReact} className={styles.icon} />
          <span>React</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faNodeJs} className={styles.icon} />
          <span>Node.js</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faPython} className={styles.icon} />
          <span>Python</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faJava} className={styles.icon} />
          <span>Java</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faPhp} className={styles.icon} />
          <span>PHP</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faJs} className={styles.icon} />
          <span>JavaScript</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faAws} className={styles.icon} />
          <span>AWS</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faDocker} className={styles.icon} />
          <span>Docker</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <span>GitHub</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faGit} className={styles.icon} />
          <span>Git</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
          <span>Google Cloud</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faMicrosoft} className={styles.icon} />
          <span>Azure</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
          <span>MongoDB</span>
        </div>

        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
          <span>PostgreSQL</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
          <span>MySQL</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faVial} className={styles.icon} />
          <span>Jest</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />
          <span>Sass</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faFire} className={styles.icon} />
          <span>Firebase</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faReact} className={styles.icon} />
          <span>Redux</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <span>ElasticSearch</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faCog} className={styles.icon} />
          <span>Rust</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faReact} className={styles.icon} />
          <span>Next.js</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faCloud} className={styles.icon} />
          <span>Vercel</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faBootstrap} className={styles.icon} />
          <span>Bootstrap</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faWind} className={styles.icon} />
          <span>Tailwind CSS</span>
        </div>

        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faTools} className={styles.icon} />
          <span>Webpack</span>
        </div>
        <div className={styles.stackItem}>
          <FontAwesomeIcon icon={faJsSquare} className={styles.icon} />
          <span>TypeScript</span>
        </div>

        <div className={styles.stackItem}>
          <MdReadMore className={styles.stackManyMoreIcon} />
          <span>Many more...</span>
        </div>
      </div>
    </div>
  );
};

export default ServicesTechStack;
