import { useEffect, useRef, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
// const data = [
//     {
//         name: 'Jan',
//         Shopify: 0,
//         Supreme: 0,
//         Adidas: 0,
//     },
//     {
//         name: 'Feb',
//         Shopify: 0,
//         Supreme: 0,
//         Adidas: 0,
//     },
//     {
//         name: 'Mar',
//         Shopify: 0,
//         Supreme: 0,
//         Adidas: 0,
//     },
//     {
//         name: 'Apr',
//         Shopify: 0,
//         Supreme: 0,
//         Adidas: 0,
//     },
//     {
//         name: 'May',
//         Shopify: 6,
//         Supreme: 0,
//         Adidas: 0,
//     },
//     {
//         name: 'Jun',
//         Shopify: 2,
//         Supreme: 1,
//         Adidas: 0,
//     },
//     {
//         name: 'Jul',
//         Shopify: 1,
//         Supreme: 1,
//         Adidas: 0,
//     },
//     {
//         name: 'Aug',
//         Shopify: 4,
//         Supreme: 2,
//         Adidas: 0,
//     },
//     {
//         name: 'Sep',
//         Shopify: 2,
//         Supreme: 0,
//         Adidas: 0,
//     },
//     {
//         name: 'Oct',
//         Shopify: 0,
//         Supreme: 0,
//         Adidas: 0,
//     },
//     {
//         name: 'Nov',
//         Shopify: 0,
//         Supreme: 0,
//         Adidas: 0,
//     },
//     {
//         name: 'Dec',
//         Shopify: 0,
//         Supreme: 0,
//         Adidas: 0,
//     },
// ];
// 


function Stat(props) {
    const { value, label } = props;
    return (
        <div className="stat">
            <div className="value">{value}</div>
            <div className="label">{label}</div>
        </div>
    )
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function getTable(data) {
    const colors = ["#0cbb90","#6584f6","#ab55bd","#ca5656"]
    const days = daysInMonth(new Date().getMonth() - 1, new Date().getFullYear())
    let dots = []
    let tags = []
    for (let item of data.chekouts) {
        if (!tags.find((tag) => tag.label === item.shop)) {
            tags.push({label:item.shop, color: colors[tags.length]});
        }
    }
    console.log(tags);
    for (let i = 0; i < days; i++) {
        let dot = {};
        dot['name'] = i;
        let chekout = data.chekouts.filter((item) => new Date(item.date).getDate() === i)
        if (chekout) {
            dot['Shopify'] = chekout.length;
        } else {
            dot['Shopify'] = 0;
        }
        dots.push(dot);
    }
    return {dots, tags};
}

export default function Analytics(props) {
    const { data } = props;
    const {dots, tags} = getTable(data)
    const box = useRef(null);
    const [width, setWidth] = useState(400);

    console.log();

    useEffect(() => {
        if (box) {
            setWidth(box.current.offsetWidth)
        }
    });

    return (
        <div className="analytics" ref={box}>
            <div className="d-flex tags">
                {tags.map(tag => (
                    <div className="tag" style={{ backgroundColor: tag.color }} key={tag.label}>{tag.label}</div>
                ))}
            </div>
            <div className="d-flex stats">
                <Stat
                    label="Checkouts"
                    value={data.amount_checkouts}
                />
                <Stat
                    label="Tasks"
                    value={data.chekouts.length}
                />
                <Stat
                    label="Awg Chekouts"
                    value={(+data.average_checkouts).toFixed(1) + "%"}
                />
            </div>
            <LineChart width={width} height={300} data={dots}>
                <CartesianGrid width="1px" stroke="#3d4a6f" vertical={false} />
                <Line type="monotoneX" dataKey="Shopify" stroke="#0cbb90" dot={false} strokeWidth={2} />
                <Line type="monotoneX" dataKey="Supreme" stroke="#ab55bd" dot={false} strokeWidth={2} />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
            <div className="d-flex justify-content-around">
                {tags.map(tag => (
                    <div className="line-mark" key={tag.label} >
                        <div className="line" style={{ backgroundColor: tag.color }}></div>
                        <div className="label">
                            <div>{tag.label}</div>
                            <div>chekouts</div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}