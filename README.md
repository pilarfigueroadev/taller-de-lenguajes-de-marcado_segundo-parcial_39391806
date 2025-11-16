# GameHub Solidario - Proyecto Web

## 📋 Contexto del Proyecto

Crear una web para **GameHub Solidario**, una comunidad que organiza torneos de videojuegos (FIFA/EA FC, Valorant, LoL, Minecraft, etc.) para recaudar donaciones (alimentos, juguetes, útiles o fondos) destinadas a comedores y ONG locales. La web debe difundir torneos, reglas, ranking y calendario, y facilitar que la gente se sume como jugadora, staff o donante.

---

## 🎯 Páginas Requeridas

### 1. 🏠 index.html (Sitio Público)

#### Header y Footer
- ✅ Header consistente en todo el sitio
- ✅ Footer consistente en todo el sitio

#### Contenido Principal
- ✅ Portada atractiva
- ✅ Sección misión y objetivos (gaming + impacto social)
- ✅ Torneos en curso
- ✅ Reglamentos
- ✅ Ranking/tabla de posiciones
- ✅ Testimonios de la comunidad
- ✅ Galería (streams, finales, entrega de donaciones)

#### Sistema de Login (Solo Admins)
- ✅ Formulario de login
- ✅ Validación de usuario: `mari`
- ✅ Validación de contraseña: `123`
- ✅ Redirección correcta a `admin.html?user=mari` si login exitoso
- ✅ Mensaje "Usuario incorrecto" si login falla
- ✅ Evitar redirección si credenciales incorrectas

#### Botones de Colaboración
- ✅ Botón "Quiero colaborar" en cada torneo/campaña
- ✅ Redirección a `quierocolaborar.html`
- ✅ Ejemplo implementado: "Copa Solidaridad"

---

### 2. ⚙️ admin.html (Panel Interno)

#### Funcionalidades de Acceso
- ✅ Leer parámetro de URL
- ✅ Mostrar saludo personalizado (ej: "Bienvenido/a mari")
- ✅ Navegación consistente

#### ABM de Torneos y Campañas (Maqueta Visual)
##### Alta de Torneos
- ✅ Formulario para crear torneo/campaña
- ✅ Campo: Título
- ✅ Campo: Juego
- ✅ Campo: Plataforma
- ✅ Campo: Fecha
- ✅ Campo: Cupos
- ✅ Campo: Objetivo solidario

##### Baja de Torneos
- ✅ Eliminar torneo/campaña del listado

##### Modificación de Torneos
- ✅ Editar datos existentes
- ✅ Campo: Reglas
- ✅ Campo: Premios simbólicos
- ✅ Campo: Enlace a reglamento PDF
- ✅ Campo: Link a stream

#### Funcionalidades Opcionales
- ⏳ Listar inscriptos
- ⏳ Listar sponsors

#### Navegación
- ✅ Botón "Volver al home" (index.html)

---

### 3. 🤝 quierocolaborar.html (Formulario Público)

#### Estructura General
- ⏳ Mismo header y footer que el resto del sitio
- ✅ Formulario con datos personales
- ✅ Sección de tipo de colaboración

#### Datos Personales
- ✅ Campo: Nombre
- ✅ Campo: Email
- ✅ Campo: Teléfono
- ✅ Otros campos relevantes

#### Tipos de Colaboración
##### Opción: Dinero 💰
- ✅ Selector de tipo de colaboración "Dinero"
- ✅ Campo: Elegir monto
- ⏳ Campo: Tipo de aporte (único/mensual)
- ⏳ Campo: Medio de pago
- ⏳ Mostrar campos dinámicamente según selección

##### Opción: Trabajo 💼
- ✅ Selector de tipo de colaboración "Trabajo"
- ⏳ Campo: Rol deseado
- ✅ Campo: Disponibilidad
- ✅ Campo: Zona geográfica
- ⏳ Campo: Plataforma preferida
- ✅ Campo: Juego preferido
- ⏳ Mostrar campos dinámicamente según selección

##### Opción: Difusión 📢
- ✅ Selector de tipo de colaboración "Difusión"
- ✅ Campo: Redes sociales
- ⏳ Campo: Frecuencia de publicación
- ✅ Opción: Descargar kit de prensa
- ⏳ Mostrar campos dinámicamente según selección

#### Navegación
- ✅ Botón "Volver al home"

