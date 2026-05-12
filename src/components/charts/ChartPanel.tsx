import ReactECharts from "echarts-for-react";

interface Props {

    type: string;
}

export default function ChartPanel({
                                       type
                                   }: Props) {

    const getOption = () => {

        switch (type) {

            case "energy":

                return {

                    grid: {
                        left: 30,
                        right: 20,
                        top: 30,
                        bottom: 30
                    },

                    xAxis: {

                        type: "category",

                        data: [
                            "周一",
                            "周二",
                            "周三",
                            "周四",
                            "周五",
                            "周六",
                            "周日"
                        ],

                        axisLine: {
                            lineStyle: {
                                color: "#00d0ff"
                            }
                        },

                        axisLabel: {
                            color: "#ffffff"
                        }
                    },

                    yAxis: {

                        type: "value",

                        axisLine: {
                            lineStyle: {
                                color: "#00d0ff"
                            }
                        },

                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,0.1)"
                            }
                        },

                        axisLabel: {
                            color: "#ffffff"
                        }
                    },

                    series: [

                        {
                            data: [
                                120,
                                132,
                                101,
                                134,
                                90,
                                230,
                                210
                            ],

                            type: "line",

                            smooth: true,

                            areaStyle: {},

                            lineStyle: {
                                width: 4,
                                color: "#00d0ff"
                            }
                        }
                    ]
                };

            case "uav":

                return {

                    tooltip: {},

                    xAxis: {

                        type: "category",

                        data: [
                            "一",
                            "二",
                            "三",
                            "四",
                            "五",
                            "六",
                            "日"
                        ],

                        axisLabel: {
                            color: "#fff"
                        }
                    },

                    yAxis: {

                        type: "value",

                        axisLabel: {
                            color: "#fff"
                        },

                        splitLine: {
                            lineStyle: {
                                color: "rgba(255,255,255,0.1)"
                            }
                        }
                    },

                    series: [

                        {
                            data: [
                                12,
                                18,
                                15,
                                22,
                                30,
                                26,
                                19
                            ],

                            type: "bar",

                            itemStyle: {
                                color: "#00d0ff"
                            }
                        }
                    ]
                };

            case "parking":

                return {

                    tooltip: {},

                    series: [

                        {
                            type: "pie",

                            radius: ["50%", "75%"],

                            data: [

                                {
                                    value: 335,
                                    name: "空闲车位"
                                },

                                {
                                    value: 679,
                                    name: "已使用"
                                }
                            ],

                            label: {
                                color: "#fff"
                            }
                        }
                    ]
                };

            case "garden":

                return {

                    radar: {

                        indicator: [

                            { name: "绿化" },
                            { name: "养护" },
                            { name: "安全" },
                            { name: "泵站" },
                            { name: "道路" }

                        ],

                        axisName: {
                            color: "#fff"
                        }
                    },

                    series: [

                        {
                            type: "radar",

                            data: [

                                {
                                    value: [
                                        90,
                                        82,
                                        88,
                                        95,
                                        76
                                    ]
                                }
                            ]
                        }
                    ]
                };

            case "food":

                return {

                    xAxis: {

                        type: "category",

                        data: [
                            "蔬菜",
                            "肉类",
                            "水果",
                            "粮油"
                        ],

                        axisLabel: {
                            color: "#fff"
                        }
                    },

                    yAxis: {

                        type: "value",

                        axisLabel: {
                            color: "#fff"
                        }
                    },

                    series: [

                        {
                            type: "bar",

                            data: [
                                320,
                                240,
                                180,
                                260
                            ],

                            itemStyle: {
                                color: "#00d0ff"
                            }
                        }
                    ]
                };

            case "hr":

                return {

                    xAxis: {

                        type: "category",

                        data: [
                            "前端",
                            "后端",
                            "运维",
                            "AI"
                        ],

                        axisLabel: {
                            color: "#fff"
                        }
                    },

                    yAxis: {

                        type: "value",

                        axisLabel: {
                            color: "#fff"
                        }
                    },

                    series: [

                        {
                            type: "line",

                            smooth: true,

                            data: [
                                12,
                                20,
                                15,
                                8
                            ],

                            lineStyle: {
                                color: "#00d0ff",
                                width: 4
                            }
                        }
                    ]
                };

            default:

                return {};
        }
    };

    return (

        <ReactECharts
            option={getOption()}
            style={{
                height: "240px",
                width: "100%"
            }}
        />
    );
}