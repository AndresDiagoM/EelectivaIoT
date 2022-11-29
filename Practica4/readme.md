
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
        /Documents/Servidores/Practica2$ deta deploy practica_02/

 10. Para activar los logs de la aplicación ejecutamos en la terminal:

         cd practica_02
         deta visor enable

 11. Para obtener la url del servicio visite el panel de control de Deta en la sección de micros. https://web.deta.sh/micros. Ahí encontrará en micros una opción con el nombre del proyecto, al abrirlo encontrará la url del servicio.
   
        https://l3psn9.deta.dev/

![Alt text](./img/deta2.png "deta2")

Para las pruebas hacer: 

        cd practica_02
        npm run start:dev

Luego, obtener una key y usar auth con ella:

        curl -X POST http://192.168.18.156:3000/auth/login -d '{"username": "john", "password": "changeme" }' -H "Content-Type: application/json"

        KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTY2OTY4NjQ5NywiZXhwIjoxNjY5NjkwMDk3fQ.aBsoJ_7y14XzJmgyk3jvGF0Mti3jcYw-1iSfY5mcWpI

Se hace la prueba con GET, usando POSTMAN, y Autenticación:
![Alt text](./img/pruebas_get.png "deta2")

Se prueba ingresando al link https://l3psn9.deta.dev/ y se obtiene la siguiente respuesta:

![Alt text](./img/pruebas_get2.png "deta2")


## 2. Conectado a una base de datos

 6. Instalar las dependencias de TypeORM y MongoDB ejecutando en la terminal:

        npm install --save @nestjs/typeorm typeorm mongodb

 7. En el panel de mongo atlas, en la sección Connect seleccione la opción Connect your application. Copie la url de conexión y reemplace el valor de la variable MONGO_URL en el archivo ~/Documents/Servidores/practica_02/src/app.module.ts por la url de conexión.

![Alt text](./img/mongo1.png "mongo1")

 8. Modifique el archivo src/app.module.ts para que quede de la siguiente manera:

        import { TypeOrmModule } from '@nestjs/typeorm';
        ...

        @Module({
        imports: [
                AuthModule,
                UsersModule,
                TypeOrmModule.forRoot({
                        type: 'mongodb',
                        url: 'mongodb+srv://<usuario>:<password>...',
                }),
        ],
        controllers: [PlayerControllerImpl],
        providers: [
                {
                        provide: 'PlayerService',
                        useClass: PlayerServiceImpl,
                },
        ],
        })
        export class AppModule {}

 9. Cree un archivo para modelar la entidad, eso queda en la carpeta src/<nombre_entidad>/domain/entities y debe llamarse <nombre_entidad>.entity.ts, en este caso player.entity.ts.

 10. Agrege la entidad en la configuración del módulo, para habilitar el repositorio 


 11. Luego adicione en el constructor del servicio, para el ejemplo src/player/domain/services/player.service.ts

 12. Idealmente en esta etapa se implementan puertos (ports), que se encargan a adaptar los datos de aplicación (models) a los datos del repositorio (entities). Para simplificar el ejemplo se omitirá esta etapa. Entonces se reemplazará la implementación del modelo Player por la entidad PlayerEntity en el servicio PlayerServiceImpl. De igual manera, como los datos toman tiempo para ser capturados del repositorio, se emplean Promesas. El cambio de Player a PlayerEntity se aplica en los servicios y controladores.

 13. Ahora es necesario modificar los métodos para que utilicen el repositorio, para el ejemplo src/player/domain/services/player.service.ts
 14. Finalmente, si se ejecuta el proyecto localmente con ``npm run start:dev``, ejecute un POST para crear un nuevo elemento. Si la respuesta es satisfactoria y si al ejecutar el GET se recupera el elemento creado, entonces la conexión con la base de datos fue exitosa.

   Para esto, volver hacer deploy en Deta, y probar con POSTMAN, y Autenticación:
![Alt text](./img/pruebas_post.png "deta2")
