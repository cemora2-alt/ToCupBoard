# ToCupBoard

Sigue estos pasos para configurar un entorno de desarrollo local.

### Prerrequisitos

- Docker y Docker Compose
- Git

### Instrucciones de Configuración

1.  **Clona el repositorio:**
    `git clone https://github.com/DigitalNAO/tocupboard-project.git`
    `cd tocupboard-project`

2.  **Configura las variables de entorno:**
    Copia `.env.example` a `.env` y completa los valores requeridos (credenciales de la base de datos, claves de API para entornos sandbox).

3.  **Construye y ejecuta los contenedores de Docker:**
    `docker-compose up -d`

4.  **Accede al sitio local:**
    El sitio estará disponible en `http://localhost:8080`.
