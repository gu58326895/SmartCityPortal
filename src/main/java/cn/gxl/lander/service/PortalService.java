package cn.gxl.lander.service;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import cn.gxl.lander.dto.PortalOverviewDto;
import cn.gxl.lander.model.PortalChart;
import cn.gxl.lander.model.PortalModule;
import cn.gxl.lander.model.PortalStat;
import cn.gxl.lander.model.PortalSystem;

@Service
public class PortalService {

    public PortalOverviewDto getOverview() {
        return new PortalOverviewDto(getModules(), getStats());
    }

    private List<PortalModule> getModules() {
        return Arrays.asList(
                new PortalModule("all", "综合平台", "/images/uav.png", "/logo.jpeg", Collections.<PortalChart>emptyList(),
                        Arrays.asList(new PortalSystem("经开区企业信息化平台", "经智慧城市运营有限公司智科技有限公司",
                                "企业OA协同办公与信息化管理平台巡检与政务航空管理平台",
                                "https://oa.jxsjzkj.com:8826/seeyon/main.do?method=main"))),
                new PortalModule("tech", "科技板块", "/images/uav.png", "/logo/logo_嘉兴市经智科技有限公司.png",
                        Arrays.asList(new PortalChart("uav_time", "无人机月度飞行时长统计"),
                                new PortalChart("uav_distance", "无人机月度飞行里程统计"),
                                new PortalChart("cloud_cpu", "国资云资源分布")),
                        Arrays.asList(new PortalSystem("经开政务航空服务平台", "经智科技有限公司", "无人机巡检与政务航空管理平台",
                                "https://jkwrj.jxsjzkj.com/login?redirect=/index"))),
                new PortalModule("energy", "能源板块", "/images/energy.gif", "/logo/logo_经慧新能源有限公司.png",
                        Arrays.asList(new PortalChart("energy_gun", null), new PortalChart("energy_pv", null), new PortalChart("energy_asset", null)),
                        Arrays.asList(new PortalSystem("能源管控平台", "经慧新能源有限公司", "能源消耗与运行监测平台", "http://jkecms.jxsjzkj.com"))),
                new PortalModule("food", "食品配送", "/images/food.jpg", "/logo/食材公司.png",
                        Arrays.asList(new PortalChart("food_sale", null), new PortalChart("food_check_count", null), new PortalChart("food_pass_rate", null)),
                        Arrays.asList(new PortalSystem("观麦系统管理平台", "经益食品配送公司", "食材供应链与配送平台", "https://station.guanmai.cn/"))),
                new PortalModule("garden", "园林市政", "/images/garden.jpeg", "/logo/logo_经悦园林市政建设.png",
                        Arrays.asList(new PortalChart("garden_result", null), new PortalChart("garden_activity", null)),
                        Arrays.asList(new PortalSystem("雨水泵站WEB系统", "经悦园林市政建设公司", "雨水泵站实时监测平台", "https://jkbz.jxsjzkj.com:8093/uniwim/index.html"),
                                new PortalSystem("城市生命线安全平台", "经悦园林市政建设公司", "桥梁、隧道、道路安全监测", "https://cwy.csyw.org.cn/login?redirect=%2Findex"))),
                new PortalModule("property", "物业板块", "/images/property.png", "/logo/logo_经安物业管理有限公司.png",
                        Arrays.asList(new PortalChart("parking_region", null), new PortalChart("apartment_rate", null), new PortalChart("property_resource", null)),
                        Arrays.asList(new PortalSystem("经安智停运营后台", "经安物业管理有限公司", "停车场运营管理平台", "https://psp.jxsjzkj.com/#/login"),
                                new PortalSystem("人才房管理平台", "经安物业管理有限公司", "人才公寓与房源管理系统", "https://jkrcf.jxsjzkj.com:7000/login"))),
                new PortalModule("talent", "人才板块", "/images/talent.jpeg", "/logo/logo_经英人才发展服务.png",
                        Arrays.asList(new PortalChart("talent_result", null), new PortalChart("talent_funnel", null)),
                        Arrays.asList(new PortalSystem("外包人员管理系统", "经英人才发展有限公司", "人才招聘与外包人员管理", "http://energy.xxx.com")))
        );
    }

    private List<PortalStat> getStats() {
        return Arrays.asList(new PortalStat("接入系统", 9), new PortalStat("在线系统", 9),
                new PortalStat("业务板块", 6), new PortalStat("今日访问量", 1280));
    }
}
