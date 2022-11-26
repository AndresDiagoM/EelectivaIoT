
# PRÁCTICA 2

#### NOMBRE: Andres Felipe Diago Matta
#### Fecha: 27-nov-22

## Desarrollo de la práctica
Creando un servidor REST

## Table of contents
1. Instalar servidor NodeJS y NestJS.
2. Implementar un servidor web que exponga un recurso REST.
3. Publicar en GitHub el código fuente del servidor.
4. Identificar los verbos Http y su uso para un caso de ejemplo.


## 1. Instalar servidor NodeJS y NestJS:
Para instalar NestJS, primero debemos instalar NodeJS. Para ello, abrimos una terminal y ejecutamos el siguiente comando:

* Instalar NodeJS y NestJS:
    ```bash
    sudo apt update && sudo apt install nodejs -y
    sudo apt install npm -y

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable

    sudo npm install -g @nestjs/cli
    ```

    Revisar las versiones instaladas
    ```bash
    node -v
    npm -v
    ```
    Creando un espacio para los recursos globales en nodejs:
    ```bash
        cd
        mkdir ~/.npm-global
        npm config set prefix '~/.npm-global'
        echo "export PATH=~/.npm-global/bin:$PATH" >> ~/.profile
        source ~/.profile
    ```

    Instalando NestJS:
    ```bash
        npm i -g @nestjs/cli
        source ~/.profile
    ```


## 1.2. Ejecutando el ejemplo Hello World:
NestJS al tratarse de un framework facilita la creación rápida de un servicio.

1. Para iniciar seleccione o cree una carpeta donde se alojará el proyecto, por ejemplo:
    ```bash
    cd ~/Documents
    mkdir Servidores
    cd Servidores
    ```	

2. Crear un proyecto NestJS ejecutando el comando nest new, para el nombre del proyecto no usar espacios ni caracteres especiales:
    ```bash
    -> nest new <nombre-proyecto>
    nest new practica_02
    ```
    La terminal preguntará si se desea usar yarn o npm, se recomienda usar npm.

3. Es necesario identificar la dirección IP de la máquina, para esto se puede ejecutar el comando:

    ```bash
    hostname -I
    ```
    En la salida del comando se puede observar la dirección IP de la máquina, en este caso es 192.168.18.143 

4. Node utiliza el archivo package.json para definir los scripts que se ejecutan con el comando npm run o yarn run. Para ejecutar el ejemplo Hello World, se debe montar la carpeta y ejecutar el comando:
    ```bash
    cd practica_02
    npm run start:dev
    ```
    El comando anterior ejecuta el script start:dev definido en el archivo package.json, el cual ejecuta el comando nest start --watch, el cual monta la carpeta y ejecuta el servidor en modo desarrollo.

    Para verificar los scripts disponibles, se puede ejecutar el comando:
    ```bash
    cat package.json
    ```
    Para detener la ejecución del servidor, presione Ctrl + C.

5. Con lo anterior el servidor nos indica que está listo para recibir peticiones con el metodo GET en la ruta raíz. Por defecto el servidor escucha en el puerto 3000, para verificar esto se puede ejecutar el comando en otra terminal:

    ```bash
    npm run start:dev
    netstat -tulpn | grep node
    ```
    La salida del comando anterior es:
    ```bash
    tcp6       0      0 :::3000                 :::*                    LISTEN      7448/node 
    ```
    Luego ya se puede probar el servidor con el comando en otra terminal:
    ```bash
    curl http://localhost:3000
    ```
    La terminal responderá con la siguiente información:
    ```bash
     Hello World!
    ```

    Así mismo en un navegador web en la máquina host se puede ingresar a la dirección `http://{{*direccion IP de la máquina virtual*}}:3000` y se mostrará la misma información.
    ```bash	
    http://192.168.18.143:3000
    ```

## 1.3. Publicando el código en GitHub
En la máquina virtual, se debe ingresar a la carpeta del proyecto y ejecutar los siguientes comandos:
* Montar carpeta del proyecto:
    ```bash
    cd ~/Documents/Servidores/practica_02
    ```
* Inicializar repositorio git:
    ```bash
    git remote add origin <url_del_repositorio>
    git remote add origin https://github.com/AndresDiagoM/ElectivaIoT.git
    ```

* Configurar usuario de Git::
    ```bash
    git config --global user.name "Andres Diago"
    git config --global user.email "andresdiag@unicauca.edu.co"

    git init
  git add .
  git commit -m "Primer commit"
  git push --set-upstream origin master
    ```

## 1.4. Los verbos HTTP
Conectarse a la máquina virtual mediante la extensión de Remote ssh.
Abrir el archivo app.controller.ts que se encuentra en la carpeta src y modificarlo para que quede de la siguiente manera:
    
    @Get()
    getHello(): string {
        return "Hola mundo";
    }
    
Guardar los cambios y ejecutar el servidor:

    
        npm run start:dev
    

Para verificar que el servidor responde con el mensaje de texto, se debe ingresar la dirección IP del servidor en el navegador Web o usando el comando CURL como se hizo previamente.

    
    curl http://localhost:3000
    

## 1.5. Creando un modificador
Primero se creará una variable para guardar un mensaje adicional, y esta variable será retornada por el método getHello().


    private persona = "Mundo";

    @Get()
    getHello(): string {
    return Hola: ${this.persona};
    }

Después se creará un método para modificar el mensaje adicional, y este método será invocado como un POST utilizando la ruta como entrada del parámetro nombre, entonces app.controller.ts quedará de la siguiente manera:

import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

    @Controller()
    export class AppController {
    constructor(private readonly appService: AppService) {}

    private persona = "Mundo";

    @Get()
    getHello(): string {
        return `Hola: ${this.persona}`
    }

    @Post(':nombre')
    modificar(@Param('nombre') nombre: string): string {
        this.persona = nombre;
        return `Mensaje modificado: ${this.persona}`
    }
    }

Al guardar, el servidor automáticamente se reiniciará y se podrá probar el nuevo método usando CURL o el navegador Web.

    curl -X POST http://<ip_del_servidor>:3000/Pikachu

