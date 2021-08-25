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

export default function Analytics(props) {
    const { tags } = props;
    const stats = [{ label: 'Checkouts', value: '0' }, { label: 'Tasks', value: '0' }, { label: 'Awg Chekouts', value: '0' }]
    const box = useRef(null);
    const [width, setWidth] = useState(400);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://bot.backend.garsonaio.com/GetDataAnalitics.php?login=vlad', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(e => console.log(e));
    }, [])
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
                {stats.map(stat => (
                    <Stat
                        label={stat.label}
                        value={stat.value}
                        key={stat.label}
                    />
                ))}
            </div>
            <LineChart width={width} height={300} data={data}>
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