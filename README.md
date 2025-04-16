
# Innova System

Sitio web profesional para una empresa de desarrollo de software a medida.

## Tecnologías usadas

- Frontend: React + Bootstrap
- Backend: Node.js + Express
- Base de datos: PostgreSQL

## Cómo correr el proyecto

### Frontend
```bash
cd client
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
cp .env.example .env
# Configura la cadena de conexión en .env
node index.js
```

## Base de datos

Ejecuta esta consulta en PostgreSQL:

```sql
CREATE TABLE contactos (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  correo TEXT NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
