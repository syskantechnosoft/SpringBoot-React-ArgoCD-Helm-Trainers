//package com.syskan.trainerservice.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http
//          .cors().and() // enable CORS
//          .csrf().disable()
//          // other security config
//          ;
//        return http.build();
//    }

//@Bean
//public CorsFilter corsFilter() {
//    CorsConfiguration config = new CorsConfiguration();
//    config.addAllowedOrigin("http://localhost:5173");
//    config.addAllowedHeader("*");
//    config.addAllowedMethod("*");
//    config.setAllowCredentials(true);
//
//    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//    source.registerCorsConfiguration("/api/v1/**", config);
//    return new CorsFilter(source);
//}
//}
//
