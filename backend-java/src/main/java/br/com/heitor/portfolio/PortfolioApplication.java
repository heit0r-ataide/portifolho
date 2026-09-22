package br.com.heitor.portfolio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@SpringBootApplication
public class PortfolioApplication {
  public static void main(String[] args) {
    SpringApplication.run(PortfolioApplication.class, args);
  }

  @RestController
  static class ProfileController {
    @GetMapping("/api/profile")
    Map<String, String> profile() {
      return Map.of(
        "name", "Heitor Gaddo Ataíde",
        "role", "Software Engineer in progress",
        "education", "Engenharia de Software · UniDomBosco-RJ · conclusão em dezembro de 2029"
      );
    }
  }
}
