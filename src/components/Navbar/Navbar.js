import React,{useState} from "react";
import {useDispatch} from "react-redux";

import {displayActions} from "../../store/Store";
import styles from './Navbar.module.css';
import userIcon from '../../assets/images/user.png';
import chatIcon from '../../assets/images/chat.png';
import bellIcon from '../../assets/images/bell.png';
import burgerMenu from '../../assets/images/burgerMenu.png';
import closeIcon from '../../assets/images/closeMenu.png';

const Navbar = () => {

    const dispatch = useDispatch();

    const [menuIcon,setMenuIcon] = useState(burgerMenu);
    const menuHandler = () => {
        if (menuIcon === burgerMenu){
            setMenuIcon(closeIcon)
        }else {
            setMenuIcon(burgerMenu)
        }
        dispatch(displayActions.changeDisplay())
    }

    return (
        <div className={styles.navMainBox}>
            <input className={styles.searchInput} type='text' placeholder='جستجو'/>
            <div className={styles.navIconsBox}>
                <div className={styles.userInfoBox}>
                    <div className={styles.userIcon}>
                        <img src={userIcon} alt='userIcon' style={{width: 'inherit'}}/>
                    </div>
                    <div className={styles.aboutUser}>
                        <p style={{margin: '0',fontWeight: 'bold'}}>وصال دانشور</p>
                        <p style={{margin: '5px 0 0 0', fontSize: '0.7em', display: 'inline-block',float: 'right'}}>برنامه نویس</p>
                    </div>
                </div>
                <div className={styles.chatBox}>
                    <img src={chatIcon} alt='chatIcon' style={{width: '35px',cursor: 'pointer'}} />
                </div>
                <div className={styles.bellBox}>
                    <img src={bellIcon} alt='bellIcon' style={{width: '50px',cursor: 'pointer'}}/>
                </div>
                <div className={`${styles.bellBox} ${styles.menuIcon}`}>
                    <img onClick={menuHandler} src={menuIcon} alt='menuIcon' className={styles.icon}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;