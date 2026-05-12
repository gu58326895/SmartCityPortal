import "./cockpit.css";

import {
    useEffect,
    useState
} from "react";

import {
    Button
} from "antd";

const modules = [

    {
        title: "科技",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        buttons: [
            {
                name: "无人机平台",
                url: "http://uav.xxx.com"
            }
        ]
    },

    {
        title: "能源",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
        buttons: [
            {
                name: "能源平台",
                url: "http://energy.xxx.com"
            }
        ]
    },

    {
        title: "食品配送",
        image: "https://images.unsplash.com/photo-1506617564039-2f3b650b7010",
        buttons: [
            {
                name: "观麦系统",
                url: "http://food.xxx.com"
            }
        ]
    },

    {
        title: "市政园林",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
        buttons: [
            {
                name: "雨水泵站",
                url: "http://pump.xxx.com"
            }
        ]
    },

    {
        title: "物业管理",
        image: "https://images.unsplash.com/photo-1460317442991-0ec209397118",
        buttons: [
            {
                name: "停车系统",
                url: "http://parking.xxx.com"
            }
        ]
    },

    {
        title: "人才招聘",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
        buttons: [
            {
                name: "人才房系统",
                url: "http://house.xxx.com"
            }
        ]
    }

];

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

                <div className="cockpit-title">
                    智慧城市运营中心
                </div>

                <div className="cockpit-time">
                    {time}
                </div>

            </div>

            <div className="cockpit-grid">

                {
                    modules.map((item) => (

                        <div className="cockpit-card">

                            <div className="card-title">
                                {item.title}
                            </div>

                            <img
                                src={item.image}
                                className="card-image"
                            />

                            <div className="card-buttons">

                                {
                                    item.buttons.map((btn) => (

                                        <Button
                                            type="primary"
                                            block
                                            onClick={() => {
                                                window.open(btn.url);
                                            }}
                                        >
                                            {btn.name}
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