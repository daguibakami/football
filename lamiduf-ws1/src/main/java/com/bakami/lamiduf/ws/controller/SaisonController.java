package com.bakami.lamiduf.ws.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bakami.lamiduf.ws.contrat.AdfSaison;
import com.bakami.lamiduf.ws.domain.Saison;
import com.bakami.lamiduf.ws.exception.SaisonAlreadyExistException;
import com.bakami.lamiduf.ws.repo.SaisonRepository;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/saison")
public class SaisonController {

	public static final Logger LOG = LoggerFactory
			.getLogger(SaisonController.class);

	@Autowired
	protected SaisonRepository saisonRepository;
	
	@Autowired
	protected ConversionService conversionService;

	@RequestMapping(method = RequestMethod.GET)
	public List<AdfSaison> getSaisons() {
		
		Iterable<Saison> saisons = saisonRepository.findAll();

		List<AdfSaison> adfSaisons = new ArrayList<AdfSaison>();
		for (Saison saison : saisons) {
			adfSaisons.add(conversionService.convert(saison, AdfSaison.class));
		}
		return adfSaisons;
	}
	
	
	@RequestMapping(method = RequestMethod.POST)
	public void addSaison(@RequestBody @Valid AdfSaison adfSaison, BindingResult result)
			throws SaisonAlreadyExistException {

		LOG.info("ajout de la saison " + adfSaison);
		
		if (result.hasErrors()) {
			String errMsg ="arguments invalides : "+result.getObjectName()+"."+result.getFieldError().getField();
			LOG.error(errMsg);
			throw new IllegalArgumentException(errMsg);
		}

		// vérifier que l'on a pas déjà une saison avec le même libellé
		Saison existingSaison = saisonRepository.findByLibelle(adfSaison.getLibelle());
		if (existingSaison != null) {
			String msg = "La saison["+ adfSaison.getLibelle() + "] existe déjà";
			LOG.error(msg);
			throw new SaisonAlreadyExistException(msg);
		}
		
		saisonRepository.save(conversionService
				.convert(adfSaison, Saison.class));
		
	}
	
}
