package DATN.ndhoanggia.security;

import DATN.ndhoanggia.configuration.JwtConfig;
import DATN.ndhoanggia.entity.CustomUserDetail;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

@Component
@Slf4j
@RequiredArgsConstructor
public class JwtTokenProvider {
    private final JwtConfig jwtConfig;

    public String generateToken(CustomUserDetail userDetail) {
        System.out.println(userDetail.getAccount().getId());
        return Jwts.builder().setId(UUID.randomUUID().toString())
                .setSubject(String.valueOf(userDetail.getAccount().getId()))
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + jwtConfig.getJWT_EXPIRATION()))
                .signWith(SignatureAlgorithm.HS512, jwtConfig.getJWT_SECRET())
                .compact();
    }

    public Integer getAccountIdFromJwt(String jwt) {
        Claims claims = Jwts.parser()
                .setSigningKey(jwtConfig.getJWT_SECRET())
                .parseClaimsJws(jwt)
                .getBody();
        return Integer.parseInt(claims.getSubject());
    }

    public boolean validateToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtConfig.getJWT_SECRET()).parseClaimsJws(authToken);
            return true;
        }catch (MalformedJwtException ex){
            log.error("Invalid JWT token");
        }catch (ExpiredJwtException ex){
            log.error("Expired JWT token");
        }catch (UnsupportedJwtException ex) {
            log.error("Unsupport JWT token");
        }catch (IllegalArgumentException ex){
            log.error("JWT claims string is empty");
        }
        return false;
    }
}
