package cn.gxl.lander.dto;

import java.util.List;

import cn.gxl.lander.model.PortalModule;
import cn.gxl.lander.model.PortalStat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PortalOverviewDto {

    private List<PortalModule> modules;

    private List<PortalStat> stats;
}
