import ReactECharts from "echarts-for-react";

interface ChartItem {
    type: string;
    title: string;
}

export default function ChartPanel({ chart }: { chart: ChartItem }) {

    const baseStyle = {
        animationDuration: 1200,
        animationEasing: "cubicOut",
    };

    const optionMap: Record<string, any> = {

        // ================= 科技 =================
        uav_time: {
            ...baseStyle,
            title: {
                text: chart.title,
                left: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 14
                }
            },
            grid: {
                left: 40,
                right: 20,
                top: 50,
                bottom: 40,
                containLabel: true
            },
            xAxis: {
                type: "category",
                name: "月份",
                nameTextStyle: { color: "#aaa" },
                data: ["1月","2月","3月","4月","5月","6月"],
                axisLabel: { color: "#fff" }
            },
            yAxis: {
                type: "value",
                name: "分钟",
                nameTextStyle: { color: "#aaa" },
                axisLabel: { color: "#fff" }
            },
            series: [{
                type: "bar",
                data: [3921, 729, 3274, 1571, 607, 273],
                itemStyle: {
                    color: "#00d0ff",
                    shadowBlur: 15,
                    shadowColor: "rgba(0,208,255,0.6)"
                },
                barWidth: "45%",
                emphasis: {
                    itemStyle: {
                        shadowBlur: 25,
                        shadowColor: "#00d0ff"
                    }
                }
            }]
        },

        // ================= 飞行里程 =================
        uav_km: {
            ...baseStyle,
            title: {
                text: chart.title,
                left: "center",
                textStyle: { color: "#fff", fontSize: 14 }
            },
            grid: {
                left: 40,
                right: 20,
                top: 50,
                bottom: 40,
                containLabel: true
            },
            xAxis: {
                type: "category",
                name: "月份",
                nameTextStyle: { color: "#aaa" },
                data: ["1月","2月","3月","4月","5月","6月"],
                axisLabel: { color: "#fff" }
            },
            yAxis: {
                type: "value",
                name: "公里",
                nameTextStyle: { color: "#aaa" },
                axisLabel: { color: "#fff" }
            },
            series: [{
                type: "bar",
                data: [209.16, 248.49, 1570.21, 688, 195.09, 85.9],
                itemStyle: {
                    color: "#00ffcc",
                    shadowBlur: 15,
                    shadowColor: "rgba(0,255,204,0.6)"
                },
                barWidth: "45%",
                emphasis: {
                    itemStyle: {
                        shadowBlur: 25,
                        shadowColor: "#00ffcc"
                    }
                }
            }]
        },

        // ================= 云服务器（呼吸饼图） =================
        cloud_server: {
            ...baseStyle,
            title: {
                text: chart.title,
                left: "center",
                textStyle: { color: "#fff", fontSize: 14 }
            },
            tooltip: { trigger: "item" },
            series: [{
                type: "pie",
                radius: ["45%", "70%"],
                center: ["50%", "55%"],

                label: {
                    color: "#fff",
                    formatter: "{b}\n{c} ({d}%)"
                },

                labelLine: {
                    length: 10,
                    length2: 10
                },

                data: [
                    { value: 16, name: "金蝶财务" },
                    { value: 24, name: "OA系统" },
                    { value: 32, name: "雨水泵站" },
                    { value: 8, name: "会议系统" },
                    { value: 64, name: "控股OA" },
                    { value: 32, name: "能源平台" }
                ],

                emphasis: {
                    scale: true,
                    scaleSize: 8,
                    itemStyle: {
                        shadowBlur: 20,
                        shadowColor: "rgba(0,208,255,0.8)"
                    }
                },

                animationType: "scale",
                animationEasing: "elasticOut"
            }]
        },

        // ================= 能源结构（呼吸增强） =================
        energy_structure: {
            ...baseStyle,
            title: {
                text: chart.title,
                left: "center",
                textStyle: { color: "#fff", fontSize: 14 }
            },
            series: [{
                type: "pie",
                radius: "65%",
                center: ["50%", "55%"],

                label: {
                    color: "#fff",
                    formatter: "{b}\n{c} ({d}%)"
                },

                data: [
                    { value: 350, name: "快充枪" },
                    { value: 286, name: "慢充枪" },
                    { value: 22, name: "储能设备" }
                ],

                emphasis: {
                    scale: true,
                    scaleSize: 10,
                    itemStyle: {
                        shadowBlur: 25,
                        shadowColor: "rgba(0,255,204,0.8)"
                    }
                },

                animationType: "scale",
                animationEasing: "elasticOut"
            }]
        },

        // ================= 光伏（流动折线） =================
        pv_power: {
            ...baseStyle,
            title: {
                text: chart.title,
                left: "center",
                textStyle: { color: "#fff", fontSize: 14 }
            },
            grid: {
                left: 40,
                right: 20,
                top: 50,
                bottom: 40,
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: Array.from({ length: 12 }, (_, i) => `${i+1}月`),
                axisLabel: { color: "#fff" }
            },
            yAxis: {
                type: "value",
                axisLabel: { color: "#fff" }
            },
            series: [{
                type: "line",
                smooth: true,

                data: [
                    896043,895764,972021,1023577,837071,1046993,
                    1255686,1263411,950503,876928,932622,843817
                ],

                lineStyle: {
                    width: 4,
                    color: "#00d0ff",
                    shadowBlur: 10,
                    shadowColor: "#00d0ff"
                },

                areaStyle: {
                    color: "rgba(0,208,255,0.15)"
                },

                symbol: "circle",
                symbolSize: 6,

                emphasis: {
                    focus: "series"
                },

                animationDuration: 2000
            }]
        },

        // ================= 人才 =================
        talent_kpi: {
            ...baseStyle,
            title: {
                text: chart.title,
                left: "center",
                textStyle: { color: "#fff", fontSize: 14 }
            },
            xAxis: {
                type: "category",
                data: ["企业", "岗位", "求职者", "培训场次"],
                axisLabel: { color: "#fff" }
            },
            yAxis: {
                axisLabel: { color: "#fff" }
            },
            series: [{
                type: "bar",
                data: [600, 4000, 11000, 120],
                itemStyle: {
                    color: "#00d0ff",
                    shadowBlur: 12,
                    shadowColor: "rgba(0,208,255,0.6)"
                }
            }]
        },

        // ================= 园林 =================
        garden_kpi: {
            ...baseStyle,
            title: {
                text: chart.title,
                left: "center",
                textStyle: { color: "#fff", fontSize: 14 }
            },
            xAxis: {
                type: "category",
                data: ["绿地面积", "游园人数", "活动次数", "参与人数"],
                axisLabel: { color: "#fff" }
            },
            yAxis: {},
            series: [{
                type: "bar",
                data: [550, 31, 160, 106],
                itemStyle: {
                    color: "#00ffcc",
                    shadowBlur: 12,
                    shadowColor: "rgba(0,255,204,0.6)"
                }
            }]
        },

        // ================= 物业 =================
        parking_area: {
            ...baseStyle,
            title: {
                text: chart.title,
                left: "center",
                textStyle: { color: "#fff", fontSize: 14 }
            },
            series: [{
                type: "pie",
                radius: "65%",
                center: ["50%", "55%"],
                data: [
                    { name: "城南", value: 1027 },
                    { name: "塘汇", value: 381 },
                    { name: "长水", value: 213 },
                    { name: "嘉北", value: 246 }
                ],
                label: {
                    color: "#fff",
                    formatter: "{b}\n{c}"
                },
                emphasis: {
                    scale: true,
                    scaleSize: 8,
                    itemStyle: {
                        shadowBlur: 20,
                        shadowColor: "rgba(0,208,255,0.8)"
                    }
                }
            }]
        },
        apartment_rate: {
            ...baseStyle,
            title: {
                text: chart.title,
                left: "center",
                textStyle: { color: "#fff", fontSize: 14 }
            },
            series: [{
                type: "bar",
                data: [100, 100, 98, 100, 71, 5],
                itemStyle: {
                    color: "#00d0ff",
                    shadowBlur: 10
                }
            }]
        },

        property_kpi: {
            ...baseStyle,
            title: {
                text: chart.title,
                left: "center",
                textStyle: { color: "#fff", fontSize: 14 }
            },
            xAxis: {
                type: "category",
                data: ["楼宇", "面积", "公园", "停车场"],
                axisLabel: { color: "#fff" }
            },
            yAxis: {},
            series: [{
                type: "bar",
                data: [14, 133, 3, 27],
                itemStyle: {
                    color: "#00ffcc",
                    shadowBlur: 12
                }
            }]
        }
    };

    return (
        <ReactECharts
            option={optionMap[chart.type] || {}}
            style={{
                height: "240px",
                width: "100%"
            }}
        />
    );
}