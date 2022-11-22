
# PRÁCTICA 2

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
