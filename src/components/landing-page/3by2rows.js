import React from 'react'
import styled from 'styled-components'
import styles from "./3by2rows.module.scss"
import Accountingwhite from "../../../content/images/Accounting-white.svg"

const ThreeByTwoContainer = () => {

    return (
        <div className={styles.container}>
            <div>
			    <img src={Accountingwhite} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <p>MANAGE ACCOUNTING</p>
            </div>
            <div>one</div>
            <div>one</div>
            <div>one</div>
            <div>one</div>
            <div>one</div>
        </div>
    )
}

export default ThreeByTwoContainer

