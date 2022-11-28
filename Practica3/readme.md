
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


![Alt text](./img/DELETE.png "DELETE")


