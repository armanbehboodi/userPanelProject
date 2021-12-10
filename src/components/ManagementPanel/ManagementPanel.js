import React from "react";

import companyIcon from '../../../src/assets/images/company.png';
import styles from './ManagementPanel.module.css';

const ManagementPanel = () => {

    const checkWidth = window.innerWidth;

    return (
        <div className={`${styles.mainBox} ${checkWidth <= 1000 && styles.hide}`}>
            <img className={styles.icon} src={companyIcon} alt='CompanyIcon'/>
            <div className={styles.infoBox}>
                <p className={styles.panelText}>پنل مدیریت</p>
                <p className={styles.matna}>متنا</p>
            </div>
        </div>
    )
}

export default ManagementPanel;