import React from "react";
import {useSelector} from "react-redux";

import Company from "../Company/Company";
import styles from './Companies.module.css';

const Companies = () => {

    const searchedCompany = useSelector(state => state.userSearch.CompanyName);

    const DUMMY_COMPANIES = [
        {name: 'پیشرو نت انرژی'}, {name: 'مجتمع اداری تجاری معلم'},{name: 'ویلا گلدره'}, {name: 'مخابرات منطقه همدان'},
        {name: 'ساختمان پزشکان دی'}, {name: 'فرودگاه امام خمینی'}, {name: 'بیمارستان کودکان حضرت علی اصغر'}, {name: 'هتل فدک'}
    ]

    const userSearchedCompany = DUMMY_COMPANIES.filter((company) => {
        return company.name.includes(searchedCompany)
    })


    const companiesList = DUMMY_COMPANIES.map((company) => {
        return <Company name={company.name} />
    })
    const filteredCompany = userSearchedCompany.map((company) => {
        return <Company name={company.name} />
    })

    return (
        <div className={styles.mainBox}>
            {userSearchedCompany[0] === undefined ? companiesList : filteredCompany}
        </div>
    )
}

export default Companies;