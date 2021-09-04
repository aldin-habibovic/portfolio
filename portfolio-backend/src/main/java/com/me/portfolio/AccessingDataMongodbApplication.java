package com.me.portfolio;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(servers = { @Server(url = "http://localhost:8080", description = "Local Server URL"),
        @Server(url = "https://portfolio-backend-ez6g75uofq-uc.a.run.app", description = "PROD Server URL") }, info = @Info(title = "Portfolio API", version = "2.0", description = "Profile Information"))
@SpringBootApplication
public class AccessingDataMongodbApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(AccessingDataMongodbApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }

}
