import React,{useRef} from "react";
import {useDispatch} from "react-redux";

import {searchActions} from '../../store/Store';
import styles from './SearchBox.module.css';

const SearchBox = () => {

    const searchRef = useRef();
    const dispatch = useDispatch();

    const searchHandler = () => {
        const searchedCompany = searchRef.current.value;
        dispatch(searchActions.search(searchedCompany));
    }

    return (
        <div className={styles.mainBox}>
            <p style={{fontWeight: 'bold'}}>شرکت ها</p>
            <div className={styles.searchBox}>
                <input className={styles.searchInput} ref={searchRef} type='text' placeholder='عبارت مورد نظر...'/>
                <button className={styles.searchButton} onClick={searchHandler}>جستجو</button>
            </div>
        </div>
    )
}

export default SearchBox;