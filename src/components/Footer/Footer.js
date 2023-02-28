import React from 'react';
import styles from './Footer.module.scss';
import flower from './flower.png';

const Footer = () => {
  const [input, setInput] = React.useState('');
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.section}>
        <img className={styles.flower} src={flower} alt='flower'/>
        <div className={styles.name}>
          <p>Yor</p>
          <br />
          <p>Nadnaps</p>
          <br/>
          <p>Join the quest to answer- 'Who am I'</p>
        </div>
        <div className={styles.subscribe}>
          <div className={styles.heading}>Subscribe to our newsletter:</div>
          <div>
            <input type='email' placeholder='Enter your email' className={styles.email} value={input} onChange={onChange} />
            <button className={styles.submit}>Submit</button>
          </div>
        </div>
      </div>
      <div className={styles.disclaimer}>&#169; YorNadnaps. All rights reserved</div>
    </div>
  )
};

export default Footer;