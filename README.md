# Clients Domain Microservices

This domain groups the microservices responsible for client management in the **My Pet Host** system. Each microservice follows decoupled architecture principles, facilitating scalability, maintainability, and functional independence.

---

## 🛠️ Technologies and Frameworks

- **Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Validation:** express-validator
- **CORS Handling:** cors package
- **Docker:** For deployment and portability

---

## 📡 Architecture Style

- **API Type:** RESTful
- **Architecture Style:** Microservices
- **Communication:** HTTP

---

## 🏗️ Domain Microservices

- **create-client:** Client creation.
- **get-client:** Query client by ID.
- **update-client:** Update client data.
- **delete-client:** Delete client.

Each microservice implements its own logic, routes, controllers, models, and middlewares, following an N-layer architecture and the MVC pattern.

---

## 🧩 Applied Design Patterns

- **KISS:** Simple, straightforward code that is easy to maintain.
- **DRY:** Reuse of logic and shared utilities.
- **SOLID:** Responsibility separation across routes, controllers, and middlewares.

---

## 🔐 Security and Middleware

- **CORS:** Configured globally in each microservice.
- **Validation:** Uses express-validator to sanitize and validate input data.
- **JWT:** Currently, JWT authentication is **NOT** used in these microservices.

---

## 📦 Domain Structure



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

## ⚙️ Execution 

Each microservice is independent and can be run locally or inside Docker containers. Refer to each microservice's `README.md` for specific instructions.

---
## 🐳 Deployment with Docker Compose

You can spin up all microservices under the **clients** domain using Docker Compose. Make sure you have a `docker-compose.yml` file at the root of the domain with the configuration for each microservice and the PostgreSQL database.

**Example commands:**

```sh
# Build and start all services in the background
docker compose up --build -d

# View logs from all services
docker compose logs -f

# Stop all services
docker compose down

> Check the `docker-compose.yml` file for details on ports, environment variables, and dependencies

## 📚 Notes

- Each microservice is autonomous and decoupled.
- The n-layer and MVC patterns facilitate maintenance and scalability.
- CORS can be configured according to the origin of your frontend.
- Complies with KISS, DRY, and SOLID principles for clean and maintainable code.

---