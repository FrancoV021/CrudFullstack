package com.Crud.backend.Dtos;

// clase DTO - es una clase simple que se utiliza para transferir datos entre diferentes capas de una aplicación.
public class RegistroDto {
    private Long id;
    private String nombre;
    private String apellido;
    private String fechaIngreso;
    private Integer peso;
    private String ejercicio;

    public RegistroDto (Long id, String nombre, String apellido, String fechaIngreso, Integer peso, String ejercicio) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaIngreso = fechaIngreso;
        this.peso = peso;
        this.ejercicio = ejercicio;
    }

    public RegistroDto (String nombre, String apellido, String fechaIngreso, Integer peso, String ejercicio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaIngreso = fechaIngreso;
        this.peso = peso;
        this.ejercicio = ejercicio;
    }

    public RegistroDto () {
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getFechaIngreso() {
        return fechaIngreso;
    }
    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public Integer getPeso() {
        return peso;
    }
    public void setPeso(Integer peso) {
        this.peso = peso;
    }

    public String getEjercicio() {
        return ejercicio;
    }
    public void setEjercicio(String ejercicio) {
        this.ejercicio = ejercicio;
    }
}
