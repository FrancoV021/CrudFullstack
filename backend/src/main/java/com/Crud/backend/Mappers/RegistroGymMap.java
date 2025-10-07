package com.Crud.backend.Mappers;

import com.Crud.backend.Dtos.RegistroDto;
import com.Crud.backend.Entities.RegistroGym;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RegistroGymMap {

    RegistroGym toRegistroGym(RegistroDto dto);

    RegistroDto toRegistroDto(RegistroGym registroGym);

    List<RegistroDto> toRegistroDtos(List<RegistroGym> registrosGym);
}
