import { useEffect, useRef } from 'react'
import clsx from "clsx";
import styles from "./Home.module.scss";
import imgHome from './img_home.svg'
import sheet from './sheet.svg'

function Home() {

    const homeRef =useRef()
    
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                window.scrollTo(0, 0)
                
            }
        })
    })

    useEffect(() => {
        observer.observe(homeRef.current)
    },[])

    return (
        <div ref={homeRef} className={styles.home}>
            <div className={clsx(styles.pitch)}>
                <div>
                    <span>
                        Ứng dụng đơn giản hóa việc quản lý bán hàng trên điện thoại.
                    </span>
                    <p>
                        Xử lý đơn hàng, kiểm soát kho hàng, lưu trữ thông tin, thống kê doanh thu
                        được gói gọn trong 1 công cụ.
                        <br />
                        Hanbai, trợ thủ đắc lực cho các nhà bán, nhà phân phối nhỏ lẻ.
                    </p>
                </div>
            </div>
            <div className={clsx(styles.img_container)}>
                <img className={styles.business} src={imgHome} alt=""/>
                <img className={styles.sheet} src={sheet} alt="" />
            </div>
        </div>
    )
}

export default Home;