# Get Client Microservice

This microservice allows querying client data from the PostgreSQL database of the **My Pet Host** system.

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
- **SOLID:** Principles applied in the separation of responsibilities.

## 🗄️ Database

- **PostgreSQL:** Connection using the `pg` package and environment variables for configuration.

## 🔒 Security and Middleware

- **CORS:** Globally enabled using the `cors` package to allow requests from other origins.
- **Validation:** Uses `express-validator` to validate input parameters.
- **Error Handling:** Global middleware to catch and respond to errors uniformly.
- **JWT:** Currently, JWT authentication is **NOT** used in this microservice.

---

## 📦 Project Structure



```
get-client/
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
docker build -t get-client .
docker run -p 3003:3003 --env-file .env get-client
```

---

## 🛠️ Endpoints 

- `GET /api/clients/:id` — get data by od.

**Example  request (GET):**
```
GET http://localhost:3003/api/clients/23

```

**Respuesta Exitosa (200):**
```json
{
  "id": 23,
  "name": "Juan Pérez",
  "last_name": "García",
  "email": "juan.perez@email.com",
  "phone": "0999999999",
  "created_at": "2025-07-01T04:44:32.347Z"
}
```

| Código | Motivo                        |
| ------ | ----------------------------- |
| 200    | Client not found              |
| 400    | invalid parameter             |
| 404    | Client not found              |
| 500    | Internal error serice        |

---

## 📚 Notes

- Decoupled architecture, each microservice is independent.
- The n-layer and MVC patterns facilitate maintenance and scalability.
- CORS can be configured according to the origin of your frontend.
- Complies with KISS, DRY, and SOLID principles for clean and maintainable code.

---