import {useRef, useEffect} from 'react'
import clsx from 'clsx'
import './trans_delay.scss'
import styles from './Avatar.module.scss'

function Avatar({ trans_delay, img, name }) {
    const avaC = useRef()
    useEffect(() => {
        avaC.current.classList.add(styles.active)
    }, [])

    return(
        <div ref={avaC} className={clsx(styles.ava_container, trans_delay)}>
            <div className={styles.box}>
                <img src={img} alt="avatar" />
            </div>
            <p className={styles.name}>{name}</p>
        </div>
    )
}

export default Avatar