package cn.gxl.lander.securityconfig;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.stereotype.Component;

import cn.gxl.lander.utils.ObjectMapper2;
import cn.gxl.lander.utils.Result;

@Component
public class LogoutSuccessHandlerImpl implements LogoutSuccessHandler {

    @Override
    public void onLogoutSuccess(HttpServletRequest request,
                                HttpServletResponse response,
                                Authentication authentication) throws IOException {

        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().write(ObjectMapper2.writeAsString(Result.success()));
    }
}
