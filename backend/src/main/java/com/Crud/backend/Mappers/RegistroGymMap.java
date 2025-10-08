package com.Crud.backend.Mappers;

import com.Crud.backend.Dtos.RegistroDto;
import com.Crud.backend.Entities.RegistroGym;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RegistroGymMap {

    RegistroGym toRegistroGym(RegistroDto dto);

    RegistroDto toRegistroDto(RegistroGym registroGym);

    List<RegistroDto> toRegistroDtos(List<RegistroGym> registrosGym);

    @Mapping(target = "id", ignore = true)
    void updateRegistroGym(@MappingTarget RegistroGym registroGym, RegistroDto registroDto);
}
