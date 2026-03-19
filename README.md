# Backend - TicoAutos

Este proyecto corresponde al backend de **TicoAutos**, una plataforma web para publicación y consulta de vehículos.  
El sistema permite autenticación de usuarios, gestión de vehículos y un módulo de preguntas y respuestas entre usuarios interesados y propietarios.

---

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Multer
- dotenv
- cors
- body-parser

---

## Funcionalidades principales

### Autenticación
- Inicio de sesión con generación de token JWT
- Validación de rutas protegidas mediante token

### Usuarios
- Registro de usuarios
- Consulta de datos del usuario autenticado

### Vehículos
- Publicar vehículos
- Consultar todos los vehículos
- Consultar vehículo por id
- Filtrar vehículos
- Editar vehículo
- Eliminar vehículo
- Marcar vehículo como vendido
- Subida de imágenes con Multer

### Preguntas y respuestas
- Un usuario autenticado puede hacer preguntas sobre un vehículo
- El propietario del vehículo puede responder preguntas
- El sistema registra:
  - usuario que pregunta
  - usuario que responde
  - fecha de pregunta
  - fecha de respuesta
- Las conversaciones son privadas:
  - el propietario ve todas las conversaciones de su vehículo
  - el usuario interesado solo ve sus propias preguntas y respuestas
- Un usuario no puede volver a preguntar por el mismo vehículo hasta que su pregunta anterior haya sido respondida

---
## Instalación

1. Clonar el repositorio  
2. Abrir la carpeta del proyecto en la terminal  
3. Instalar dependencias: npm install

## Variables de entorno

Crear un archivo .env con valores como estos:
- PORT=3000
- DATABASE_URL=tu_cadena_de_conexion_mongodb
- SECRET_KEY=tu_clave_secreta_jwt

## Ejecución del proyecto

Para iniciar el servidor:
npm start

## Rutas principales

### Autenticación
- POST /auth/token

### Usuarios
- GET /api/auth/user

### Vehículos
- POST /api/vehicle
- GET /api/vehicle
- PUT /api/vehicle
- DELETE /api/vehicle

### Preguntas
- POST /api/question
- GET /api/question

### Respuestas
- POST /api/answer
- GET /api/answer

## Subida de imágenes
Las imágenes de vehículos se almacenan en:
/uploads/images/

Y se exponen de forma pública mediante:
/uploads

Por eso las imágenes pueden ser accedidas desde una URL como:
http://localhost:3000/uploads/images/nombre-imagen.jpg

## Reglas del sistema de preguntas y respuestas
- Solo usuarios autenticados pueden preguntar
- Solo el propietario del vehículo puede responder
- No se permite modificar preguntas una vez enviadas
- Un usuario solo puede tener una pregunta pendiente por vehículo
- El usuario interesado solo ve sus propias conversaciones
- El propietario del vehículo ve todas las conversaciones relacionadas con su publicación

---

## Autor
Proyecto desarrollado como parte del curso de Web II.
- Dylan Jiménez Alfaro
- Emily Zúñiga Solano
