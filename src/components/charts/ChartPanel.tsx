import { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";

import { getChartOption } from "../../api/portalApi";

interface ChartItem {
    type: string;
    title?: string;
}

export default function ChartPanel({
                                       chart
                                   }: {
    chart: ChartItem
}) {

    const [option, setOption] = useState<EChartsOption>({});

    useEffect(() => {
        getChartOption(chart.type)
            .then(setOption)
            .catch(() => setOption({}));
    }, [chart.type]);

    return (
        <ReactECharts
            option={option}
            style={{ height: "100%", width: "100%" }}
        />
    );
}
