package cn.gxl.lander.web.controlloer;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import cn.gxl.lander.dto.TicketProcessDto;
import cn.gxl.lander.model.TicketItem;
import cn.gxl.lander.service.TicketService;
import cn.gxl.lander.utils.Result;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/smartcity/tickets")
public class TicketController {

    private final TicketService ticketService;

    @GetMapping
    public Result getTickets() {
        List<TicketItem> tickets = ticketService.getTickets();
        return Result.success(tickets);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Result createTicket(@RequestBody TicketItem ticket) {
        return Result.success(ticketService.createTicket(ticket));
    }

    @PostMapping("/{id}/process")
    public Result processTicket(@PathVariable String id, @RequestBody TicketProcessDto dto) {
        return Result.success(ticketService.processTicket(id, dto));
    }

    @PostMapping("/{id}/complete")
    public Result completeTicket(@PathVariable String id) {
        return Result.success(ticketService.completeTicket(id));
    }
}
