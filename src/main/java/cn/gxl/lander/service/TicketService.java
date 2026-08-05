package cn.gxl.lander.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import cn.gxl.lander.dto.TicketProcessDto;
import cn.gxl.lander.model.TicketItem;
import cn.gxl.lander.model.TicketLog;

@Service
public class TicketService {

    private static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    private final List<TicketItem> tickets = Collections.synchronizedList(new ArrayList<TicketItem>(Arrays.asList(
            ticket("GD202605280001", "OA系统无法登录", "系统异常", "高", "张三", "138****8888",
                    "用户反馈OA系统提示500错误", "待处理", "2026-05-28 09:30:12",
                    new TicketLog("2026-05-28 09:30:12", "张三 提交工单")),
            ticket("GD202605280002", "打印机无法连接", "办公设备", "中", "李四", "139****6666",
                    "打印机无法被电脑识别", "处理中", "2026-05-28 10:15:21",
                    new TicketLog("2026-05-28 10:15:21", "李四 提交工单"),
                    new TicketLog("2026-05-28 10:20:11", "运维人员已接单处理中"))
    )));

    public List<TicketItem> getTickets() {
        synchronized (tickets) {
            return new ArrayList<>(tickets);
        }
    }

    public TicketItem createTicket(TicketItem ticket) {
        String currentTime = LocalDateTime.now().format(DATE_TIME_FORMATTER);
        ticket.setId("GD" + System.currentTimeMillis());
        ticket.setStatus("待处理");
        ticket.setCreateTime(currentTime);
        ticket.setLogs(new ArrayList<>(Arrays.asList(new TicketLog(currentTime, ticket.getCreator() + " 提交工单"))));
        tickets.add(0, ticket);
        return ticket;
    }

    public TicketItem processTicket(String id, TicketProcessDto dto) {
        TicketItem ticket = getTicket(id);
        ticket.setStatus(dto.getAction());
        ticket.getLogs().add(new TicketLog(LocalDateTime.now().format(DATE_TIME_FORMATTER), dto.getRemark()));
        return ticket;
    }

    public TicketItem completeTicket(String id) {
        TicketItem ticket = getTicket(id);
        ticket.setStatus("已完成");
        ticket.getLogs().add(new TicketLog(LocalDateTime.now().format(DATE_TIME_FORMATTER), "工单已完结"));
        return ticket;
    }

    private TicketItem getTicket(String id) {
        synchronized (tickets) {
            for (TicketItem ticket : tickets) {
                if (ticket.getId().equals(id)) {
                    return ticket;
                }
            }
        }
        throw new IllegalArgumentException("工单不存在");
    }

    private static TicketItem ticket(String id, String title, String type, String priority, String creator,
                                     String phone, String description, String status, String createTime, TicketLog... logs) {
        TicketItem ticket = new TicketItem();
        ticket.setId(id);
        ticket.setTitle(title);
        ticket.setType(type);
        ticket.setPriority(priority);
        ticket.setCreator(creator);
        ticket.setPhone(phone);
        ticket.setDescription(description);
        ticket.setStatus(status);
        ticket.setCreateTime(createTime);
        ticket.setLogs(new ArrayList<>(Arrays.asList(logs)));
        return ticket;
    }
}
