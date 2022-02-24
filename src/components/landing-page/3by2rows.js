import React from 'react'
import styled from 'styled-components'
import styles from "./3by2rows.module.scss"
import Accounting from "../../../content/images/Accounting-white.svg"
import TailoredAdvisory from "../../../content/images/TailoredAdvisory-white.svg"
import Audit from "../../../content/images/Audit-white.svg"
import Assets from "../../../content/images/Assets-white.svg"
import Taxes from "../../../content/images/Taxes-white.svg"

const ThreeByTwoContainer = () => {

    return (
        <div className={styles.container}>
            <div>
			    <img src={Accounting} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>MANAGE ACCOUNTING</h3>
            </div>
            <div>
                <img src={Accounting} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>WE PROVIDE SOLUTIONS</h3>
            </div>
            <div>
			    <img src={TailoredAdvisory} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>TAILORED ADVISORY</h3>
            </div>
            <div>
			    <img src={Audit} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>SIMPLIFY YOUR AUDIT</h3>
            </div>
            <div>
			    <img src={Assets} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>PROTECT YOUR ASSETS</h3>
            </div>
            <div>
			    <img src={Taxes} width="64" height="82" alt="Accounting Icon - Calculator"/>
                <h3>MINIMIZE YOUR TAXES</h3>
            </div>
        </div>
    )
}

export default ThreeByTwoContainer