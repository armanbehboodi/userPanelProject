import React,{useState} from "react";

import styles from './Option.module.css';

const Option = (props) => {


    return (
        <div className={`${styles.mainBox} ${props.name === 'شرکت ها' && styles.active}`}>
            <img id='companyImage' className={styles.icon} src={props.image} alt='optionsIcon' />
            <p className={styles.optionText}>{props.name}</p>
        </div>
    )
}

export default Option;