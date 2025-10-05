package com.Crud.backend.Controller;

import com.Crud.backend.Dtos.RegistroDto;
import com.Crud.backend.Service.RegistroService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
// Clase CONTROLLER - es la encargada de procesar las peticiones del usuario y determinar la acción a seguir para realizar las operaciones CRUD.
@RestController
public class RegistroController {
    @Autowired  // Inyección de dependencias modificado
    private RegistroService registroService;

    @GetMapping("/gym/registros")
    public ResponseEntity<List<RegistroDto>> obtenerRegistros() {
        return ResponseEntity.ok(registroService.obtenerRegistros());
    }
}
