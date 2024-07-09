# myStore

## Descripción

myStore es una aplicación de comercio electrónico diseñada para ofrecer una experiencia de compra fluida y eficiente. Utilizando una arquitectura hexagonal, myStore separa las diferentes capas de la aplicación para garantizar un desarrollo modular y mantenible. Almacenando los datos de manera estática, asegura la integridad de la información de productos y carritos de compra.

## Tecnologías Utilizadas

- **Arquitectura Hexagonal**
- **Node.js**
- **Express**
- **Next.js**
- **Almacenamiento en Archivos JSON**
- **CRUD**
- **Monorepo**
- **JavaScript**
- **Hooks**
- **Renderizado del Lado del Servidor (SSR)**

## Características Principales

- **Gestión de Productos**: Permite listar, agregar, modificar y eliminar productos de manera eficiente.
  
- **Gestión de Carritos de Compra**: Facilita la gestión de los carritos de compra de los usuarios, almacenando la información de manera segura y confiable.
  
- **Renderizado del Lado del Servidor (SSR)**: Mejora la velocidad y la experiencia del usuario al renderizar páginas desde el servidor.

## Funcionalidades del Servidor

- **Listado de Productos**: Proporciona endpoints para obtener la lista completa de productos disponibles.
  
- **Operaciones CRUD**: Implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para productos y carritos de compras.
  
- **Seguridad y Mantenimiento**: Asegura la integridad de los datos con almacenamiento estático y gestión eficiente de errores y excepciones.

## Instalación y Uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

### Instalación

1. Clonar el repositorio:
    ```sh
    git clone https://github.com/tu_usuario/myStore
    cd myStore
    ```

2. Instalar dependencias en la raíz del proyecto:
    ```sh
    npm install
    ```

3. Instalar dependencias en el frontend:
    ```sh
    cd apps/frontend
    npm install
    cd ../..
    ```

4. Instalar dependencias en el backend:
    ```sh
    cd apps/backend
    npm install
    cd ../..
    ```

### Uso

#### Ejecución Monorepo

Para ejecutar tanto el frontend como el backend simultáneamente desde la raíz del proyecto:
```sh
npm run dev
