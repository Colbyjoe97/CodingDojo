import React, { useState } from 'react';
import styles from './tabs.module.css'

const Tab = () => {
    const [tab, setTab] = useState (1)

    return(
        <div style={{display: "inline-flex", marginLeft: 50, marginTop: 50}}>
            <p className={styles.tabBox} onClick={ (e) => setTab(1) }> Tab 1</p>
            <p className={styles.tabBox} onClick={ (e) => setTab(2) }> Tab 2</p>
            <p className={styles.tabBox} onClick={ (e) => setTab(3) }>Tab 3</p>
            <h1 className={styles.tabContent}>Showing tab {tab} content here</h1>
        </div>
    )
}

export default Tab