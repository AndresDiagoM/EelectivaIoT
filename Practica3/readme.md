
# PRÁCTICA 3

#### NOMBRE: Andres Felipe Diago Matta
#### Fecha: 27-nov-22

## Desarrollo de la práctica
Seguridad y calidad

## Table of contents
1. Aplicar los conceptos de arquitectura hexagonal.
2. Implementar protección simple de endpoints.
3. Implementar autenticación JWT.


## 1. Aplicar los conceptos de arquitectura hexagonal.
La arquitectura hexagonal es un patrón de diseño que nos permite separar la lógica de negocio de la lógica de infraestructura.

Para esta parte de la práctica continúe con la entidad u objeto que decidió modelar para el proyecto de la práctica 2. ``-> PERSONAS``

 1. Cree una rama llamada hexagonal a partir de master partiendo del código . Es posible hacerlo con el siguiente comando:
    ```bash
    git checkout -b hexagonal master
    ```
 2. Modifique el código para que se aplique la arquitectura hexagonal. La estructura sera:

    
    * src
        * <nombre_de_entidad>
            * adapters
              * controllers
                * <nombre_entidad>.controller.ts
              * repositories
                * <nombre_entidad>.repository.ts (nuevo archivo)
            * domain
                * models
                  * <nombre_entidad>.model.ts (nuevo archivo)
                * services
                  * <nombre_entidad>.service.ts



 3. Se crea los archivos para modelar la entidad ``PERSONAS`` y ``PLAYER``, junto con las carpetas correspondientes, de models dentro de domain.
 4. Es momento de migrar la funcionalidad implementada en el controlador a un servicio. 
 5. Modificar el controlador player.controller.ts para que se emplee el la implementación del servicio.
 6. Se implementa los principios SOLID.



## 2. Implementado seguridad

En este caso vamos a implementar un sistema de autenticación y autorización para que los usuarios puedan acceder a los recursos del servidor.

 1. nstalar el paquete @nestjs/passport y passport, que permitirá implementar la autenticación y autorización.

        npm install --save @nestjs/passport passport passport-local
        npm install --save-dev @types/passport-local

 2. NestJS integra un método para generar módulos rápidamente, primero se creará un módulo para autenticación con los siguientes comandos:
   
        nest g module auth
        nest g service auth
    Ahora aparecerá una carpeta de nombre auth en la carpeta src con los archivos auth.module.ts y auth.service.ts y un archivo auth.service.spec.ts que contiene las pruebas unitarias del servicio, este último no lo utilizaremos.
 3. Asi mismo se creará un módulo para gestionar usuarios
   
        nest g module users
        nest g service users
 
 4. Luego, se implementa el servicio de usuarios, para este ejemplo se utilizarán un par de usuarios predefinidos, pero en un caso real se debería implementar un servicio que permita gestionar usuarios.
   
   *SE SIGUEN LOS PASOS DE LA PRACTICA 3*

 11. Si todo está bien, en este punto al llamar al enpoint POST del servidor la respuesta debería ser esta:
    
    {
    "statusCode": 401,
    "message": "Unauthorized"
    }
    

Esto indica que está prohibido el acceso al recurso, ya que no se ha autenticado al usuario.

Para conseguirlo puede emplearse el comando `curl` de la siguiente manera:

    curl -X POST http://localhost:3000 -d '{"username": "john", "password": "changeme", "name":"jugador"}' -H "Content-Type: application/json"

![Alt text](./img/auth.png "auth")

Creando un jugador con contraseña:
![Alt text](./img/post1.png "post1")

## 3. Autenticación con JWT

 1. Para implementar la autenticación con JWT se debe instalar el paquete @nestjs/jwt:

        npm install --save @nestjs/jwt passport-jwt
        npm install --save-dev @types/passport-jwt


 2. Se modifica auth.service.ts adicionando el método login y algunas dependencias.

*SE SIGUEN LOS PASOS DE LA PRACTICA 3*

 10. Si todo es correcto, será posible llamar al endpoint que genera un token JWT, esto se podrá validar con CURL con el siguiente comando:

    curl -X POST http://localhost:3000/auth/login -d '{"username": "john", "password": "changeme" }' -H "Content-Type: application/json"
La terminal responderá con un token. Guarde este token para usarlo en los siguientes pasos.

    {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTY2OTYwNjQxNiwiZXhwIjoxNjY5NjEwMDE2fQ._fgep0Bf_hCL9EvENMPeRntLCzZ7U50O_E9KX1ef1YY"}

 11. Proteger el endpoint POST.
 12. Si todo es correcto, será posible llamar al endpoint que genera un token JWT, esto se podrá validar con CURL con el siguiente comando, recuerde usar el token que generó en el paso 10:

    curl -X POST http://localhost:3000 -d '{"name": "Radamel", "lastname": "Falcao", "age": 36 }' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2Vybm...""

    curl -X POST http://192.168.18.155:3000 -d '{"name": "Radamel", "lastname": "Falcao", "age": 36 }' -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJzdWIiOjEsImlhdCI6MTY2OTYwNzExOSwiZXhwIjoxNjY5NjEwNzE5fQ.iIW6c6ReOOktCSBj2jAKlxEGv7EoUwl1YpuTa1OW3Ek"



La terminal responderá con el objeto creado. Si no se envía el token o el token es incorrecto, la terminal responderá con un error 401.

![Alt text](./img/post2.png "post2")

Utilizando POSTMAN, con el header de Authorization:

![Alt text](./img/post3.png "post3")

13. Proteger el endpoint que tengan capacidad de modificar o eliminar registros.

    * Proteger el endpoint GET.
    ![Alt text](./img/get.png "get")

    * Proteger el endpoint PUT.
      * se observa put sin autorizaciòn:
        ![Alt text](./img/put1.png "put1")
      *Con autorizaciòn, sin usar cabecera de autorizaciòn: (debe dar error 401)
        ![Alt text](./img/put2.png "put2")
        *Con autorizaciòn, usando cabecera de autorizaciòn: (se cambia username a CR7)
        ![Alt text](./img/put3.png "put3")


