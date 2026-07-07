# 1. Usar una imagen base oficial de Node.js
FROM node:18-alpine

# 2. Crear y definir el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiar los archivos de dependencias
COPY package*.json ./

# 4. Instalar dependencias (si las hubiera)
RUN npm install

# 5. Copiar el resto del código de la aplicación
COPY . .

# 6. Comando para ejecutar la aplicación
CMD [ "npm", "start" ]