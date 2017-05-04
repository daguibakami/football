package com.bakami.lamiduf.ws.converter;

import org.springframework.core.convert.converter.Converter;

import com.bakami.lamiduf.ws.contrat.AdfSaison;
import com.bakami.lamiduf.ws.domain.Saison;

public class SaisonToAdfSaisonConverter implements Converter<Saison, AdfSaison>{

	@Override
	public AdfSaison convert(Saison saison) {
		return new AdfSaison(saison.getLibelle());
	}
	

}
