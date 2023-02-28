import React from 'react';
import styles from './About.module.css';

const About = () => {
  const textRef = React.useRef();
  const onScroll = (e) => {
    const offset = e.target.scrollTop;
    if (textRef.current) {
      textRef.current.style.top = `${63 - offset*0.027}vh`
      textRef.current.style.opacity = `${1-offset*0.0015}`;
    }
  };
  React.useEffect(() => {
    const appElement = document.getElementById('app');
    appElement.addEventListener('scroll', onScroll);

    return () => {
      appElement.removeEventListener('scroll', onScroll);
    }
  }, []);
  return (
    <div className={styles.about}>
      <div className={styles.banner}>
        <div className={styles.aboutText} ref={textRef}>About me</div>
      </div>
      <div className={styles.content}>
        
        <div className={styles.card}>
          <p className={styles.p1}>Hello, thank you for visiting!</p>
          <p className={styles.p1}>
            Education:
          </p>
          <p className={styles.p2}>
            Bachelors in Electrical Engineering w/ Masters in Power Electronics from IIT(BHU) Varanasi.
          </p>
          <p className={styles.p1}>Profession</p>
          <p className={styles.p2}>Web developer</p>
          <p className={styles.p1}>Work experience</p>
          <p className={styles.p2}>ex-Microsoft (SDE1), Zeta (DirectI)(SDE2)</p>
          <p className={styles.p1}>Hobbies</p>
          <p className={styles.p2}>Energy work, study of esoteric philosophies, Freemasonry, art, cooking (at times! :P), table tennis, football, travelling to places hidden in the lap of nature, collecting stamps, watching anime.</p>
          <p className={styles.p1}></p>
          <p className={styles.p1}>Personality type:</p>
          <p className={styles.p2}>INFJ</p>
        </div>
        {/** ❤️ */}
      </div>
    </div>
  );
};

export default About;