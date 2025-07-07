# Delete Client Microservice

This microservice allows the deletion of clients from the PostgreSQL database in the **My Pet Host** system.

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

## ⚙️ Execution

**local:**
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

## 🛠️ Endpoints 
un cliente por su ID.

**Example  request (DELETE):**
```
DELETE http://3.214.168.136:8000/api/clients/23

```

**Succesfully response (200):**
```json
{
  "message": "Client deleted successfully",
  "client_id": 23
}
```

| Código | Motivo                        |
| ------ | ----------------------------- |
| 200    | Delete client                 |
| 400    | Invalid parameter             |
| 404    | Client not found              |
| 500    | Internal error service        |

---

## 📚 Notes

- Decoupled architecture, each microservice is independent.
- The n-layer and MVC patterns facilitate maintenance and scalability.
- CORS can be configured according to the origin of your frontend.
- Complies with KISS, DRY, and SOLID principles for clean and maintainable code.