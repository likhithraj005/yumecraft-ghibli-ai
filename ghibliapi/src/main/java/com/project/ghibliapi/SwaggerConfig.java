package com.project.ghibliapi;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.Contact;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("YumeCraft Ghibli AI API")
                        .version("1.0")
                        .description("Backend API for generating Studio Ghibli-style art from images or text")
                        .contact(new Contact()
                                .name("Likhith Raj")
                                .email("likhithraj005@gmail.com")
                                .url("https://github.com/likhithraj005")));
    }
}
