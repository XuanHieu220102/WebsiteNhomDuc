package DATN.ndhoanggia.configuration;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class configure {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
