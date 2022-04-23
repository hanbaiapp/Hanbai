import { useEffect, useRef } from 'react'
import clsx from 'clsx'
import styles from './Feature.module.scss';

function Feature({text, script, img1, img2}) {
    let img1Ref = useRef()
    let img2Ref = useRef()
    let imgContainRef = useRef()
    
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(styles.animMoveToLeft)
                return
            }
            entry.target.classList.remove(styles.animMoveToLeft)
        })
    })

    useEffect(() => {
        observer.observe(img1Ref.current)
        observer.observe(img2Ref.current)
    }, [])

    return (
        <div className={styles.card}>

            <div className={styles.script}>
                <h1>{text}</h1>
                <p>{script}</p>
            </div>
            <div ref={imgContainRef}>
                <img ref={img1Ref} src={img1} alt="img"/>
                <img className={clsx(styles.animDur)} ref={img2Ref} src={img2} alt="img"/>
            </div>
        </div>
    )
}

export default Feature;