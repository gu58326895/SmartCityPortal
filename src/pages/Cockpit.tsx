import "./cockpit.css";

import ChartPanel from "../components/charts/ChartPanel";

import {
    useEffect,
    useState
} from "react";

import {
    modules,
} from "../data/mockData";

import {
    Button
} from "antd";

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

            <div className="cockpit-bg" />

            <div className="cockpit-header">

                <div className="cockpit-header-left" />

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
                    modules.filter(item => { return item.title!="综合平台"}).map((item) => (

                        <div className="cockpit-card">
                            <div className="scan-line" />

                            <div className="card-corner corner-tl" />
                            <div className="card-corner corner-tr" />
                            <div className="card-corner corner-bl" />
                            <div className="card-corner corner-br" />

                            <div className="card-title">
                                {item.title}
                            </div>

                            <img
                                src={item.image}
                                className="card-image"
                            />

                            {
                                item.charts.map(c => (
                                    <ChartPanel type={c}/>
                                ))
                            }




                            <div className="card-buttons">

                                {
                                    item.systems.map(system => (
                                        <Button
                                            block
                                            type="primary"
                                            onClick={() => {
                                                window.open(system.url);
                                            }}
                                        >
                                            {system.name}
                                        </Button>
                                    ))
                                }

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );
}