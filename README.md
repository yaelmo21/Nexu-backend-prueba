# Nexu Backend Coding

## Instalaciones necesarias

- Node v16+
- Docker
- yarn

## Para correr localmente se necesita la base de datos

```
 docker compose up -d

```

- El -d significa **detached**

## Configurar las variables de entorno

Remplaza el archivo **.env.template** por **.env**

Considera que las variables **PORT** y **HOST** son opcionales.

```
MONGO_URL=mongodb://localhost:27017/brands_db
```

## Iniciar Base de datos con data de prueba
