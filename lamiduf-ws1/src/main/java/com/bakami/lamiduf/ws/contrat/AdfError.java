package com.bakami.lamiduf.ws.contrat;

public class AdfError {

	private String libelle;

    protected AdfError() {};
    
    
	public AdfError(String libelle) {
		super();
		this.libelle = libelle;
	}


	public String getLibelle() {
		return libelle;
	}

	
	
}
