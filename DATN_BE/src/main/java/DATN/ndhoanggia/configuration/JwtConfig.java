package DATN.ndhoanggia.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:application.properties")
public class JwtConfig {
    @Value("${jwt.secret}")
    private String JWT_SECRET;

    @Value("${jwt.expiration}")
    private long JWT_EXPIRATION;

    public String getJWT_SECRET() {
        return JWT_SECRET;
    }

    public long getJWT_EXPIRATION() {
        return JWT_EXPIRATION;
    }
}
