package com.Crud.backend.Exceptions;

import org.springframework.http.HttpStatus;

public class AppExcep extends RuntimeException{
    private final HttpStatus status;

    public AppExcep(String message, HttpStatus status){
        super(message);
        this.status = status;
    }

    public HttpStatus getStatus() {
        return status;
    }
}
