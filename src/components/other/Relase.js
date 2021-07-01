import showIcon from "../../img/show.svg";
import itemPlch from "../../img/img-09.png";
import { useEffect, useRef } from "react";

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
    const { title } = props;
    const img = useRef();
    useEffect(() => {
        console.log(img.current.clientWidth);
        // img.current.
    });
    return (
        <div className="relase">
            <div className="title">
                <div className="store_circle"></div>
                <div>{title} </div>
                <div className="show"><img src={showIcon} alt="" /></div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="img-box">
                        <img src={itemPlch} alt="" ref={img} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <Parametr
                            label="Release date"
                            value="21/05/2021"
                            half={true}
                        />
                        <Parametr
                            label="Style code"
                            value="e2c2b7"
                            half={true}
                        />
                        <Parametr
                            label="Colorway"
                            value="VESHAYA/VESHAYA/VESHAYA"
                        />
                        <Parametr
                            label="Keywords"
                            value={["+  Yeezy Boost 350 Veshaya", "+  kids infants gs grade school", "- kids infants gs grade school kids infants kids infants "]}
                        />
                        
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-6">
                    <div className="r-price">
                        <div className="r-price_title">Retail cost</div>
                        <div className="r-price_value">$220</div>
                        <div>shipping + tax</div>
                    </div>
                </div>
                <div className="col-6">
                <div className="r-price light">
                        <div className="r-price_title">Retail cost</div>
                        <div className="r-price_value">$220</div>
                        <div>shipping + tax</div>
                    </div>
                </div>
            </div>
        </div>
    )
}