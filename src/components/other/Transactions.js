import PerfectScrollbar from 'react-perfect-scrollbar';
import logo from "../../img/logo03.png";

function Transaction(props) {
    return (
        <div className="transaction">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="info">
                <div className="date">16/01/2021</div>
                <div className="d-flex justify-content-between">
                    <div className="shop">Kith</div>
                    <div className="sum">-$75.00</div>
                </div>
                <div className="descript">Kith x Off Collection Strickley Business - ...</div>
            </div>
        </div>
    )
}

export default function Transactions(props) {
    return (
        <PerfectScrollbar className="transactions" >
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
        </PerfectScrollbar>
    )
}