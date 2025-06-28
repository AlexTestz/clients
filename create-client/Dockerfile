# Usamos una imagen base de Node.js
FROM node:18

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos los archivos de la aplicación
COPY package*.json ./

# Instalamos TODAS las dependencias, incluyendo dev (opcional)
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Exponemos el puerto
EXPOSE 3001

# Ejecutamos el microservicio
CMD ["npm", "start"]
