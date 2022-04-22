import styles from "./Description.module.scss";
import Feature from "./Feature";
import order1 from './img/order1.png'
import order2 from './img/order2.png'
import product1 from './img/product1.png'
import product2 from './img/product2.png'
import chart1 from './img/chart1.png'
import chart2 from './img/chart2.png'

function Description() {
    const contents = [
        {
            text: "Quản lý đơn hàng một cách chi tiết",
            script: "Đơn hàng đươc tạo ra với đầy đủ thông tin về khách hàng, sản phẩm và thời gian. Quản lý chặt chẽ việc giao hàng và thanh toán. Ghi chú đơn nợ. Tạo dựng đơn hàng tương lai.",
            img1: order1,
            img2: order2
        },
        {
            text: "Lưu trữ sản phẩm đa dạng, đa thể loại",
            script:"Thoải mái tạo lập sản phẩm thuộc các ngành khác nhau với nhiều thuộc tính khác nhau. Lưu trữ giá cả, số lượng sản phẩm cho mỗi bộ thuộc tính của sản phẩm.",
            img1: product1,
            img2: product2
        },
        {
            text: "Thống kê doanh thu từng ngày, từng tháng",
            script:"Kiểm soát dòng tiền thu về, thống kê chi tiết từng ngày từng tháng và từng nhóm ngành.",
            img1: chart1,
            img2: chart2
        }
    ]

    return (
        <div className={styles.description}>
            {contents.map((content, index) => (
                <Feature key={index} text={content.text} script={content.script} img1={content.img1} img2={content.img2} /> 
            ))}
        </div>
    )
}

export default Description