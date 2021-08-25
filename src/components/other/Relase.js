import showIcon from "../../img/show.svg";
import itemPlch from "../../img/img-09.png";
import { useEffect, useRef } from "react";
import moment from "moment";

function Parametr(props) {
    const { label, value, half = false } = props;
    return (
        <div className={half ? "col-6" : "col-12"}>
            <div className="label">{label}</div>
            {Array.isArray(value) ?
                value.map(val => (
                    <div className="value">{val}</div>
                ))
                :
                <div className="value">{value}</div>
            }
        </div>
    )
}

export default function Relase(props) {
    const { item } = props;
    const img = useRef();
    useEffect(() => {
        // console.log(img.current.clientWidth);
        // img.current.
    });
    return (
        <div className="relase">
            <div className="title">
                <div className="store_circle" style={{backgroundColor:item.retailer.color}}></div>
                <div>{item.title} </div>
                <div className="show"><img src={showIcon} alt="" /></div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="img-box">
                        {item.image &&
                            <img src={item.image.url} alt="" ref={img} />
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        {item.date &&
                            < Parametr
                                label="Release date"
                                value={moment(Date.parse(item.date)).format('L')}
                                half={true}
                            />
                        }
                        {item.code &&
                            <Parametr
                                label="Style code"
                                value={item.code}
                                half={true}
                            />
                        }
                        {item.colorway &&
                            <Parametr
                                label="Colorway"
                                value={item.colorway}
                            />
                        }
                        {item.keywords &&
                            <Parametr
                                label="Keywords"
                                value={item.keywords}
                            />
                        }
                    </div>
                </div>
            </div>
            {item.cost &&
                <div className="row mt-5">
                    <div className="col-6">
                        <div className="r-price">
                            <div className="r-price_title">Retail cost</div>
                            <div className="r-price_value">${item.retailcost}</div>
                            <div>shipping + tax</div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="r-price light">
                            <div className="r-price_title">Retail cost</div>
                            <div className="r-price_value">${item.relisecost}</div>
                            <div>shipping + tax</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}