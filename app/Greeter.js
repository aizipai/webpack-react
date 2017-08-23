import React, {Component} from 'react'
import config from './config.json';

import styles from './Greeter.css'
import stylus from './stylus.styl'

const greeterClass = [styles.root,styles.color,'color-red']
class Greeter extends Component{
  render() {
    return (
      // <div className={`${styles.root} ${styles.color}`}>
      <div className={greeterClass.join(' ')}>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
