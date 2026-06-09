import ReactECharts from "echarts-for-react";

interface ChartItem {
    type: string;
    title: string;
}

export default function ChartPanel({ chart }: { chart: ChartItem }) {

    const optionMap: Record<string, any>  = {

        // ================= 科技 =================
        uav_time: {
            grid: {
                left: 30,
                right: 20,
                top: 30,
                bottom: 30,
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: ["1月","2月","3月","4月","5月","6月"],
                axisLabel: { color: "#fff" }
            },
            yAxis: { axisLabel: { color: "#fff" } },
            series: [{
                type: "bar",
                data: [3921, 729, 3274, 1571, 607, 273],
                itemStyle: { color: "#00d0ff" }
            }]
        },

        uav_km: {
            grid: {
                left: 30,
                right: 20,
                top: 30,
                bottom: 30,
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: ["1月","2月","3月","4月","5月","6月"],
                axisLabel: { color: "#fff" }
            },
            yAxis: { axisLabel: { color: "#fff" } },
            series: [{
                type: "bar",
                data: [209.16, 248.49, 1570.21, 688, 195.09, 85.9],
                itemStyle: { color: "#00ffcc" }
            }]
        },

        cloud_server: {
            grid: {
                left: 30,
                right: 20,
                top: 30,
                bottom: 30,
                containLabel: true
            },
            tooltip: { trigger: "item" },
            series: [{
                type: "pie",
                radius: "65%",
                data: [
                    { value: 16, name: "金蝶财务" },
                    { value: 24, name: "OA系统" },
                    { value: 32, name: "雨水泵站" },
                    { value: 8, name: "会议系统" },
                    { value: 64, name: "控股OA" },
                    { value: 32, name: "能源平台" }
                ],
                label: { color: "#fff" ,  formatter: "{b}: {c}"}
            }]
        },

        // ================= 能源 =================
        energy_structure: {
            grid: {
                left: 30,
                right: 20,
                top: 30,
                bottom: 30,
                containLabel: true
            },
            tooltip: { trigger: "item" },
            series: [{
                type: "pie",
                radius: "70%",
                data: [
                    { value: 350, name: "快充枪" },
                    { value: 286, name: "慢充枪" },
                    { value: 22, name: "储能设备" }
                ],
                label: { color: "#fff",     formatter: "{b}: {c}" }
            }]
        },

        pv_power: {
            grid: {
                left: 30,
                right: 20,
                top: 30,
                bottom: 30,
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: Array.from({ length: 12 }, (_, i) => `${i+1}月`),
                axisLabel: { color: "#fff" }
            },
            yAxis: { axisLabel: { color: "#fff" } },
            series: [{
                type: "line",
                smooth: true,
                data: [896043,895764,972021,1023577,837071,1046993,1255686,1263411,950503,876928,932622,843817]
            }]
        },

        // ================= 人才 =================
        talent_kpi: {
            tooltip: {},
            grid: {
                left: 30,
                right: 20,
                top: 30,
                bottom: 30,
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: ["企业", "岗位", "求职者", "培训场次"],
                axisLabel: { color: "#fff" }
            },
            yAxis: {},
            series: [{
                type: "bar",
                data: [600, 4000, 11000, 120],
                itemStyle: { color: "#00d0ff" }
            }]
        },

        // ================= 园林 =================
        garden_kpi: {
            grid: {
                left: 30,
                right: 20,
                top: 30,
                bottom: 30,
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: ["绿地面积(万㎡)", "游园人数", "活动次数", "参与人数"],
                axisLabel: { color: "#fff" }
            },
            yAxis: {},
            series: [{
                type: "bar",
                data: [550, 31, 160, 106],
                itemStyle: { color: "#00ffcc" }
            }]
        },

        // ================= 物业 =================
        parking_area: {
            grid: {
                left: 30,
                right: 20,
                top: 30,
                bottom: 30,
                containLabel: true
            },
            series: [{
                type: "pie",
                radius: "70%",
                data: [
                    { name: "城南", value: 1027 },
                    { name: "塘汇", value: 381 },
                    { name: "长水", value: 213 },
                    { name: "嘉北", value: 246 }
                ],
                label: { color: "#fff",     formatter: "{b}: {c}" }
            }]
        },

        apartment_rate: {
            grid: {
                left: 30,
                right: 20,
                top: 30,
                bottom: 30,
                containLabel: true
            },
            series: [{
                type: "bar",
                data: [100, 100, 98, 100, 71, 5],
                itemStyle: { color: "#00d0ff" }
            }]
        },

        property_kpi: {
            grid: {
                left: 30,
                right: 20,
                top: 30,
                bottom: 30,
                containLabel: true
            },
            xAxis: {
                type: "category",
                data: ["楼宇", "面积(万㎡)", "公园", "停车场"],
                axisLabel: { color: "#fff" }
            },
            yAxis: {},
            series: [{
                type: "bar",
                data: [14, 133, 3, 27],
                itemStyle: { color: "#00ffcc" }
            }]
        }
    };

    return (
        <ReactECharts
            option={optionMap[chart.type] || {}}
            style={{ height: "240px", width: "100%" }}
        />
    );
}