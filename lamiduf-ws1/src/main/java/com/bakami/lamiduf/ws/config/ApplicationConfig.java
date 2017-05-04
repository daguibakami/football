package com.bakami.lamiduf.ws.config;

import java.util.HashSet;
import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ConversionServiceFactoryBean;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.converter.Converter;

import com.bakami.lamiduf.ws.converter.AdfSaisonToSaisonConverter;
import com.bakami.lamiduf.ws.converter.SaisonToAdfSaisonConverter;

@Configuration
public class ApplicationConfig {
	
  	@Bean
	public ConversionService conversionService() {
		ConversionServiceFactoryBean bean = new ConversionServiceFactoryBean();
		bean.setConverters(getConverters());
		bean.afterPropertiesSet();
		return bean.getObject();
	}

	private Set<Converter> getConverters() {
		Set<Converter> converters = new HashSet<Converter>();

		converters.add(new AdfSaisonToSaisonConverter());
		converters.add(new SaisonToAdfSaisonConverter());

		return converters;
	}


}
