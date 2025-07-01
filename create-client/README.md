# Create Client Microservice

Este microservicio permite la creación de clientes en una base de datos PostgreSQL.

## 🛠️ Tecnologías y Frameworks

- **Lenguaje:** JavaScript (Node.js)
- **Framework:** Express.js

## 🌐 Estilo de Arquitectura

- **REST API:** Todas las rutas siguen el estilo RESTful para la gestión de recursos.

## 🏛️ Arquitectura del Proyecto

- **Arquitectura en N-Capas:** Separación clara entre rutas, controladores, middlewares, configuración y utilidades.
- **MVC (Modelo-Vista-Controlador):** Aunque no hay vistas, se sigue la separación de modelos (DB), controladores (lógica de negocio) y rutas (endpoints).

## 🧩 Patrones de Diseño

- **KISS (Keep It Simple, Stupid):** Código sencillo y fácil de entender.
- **DRY (Don't Repeat Yourself):** Reutilización de middlewares y lógica.
- **SOLID:** Principios aplicados en la separación de responsabilidades (por ejemplo, middlewares para validación y manejo de errores).

## 🗄️ Base de Datos

- **PostgreSQL:** Conexión mediante el paquete `pg` y uso de variables de entorno para la configuración.

## 🔒 Seguridad y Middleware

- **CORS:** Habilitado globalmente usando el paquete `cors` para permitir solicitudes desde otros orígenes.
- **Validación:** Uso de `express-validator` para validar y sanear los datos de entrada.
- **Manejo de Errores:** Middleware global para capturar y responder errores de manera uniforme.
- **JWT:** Actualmente **NO** se utiliza autenticación JWT en este microservicio.

---

## 📦 Estructura del proyecto

```
create-client/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middlewares/
│   └── config/
├── Dockerfile
├── .env
└── README.md
```

---

## ⚙️ Ejecución

**Modo local:**
```sh
npm install
npm run dev
```

---

## 🐳 Docker local

```sh
docker build -t create-client .
docker run -p 3000:3000 --env-file .env create-client
```

---

## 🛠️ Endpoints principales

- `POST /api/clients` — Crea un nuevo cliente.
- `GET /api/clients/:id` — Obtiene un cliente por su ID.

POST http://3.214.168.136:8000/api/clients/
HEADERS Content-Type        application/json

GET http://3.214.168.136:8000/api/clients/23


**Ejemplo de request (POST):**
```json
{
  "name": "Alexxx",
  "last_name": "Morales",
  "email": "alexxxx@mail.com",
  "phone": "0999999999"
}
```

**Respuesta Exitosa (201):**
```json
{
    "message": "Client created and saved to database ✅",
    "client": {
        "id": 23,
        "name": "Alexxx",
        "last_name": "Morales",
        "email": "alexxxx@mail.com",
        "phone": "0999999999",
        "created_at": "2025-07-01T04:44:32.347Z"
    }
}
```

| Código | Motivo                        |
| ------ | ----------------------------- |
| 201    | Cliente creado                |
| 400    | Datos inválidos               |
| 404    | Cliente no encontrado         |
| 500    | Error interno del servidor    |

---

## 📚 Notas

- Arquitectura desacoplada, cada microservicio es independiente.
- El patrón n-capas y MVC facilitan el mantenimiento y escalabilidad.
- CORS puede configurarse según el origen de tu frontend.
- Cumple con principios KISS, DRY y SOLID para un código limpio y