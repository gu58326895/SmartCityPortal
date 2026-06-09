import "./cockpit.css";

import ChartPanel from "../components/charts/ChartPanel";


import { Autoplay } from "swiper/modules";

import {
    useEffect,
    useState
} from "react";

import {
    modules,
} from "../data/mockData";

import "swiper/css";

import {Swiper, SwiperSlide} from "swiper/react";

export default function Cockpit() {

    const [time, setTime] = useState("");

    useEffect(() => {

        const updateTime = () => {

            setTime(
                new Date().toLocaleString()
            );

        };

        updateTime();

        const timer =
            setInterval(updateTime, 1000);

        return () => clearInterval(timer);

    }, []);

    return (

        <div className="cockpit-container">

            <div className="cockpit-bg"/>

            <div className="cockpit-header">

                <div className="cockpit-header-left"/>

                <div
                    className="cockpit-title"
                    onClick={() => {
                        window.location.href = "/";
                    }}
                >
                    智慧城市运营中心
                </div>

                <div className="cockpit-time">
                    {time}
                </div>

            </div>

            <div className="cockpit-grid">

                {
                    modules.filter(item => {
                        return item.title != "综合平台"
                    }).map((item) => (

                        <div className="cockpit-card">
                            <div className="scan-line"/>

                            <div className="card-corner corner-tl"/>
                            <div className="card-corner corner-tr"/>
                            <div className="card-corner corner-bl"/>
                            <div className="card-corner corner-br"/>

                            <div className="card-title">
                                <img
                                    src={item.logo}
                                    className="card-logo"
                                    alt="logo"
                                />
                                <span>{item.title}</span>
                            </div>

                            <img
                                src={item.image}
                                className="card-image"
                            />

                            {item.charts && item.charts.length > 0 && (
                                <div className="chart-swiper">
                                    <Swiper
                                        modules={[Autoplay]}
                                        autoplay={{ delay: 3000 }}
                                        loop
                                        spaceBetween={10}
                                        slidesPerView={1}
                                    >
                                        {item.charts.map((c, i) => (
                                            <SwiperSlide key={i}>
                                                <ChartPanel chart={c} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            )}

                            {/*<div className="card-buttons">*/}

                            {/*    {*/}
                            {/*        item.systems.map(system => (*/}
                            {/*            <Button*/}
                            {/*                block*/}
                            {/*                type="primary"*/}
                            {/*                onClick={() => {*/}
                            {/*                    window.open(system.url);*/}
                            {/*                }}*/}
                            {/*            >*/}
                            {/*                {system.name}*/}
                            {/*            </Button>*/}
                            {/*        ))*/}
                            {/*    }*/}

                            {/*</div>*/}

                        </div>

                    ))
                }

            </div>

        </div>

    );
}