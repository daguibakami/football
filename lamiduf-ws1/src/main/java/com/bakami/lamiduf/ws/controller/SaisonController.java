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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bakami.lamiduf.ws.contrat.AdfSaison;
import com.bakami.lamiduf.ws.domain.Saison;
import com.bakami.lamiduf.ws.exception.SaisonAlreadyExistException;
import com.bakami.lamiduf.ws.exception.SaisonUnknownException;
import com.bakami.lamiduf.ws.repo.SaisonRepository;

@RestController
@CrossOrigin(origins = "*")
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

		List<Saison> saisons = saisonRepository.findAllByOrderByIdAsc();

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
			String errMsg = "arguments invalides : " + result.getObjectName() + "." + result.getFieldError().getField();
			LOG.error(errMsg);
			throw new IllegalArgumentException(errMsg);
		}

		// vérifier que l'on a pas déjà une saison avec le même libellé
		Saison existingSaison = saisonRepository.findByLibelle(adfSaison.getLibelle());
		if (existingSaison != null) {
			String msg = "La saison[" + adfSaison.getLibelle() + "] existe déjà";
			LOG.error(msg);
			throw new SaisonAlreadyExistException(msg);
		}

		saisonRepository.save(conversionService
				.convert(adfSaison, Saison.class));

	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public AdfSaison updateSaison(@PathVariable("id") long id,
			@RequestBody @Valid AdfSaison adfSaison, BindingResult result)
			throws SaisonAlreadyExistException, SaisonUnknownException {

		LOG.info("mise à jour de la saison " + adfSaison);

		if (result.hasErrors()) {
			String errMsg = "arguments invalides : " + result.getObjectName() + "." + result.getFieldError().getField();
			LOG.error(errMsg);
			throw new IllegalArgumentException(errMsg);
		}

		// vérifier que la saison à modifier existe
		Saison existingSaison = saisonRepository.findById(id);
		if (existingSaison == null) {
			String msg = "La saison[" + adfSaison.getId() + "] n'existe pas";
			LOG.error(msg);
			throw new SaisonUnknownException(msg);
		}

		// vérifier que l'on a pas déjà une saison avec le même libellé
		Saison existingSaisonWithLibelle = saisonRepository.findByLibelle(adfSaison.getLibelle());
		if (existingSaisonWithLibelle != null) {
			String msg = "La saison[" + adfSaison.getLibelle() + "] existe déjà";
			LOG.error(msg);
			throw new SaisonAlreadyExistException(msg);
		}

		existingSaison.setLibelle(adfSaison.getLibelle());
		saisonRepository.save(existingSaison);

		return adfSaison;

	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteSaison(@PathVariable("id") long id)
			throws SaisonAlreadyExistException, SaisonUnknownException {

		LOG.info("suppression de la saison " + id);

		// vérifier que la saison à supprimer existe
		Saison existingSaison = saisonRepository.findById(id);
		if (existingSaison == null) {
			String msg = "La saison[" + id + "] n'existe pas";
			LOG.error(msg);
			throw new SaisonUnknownException(msg);
		}

		saisonRepository.delete(existingSaison);

	}

}
