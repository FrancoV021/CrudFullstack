package com.Crud.backend.Service;

import com.Crud.backend.Dtos.RegistroDto;
import com.Crud.backend.Entities.RegistroGym;
import com.Crud.backend.Mappers.RegistroGymMap;
import com.Crud.backend.Repositories.RegistroGymRepo;
import org.springframework.stereotype.Service;
import java.util.List;
// Clase SERVICE - es la clase que contiene la logica de negocio

@Service
public class RegistroService {

    private final RegistroGymRepo registroGymRepo;
    private final RegistroGymMap registroGymMap;

    public RegistroService(RegistroGymRepo registroGymRepo, RegistroGymMap registroGymMap) {
        this.registroGymRepo = registroGymRepo;
        this.registroGymMap = registroGymMap;
    }

    public List<RegistroDto> obtenerRegistros() {
        return registroGymMap.toRegistroDtos(registroGymRepo.findAll());
    }

    public RegistroDto createRegistroGym(RegistroDto registroDto) {
        RegistroGym registroGym = registroGymMap.toRegistroGym(registroDto);
        RegistroGym createdRegistroGym = registroGymRepo.save(registroGym);

        return registroGymMap.toRegistroDto(createdRegistroGym);
    }
}
