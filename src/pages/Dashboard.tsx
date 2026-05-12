import {
    Layout,
    Menu,
    Row,
    Col,
    Image,
    Button
} from "antd";

import {
    AppstoreOutlined,
    ApartmentOutlined,
    ThunderboltOutlined,
    RobotOutlined,
    TeamOutlined,
    HomeOutlined,
    EnvironmentOutlined,
    CoffeeOutlined
} from "@ant-design/icons";

import {
    useEffect,
    useState
} from "react";

import ModuleCard from "../components/ModuleCard";
import StatsCard from "../components/StatsCard";
import "./Dashboard.css";

import {
    modules,
    stats
} from "../data/mockData";

const {
    Header,
    Sider,
    Content
} = Layout;

export default function Dashboard() {

    const [time, setTime] = useState("");

    const [currentCategory, setCurrentCategory] =
        useState("全部系统");

    useEffect(() => {

        const updateTime = () => {

            setTime(
                new Date().toLocaleString()
            );

        };

        updateTime();

        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);

    }, []);

    const allSystems =
        modules.flatMap(
            module => module.systems
        );

    const filteredSystems =
        currentCategory === "全部系统"
            ? allSystems
            : modules
            .find(
                m =>
                    m.title === currentCategory
            )
            ?.systems || [];

    return (

        <Layout className="portal-layout">

            <Header className="portal-header">

                <div className="header-bar">
                    <div className="logo"><Image src="/logo.jpeg" className="logo-image" ></Image></div>

                    <div className="portal-title">
                        经开智慧城市运营门户
                    </div>

                </div>

                <div className="time-box">
                    {time}
                </div>

                <Button
                    type="primary"
                    onClick={() => {
                        window.open("/cockpit");
                    }}
                >
                    驾驶舱模式
                </Button>

            </Header>

            <Layout>

                <Sider width={220}>

                    <div className="menu-title">
                        业务板块
                    </div>

                    <Menu
                        mode="inline"
                        selectedKeys={[currentCategory]}
                        onClick={(e) =>
                            setCurrentCategory(e.key)
                        }
                        items={[
                            {
                                key: "全部系统",
                                icon: <AppstoreOutlined />,
                                label: "全部系统"
                            },
                            {
                                key: "综合平台",
                                icon: <ApartmentOutlined />,
                                label: "综合平台"
                            },
                            {
                                key: "科技板块",
                                icon: <RobotOutlined />,
                                label: "科技板块"
                            },
                            {
                                key: "物业板块",
                                icon: <HomeOutlined />,
                                label: "物业板块"
                            },
                            {
                                key: "能源板块",
                                icon: <ThunderboltOutlined />,
                                label: "能源板块"
                            },
                            {
                                key: "市政园林",
                                icon: <EnvironmentOutlined />,
                                label: "市政园林"
                            },
                            {
                                key: "食品配送",
                                icon: <CoffeeOutlined />,
                                label: "食品配送"
                            },
                            {
                                key: "人才板块",
                                icon: <TeamOutlined />,
                                label: "人才板块"
                            }
                        ]}
                    />

                </Sider>

                <Content className="portal-content">

                    {
                        currentCategory === "全部系统" && (
                            <>

                                <div className="section-title">
                                    平台运行概览
                                </div>

                                <Row gutter={[16,16]}>

                                    {
                                        stats.map((item) => (

                                            <Col span={6}>

                                                <StatsCard
                                                    title={item.title}
                                                    value={item.value}
                                                />

                                            </Col>

                                        ))
                                    }

                                </Row>

                            </>
                        )
                    }

                    <div
                        className="section-title"
                        style={{
                            marginTop: 40
                        }}
                    >

                        {currentCategory}

                        <span className="system-count">
              共 {filteredSystems.length} 个系统
            </span>

                    </div>

                    <Row gutter={[16,16]}>

                        {
                            filteredSystems.map((item) => (

                                <Col span={6}>

                                    <ModuleCard item={item} />

                                </Col>

                            ))
                        }

                    </Row>

                </Content>

            </Layout>

        </Layout>
    );
}