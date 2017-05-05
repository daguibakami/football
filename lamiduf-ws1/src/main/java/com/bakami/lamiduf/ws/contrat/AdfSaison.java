package com.bakami.lamiduf.ws.contrat;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;

public class AdfSaison {

    private Long id;

    @NotNull
	@NotEmpty
	private String libelle;

    protected AdfSaison() {};
    
    
	public AdfSaison(String libelle) {
		super();
		this.libelle = libelle;
	}


	public String getLibelle() {
		return libelle;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	@Override
	public String toString() {
		return "AdfSaison [id=" + id + ", libelle=" + libelle + "]";
	}


	
	
}
