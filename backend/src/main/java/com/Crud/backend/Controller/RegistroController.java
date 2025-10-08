package com.Crud.backend.Controller;

import com.Crud.backend.Dtos.RegistroDto;
import com.Crud.backend.Service.RegistroService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
// Clase CONTROLLER - es la encargada de procesar las peticiones del usuario y determinar la acción a seguir para realizar las operaciones CRUD.
@RestController
public class RegistroController {

    private final RegistroService registroService;
        //fallo lombock
    public RegistroController(RegistroService registroService) {
        this.registroService = registroService;
    }

    @GetMapping("/gym/registros")
    public ResponseEntity<List<RegistroDto>> obtenerRegistros() {
        return ResponseEntity.ok(registroService.obtenerRegistros());
    }

    @PostMapping("/gym/registros")
    public ResponseEntity<RegistroDto> createRegistroGym (@RequestBody RegistroDto registroDto) {
        RegistroDto createdRegistroGym = registroService.createRegistroGym(registroDto);
        return ResponseEntity.created(URI.create("/gym/registros/" + createdRegistroGym.getId()))
                .body(createdRegistroGym);
    }

    @DeleteMapping("/gym/registros/{id}")
    public ResponseEntity<RegistroDto> deleteRegistroGym(@PathVariable Long id) {
        return ResponseEntity.ok(registroService.deleteRegistroGym(id));
    }
}
