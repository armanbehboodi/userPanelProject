import React from "react";

import CompaniesIcon from '../../assets/images/company.png';
import styles from './Company.module.css';

const Company = (props) => {
    return (
        <div className={styles.mainBox}>
            <div className={styles.detailBox}>
                <img className={styles.companyIcon} src={CompaniesIcon} alt='companyIcon' />
                <p className={styles.companyName}>{props.name}</p>
            </div>
        </div>
    )
}

export default Company;