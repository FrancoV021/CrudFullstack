🏋️ GYM REGISTROS (CRUD App)

📝 Descripción del Proyecto

Aplicación full-stack para la gestión de registros de usuarios de un gimnasio (CRUD: Crear, Leer, Actualizar, Borrar). 
CRUD con SpringBoot, React, Hibernate, PostgreSQL y Docker

- Frontend: Desarrollado con React y TypeScript, utilizando Nx.

- Backend: Desarrollado con Java y Spring Boot.

Base de Datos: PostgreSQL, orquestada mediante Docker.

⚙️ Requisitos del Sistema
Para correr este proyecto localmente, debes tener instalado:

Docker Desktop (con Docker Compose).

- Node.js (versión 18+).

- Java JDK (versión 21+). 


🔑 Configuración de Credenciales (Backend)

1.  Navega a la carpeta `/backend/src/main/resources`.
2.  Copia el archivo **`application-example.yml`**.
3.  Renómbralo a **`application.yml`**.
4.  Rellena `yourDBUser`, `yourDBPass` y `yourDBName` con tus credenciales locales de PostgreSQL.

🐳 Inicialización del Entorno (Con Docker)
Para levantar la base de datos, el backend (Java) y el frontend (React) en un ambiente consistente:


Ejecución:

- Abre la terminal en la raíz del proyecto.

- Ejecuta el comando para construir y levantar todos los servicios:

docker-compose up --build

(Esto puede tardar unos minutos la primera vez.)

🌐 Acceso a la Aplicación
Una vez que los contenedores estén levantados:

- Frontend (Web App): Abrir http://localhost:4200

- Backend API: http://localhost:8080/gym/registros (Para verificar que los datos están cargando)

📚 Estructura de Repositorio
./frontend: Código fuente de la aplicación React.

./backend: Código fuente de la aplicación Spring Boot.

./application.yml: Archivo de orquestación principal.

