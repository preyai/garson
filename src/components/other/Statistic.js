import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Analytics from "./Analytics";
import Transactions from "./Transactions";

export default function Statistic(props) {

    const [data, setData] = useState({
        chekouts: []
    });

    useEffect(() => {
        fetch('https://bot.backend.garsonaio.com/GetDataAnalitics.php?login=vlad2', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
            .catch(e => console.log(e));
    }, [])

    return (
        <div className="row">
            <PerfectScrollbar className="col-12 col-lg-8 scrolled">
                <div className="admin-block" data-aos="fade-right">
                    <div className="header">Checkout Reports</div>
                    <div className="body">
                        <Analytics
                            data={data}
                            tags={[{ label: 'Shopify', color: "#0cbb90" }, { label: 'Adidas', color: "#6584f6" }, { label: 'Supreme', color: "#ab55bd" }, { label: 'Footsites', color: "#ca5656" }]}
                        />
                    </div>
                </div>
            </PerfectScrollbar>
            <PerfectScrollbar className="col-12 col-lg-4 scrolled">
                <div className="admin-block" data-aos="fade-right">
                    <div className="header">Recent transactions</div>
                    <div className="body">
                        <Transactions items={data.chekouts} />
                    </div>
                </div>
            </PerfectScrollbar>

        </div>
    )
}