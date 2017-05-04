package com.bakami.lamiduf.ws.repo;

import org.springframework.data.repository.CrudRepository;

import com.bakami.lamiduf.ws.domain.Saison;

public interface SaisonRepository extends CrudRepository<Saison, Long>{

	Saison findByLibelle(String libelle);
}
