# Update Client Microservice

This microservice allows updating client data in the PostgreSQL database of the **My Pet Host** system.

## 🛠️ Technologies and Frameworks

- **Language:** JavaScript (Node.js)
- **Framework:** Express.js

## 🌐 Architecture Style

- **REST API:** All routes follow the RESTful style for resource management.

## 🏛️ Project Architecture

- **N-Layer Architecture:** Clear separation between routes, controllers, middlewares, configuration, and utilities.
- **MVC (Model-View-Controller):** Separation of models (DB), controllers (business logic), and routes (endpoints).

## 🧩 Design Patterns

- **KISS (Keep It Simple, Stupid):** Simple and easy-to-understand code.
- **DRY (Don't Repeat Yourself):** Reuse of middlewares and logic.
- **SOLID:** Principles applied to ensure separation of responsibilities.

## 🗄️ Database

- **PostgreSQL:** Connected via the `pg` package, using environment variables for configuration.

## 🔒 Security and Middleware

- **CORS:** Globally enabled using the `cors` package to allow requests from other origins.
- **Validation:** Uses `express-validator` to validate and sanitize input data.
- **Error Handling:** Global middleware to consistently capture and respond to errors.
- **JWT:** Currently, JWT authentication is **NOT** used in this microservice.

---

## 📦 Project Structure



```
update-client/
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

## ⚙️ Execution

**local:**
```sh
npm install
npm run dev
```

---

## 🐳 Docker local

```sh
docker build -t update-client .
docker run -p 3002:3002 --env-file .env update-client
```

---

## 🛠️ Endpoints 

- `PUT /api/clients/:id` — update data clients.

**Example  request (PUT):**
```
PUT http://3.214.168.136:8000/api/clients/23

Body:
{
  "name": "Nuevo Nombre",
  "last_name": "Nuevo Apellido",
  "email": "nuevo@email.com",
  "phone": "0999999999"
}
```

**Sucefull response  (200):**
```json
{
  "message": "Client updated successfully",
  "client": {
    "id": 23,
    "name": "Nuevo Nombre",
    "last_name": "Nuevo Apellido",
    "email": "nuevo@email.com",
    "phone": "0999999999"
  }
}
```

| Código | Motivo                        |
| ------ | ----------------------------- |
| 200    | Cliente update                |
| 400    | invalid data                  |
| 404    | Client not found              |
| 500    | internal error service        |

---

## 📚 Notes

- Decoupled architecture, each microservice is independent.
- The n-layer and MVC patterns facilitate maintenance and scalability.
- CORS can be configured according to the origin of your frontend.
- Complies with KISS, DRY, and SOLID principles for clean code.