package com.bakami.lamiduf.ws.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.bakami.lamiduf.ws.contrat.AdfError;
import com.bakami.lamiduf.ws.exception.SaisonAlreadyExistException;

@ControllerAdvice
public class AdfControllerAdvice {

	public static final Logger LOG = LoggerFactory
			.getLogger(AdfControllerAdvice.class);

	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ExceptionHandler(IllegalArgumentException.class)
	public  @ResponseBody AdfError   handleIllegalArgumentException(IllegalArgumentException e) {
	     return new AdfError(e.getMessage());		
	}

	@ExceptionHandler(SaisonAlreadyExistException.class)
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	public @ResponseBody AdfError  handleSaisonAlreadyExistException(SaisonAlreadyExistException e) {
	     return new AdfError(e.getMessage());		
	}

}