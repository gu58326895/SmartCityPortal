package cn.gxl.lander.model;

import java.util.List;

import lombok.Data;

@Data
public class TicketItem {

    private String id;

    private String title;

    private String type;

    private String priority;

    private String creator;

    private String phone;

    private String description;

    private String status;

    private String createTime;

    private List<TicketLog> logs;
}
