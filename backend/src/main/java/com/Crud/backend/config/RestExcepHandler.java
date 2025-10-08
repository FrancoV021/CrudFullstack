package com.Crud.backend.config;

import com.Crud.backend.Dtos.ErrorDto;
import com.Crud.backend.Exceptions.AppExcep;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class RestExcepHandler {

    @ExceptionHandler(value = {AppExcep.class})
    @ResponseBody
    public ResponseEntity<ErrorDto> handleAppExcep(AppExcep ex) {
        return ResponseEntity.status(ex.getStatus())
                .body(new ErrorDto(ex.getMessage()));
    }
}
