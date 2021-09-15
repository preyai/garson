import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import logo from "../../img/logo03.png";

function Transaction(props) {
    const {item} = props;
    return (
        <div className="transaction">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="info">
                <div className="date">{moment(Date.parse(item.date)).format('L')}</div>
                <div className="d-flex justify-content-between">
                    <div className="shop">{item.shop}</div>
                    <div className="sum"> - {item.price}</div>
                </div>
                <div className="descript">{item.product_name}</div>
            </div>
        </div>
    )
}

export default function Transactions(props) {
    const {items} = props;
    console.log(items);
    return (
        <PerfectScrollbar className="transactions" >
            {items.map((item)=> (
                <Transaction item={item} key={item.product_name}/>
            ))}
        </PerfectScrollbar>
    )
}