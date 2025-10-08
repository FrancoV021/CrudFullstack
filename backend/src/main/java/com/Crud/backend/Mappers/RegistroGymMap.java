package com.Crud.backend.Mappers;

import com.Crud.backend.Dtos.RegistroDto;
import com.Crud.backend.Entities.RegistroGym;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;
//esta interfaz se utiliza para definir las conversiones entre las entidades de la base de datos y los objetos DTO (Data Transfer Object) que se utilizan para transferir datos entre diferentes capas de la aplicación.
// MapStruct es una biblioteca que facilita la implementación de estas conversiones mediante la generación automática de
@Mapper(componentModel = "spring")
public interface RegistroGymMap {

    RegistroGym toRegistroGym(RegistroDto dto);

    RegistroDto toRegistroDto(RegistroGym registroGym);

    List<RegistroDto> toRegistroDtos(List<RegistroGym> registrosGym);

    @Mapping(target = "id", ignore = true)
    void updateRegistroGym(@MappingTarget RegistroGym registroGym, RegistroDto registroDto);
}
