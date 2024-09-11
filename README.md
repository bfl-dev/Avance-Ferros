# project-ferros
Plataforma web para transporte por medio ferroviario.

## Descripcion del Proyecto

El proyecto consiste en una plataforma web para la compra de boletos para tren, junto con el manejo que requiere
la coordinacion de trenes, los asientos de estos y los usuarios.

## Links
- Link Figma Prototype Cliente: https://www.figma.com/design/bFjnybuiRuzdiDkHN1Z5sM/Ferros-Prototype?node-id=0-1&t=jUwE0ohk9IRasJF1-1
- Link Figma Prototype Administrador: https://www.figma.com/design/XUotuCLKRsL4ohfzf77GAM/Admin?m=auto&t=3nRSZZkU6ALKgBta-1

`Por un error de compresión nuestra, hemos trabajado ,durante la mayoria de los dias de trabajo, en un repo externo. Como evidenvia de nuestro trabajo dejaremos el
link del repo adjunto. en el repo se encontraran los mas de 200 commits hechos por nuestro grupo junto con sus respectivos creadores`
- Link Repo Externo: https://github.com/SphericalOrg/project-ferros

## Miembros
- Jun Sáez (StrawberryFrappe)
- Felipe Seguel (f33gz)
- Alvaro Parra (bfl-dev)
  
## Funcionalidades
Aca se abarcarán las funcionalidades del proyecto junto con sus responsables

### Funcionalidad Mayor 1: Informacion de trenes (Jun)
#### Descripción:
La plataforma contará con un sistema de rastreo y localización de los trenes, para mostrar información en tiempo real acerca de estos tales como el estado del tren, origen, destino y mas detallados posteriormente.
#### Funcionalidad menor: Información del viaje.
- EL sitio dará a conocer el estado del tren.
- El sitio dará a conocer al usuario la estación de origen y destino del tren.
- El sitio dará a conocer el tiempo estimado de llegada.
#### Funcionalidad menor: Rastreo del tren.  
- El sitio muestra la posición geográfica aproximada de el/los tren/es en transito 
- El sitio mostrará la ruta, seguida y por seguir, del tren.
    
#### Funcionalidad menor: Componente de selección de Boletos
- El sitio permitirá al usuario buscar viajes según fecha, origen, destino y periodo del dia.
- El sitio permitirá al usuario, basado en la búsqueda, seleccionar un tren y una o mas butacas de esta.

### Funcionalidad Mayor 2: Reserva de Asientos (Felipe)
#### Descripción:
La plataforma contara con un sistema de reserva de asientos, en esta se podrá rellenar la información requerida y se podrá acceder al sistema de pagos.

#### Funcionalidad menor: Compra de boletos (Felipe)
- El sitio presenta las asientos seleccionadas.
- El sitio contiene las "Forms" de información a rellenar del usuario. Si el usuario cuenta con una cuenta, su información ya estará presente.
- El sitio permite al usuario utilizar un cupón para la rebaja del precio.
- El sitio permite seleccionar el método de pago
	
#### Funcionalidad menor: Sitio de Pago (Felipe)
- El sitio muestra las opciones de pago según el método seleccionado
- El sitio presenta un timer para la compra de el/los boleto(s).
- El sitio como resultado mostrara los boletos correspondientes.

### Funcionalidad Mayor 3: Cuenta del Usuario (Alvaro)
#### Descripción:
La plataforma contará con cuentas para los usuarios, que sera utilizada para acceder a su historial de viajes y facilitar el rellenado de información requerida.

#### Funcionalidad menor: Acceso de las Cuentas (Alvaro)
- El sitio permitirá al usuario crear una cuenta con sus datos.
- El sitio permitirá iniciar sesión con los datos ingresados por el usuario
- El sitio integrara autenticación con Google.  
- El sitio permite al usuario eliminar su cuenta.
	
#### Funcionalidad menor: Manejo de Información 
- El sitio requerirá que él usuario complete la información necesaria para su cuenta.
- El sitio permite mostrar al usuario la información de su cuenta.
- El sitio permite al usuario modificar la información de su cuenta.

#### Funcionalidad menor: Historial de viajes
- El sitio permitirá al usuario ver su historial de viajes.
- El sitio permitirá al usuario ver viajes pasados mostrando todos los detalles necesarios de este.
- El sitio permitirá al usuario filtrar sus viajes, por destino, origen y fecha.

### Funcionalidad Mayor 4: Recompensas para Usuarios (Felipe)

#### Descripción:
La plataforma contará con una sección dedicada donde los usuarios podrán visualizar sus kilómetros recorridos, ganar recompensas basadas en su uso del servicio y reclamar dichas recompensas. 
#### Funcionalidad Menor: Página de Recompensas 
- El sitio mostrará las recompensas disponibles, incluyendo una breve descripción y una imagen referencial. 
- El sitio permitirá visualizará una barra de progreso que indicará los kilómetros recorridos por el usuario. 
- El sitio mostrara las recompensas ya adquiridas y aquellas que están disponibles para reclamar, junto con la información sobre cuánto falta para obtenerlas 
- El sitio permitirá a que los usuarios puedan reclamar las recompensas que ya estén disponibles para ellos. 
#### Funcionalidad Secundaria: Recompensas 
- El sitio otorgara puntos que podrán ser utilizados como descuento en futuros viajes al momento de realizar el pago (cantidad de puntos - precio). 
- El sitio se ofrecerán cupones para hospedajes como recompensas

### Funcionalidad Mayor 5: Manejo Administrativo (Alvaro)
#### Descripción:
La plataforma dispondrá de un sitio para el lado administrativo, este contara una vista general de los usuarios, trenes y las butacas de este. Junto con herramientas de modificación de estos.

#### Funcionalidad menor: Administración de Cuentas 
- El sitio permitirá al administrador añadir una cuenta.
- El sitio permitirá al administrador la visualización, por tablas, de las cuentas.
- El sitio permitirá al administrador buscar y filtrar cuentas.
- El sitio permitirá al administrador eliminar una o varias cuentas.
- El sitio permitirá al administrador modificar un cuenta.
	
#### Funcionalidad menor: Pagina de Administración de Viajes.
- El sitio permitirá al administrador agendar un viaje de tren.
- El sitio permitirá al administrador la visualización de los trenes agendados y en ruta.
- El sitio permitirá al administrador la visualización de los asientos según el tren seleccionado.
- El sitio permitirá al administrador la modificación del estado de los trenes en ruta.
- El sitio permitirá al administrador la modificación del estado de un asiento.
