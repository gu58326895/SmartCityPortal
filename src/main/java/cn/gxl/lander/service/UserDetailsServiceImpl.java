package cn.gxl.lander.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private static final String USERNAME = "portal";

    private static final String PASSWORD = "password";

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        if (!USERNAME.equals(username)) {
            throw new UsernameNotFoundException("用户不存在");
        }

        return User.builder()
                .username(USERNAME)
                .password(new BCryptPasswordEncoder().encode(PASSWORD))
                .roles("USER")
                .build();
    }
}
