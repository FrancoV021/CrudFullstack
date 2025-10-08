package com.Crud.backend.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
// la entidad es la representación de una tabla en la base de datos.
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "registro_gym")
public class RegistroGym {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private String nombre;

    @Column
    private String apellido;

    @Column
    private String fechaIngreso;

    @Column
    private Integer peso;

    @Column
    private String ejercicio;
}
