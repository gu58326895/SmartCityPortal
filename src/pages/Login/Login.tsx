import { Button, Card, Form, Input, message, Typography } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

import { login } from '../../api/portalApi';
import './Login.css';

interface LoginForm {
    username: string;
    password: string;
}

interface LoginLocationState {
    from?: {
        pathname?: string;
    };
}

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [form] = Form.useForm<LoginForm>();

    const handleSubmit = async (values: LoginForm) => {
        try {
            await login(values);
            message.success('登录成功');
            const state = location.state as LoginLocationState | null;
            navigate(state?.from?.pathname || '/', { replace: true });
        } catch (error) {
            message.error(error instanceof Error ? error.message : '登录失败');
        }
    };

    return (
        <div className="login-page">
            <Card className="login-card" bordered={false}>
                <Typography.Title level={2} className="login-title">
                    经开智慧城市运营门户
                </Typography.Title>
                <Typography.Paragraph className="login-subtitle">
                    请输入账号和密码登录
                </Typography.Paragraph>

                <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark={false}>
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[{ required: true, message: '请输入账号' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="请输入账号" size="large" autoComplete="username" />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder="请输入密码" size="large" autoComplete="current-password" />
                    </Form.Item>
                    <Form.Item className="login-submit">
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}
