<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorios
2. Ejecutar

```
npm install
```

3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levanta la base de datos

```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar a __.env__

6. Llenar las variables de entorno definidas en el __.env__

7. Ejecura la aplicación en dev:
```
 npm run start:dev
```

8. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack usado
* MongoDB
* Nest