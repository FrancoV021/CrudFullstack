package com.Crud.backend.Repositories;

import com.Crud.backend.Entities.RegistroGym;
import org.springframework.data.jpa.repository.JpaRepository;
//esta interfaz hereda de JpaRepository, que proporciona métodos CRUD para la entidad RegistroGym
//y el tipo de dato del ID es Long
//JpaRepository es una interfaz de Spring Data JPA que facilita la interacción con la base de datos
//al proporcionar métodos predefinidos para operaciones comunes como guardar, eliminar y buscar entidades
public interface RegistroGymRepo extends JpaRepository<RegistroGym, Long> {
}
