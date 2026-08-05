import { Card, Tag, Tooltip } from "antd";
import type { PortalSystem } from "../api/portalApi";

interface Props {
    item: PortalSystem;
}

export default function ModuleCard({ item }: Props) {
    const handleClick = () => {
        window.open(item.url);
    };

    return (
        <Tooltip title={item.desc}>
            <Card
                hoverable
                onClick={handleClick}
                style={{
                    height: 280,
                    cursor: 'pointer'
                }}
                styles={{
                    body: {
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '20px'
                    }
                }}
            >
                {/* 头部状态指示器 */}
                <div
                    style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#52c41a",
                        marginBottom: 16,
                        boxShadow: "0 0 0 2px rgba(82, 196, 26, 0.2)"
                    }}
                />

                {/* 标题区域 - 固定高度，确保对齐 */}
                <div style={{ marginBottom: 16, minHeight: 48 }}>
                    <h3 style={{
                        margin: 0,
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#262626",
                        lineHeight: 1.4,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                    }}>
                        {item.name}
                    </h3>
                </div>

                {/* 所属单位 - 固定高度 */}
                <div style={{ marginBottom: 12, minHeight: 22 }}>
                    <span style={{
                        fontSize: 13,
                        color: "#595959",
                        lineHeight: 1.5
                    }}>
                        {item.company}
                    </span>
                </div>

                {/* 描述区域 - 固定高度，超出省略 */}
                <div style={{
                    flex: 1,
                    marginBottom: 16,
                    minHeight: 60
                }}>
                    <p style={{
                        margin: "4px 0 0 0",
                        fontSize: 12,
                        color: "#8c8c8c",
                        lineHeight: 1.5,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                    }}>
                        {item.desc}
                    </p>
                </div>

                {/* 标签区域 - 固定在底部 */}
                <div style={{ marginTop: 'auto' }}>
                    <Tag color="green" style={{ margin: 0 }}>
                        在线运行
                    </Tag>
                </div>
            </Card>
        </Tooltip>
    );
}
