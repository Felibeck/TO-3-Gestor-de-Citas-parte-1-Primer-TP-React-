🐾 Administrador de Pacientes

Gestor de citas veterinarias construido con React + Vite. Diseño moderno con degradado magenta/violeta, interfaz en dos columnas y gestión visual de turnos para mascotas.


✨ Vista previa
┌─────────────────────────────────────────────────────────┐
│           ADMINISTRADOR DE PACIENTES                    │
│                                                         │
│   CREAR MI CITA          ADMINISTRA TUS CITAS           │
│  ┌──────────────────┐   ┌──────────────────────────┐   │
│  │ Nombre Mascota   │   │ Mascota: Nina             │   │
│  │ Nombre Dueño     │   │ Dueño: Martin             │   │
│  │ Fecha            │   │ Fecha: 2021-08-05         │   │
│  │ Hora             │   │          [ ELIMINAR × ]   │   │
│  │ Síntomas         │   └──────────────────────────┘   │
│  │ [AGREGAR CITA]   │                                   │
│  └──────────────────┘                                   │
└─────────────────────────────────────────────────────────┘

📁 Estructura del proyecto
TP01-React/
├── src/
│   ├── components/
│   │   ├── Formulario/       # Formulario para crear citas
│   │   ├── Listado/          # Lista de citas existentes
│   │   ├── Cita/             # Tarjeta individual de cita
│   │   └── Subtitulo/        # Título de sección reutilizable
│   ├── App.jsx               # Componente raíz con layout en grilla
│   ├── App.css               # Grid de dos columnas
│   └── index.css             # Estilos globales y fondo degradado
├── index.html
├── vite.config.js
└── package.json

🧩 Componentes
<Formulario />
Recibe el prop sub para el subtítulo. Contiene los campos: nombre de mascota, nombre del dueño, fecha, hora y síntomas, más el botón Agregar Cita.
<Listado />
Recibe el prop sub para el subtítulo. Itera sobre el array de citas y renderiza un <Cita /> por cada una.
<Cita />
Recibe objCita con la forma:
js{
  nMascota: "Floki",
  dueno: "Ari",
  fecha: "2023-08-05",
  hora: "16:15",
  sintomas: "No está comiendo"
}
Muestra los datos en una tarjeta blanca con botón Eliminar ×.
<Subtitulo />
Componente reutilizable que renderiza un <h2> estilizado con la fuente Staatliches en blanco sobre el fondo degradado.

⚙️ Instalación y uso
bash# Clonar el repositorio
git clone https://github.com/tu-usuario/TO-3-Gestor-de-Citas

# Entrar al directorio
cd TP01-React

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
Abrir http://localhost:5173 en el navegador.

🎨 Diseño

Fondo: degradado diagonal #7b2ff7 → #c0267a → #e8175d
Tipografía: Staatliches para títulos
Layout: CSS Grid de dos columnas — formulario a la izquierda, listado a la derecha
Tarjetas: fondo blanco con sombra suave sobre el degradado
Botón principal: cyan #22d3ee con texto en mayúsculas

