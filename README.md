Pokémon Favorites App
=====================

Descripción del Proyecto
------------------------

Esta aplicación es una herramienta sencilla para visualizar una lista de Pokémons, agregar los favoritos y hacer búsquedas dinámicas. La app está construida con **Vue 3**, utilizando **Vite** como el builder para un desarrollo rápido y moderno. El propósito principal de la aplicación es demostrar el uso de tecnologías como **Vue.js**, **Pinia** para el manejo de estado, y el consumo de la **PokeAPI** para manejar grandes volúmenes de datos.

Tecnologías Utilizadas
----------------------

*   **Vue.js 3**: Como framework principal para la construcción de la interfaz. Aproveche la Composition API para organizar el código de una manera más clara y reactiva.
*   **Vite**: Para la creación del entorno de desarrollo y la construcción del proyecto de manera rápida y eficiente.
*   **Pinia**: Manejo de estado global para almacenar y compartir los datos entre componentes, especialmente para persistir los Pokémons favoritos a través de la app.
*   **PokeAPI**: Utilizamos esta API pública para obtener la lista de Pokémons y los detalles específicos de cada uno.
*   **SCSS Scoped**: Para encapsular el estilo y evitar conflictos globales.

Estructura de Componentes
-------------------------

*   **PokemonList.vue**: Componente encargado de mostrar la lista de todos los Pokémons obtenidos de la API, permitiendo también agregar o quitar favoritos.
*   **FavoriteList.vue**: Componente para mostrar los Pokémons favoritos almacenados.
*   **Search.vue**: Componente reutilizable que contiene la lógica del buscador, incluyendo un input con un debounce para evitar múltiples solicitudes a la API mientras el usuario escribe.
*   **Pinia Store (pokemonStore.js)**: Centralizamos la lógica para manejar el estado de los Pokémons y los favoritos. A través de este store, se gestionan las llamadas a la API, se almacena el estado de carga, se verifican los favoritos, y se realiza la persistencia en LocalStorage para garantizar que los favoritos se conserven entre sesiones.

Manejo de Estado y Gran Cantidad de Datos
-----------------------------------------

El manejo de datos se realiza principalmente a través de **Pinia** por la necesidad de un manejo eficiente del estado, especialmente cuando se espera que el usuario interactúe con una lista potencialmente grande de datos (Pokémons) y realice cambios en la lista de favoritos.
(Se puede mejorar agregando un paginado)

### Gestión de Favoritos

Los favoritos se almacenan en el **Pinia store** y se persisten en el **LocalStorage** del navegador. Esto permite que los usuarios mantengan su lista de favoritos incluso si recargan la página o cierran el navegador. Además, cualquier cambio en los favoritos se refleja automáticamente en la UI.

### API de Pokémons

La aplicación realiza dos tipos de llamadas a la **PokeAPI**:

1.  **Lista de Pokémons**: Se realiza una llamada para obtener un listado de Pokémons.
2.  **Detalles del Pokémon**: Se puede buscar un Pokémon por nombre o ID, haciendo una solicitud específica para obtener sus detalles y mostrarlo de manera instantánea.

### Búsqueda con Debounce

Implementé un sistema de búsqueda con **debounce**, lo que significa que la búsqueda no se realiza en tiempo real por cada tecla presionada, sino que espera un pequeño delay (500ms) antes de enviar la solicitud. Esto mejora la experiencia del usuario y optimiza el número de llamadas a la API, especialmente importante cuando se trabaja con grandes volúmenes de datos.

Decisiones de Diseño
--------------------

*   **Persistencia de Datos**: Ya que no hay base de datos, decidí utilizar el `localStorage` para la persistencia de los favoritos, lo que permite conservar la información sin necesidad de crear una infraestructura adicional.
*   **Optimización de Búsquedas**: Dado que se espera que los usuarios busquen Pokémons por nombre o ID de manera frecuente, el uso de un debounce de 500ms reduce la sobrecarga de la API y mejora la experiencia de usuario.
*   **Escalabilidad**: Aunque la aplicación es sencilla, consideré la posibilidad de que pueda manejar una gran cantidad de datos, especialmente en la visualización de listas. La estructura de componentes y el manejo del estado global está diseñado para ser fácilmente escalable si se incrementa el número de interacciones o datos en el futuro.