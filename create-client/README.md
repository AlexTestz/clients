# Create Client Microservice

This microservice allows the creation of clients in a PostgreSQL database.

## 🛠️ Technologies and Frameworks

- **Language:** JavaScript (Node.js)
- **Framework:** Express.js

## 🌐 Architecture Style

- **REST API:** All routes follow the RESTful style for resource management.

## 🏛️ Project Architecture

- **N-Layer Architecture:** Clear separation between routes, controllers, middlewares, configuration, and utilities.
- **MVC (Model-View-Controller):** Although there are no views, the separation between models (DB), controllers (business logic), and routes (endpoints) is followed.

## 🧩 Design Patterns

- **KISS (Keep It Simple, Stupid):** Simple and easy-to-understand code.
- **DRY (Don't Repeat Yourself):** Reuse of middlewares and logic.
- **SOLID:** Principles applied in responsibility separation (e.g., middlewares for validation and error handling).

## 🗄️ Database

- **PostgreSQL:** Connection via the `pg` package and configuration using environment variables.

## 🔒 Security and Middleware

- **CORS:** Globally enabled using the `cors` package to allow requests from other origins.
- **Validation:** Uses `express-validator` to validate and sanitize input data.
- **Error Handling:** Global middleware to catch and respond to errors uniformly.
- **JWT:** Currently, JWT authentication is **NOT** used in this microservice.

---

## 📦 Project Structure



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

## ⚙️ Execution

**local:**
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

## 🛠️ Endpoints 

- `POST /api/clients` — Create  client.
- `GET /api/clients/:id` — get client by id

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
| 201    | Create client                 |
| 400    | invalid data                  |
| 404    | Client not found              |
| 500    | Internal server error         |

---

## 📚 Notes

- Decoupled architecture, each microservice is independent.
- The n-layer and MVC patterns facilitate maintenance and scalability.
- CORS can be configured according to the origin of your frontend.
- Complies with KISS, DRY, and SOLID principles for clean code and