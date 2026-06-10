
export const modules = [
    {
        key: "all",

        title: "综合平台",

        image: "/images/uav.jpg",

        logo: "/logo/test.png",

        kpis: [], // 预留

        systems: [

            {
                name: "经开区企业信息化平台",

                company: "经智慧城市运营有限公司智科技有限公司",

                desc: "企业OA协同办公与信息化管理平台巡检与政务航空管理平台",

                url: "https://oa.jxsjzkj.com:8826/seeyon/main.do?method=main"
            }

        ]
    },

    {
        key: "tech",

        title: "科技板块",

        logo: "/logo/logo_嘉兴市经智科技有限公司.png",

        image: "/public/images/uav.png",

        charts:[
            { type:"uav_time", title:"无人机月度飞行时长统计" },
            { type:"uav_distance", title:"无人机月度飞行里程统计" },
            { type:"cloud_cpu", title:"国资云资源分布" }
        ],

        systems: [

            {
                name: "经开政务航空服务平台",

                company: "经智科技有限公司",

                desc: "无人机巡检与政务航空管理平台",

                url: "https://jkwrj.jxsjzkj.com/login?redirect=/index"
            }

        ]
    },

    {
        key: "energy",

        title: "能源板块",

        logo: "/logo/logo_经慧新能源有限公司.png",

        image: "/public/images/energy.gif",

        charts:[
            { type:"energy_gun" },
            { type:"energy_pv" },
            { type:"energy_asset" }
        ],

        systems: [

            {
                name: "能源管控平台",

                company: "经慧新能源有限公司",

                desc: "能源消耗与运行监测平台",

                url: "http://jkecms.jxsjzkj.com"
            }

        ]
    },

    {
        key: "food",

        title: "食品配送",

        logo: "/logo/食材公司.png",

        image: "/public/images/food.jpg",

        charts:[
            { type:"food_sale" },
            { type:"food_check_count" },
            { type:"food_pass_rate" }
        ],

        systems: [

            {
                name: "观麦系统管理平台",

                company: "经益食品配送公司",

                desc: "食材供应链与配送平台",

                url: "https://station.guanmai.cn/"
            }

        ]
    },

    {
        key: "garden",

        title: "园林市政",

        logo: "/logo/logo_经悦园林市政建设.png",

        image: "/public/images/garden.jpeg",

        charts:[
            { type:"garden_result" },
            { type:"garden_activity" }
        ],

        systems: [

            {
                name: "雨水泵站WEB系统",

                company: "经悦园林市政建设公司",

                desc: "雨水泵站实时监测平台",

                url: "https://jkbz.jxsjzkj.com:8093/uniwim/index.html"
            },

            {
                name: "城市生命线安全平台",

                company: "经悦园林市政建设公司",

                desc: "桥梁、隧道、道路安全监测",

                url: "https://cwy.csyw.org.cn/login?redirect=%2Findex"
            }

        ]
    },

    {
        key: "property",

        title: "物业板块",

        logo: "/logo/logo_经安物业管理有限公司.png",

        image: "/public/images/property.png",

        charts:[
            { type:"parking_region" },
            { type:"apartment_rate" },
            { type:"property_resource" }
        ],

        systems: [

            {
                name: "经安智停运营后台",

                company: "经安物业管理有限公司",

                desc: "停车场运营管理平台",

                url: "https://psp.jxsjzkj.com/#/login"
            },

            {
                name: "人才房管理平台",

                company: "经安物业管理有限公司",

                desc: "人才公寓与房源管理系统",

                url: "https://jkrcf.jxsjzkj.com:7000/login"
            }

        ]
    },

    {
        key: "talent",

        title: "人才板块",

        logo: "/logo/logo_经英人才发展服务.png",

        image: "/public/images/talent.jpeg",

        charts:[
            { type:"talent_result" },
            { type:"talent_funnel" }
        ],

        systems: [

            {
                name: "外包人员管理系统",

                company: "经英人才发展有限公司",

                desc: "人才招聘与外包人员管理",

                url: "http://energy.xxx.com"
            }

        ]
    }

];
export const stats = [

    {
        title: "接入系统",
        value: 9
    },

    {
        title: "在线系统",
        value: 9
    },

    {
        title: "业务板块",
        value: 6
    },

    {
        title: "今日访问量",
        value: 1280
    }

];