---

## 📱 Requisitos Generales

### Diseño Responsivo
- ⏳ Implementar grillas con columnas variables
- ⏳ Definir breakpoints apropiados
- ⏳ CSS personalizado para estilos únicos

### Contenido
- ⏳ Prohibido usar lorem ipsum
- ⏳ Contenido real y profesional para GameHub Solidario
- ⏳ Textos coherentes con el propósito solidario
- ⏳ Información realista sobre torneos de videojuegos

### Funcionalidad JavaScript
- ⏳ Sistema de login funcional
- ⏳ Formularios dinámicos en quierocolaborar.html
- ⏳ ABM visual en admin.html
- ⏳ Validaciones de formularios

### Estructura de Archivos
- ✅ index.html
- ✅ admin.html
- ✅ quierocolaborar.html
- ✅ Archivos CSS
- ✅ Archivos JavaScript
- ✅ Imágenes y assets

---

## 🚀 Mejoras Adicionales (Opcionales)

- ⏳ Animaciones y transiciones CSS
- ⏳ Optimización de imágenes
- ⏳ Accesibilidad web (ARIA labels, alt texts)
- ⏳ Meta tags para SEO
- ⏳ Favicon personalizado
- ⏳ Integración con redes sociales
- ⏳ Contador de donaciones
- ⏳ Mapa de ubicación de eventos

---

## 📝 Notas de Desarrollo

### Credenciales de Admin
- **Usuario:** mari
- **Contraseña:** 123

### URLs de Ejemplo
- Login exitoso: `admin.html?user=mari`
- Formulario colaboración: `quierocolaborar.html`

### Juegos Sugeridos para Contenido
- FIFA/EA FC
- Valorant
- League of Legends (LoL)
- Minecraft
- Otros juegos populares

## 💭 Comentarios del Proyecto


### 📅 Fecha: [14/11/2025]
**Comentario:** 
Doy inicio al desarrollo del segundo parcial. Como en el anterior, todo el desarrollo se hará en distintas branches destinadas a un fin específico. Estas son las branches base que usare para el proyecto pero puede ser que agregue mas segun necesidad.

`html-structure` --> html de todas las paginas

`css-styles-development` --> estilado de todas las paginas

`login-feature` --> javascript destinado a completar la funcionalidad del login

`form-validations` --> javascript destinado a validar los distintos campos del form de la seccion "quiero colaborar"

### 📅 Fecha: [14/11/2025]
**Comentario:** 
Voy a resolver el login en un pop-up. Según las consignas, no existe una página "login.html", pero queda muy feo que el formulario de login se vea directamente en el index.html que es la home, en donde también ingresan usuarios que son simplemente visitantes interesados en el evento y no tienen una cuenta. Lo lógico sería tener un botón en el menú que diga "Login" y la misma te redirija a la página para loggearte. Como esto no está contemplado en las consignas, un pop-up suena lo más sensato para resolver esta funcionalidad.

### 📅 Fecha: [16/11/2025]
**Comentario:** 
Popup completado visualmente, ahora toca hacer la funcionalidad de validar las credenciales y redirigir al dashboard del administrador. Me parece un espanto pasar el username que es un dato sensible a traves de la URL, pero toca hacerlo porque es parte de las consignas del parcial. Solo quiero dejar asentado que como developer jamas tomaria semejante decision, incluso sin tener un backend podria resolverlo de otra forma para hacer que admin.html sea una pagina privada. Se entiende que lo han solicitado de esta forma por la cantidad de contenidos dados en el cuatrimestre.

### 📅 Fecha: [16/11/2025]
**Comentario:** 
Terminé el ABM de agregar, editar y eliminar torneos. Si bien no pidieron backend en las consignas, esto se podría realizar con localstorage. No obstante, no es un tema visto en el cuatrimestre y tampoco dan los tiempos para hacer ese desarrollo antes de la fecha de entrega, asi que decidí hacer la emulación visual mostrando y ocultando los elementos y con una ventana de confirmación.

### 📅 Fecha: [16/11/2025]
**Comentario:** 
Recién me percato de que bootstrap lo están pidiendo obligatorio, aunque yo ya resolví los estilos y el responsive solo con flex y grid, que es más simple que implementar un framework entero solo para eso. Veré de que forma meter bootstrap sin que arruine el proyecto. Quizás algún icon...