package cn.gxl.lander.web.controlloer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cn.gxl.lander.service.PortalService;
import cn.gxl.lander.service.PortalChartService;
import cn.gxl.lander.utils.Result;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/smartcity/portal")
public class PortalController {

    private final PortalService portalService;

    private final PortalChartService portalChartService;

    @GetMapping("/overview")
    public Result getOverview() {
        return Result.success(portalService.getOverview());
    }

    @GetMapping("/charts/{type}")
    public Result getChartOption(@org.springframework.web.bind.annotation.PathVariable String type) {
        return Result.success(portalChartService.getChartOption(type));
    }
}
