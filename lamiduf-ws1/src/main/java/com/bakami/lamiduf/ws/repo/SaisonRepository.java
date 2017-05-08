package com.bakami.lamiduf.ws.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.bakami.lamiduf.ws.domain.Saison;

public interface SaisonRepository extends CrudRepository<Saison, Long>{

	Saison findByLibelle(String libelle);
	
	Saison findById(Long id);
	
	List<Saison> findAllByOrderByIdAsc();
}
