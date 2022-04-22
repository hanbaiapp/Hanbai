import {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from "./Header.module.scss";
import logo from './logo_hanbai.svg'

function Header() {
    const tabs = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Description',
            link: '/description'
        },
        {
            name: 'About',
            link: '/about'
        }
    ]

    
    let [active, setActive] = useState(0)
    let handleClick = index => {
        setActive(prev => index)
    }

    return (
        <div className={styles.header}>
            <div className={styles.logo}>  
                <img src={logo} alt="img" />
                <p>Hanbai</p>
            </div>
            <div className={styles.nav}>
                <ul>
                    {tabs.map((tab, index) => (
                        <li key={index}>
                            <Link className={active === index ? styles.active : ""} onClick={() => handleClick(index)} to={tab.link}>{tab.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header 