package cn.gxl.lander.web.controlloer;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cn.gxl.lander.dto.LoginDto;
import cn.gxl.lander.utils.Result;

@RestController
@RequestMapping("/smartcity")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public Result login(@RequestBody LoginDto dto,
                        HttpServletRequest request,
                        HttpServletResponse response) {

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                dto.getUsername(), dto.getPassword());

        Authentication authentication;
        try {
            authentication = authenticationManager.authenticate(token);
        } catch (AuthenticationException e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return Result.fail(401, "用户名或密码错误");
        }

        SecurityContextHolder.getContext().setAuthentication(authentication);
        request.getSession(true).setAttribute(
                HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY,
                SecurityContextHolder.getContext());

        return Result.success();
    }

    @GetMapping("/currentUser")
    public Result currentUser(Authentication authentication) {

        if (authentication == null) {
            return Result.fail(401, "未登录");
        }

        return Result.success(authentication.getName());
    }
}
