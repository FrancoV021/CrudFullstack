package com.Crud.backend.Service;

import com.Crud.backend.Dtos.RegistroDto;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
// Clase SERVICE - es la clase que contiene la logica de negocio

@Service
public class RegistroService {
    public List<RegistroDto> obtenerRegistros() {
        return Arrays.asList(
                new RegistroDto(1L, "Juan", "Perez", "2023-01-01", 70, "Cardio"),
                new RegistroDto(2L, "Maria", "Gomez", "2023-02-01", 60, "Pesas")
        );
    }
}
