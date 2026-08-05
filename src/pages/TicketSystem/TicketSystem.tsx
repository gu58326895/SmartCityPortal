// TicketSystem.tsx

import React, { useEffect, useMemo, useState } from 'react';
import {
    Button,
    Card,
    Form,
    Input,
    Modal,
    Select,
    Space,
    Table,
    Tag,
    message,
    Typography,
    Row,
    Col,
    Statistic,
    Timeline,
} from 'antd';

import {
    PlusOutlined,
    CheckCircleOutlined,
    ToolOutlined,
} from '@ant-design/icons';

import './TicketSystem.css';
import {
    completeTicket,
    createTicket,
    getTickets,
    processTicket,
} from '../../api/portalApi';
import type { TicketItem } from '../../api/portalApi';

const { TextArea } = Input;
const { Title } = Typography;

const getStatusTag = (status: string) => {
    switch (status) {
        case '待处理':
            return <Tag color="orange">待处理</Tag>;

        case '处理中':
            return <Tag color="processing">处理中</Tag>;

        case '已完成':
            return <Tag color="success">已完成</Tag>;

        default:
            return <Tag>{status}</Tag>;
    }
};

const TicketSystem: React.FC = () => {
    const [tickets, setTickets] = useState<TicketItem[]>([]);

    const [createVisible, setCreateVisible] = useState(false);
    const [handleVisible, setHandleVisible] = useState(false);

    const [currentTicket, setCurrentTicket] = useState<TicketItem | null>(
        null
    );

    const [createForm] = Form.useForm();
    const [handleForm] = Form.useForm();

    useEffect(() => {
        getTickets()
            .then(setTickets)
            .catch((error: Error) => message.error(error.message));
    }, []);

    const statistics = useMemo(() => {
        return {
            total: tickets.length,
            pending: tickets.filter((i) => i.status === '待处理').length,
            processing: tickets.filter((i) => i.status === '处理中').length,
            finished: tickets.filter((i) => i.status === '已完成').length,
        };
    }, [tickets]);

    const handleCreate = async () => {
        const values = await createForm.validateFields();

        const newTicket = await createTicket(values);

        setTickets([newTicket, ...tickets]);

        message.success('工单创建成功');

        setCreateVisible(false);

        createForm.resetFields();
    };

    const openHandleModal = (record: TicketItem) => {
        setCurrentTicket(record);
        setHandleVisible(true);
    };

    const handleProcess = async () => {
        const values = await handleForm.validateFields();

        if (!currentTicket) return;

        const processedTicket = await processTicket(currentTicket.id, values);

        const updated = tickets.map((item) => item.id === processedTicket.id ? processedTicket : item);

        setTickets(updated);

        message.success('工单处理成功');

        setHandleVisible(false);

        handleForm.resetFields();
    };

    const columns = [
        {
            title: '工单编号',
            dataIndex: 'id',
            width: 220,
        },
        {
            title: '标题',
            dataIndex: 'title',
        },
        {
            title: '类型',
            dataIndex: 'type',
            width: 120,
        },
        {
            title: '优先级',
            dataIndex: 'priority',
            width: 100,
            render: (text: string) => {
                const color =
                    text === '高'
                        ? 'red'
                        : text === '中'
                            ? 'orange'
                            : 'green';

                return <Tag color={color}>{text}</Tag>;
            },
        },
        {
            title: '提交人',
            dataIndex: 'creator',
            width: 100,
        },
        {
            title: '状态',
            dataIndex: 'status',
            width: 120,
            render: (text: string) => getStatusTag(text),
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            width: 180,
        },
        {
            title: '操作',
            width: 220,
            render: (_: unknown, record: TicketItem) => (
                <Space>
                    <Button
                        type="primary"
                        icon={<ToolOutlined />}
                        onClick={() => openHandleModal(record)}
                    >
                        处理
                    </Button>

                    <Button
                        icon={<CheckCircleOutlined />}
                        success-color="green"
                        onClick={() => {
                            completeTicket(record.id)
                                .then((completedTicket) => {
                                    setTickets(tickets.map((item) =>
                                        item.id === completedTicket.id ? completedTicket : item
                                    ));
                                    message.success('工单已完结');
                                })
                                .catch((error: Error) => message.error(error.message));
                        }}
                    >
                        完结
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="ticket-page">
            <div className="ticket-header">
                <Title level={3} style={{ color: '#fff', margin: 0 }}>
                    IT运维工单管理系统
                </Title>

                <Button
                    type="primary"
                    size="large"
                    icon={<PlusOutlined />}
                    onClick={() => setCreateVisible(true)}
                >
                    新建工单
                </Button>
            </div>

            <Row gutter={16} className="mb20">
                <Col span={6}>
                    <Card className="stat-card">
                        <Statistic title="工单总数" value={statistics.total} />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card className="stat-card">
                        <Statistic title="待处理" value={statistics.pending} />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card className="stat-card">
                        <Statistic title="处理中" value={statistics.processing} />
                    </Card>
                </Col>

                <Col span={6}>
                    <Card className="stat-card">
                        <Statistic title="已完成" value={statistics.finished} />
                    </Card>
                </Col>
            </Row>

            <Card className="table-card">
                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={tickets}
                    pagination={{
                        pageSize: 6,
                    }}
                />
            </Card>

            {/* 新建工单 */}

            <Modal
                title="新建工单"
                open={createVisible}
                onCancel={() => setCreateVisible(false)}
                onOk={handleCreate}
                width={700}
            >
                <Form layout="vertical" form={createForm}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="工单标题"
                                name="title"
                                rules={[{ required: true }]}
                            >
                                <Input placeholder="请输入工单标题" />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="问题类型"
                                name="type"
                                rules={[{ required: true }]}
                            >
                                <Select
                                    options={[
                                        { label: '网络故障', value: '网络故障' },
                                        { label: '系统异常', value: '系统异常' },
                                        { label: '办公设备', value: '办公设备' },
                                        { label: '服务器故障', value: '服务器故障' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="优先级"
                                name="priority"
                                rules={[{ required: true }]}
                            >
                                <Select
                                    options={[
                                        { label: '高', value: '高' },
                                        { label: '中', value: '中' },
                                        { label: '低', value: '低' },
                                    ]}
                                />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item
                                label="提交人"
                                name="creator"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item label="联系方式" name="phone">
                        <Input />
                    </Form.Item>

                    <Form.Item label="问题描述" name="description">
                        <TextArea rows={4} />
                    </Form.Item>
                </Form>
            </Modal>

            {/* 处理工单 */}

            <Modal
                title="处理工单"
                open={handleVisible}
                onCancel={() => setHandleVisible(false)}
                onOk={handleProcess}
                width={700}
            >
                {currentTicket && (
                    <>
                        <Card className="mb20">
                            <p>
                                <b>工单编号：</b>
                                {currentTicket.id}
                            </p>

                            <p>
                                <b>工单标题：</b>
                                {currentTicket.title}
                            </p>

                            <p>
                                <b>当前状态：</b>
                                {getStatusTag(currentTicket.status)}
                            </p>
                        </Card>

                        <Timeline
                            items={currentTicket.logs.map((item) => ({
                                children: `${item.time} - ${item.content}`,
                            }))}
                            className="mb20"
                        />

                        <Form layout="vertical" form={handleForm}>
                            <Form.Item
                                label="处理动作"
                                name="action"
                                rules={[{ required: true }]}
                            >
                                <Select
                                    options={[
                                        { label: '处理中', value: '处理中' },
                                        { label: '已完成', value: '已完成' },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item
                                label="处理备注"
                                name="remark"
                                rules={[{ required: true }]}
                            >
                                <TextArea rows={4} />
                            </Form.Item>
                        </Form>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default TicketSystem;
