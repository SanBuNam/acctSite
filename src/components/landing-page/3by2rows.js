import React from 'react'
import styled from 'styled-components'
import styles from "./3by2rows.module.scss"
import Accountingwhite from "../../../content/images/Accounting-white.svg"

const ThreeByTwoContainer = () => {

    return (
        <div className={styles.container}>
            <div>
			    <img src={Accountingwhite} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>MANAGE ACCOUNTING</h3>
            </div>
            <div>
			    <img src={Accountingwhite} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>MANAGE ACCOUNTING</h3>
            </div>
            <div>
			    <img src={Accountingwhite} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>MANAGE ACCOUNTING</h3>
            </div>
            <div>
			    <img src={Accountingwhite} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>MANAGE ACCOUNTING</h3>
            </div>
            <div>
			    <img src={Accountingwhite} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>MANAGE ACCOUNTING</h3>
            </div>
            <div>
			    <img src={Accountingwhite} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>MANAGE ACCOUNTING</h3>
            </div>
        </div>
    )
}

export default ThreeByTwoContainer