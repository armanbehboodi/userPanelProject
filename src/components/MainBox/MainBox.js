import React from "react";

import Navbar from "../Navbar/Navbar";
import SearchBox from "../SearchBox/SearchBox";
import Companies from "../Companies/Companies";
import styles from './MainBox.module.css';

const mainBox = () => {
    return (
        <div className={styles.mainBox}>
            <Navbar />
            <SearchBox />
            <Companies />
        </div>
    )
}

export default mainBox;