import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

interface ChartItem {
    type: string;
    title?: string;
}

export default function ChartPanel({
                                       chart
                                   }: {
    chart: ChartItem
}) {

    const optionMap: Record<string, any> = {

        // ==========================================
        // 科技板块
        // ==========================================

        uav_time: {

            title: {
                text: "无人机月度飞行时长统计",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            tooltip: {
                trigger: "axis"
            },

            grid: {
                left: 60,
                right: 20,
                top: 50,
                bottom: 50
            },

            xAxis: {
                type: "category",
                data: [
                    "2026-01",
                    "2026-02",
                    "2026-03",
                    "2026-04",
                    "2026-05",
                    "2026-06"
                ],
                axisLabel: {
                    color: "#fff"
                }
            },

            yAxis: {
                type: "value",
                name: "飞行时长(min)",
                nameTextStyle: {
                    color: "#fff"
                },
                axisLabel: {
                    color: "#fff"
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.08)"
                    }
                }
            },

            series: [
                {
                    type: "bar",

                    data: [
                        3921,
                        729,
                        3274,
                        1571,
                        607,
                        273
                    ],

                    barWidth: "45%",

                    label: {
                        show: true,
                        position: "top",
                        color: "#fff"
                    },

                    itemStyle: {
                        borderRadius: [6, 6, 0, 0],

                        color:
                            new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "#00f7ff"
                                    },
                                    {
                                        offset: 1,
                                        color: "#0066ff"
                                    }
                                ]
                            )
                    }
                }
            ]
        },

        uav_distance: {

            title: {
                text: "无人机月度飞行里程统计",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            tooltip: {
                trigger: "axis"
            },

            grid: {
                left: 60,
                right: 20,
                top: 50,
                bottom: 50
            },

            xAxis: {
                type: "category",
                data: [
                    "2026-01",
                    "2026-02",
                    "2026-03",
                    "2026-04",
                    "2026-05",
                    "2026-06"
                ],
                axisLabel: {
                    color: "#fff"
                }
            },

            yAxis: {
                type: "value",
                name: "飞行里程(km)",
                nameTextStyle: {
                    color: "#fff"
                },
                axisLabel: {
                    color: "#fff"
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.08)"
                    }
                }
            },

            series: [
                {
                    type: "line",

                    smooth: true,

                    symbol: "circle",

                    symbolSize: 8,

                    data: [
                        209.16,
                        248.49,
                        1570.21,
                        688,
                        195.09,
                        85.9
                    ],

                    label: {
                        show: true,
                        color: "#fff"
                    },

                    markPoint: {
                        data: [
                            {
                                type: "max",
                                name: "峰值"
                            }
                        ]
                    },

                    lineStyle: {
                        width: 4,
                        color: "#00e5ff"
                    },

                    areaStyle: {
                        color:
                            new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(0,229,255,.5)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(0,229,255,0)"
                                    }
                                ]
                            )
                    }
                }
            ]
        },

        cloud_cpu: {

            title: {
                text: "国资云资源分布（按CPU核心数）",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            tooltip: {
                trigger: "item"
            },

            legend: {
                bottom: 0,
                textStyle: {
                    color: "#fff"
                }
            },

            graphic: [
                {
                    type: "text",

                    left: "center",

                    top: "42%",

                    style: {
                        text: "222\nCPU",
                        fill: "#fff",
                        textAlign: "center",
                        fontSize: 18,
                        fontWeight: "bold"
                    }
                }
            ],

            series: [
                {
                    type: "pie",

                    radius: [
                        "45%",
                        "68%"
                    ],

                    center: [
                        "50%",
                        "42%"
                    ],

                    label: {
                        formatter: "{d}%",
                        color: "#fff"
                    },

                    data: [
                        { name: "金蝶财务软件", value: 16 },
                        { name: "国投OA平台", value: 24 },
                        { name: "经开雨水泵站", value: 16 },
                        { name: "经投会议系统", value: 2 },
                        { name: "警保联盟通讯平台", value: 16 },
                        { name: "控股公司OA平台", value: 72 },
                        { name: "能源管控平台", value: 24 },
                        { name: "物业人才公寓", value: 8 },
                        { name: "无人机服务", value: 16 },
                        { name: "智慧城管应用", value: 16 },
                        { name: "智慧城市AI平台", value: 8 },
                        { name: "住建地质勘测", value: 4 }
                    ]
                }
            ]
        },

        // ==========================================
        // 能源板块
        // ==========================================

        energy_gun: {

            title: {
                text: "充电枪结构分布",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            tooltip: {
                trigger: "item"
            },

            graphic: [
                {
                    type: "text",

                    left: "center",

                    top: "45%",

                    style: {
                        text: "636把",
                        fill: "#fff",
                        fontSize: 22,
                        fontWeight: "bold"
                    }
                }
            ],

            series: [
                {
                    type: "pie",

                    radius: [
                        "50%",
                        "72%"
                    ],

                    center: [
                        "50%",
                        "50%"
                    ],

                    label: {
                        formatter: "{b}\n{d}%",
                        color: "#fff"
                    },

                    data: [
                        {
                            name: "快充枪",
                            value: 350
                        },
                        {
                            name: "慢充枪",
                            value: 286
                        }
                    ]
                }
            ]
        },

        energy_pv: {

            title: {
                text: "光伏月度发电量统计",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            tooltip: {
                trigger: "axis"
            },

            grid: {
                left: 60,
                right: 20,
                top: 50,
                bottom: 50
            },

            xAxis: {
                type: "category",
                data: [
                    "1月","2月","3月","4月","5月","6月",
                    "7月","8月","9月","10月","11月","12月"
                ],
                axisLabel: {
                    color: "#fff"
                }
            },

            yAxis: {
                type: "value",
                name: "kWh",
                axisLabel: {
                    color: "#fff"
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.08)"
                    }
                }
            },

            series: [
                {
                    type: "line",

                    smooth: true,

                    symbolSize: 6,

                    data: [
                        896043,
                        895764,
                        972021,
                        1023577,
                        837071,
                        1046993,
                        1255686,
                        1263411,
                        950503,
                        876928,
                        932622,
                        843817
                    ],

                    markPoint: {
                        data: [
                            {
                                type: "max",
                                name: "最高值"
                            }
                        ]
                    },

                    areaStyle: {
                        color:
                            new echarts.graphic.LinearGradient(
                                0,
                                0,
                                0,
                                1,
                                [
                                    {
                                        offset: 0,
                                        color: "rgba(0,208,255,.5)"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(0,208,255,0)"
                                    }
                                ]
                            )
                    },

                    lineStyle: {
                        width: 4,
                        color: "#00d0ff"
                    }
                }
            ]
        },

        energy_asset: {

            title: {
                text: "新能源资产统计",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            grid: {
                left: 90,
                right: 30,
                top: 50,
                bottom: 30
            },

            xAxis: {
                type: "value",
                axisLabel: {
                    color: "#fff"
                }
            },

            yAxis: {
                type: "category",

                axisLabel: {
                    color: "#fff"
                },

                data: [
                    "充电项目(个)",
                    "储能设备(台)",
                    "光伏装机(kWp)"
                ]
            },

            series: [
                {
                    type: "bar",

                    label: {
                        show: true,
                        position: "right",
                        color: "#fff"
                    },

                    data: [
                        39,
                        22,
                        534.1
                    ],

                    itemStyle: {
                        color:
                            new echarts.graphic.LinearGradient(
                                1,
                                0,
                                0,
                                0,
                                [
                                    {
                                        offset: 0,
                                        color: "#00ffcc"
                                    },
                                    {
                                        offset: 1,
                                        color: "#0066ff"
                                    }
                                ]
                            )
                    }
                }
            ]
        },        // ==========================================
        // 人才板块
        // ==========================================

        talent_result: {

            title: {
                text: "人才服务成果统计",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            grid: {
                left: 100,
                right: 40,
                top: 50,
                bottom: 30
            },

            xAxis: {
                type: "value",
                axisLabel: {
                    color: "#fff"
                }
            },

            yAxis: {
                type: "category",
                axisLabel: {
                    color: "#fff"
                },
                data: [
                    "培训招聘活动",
                    "岗位需求",
                    "合作企业",
                    "求职者"
                ]
            },

            series: [{
                type: "bar",

                label: {
                    show: true,
                    position: "right",
                    color: "#fff"
                },

                data: [
                    100,
                    4000,
                    600,
                    11000
                ],

                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        1,0,0,0,
                        [
                            {offset:0,color:"#00f7ff"},
                            {offset:1,color:"#0066ff"}
                        ]
                    )
                }
            }]
        },

        talent_funnel: {

            title: {
                text: "人才供需关系",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            tooltip: {
                trigger: "item"
            },

            series: [{
                type: "funnel",

                top: 60,

                left: 30,

                bottom: 20,

                width: "70%",

                label: {
                    color: "#fff"
                },

                data: [
                    { value: 11000, name: "求职者" },
                    { value: 4000, name: "岗位需求" },
                    { value: 600, name: "合作企业" }
                ]
            }]
        },

        // ==========================================
        // 园林板块
        // ==========================================

        garden_result: {

            title: {
                text: "园林运营成果",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            grid: {
                left: 110,
                right: 30,
                top: 50,
                bottom: 30
            },

            xAxis: {
                type: "value",
                axisLabel: {
                    color: "#fff"
                }
            },

            yAxis: {
                type: "category",
                axisLabel: {
                    color: "#fff"
                },
                data: [
                    "绿地面积",
                    "游园人数",
                    "活动场次",
                    "参与人数"
                ]
            },

            series: [{
                type: "bar",

                label: {
                    show: true,
                    position: "right",
                    color: "#fff"
                },

                data: [
                    550,
                    31000,
                    160,
                    10600
                ],

                itemStyle: {
                    color: "#00d0ff"
                }
            }]
        },

        garden_activity: {

            title: {
                text: "活动组织与参与情况",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            tooltip: {
                trigger: "axis"
            },

            xAxis: {
                type: "category",
                data: [
                    "活动场次",
                    "参与人数"
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

            series: [{
                type: "bar",

                data: [
                    160,
                    10600
                ],

                label: {
                    show: true,
                    position: "top",
                    color: "#fff"
                },

                itemStyle: {
                    color: "#00ffcc"
                }
            }]
        },

        // ==========================================
        // 物业板块
        // ==========================================

        parking_region: {

            title: {
                text: "停车位区域分布",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            grid: {
                left: 100,
                right: 40,
                top: 50,
                bottom: 30
            },

            xAxis: {
                type: "value",
                name: "个",
                axisLabel: {
                    color: "#fff"
                }
            },

            yAxis: {
                type: "category",

                axisLabel: {
                    color: "#fff"
                },

                data: [
                    "城南街道",
                    "塘汇街道",
                    "嘉北街道",
                    "长水街道"
                ]
            },

            series: [{
                type: "bar",

                data: [
                    1027,
                    381,
                    246,
                    213
                ],

                label: {
                    show: true,
                    position: "right",
                    color: "#fff"
                },

                itemStyle: {
                    color: "#00d0ff"
                }
            }]
        },

        apartment_rate: {

            title: {
                text: "人才公寓入住率",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            grid: {
                left: 100,
                right: 50,
                top: 50,
                bottom: 20
            },

            xAxis: {
                max: 100,
                axisLabel: {
                    color: "#fff",
                    formatter: "{value}%"
                }
            },

            yAxis: {
                type: "category",

                axisLabel: {
                    color: "#fff"
                },

                data: [
                    "久境园",
                    "优盛花苑",
                    "熙华珑园",
                    "檀映里",
                    "云望雅苑",
                    "沁樾庄"
                ]
            },

            series: [{
                type: "bar",

                data: [
                    100,
                    100,
                    98,
                    100,
                    71,
                    5
                ],

                label: {
                    show: true,
                    position: "right",
                    formatter: "{c}%",
                    color: "#fff"
                },

                itemStyle: {
                    borderRadius: 20,
                    color: "#00ffcc"
                }
            }]
        },

        property_resource: {

            title: {
                text: "物业运营资源统计",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            tooltip: {
                trigger: "item"
            },

            series: [{
                type: "pie",

                radius: [
                    "45%",
                    "72%"
                ],

                label: {
                    formatter: "{b}\n{c}",
                    color: "#fff"
                },

                data: [
                    { value: 14, name: "服务楼宇" },
                    { value: 133, name: "服务面积" },
                    { value: 27, name: "停车场" },
                    { value: 1731, name: "人才房" }
                ]
            }]
        },

        // ==========================================
        // 食品板块
        // ==========================================

        food_sale: {

            title: {
                text: "食品配送销售结构",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            tooltip: {
                trigger: "item"
            },

            series: [{
                type: "pie",

                roseType: "radius",

                radius: [
                    "20%",
                    "75%"
                ],

                label: {
                    color: "#fff",
                    formatter: "{b}\n{d}%"
                },

                data: [
                    { value: 1031394.57, name: "肉类" },
                    { value: 477114.31, name: "冷冻品" },
                    { value: 384436.13, name: "蔬菜" },
                    { value: 221643.86, name: "水果" },
                    { value: 195744.45, name: "奶制品" },
                    { value: 183590, name: "年货" },
                    { value: 179981.1, name: "粮食" },
                    { value: 124715.7, name: "水产品" },
                    { value: 117176.29, name: "点心" },
                    { value: 98069.82, name: "食用油" },
                    { value: 424540.2, name: "其他" }
                ]
            }]
        },

        food_check_count: {

            title: {
                text: "食品检测次数统计",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            xAxis: {
                type: "category",

                data: [
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月"
                ],

                axisLabel: {
                    color: "#fff"
                }
            },

            yAxis: {
                name: "次",
                axisLabel: {
                    color: "#fff"
                }
            },

            series: [{
                type: "bar",

                data: [
                    1529,
                    984,
                    1739,
                    1584,
                    1791
                ],

                label: {
                    show: true,
                    position: "top",
                    color: "#fff"
                },

                itemStyle: {
                    color: "#00d0ff"
                }
            }]
        },

        food_pass_rate: {

            title: {
                text: "食品检测合格率",
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },

            xAxis: {
                type: "category",

                data: [
                    "1月",
                    "2月",
                    "3月",
                    "4月",
                    "5月"
                ],

                axisLabel: {
                    color: "#fff"
                }
            },

            yAxis: {
                min: 99.4,
                max: 100,
                axisLabel: {
                    formatter: "{value}%",
                    color: "#fff"
                }
            },

            series: [{
                type: "line",

                smooth: true,

                data: [
                    99.93,
                    99.49,
                    99.94,
                    99.94,
                    99.89
                ],

                label: {
                    show: true,
                    formatter: "{c}%",
                    color: "#fff"
                },

                markPoint: {
                    data: [
                        {
                            type: "max",
                            name: "最高值"
                        }
                    ]
                },

                lineStyle: {
                    width: 4,
                    color: "#00ffcc"
                }
            }]
        }

    };

    return (
        <ReactECharts
            option={optionMap[chart.type] || {}}
            notMerge={true}
            lazyUpdate={true}
            style={{
                width: "100%",
                height: "360px"
            }}
        />
    );
}