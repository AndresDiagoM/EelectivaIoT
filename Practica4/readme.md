
# PRÁCTICA 4

#### NOMBRE: Andres Felipe Diago Matta
#### Fecha: 28-nov-22

## Desarrollo de la práctica
Desplegando en la nube

## Condiciones de entrega
1. En moodle, entregar un enlace a la aplicación desplegada en la nube.
2. En el repositorio de la práctica, incluir un archivo README.md con la documentación de los endpoints de la API para su validación.

## Table of contents
1. Desplegar una aplicación en la nube.
2. Agregar una base de datos a la aplicación.


## 1. Desplegar una aplicación en la nube
hosting gratuito de Deta

 1. Descargar deta ejecutando en la terminal: 

        curl -fsSL https://get.deta.dev/cli.sh | sh

 2. Agregando la variable de entorno:

        echo "export PATH=~/.deta/bin:$PATH" >> ~/.bashrc

        source ~/.bashrc

 3. Iniciar sesión en Deta ejecutando en la terminal:

        deta login

 4. Crear un punto de entrada de la aplicación. El archivo src/index.ts.

        import { NestFactory } from '@nestjs/core';
        import { ExpressAdapter } from '@nestjs/platform-express';
        import { AppModule } from './app.module';

        const createNestServer = async (expressInstance) => {
        const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressInstance),
        );

        return app.init();
        };

        export default createNestServer;

 5. En la raíz del proyecto crear un nuevo archivo index.js con el siguiente contenido:

        const express = require('express');
        const createServer = require('./dist/index').default;

        const app = express();
        let nest;

        app.use(async (req, res) => {
        if (!nest) {
        nest = express();
        await createServer(nest);
        }
        return nest(req, res);
        });

        module.exports = app;


 6. Antes de publicar debemos compilar el proyecto. Para ello ejecutamos en la terminal:

        cd ~/Documents/Servidores/Practica2/practica_02
        npm run build

 7. Publicar la aplicación ejecutando en la terminal:

        cd ..
        deta new --node practica_02

    Si todo es correcto en la terminal tendrá la siguiente salida:

![Alt text](./img/deta.png "deta")

Successfully created a new micro

        {
        "name": "practica_02",
        "id": "9b8910de-b42a-46d9-b82c-82232ca9f620",
        "project": "e0fqdjzh",
        "runtime": "nodejs14.x",
        "endpoint": "https://l3psn9.deta.dev",

        "region": "sa-east-1",
        "visor": "disabled",
        "http_auth": "disabled"
        }

 8. Para actualizar la aplicación ejecutamos en la terminal:

        deta update <[flag]>

 9. Para desplegar la aplicación ejecutamos en la terminal:

        deta deploy <nombre_proyecto>

 10. Para activar los logs de la aplicación ejecutamos en la terminal:

         cd practica_02
         deta visor enable

 11. Para obtener la url del servicio visite el panel de control de Deta en la sección de micros. https://web.deta.sh/micros. Ahí encontrará en micros una opción con el nombre del proyecto, al abrirlo encontrará la url del servicio.
   
        https://l3psn9.deta.dev/

![Alt text](./img/deta2.png "deta2")

