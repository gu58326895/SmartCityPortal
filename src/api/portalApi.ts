export interface PortalChart {
    type: string;
    title?: string;
}

export interface PortalSystem {
    name: string;
    company: string;
    desc: string;
    url: string;
}

export interface PortalModule {
    key: string;
    title: string;
    image: string;
    logo: string;
    charts: PortalChart[];
    systems: PortalSystem[];
}

export interface PortalStat {
    title: string;
    value: number;
}

export interface PortalOverview {
    modules: PortalModule[];
    stats: PortalStat[];
}

export interface TicketLog {
    time: string;
    content: string;
}

export interface TicketItem {
    id: string;
    title: string;
    type: string;
    priority: string;
    creator: string;
    phone: string;
    description: string;
    status: string;
    createTime: string;
    logs: TicketLog[];
}

export interface TicketProcess {
    action: string;
    remark: string;
}

export interface LoginParams {
    username: string;
    password: string;
}

interface Result<T> {
    code: number;
    msg: string;
    data: T;
}

async function request<T>(url: string, init?: RequestInit): Promise<T> {
    const response = await fetch(url, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...init?.headers,
        },
        ...init,
    });

    const result: Result<T> = await response.json();

    if (!response.ok || result.code !== 200) {
        throw new Error(result.msg || '请求失败');
    }

    return result.data;
}

export function getPortalOverview() {
    return request<PortalOverview>('/smartcity/portal/overview');
}

export function login(params: LoginParams) {
    return request<null>('/smartcity/login', {
        method: 'POST',
        body: JSON.stringify(params),
    });
}

export function getCurrentUser() {
    return request<string>('/smartcity/currentUser');
}

export function getChartOption(type: string) {
    return request<EChartsOption>(`/smartcity/portal/charts/${type}`);
}

export function getTickets() {
    return request<TicketItem[]>('/smartcity/tickets');
}

export function createTicket(ticket: Omit<TicketItem, 'id' | 'status' | 'createTime' | 'logs'>) {
    return request<TicketItem>('/smartcity/tickets', {
        method: 'POST',
        body: JSON.stringify(ticket),
    });
}

export function processTicket(id: string, ticketProcess: TicketProcess) {
    return request<TicketItem>(`/smartcity/tickets/${id}/process`, {
        method: 'POST',
        body: JSON.stringify(ticketProcess),
    });
}

export function completeTicket(id: string) {
    return request<TicketItem>(`/smartcity/tickets/${id}/complete`, {
        method: 'POST',
    });
}
import type { EChartsOption } from 'echarts';
