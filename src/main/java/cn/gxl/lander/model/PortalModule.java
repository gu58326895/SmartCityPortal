package cn.gxl.lander.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PortalModule {

    private String key;

    private String title;

    private String image;

    private String logo;

    private List<PortalChart> charts;

    private List<PortalSystem> systems;
}
