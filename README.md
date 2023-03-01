# Nexu Backend Coding

## Instalaciones necesarias

- Node v16+
- Docker
- yarn

## base de datos local

```
 docker compose up -d

```

El -d significa **detached**

En caso de no utlizar docker, puede usar tu instalación local de mongo, solo coloca el url en las variables de entorno.

## Configurar las variables de entorno

Remplaza el archivo **.env.template** por **.env**

Considera que las variables **PORT** y **HOST** son opcionales.

La variable **HOST_DOMAIN** es el dominio asociado al servidor con el cual podrás hacer pruebas de los enpoints en Swagger

```
MONGO_URL=mongodb://localhost:27017/brands_db
HOST_DOMAIN=
```

## Documentación de Api

**Considera que todas las rutas son endpoints del Api**

El api cuenta con documentación la cual se puede consutar en en la ruta '/docs',
de igual forma el paquete utilzado puede generar un contrato de servicio (yaml),
esto último es un 'TO DO' para el repositorio.

De forma inmediata se puede obtener toda la documentación en la ruta '/docs/json'

## Comandos principales

    - **yarn dev**: Inicializa el servidor de desarrollo
    - **yarn test**: Ejecuta todo los test unitarios
    - **yarn test:watch**: Ejecuta todo los test unitarios escuchando todos los cambios dentro del los archivos .test

## Iniciar Base de datos con data de prueba

**Solo disponible en ambiente de desarrollo**

Realiza una petición **POST** a la ruta '/database', esto removera toda la data actual y insertará los datos de prueba contenido en /database/models.json

## Url Prod

[nexu-backend-prueba-production.up.railway.app](https://nexu-backend-prueba-production.up.railway.app)
