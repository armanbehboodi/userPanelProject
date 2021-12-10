import React from "react";
import {useSelector} from "react-redux";

import ManagementPanel from "../ManagementPanel/ManagementPanel";
import Options from "../Options/Options";
import styles from './SideBox.module.css';

const SideBox = () => {

    const responsiveDisplay = useSelector(state => state.sideBoxDisplay.isShown);

    return (
        <div className={`${styles.sideBox} ${responsiveDisplay && styles.show}`}>
            <ManagementPanel/>
            <Options />
        </div>
    )
}

export default SideBox;