import PerfectScrollbar from 'react-perfect-scrollbar'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Calendar from 'react-calendar'
import Release from "./Release"

export default function Releases(props) {

    const {releases} = props

    const setCircle = (date) => {
        const dateobj =
            releases &&
            releases.find((x) => {
                return (
                    date.getDay() === new Date(x.date).getDay() &&
                    date.getMonth() === new Date(x.date).getMonth() &&
                    date.getDate() === new Date(x.date).getDate()
                );
            });
        let style = {}
        if (dateobj) {
            style = { backgroundColor: dateobj.retailer.color }
        }
        return dateobj ? <div className="calendar-bgr" style={style}></div> : "";

    }

    return (
        <div className="row">
            <PerfectScrollbar className="col-12 col-lg-5 scrolled">
                <div className="admin-block" data-aos="fade-right">
                    <div className="header">CALENDAR</div>
                    <div className="body">
                        <Calendar
                            tileContent={({ date }) => setCircle(date)}
                        />
                    </div>
                </div>
            </PerfectScrollbar>
            <PerfectScrollbar className="col-12 col-lg-7 scrolled">
                <div className="admin-block" data-aos="fade-left">
                    <div className="header">upcoming RELEASES</div>
                    <div className="body">
                        {releases.length > 0 &&
                            <Splide
                                options={{
                                    arrows: false
                                }}>
                                {releases.map(item => (
                                    <SplideSlide>
                                        <Release
                                            item={item}
                                        />
                                    </SplideSlide>
                                ))}
                            </Splide>

                        }
                    </div>
                </div>
            </PerfectScrollbar>
        </div>

    )
}