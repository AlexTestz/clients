# Delete Client Microservice

Este microservicio permite eliminar clientes de la base de datos PostgreSQL en el sistema **My Pet Host**.

## 🛠️ Tecnologías y Frameworks

- **Lenguaje:** JavaScript (Node.js)
- **Framework:** Express.js

## 🌐 Estilo de Arquitectura

- **REST API:** Todas las rutas siguen el estilo RESTful para la gestión de recursos.

## 🏛️ Arquitectura del Proyecto

- **Arquitectura en N-Capas:** Separación clara entre rutas, controladores, middlewares, configuración y utilidades.
- **MVC (Modelo-Vista-Controlador):** Separación de modelos (DB), controladores (lógica de negocio) y rutas (endpoints).

## 🧩 Patrones de Diseño

- **KISS (Keep It Simple, Stupid):** Código sencillo y fácil de entender.
- **DRY (Don't Repeat Yourself):** Reutilización de middlewares y lógica.
- **SOLID:** Principios aplicados en la separación de responsabilidades.

## 🗄️ Base de Datos

- **PostgreSQL:** Conexión mediante el paquete `pg` y uso de variables de entorno para la configuración.

## 🔒 Seguridad y Middleware

- **CORS:** Habilitado globalmente usando el paquete `cors` para permitir solicitudes desde otros orígenes.
- **Validación:** Uso de `express-validator` para validar los parámetros de entrada.
- **Manejo de Errores:** Middleware global para capturar y responder errores de manera uniforme.
- **JWT:** Actualmente **NO** se utiliza autenticación JWT en este microservicio.

---

## 📦 Estructura del proyecto

```
delete-client/
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
docker build -t delete-client .
docker run -p 3001:3001 --env-file .env delete-client
```

---

## 🛠️ Endpoints principales

- `DELETE /api/clients/:id` — Elimina un cliente por su ID.

**Ejemplo de request (DELETE):**
```
DELETE http://3.214.168.136:8000/api/clients/23

```

**Respuesta Exitosa (200):**
```json
{
  "message": "Client deleted successfully",
  "client_id": 23
}
```

| Código | Motivo                        |
| ------ | ----------------------------- |
| 200    | Cliente eliminado             |
| 400    | Parámetro inválido            |
| 404    | Cliente no encontrado         |
| 500    | Error interno del servidor    |

---

## 📚 Notas

- Arquitectura desacoplada, cada microservicio es independiente.
- El patrón n-capas y MVC facilitan el mantenimiento y escalabilidad.
- CORS puede configurarse según el origen de tu frontend.
- Cumple con principios KISS, DRY y SOLID para un código limpio y mantenible.