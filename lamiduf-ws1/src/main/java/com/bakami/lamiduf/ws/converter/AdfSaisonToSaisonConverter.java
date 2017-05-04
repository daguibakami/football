package com.bakami.lamiduf.ws.converter;

import org.springframework.core.convert.converter.Converter;

import com.bakami.lamiduf.ws.contrat.AdfSaison;
import com.bakami.lamiduf.ws.domain.Saison;

public class AdfSaisonToSaisonConverter implements Converter<AdfSaison,Saison>{

	@Override
	public Saison convert(AdfSaison adfSaison) {
		return new Saison(adfSaison.getLibelle());
	}
	

}
