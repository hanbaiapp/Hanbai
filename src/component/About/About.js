import Avatar from "./Avatar/Avatar";
import styles from "./About.module.scss";
import nam from './nam.jpg'
import luc from './luc.jpg'
import hieu from './hieu.jpg'
import duy from './duy.jpg'

function About() {
    let imgs = [ {
        img: nam,
        name: "Hoài Nam"
    },  {
        img: luc,
        name: "Viết Lực"
    },  {
        img: hieu,
        name: "Trung Hiếu"
    },  {
        img: duy,
        name: "Anh Duy"
    }]



    return (
        <div className={styles.about}> 
            <div className={styles.box_avatar}>
                {imgs.map((img, index) => (
                    <div>
                        <Avatar trans_delay={`trans_delay_${index + 1}`} key={index} img={img.img} name={img.name} />
                    </div>
                ))}
            </div>

            <div className={styles.references}>
                <p className={styles.info_team} >Team HANDL - HCM University of Science</p>
                <p>Email: hanbaiapp@gmail.com</p>
                <div className={styles.list_icon}>
                    <a href="/">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="/">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i class="fa-brands fa-android"></i>
                    </a>
                </div>
                <p>Copyright 2022 Hanbai. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default About