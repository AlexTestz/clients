new# Clients Domain Microservices

Este dominio agrupa los microservicios responsables de la gestión de clientes en el sistema **My Pet Host**. Cada microservicio sigue principios de arquitectura desacoplada, facilitando la escalabilidad, el mantenimiento y la independencia de cada funcionalidad.

---

## 🛠️ Tecnologías y Frameworks

- **Lenguaje:** JavaScript (Node.js)
- **Framework:** Express.js
- **Base de datos:** PostgreSQL
- **Validación:** express-validator
- **Manejo de CORS:** Paquete cors
- **Docker:** Para despliegue y portabilidad

---

## 📡 Estilo de arquitectura

- **Tipo de API:** RESTful
- **Estilo arquitectónico:** Microservicios
- **Comunicación:** HTTP

---

## 🏗️ Microservicios del dominio

- **create-client:** Creacion de clientes.
- **get-client:** Consulta de clientes por ID.
- **update-client:** Actualización de datos de clientes.
- **delete-client:** Eliminación de clientes.

Cada microservicio implementa su propia lógica, rutas, controladores, modelos y middlewares, siguiendo una arquitectura en n-capas y el patrón MVC.

---

## 🧩 Patrones de diseño aplicados

- **KISS:** Código simple y directo, fácil de mantener.
- **DRY:** Reutilización de lógica y utilidades comunes.
- **SOLID:** Separación de responsabilidades en rutas, controladores y middlewares.

---

## 🔐 Seguridad y Middleware

- **CORS:** Configurado globalmente en cada microservicio.
- **Validación:** express-validator para sanitizar y validar datos de entrada.
- **JWT:** Actualmente **NO** se utiliza autenticación JWT en estos microservicios.

---

## 📦 Estructura del dominio

```
clients/
├── create-client/
│   └── README.md
├── get-client/
│   └── README.md
├── update-client/
│   └── README.md
├── delete-client/
│   └── README.md
└── README.md   ← (este archivo)
```

---

## ⚙️ Ejecución general

Cada microservicio es independiente y puede ejecutarse de forma local o en contenedores Docker. Consulta el README.md de cada microservicio para instrucciones específicas.

---
## 🐳 Despliegue con Docker Compose

Puedes levantar todos los microservicios del dominio **clients** usando Docker Compose. Asegúrate de tener un archivo `docker-compose.yml` en la raíz del dominio con la configuración de cada microservicio y la base de datos PostgreSQL.

**Ejemplo de comandos:**

```sh
# Construir y levantar todos los servicios en segundo plano
docker compose up --build -d

# Ver logs de todos los servicios
docker compose logs -f

# Detener todos los servicios
docker compose down
```

> Consulta el archivo `docker-compose.yml` para detalles de puertos, variables de entorno y dependencias

## 📚 Notas

- Cada microservicio es autónomo y desacoplado.
- El patrón n-capas y MVC facilitan el mantenimiento y escalabilidad.
- CORS puede configurarse según el origen de tu frontend.
- Cumple con principios KISS, DRY y SOLID para un código limpio y mantenible.

---