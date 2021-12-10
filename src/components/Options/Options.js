import React from "react";

import Option from "../Option/Option";
import styles from './Options.module.css';

import companies from '../../assets/images/options/companies.png';
import table from '../../assets/images/options/table.png';
import user from '../../assets/images/options/user.png';
import login from '../../assets/images/options/login.png';
import todo from '../../assets/images/options/todo.png';
import server from '../../assets/images/options/server.png';
import diagram from '../../assets/images/options/diagram.png';
import checkList from '../../assets/images/options/checkList.png';
import circuit from '../../assets/images/options/circuit.png';
import contacts from '../../assets/images/options/contact.png';
import barcode from '../../assets/images/options/barcode.png';
import news from '../../assets/images/options/news.png';

const Options = () => {

    const DUMMY_OPTIONS = [
        {image:companies,name:'شرکت ها'},{image:table,name:'میز کار'},{image:user,name:'کاربران'},{image:login,name:'ورود و خروج'},
        {image:todo,name:'لیست کارها'}, {image:server,name:'پایگاه داده'}, {image:diagram,name:'نمودار ها'},{image:checkList,name:'گزارش چک لیست'},
        {image:circuit,name:'برد متنا'},{image:contacts,name:'مخاطبین'}, {image:barcode,name:'بارکد خوان'},{image:news,name:'آخرین اخبار'}
    ]

    const optionsList = DUMMY_OPTIONS.map((option) => {
        return <Option name={option.name} image={option.image} />
    })

    return (
        <div className={styles.mainBox}>
            {optionsList}
        </div>
    )
}

export default Options;