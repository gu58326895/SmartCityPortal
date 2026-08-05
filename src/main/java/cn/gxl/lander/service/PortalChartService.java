package cn.gxl.lander.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class PortalChartService {

    private static final List<String> MONTHS = Arrays.asList("2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06");

    private static final Map<String, String> TITLES = new HashMap<>();

    private static final Map<String, List<Number>> DATA = new HashMap<>();

    static {
        TITLES.put("uav_time", "无人机月度飞行时长统计");
        TITLES.put("uav_distance", "无人机月度飞行里程统计");
        TITLES.put("cloud_cpu", "国资云资源分布（按CPU核心数）");
        TITLES.put("energy_gun", "充电枪运行统计");
        TITLES.put("energy_pv", "光伏发电量统计");
        TITLES.put("energy_asset", "新能源资产分布");
        TITLES.put("talent_result", "人才服务成果统计");
        TITLES.put("talent_funnel", "人才招聘转化漏斗");
        TITLES.put("garden_result", "园林市政项目成果统计");
        TITLES.put("garden_activity", "园林市政活动统计");
        TITLES.put("parking_region", "停车区域运营统计");
        TITLES.put("apartment_rate", "人才公寓入住率");
        TITLES.put("property_resource", "物业资源分布");
        TITLES.put("food_sale", "食材销售额统计");
        TITLES.put("food_check_count", "食材检测数量统计");
        TITLES.put("food_pass_rate", "食材检测合格率");

        DATA.put("uav_time", Arrays.<Number>asList(3921, 729, 3274, 1571, 607, 273));
        DATA.put("uav_distance", Arrays.<Number>asList(209.16, 248.49, 1570.21, 688, 195.09, 85.9));
        DATA.put("cloud_cpu", Arrays.<Number>asList(96, 72, 54));
        DATA.put("energy_gun", Arrays.<Number>asList(86, 91, 95, 88, 98, 102));
        DATA.put("energy_pv", Arrays.<Number>asList(128, 146, 192, 176, 214, 236));
        DATA.put("energy_asset", Arrays.<Number>asList(42, 28, 30));
        DATA.put("talent_result", Arrays.<Number>asList(68, 76, 83, 95, 108, 120));
        DATA.put("talent_funnel", Arrays.<Number>asList(420, 280, 160, 86));
        DATA.put("garden_result", Arrays.<Number>asList(12, 18, 23, 28, 32, 36));
        DATA.put("garden_activity", Arrays.<Number>asList(8, 12, 15, 13, 18, 20));
        DATA.put("parking_region", Arrays.<Number>asList(340, 280, 220));
        DATA.put("apartment_rate", Arrays.<Number>asList(76, 82, 88, 90, 93, 95));
        DATA.put("property_resource", Arrays.<Number>asList(36, 24, 20, 20));
        DATA.put("food_sale", Arrays.<Number>asList(92, 108, 124, 118, 136, 152));
        DATA.put("food_check_count", Arrays.<Number>asList(186, 204, 222, 210, 236, 258));
        DATA.put("food_pass_rate", Arrays.<Number>asList(96, 97, 98, 97, 99, 99));
    }

    public Map<String, Object> getChartOption(String type) {
        List<Number> data = DATA.get(type);
        if (data == null) {
            throw new IllegalArgumentException("图表不存在");
        }

        if (isPieChart(type)) {
            return pieOption(type, data);
        }

        return axisOption(type, data);
    }

    private Map<String, Object> axisOption(String type, List<Number> data) {
        Map<String, Object> option = new HashMap<>();
        option.put("title", map("text", TITLES.get(type), "left", "center", "textStyle", map("color", "#fff", "fontSize", 14)));
        option.put("tooltip", map("trigger", "axis"));
        option.put("grid", map("left", 60, "right", 20, "top", 50, "bottom", 50));
        option.put("xAxis", map("type", "category", "data", MONTHS, "axisLabel", map("color", "#fff")));
        option.put("yAxis", map("type", "value", "axisLabel", map("color", "#fff"),
                "splitLine", map("lineStyle", map("color", "rgba(255,255,255,.08)"))));
        option.put("series", Arrays.asList(map("type", isLineChart(type) ? "line" : "bar", "smooth", isLineChart(type),
                "data", data, "label", map("show", true, "color", "#fff"),
                "lineStyle", map("color", "#00e5ff", "width", 3), "itemStyle", map("color", "#00b7ff"))));
        return option;
    }

    private Map<String, Object> pieOption(String type, List<Number> data) {
        List<Map<String, Object>> seriesData = new ArrayList<>();
        for (int i = 0; i < data.size(); i++) {
            seriesData.add(map("name", "类别" + (i + 1), "value", data.get(i)));
        }

        Map<String, Object> option = new HashMap<>();
        option.put("title", map("text", TITLES.get(type), "left", "center", "textStyle", map("color", "#fff", "fontSize", 14)));
        option.put("tooltip", map("trigger", "item"));
        option.put("legend", map("bottom", 0, "textStyle", map("color", "#fff")));
        option.put("series", Arrays.asList(map("type", "pie", "radius", Arrays.asList("35%", "65%"), "data", seriesData,
                "label", map("color", "#fff"))));
        return option;
    }

    private boolean isPieChart(String type) {
        return "cloud_cpu".equals(type) || "energy_asset".equals(type)
                || "parking_region".equals(type) || "property_resource".equals(type);
    }

    private boolean isLineChart(String type) {
        return "uav_distance".equals(type) || "energy_pv".equals(type)
                || "apartment_rate".equals(type) || "food_pass_rate".equals(type);
    }

    private Map<String, Object> map(Object... values) {
        Map<String, Object> result = new HashMap<>();
        for (int i = 0; i < values.length; i += 2) {
            result.put((String) values[i], values[i + 1]);
        }
        return result;
    }
}
