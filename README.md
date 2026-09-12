# Parcial 1 - Desarrollo de Plataformas Móviles Valeria Polanco 221271

## MediClinic

Este repositorio contiene las dos aplicaciones desarrolladas para el Parcial 1 de Desarrollo de Plataformas Móviles.

---

## Ejercicio 1 - PWA React

Aplicación web para la administración de pacientes de MediClinic.

### Funcionalidades

- Login con usuario fijo. 
- Persistencia de sesión mediante localStorage.
- Recuperación de sesión al recargar.
- Cierre de sesión.
- Mensaje de error para credenciales incorrectas.
- Lista de pacientes.
- Formulario para agregar pacientes.
- Campos:
  - Nombre
  - Apellido
  - CC
  - Teléfono
- Validación de nombre, apellido y CC.
- Persistencia de pacientes mediante localStorage.
- Búsqueda por nombre, apellido o CC.
- El estado de búsqueda se maneja desde el componente padre.
- La lista filtrada se envía al componente hijo.
- Implementación como PWA mediante Web App Manifest y Service Worker.

### Credenciales

Usuario: `medico`

Contraseña: `1234`

---

## Ejercicio 2 - Ionic React

Aplicación móvil para consulta de visitas médicas.

### Funcionalidades

- Login utilizando componentes Ionic.
- IonToast para credenciales incorrectas.
- Persistencia de sesión mediante localStorage.
- Navegación con IonTabs:
  - Visitas
  - Pacientes
  - Perfil
- Lista de visitas del día.
- Cada visita muestra:
  - Paciente
  - Hora
  - Estado
- Navegación al detalle de una visita.
- Cambio de estado:

`pendiente → en_camino → finalizada`

- Persistencia de cambios mediante localStorage.
- Cierre de sesión desde Perfil.

---

## Tecnologías utilizadas

- React
- Ionic React
- TypeScript
- JavaScript
- Vite
- PWA
- localStorage
- Git

---

## Estructura del repositorio

- `pwa-react/` - Ejercicio 1.
- `ionic-react/` - Ejercicio 2.
- `capturas/` - Evidencias de funcionamiento.

---

## Condiciones

- No se utiliza backend.
- Toda la persistencia se realiza mediante localStorage.
- Las dos aplicaciones manejan la información de pacientes de manera independiente.