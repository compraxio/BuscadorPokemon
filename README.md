# 🎮 BuscadorPokemon - La Enciclopedia Pokémon Definitiva

![GitHub Stars](https://img.shields.io/github/stars/compraxio/BuscadorPokemon?style=social)
![GitHub Forks](https://img.shields.io/github/forks/compraxio/BuscadorPokemon?style=social)
![GitHub Issues](https://img.shields.io/github/issues/compraxio/BuscadorPokemon)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue)
![Vite](https://img.shields.io/badge/Vite-5.0+-green)

**Explora el universo Pokémon con la herramienta definitiva para descubrir información detallada sobre tus Pokémon favoritos.**

---

## ✨ **¿Qué es BuscadorPokemon?**

BuscadorPokemon es una aplicación web moderna construida con **TypeScript, React, y Vite** que te permite explorar el mundo Pokémon con una interfaz intuitiva y completa. Desde estadísticas detalladas hasta habilidades, tipos, juegos donde aparecen y más, esta aplicación te convierte en un experto Pokémon en minutos.

### **Características principales:**
✅ **Búsqueda avanzada** – Encuentra Pokémon por nombre o número de Pokédex
✅ **Información completa** – Estadísticas, habilidades, sprites y más
✅ **Temas dinámicos** – Modo claro/oscuro con ajustes personalizables
✅ **Interfaz moderna** – Diseño limpio y responsive con Tailwind CSS
✅ **Optimizado para rendimiento** – Carga rápida con lazy loading y React Query
✅ **Gestión de errores** – Manejo robusto de casos no encontrados
✅ **Sugerencias inteligentes** – Botones de tipos para explorar Pokémon rápidamente

---

## 🛠️ **Tech Stack**

| **Categoría**       | **Tecnologías**                                                                 |
|----------------------|---------------------------------------------------------------------------------|
| **Lenguaje**         | TypeScript                                                                       |
| **Frontend**         | React 19, Vite, Tailwind CSS, Radix UI                                        |
| **Estado**           | Zustand, React Query                                                           |
| **Ruteo**            | React Router                                                                   |
| **Formularios**      | React Hook Form, Zod                                                           |
| **Notificaciones**   | Sonner                                                                         |
| **Gráficos**         | Recharts                                                                       |
| **Diseño**           | Shadcn UI, Lucide Icons                                                         |
| **Build**            | Vite, SWC                                                                     |

---

## 📦 **Instalación**

### **Requisitos previos**
Asegúrate de tener instalados:
- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (recomendado) o npm/yarn

### **Clonar el repositorio**
```bash
git clone https://github.com/compraxio/BuscadorPokemon.git
cd BuscadorPokemon

### **Instalar dependencias**
```bash
pnpm install
# o
npm install
# o
yarn install
```

### **Configurar variables de entorno**
Copia el archivo `.env.example` (si existe) y renómbralo a `.env`.

### **Iniciar el servidor de desarrollo**
```bash
pnpm dev
# o
npm run dev
# o
yarn dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

---

## 🎯 **Uso**

### **Búsqueda de Pokémon**
1. **Por nombre**: Escribe el nombre del Pokémon en el campo de búsqueda.
2. **Por número de Pokédex**: Usa el número (ej: `25` para Pikachu).
3. **Sugerencias rápidas**: Haz clic en los botones de tipos para explorar Pokémon de ese tipo.

#### **Ejemplo de código:**
```typescript
// Ejemplo de cómo navegar a la página de detalles de un Pokémon
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();

  const handleSearch = (pokemonName: string) => {
    navigate(`/${pokemonName}`);
  };

  return (
    <input
      type="text"
      placeholder="Busca por nombre o número..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
```

### **Visualización de detalles**
Al navegar a `/[pokemon]`, la aplicación mostrará:
- **Presentación**: Número de Pokédex y nombre del Pokémon.
- **Tipos**: Etiquetas de tipos con íconos personalizados.
- **Sprites**: Galería de imágenes (frente, espalda, shiny).
- **Estadísticas**: Barras de progreso para HP, ataque, defensa, etc.
- **Habilidades**: Habilidades primarias y ocultas.
- **Sonidos**: Reproducción de los gritos del Pokémon.
- **Juegos**: Versiones en las que aparece el Pokémon.

---

## 📁 **Estructura del Proyecto**

```
BuscadorPokemon/
├── public/                  # Archivos estáticos
├── src/
│   ├── app/                 # Configuración de rutas
│   ├── features/            # Componentes organizados por funcionalidad
│   │   ├── pokemon/         # Componentes de búsqueda
│   │   └── infoPokemon/     # Componentes de detalles
│   ├── shared/              # Componentes y utilidades reutilizables
│   │   ├── components/      # Componentes genéricos (Layout, ThemeProvider)
│   │   ├── lib/             # Librerías personalizadas
│   │   ├── types/           # Tipos TypeScript
│   │   └── ui/              # Componentes de UI (Botones, Cards, etc.)
│   ├── styles/              # Archivos de estilos globales
│   ├── main.tsx             # Punto de entrada de la aplicación
│   └── env.d.ts             # Tipos ambientales
├── .gitignore
├── package.json
├── tsconfig.json            # Configuración de TypeScript
└── vite.config.ts           # Configuración de Vite
```

---

## 🔧 **Configuración**

### **Variables de entorno**
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables (si es necesario):
```env
VITE_API_BASE_URL=https://pokeapi.co/api/v2
```

### **Personalización del diseño**
La aplicación usa **Tailwind CSS** para el diseño. Puedes personalizar:
- **Colores**: Edita `src/styles/index.css` para ajustar los colores de tema.
- **Tipografía**: Cambia las fuentes en el archivo de estilos.
- **Componentes**: Modifica los componentes en `src/shared/ui/` para adaptarlos a tu estilo.

---

## 🤝 **Contribuir**

¡Las contribuciones son bienvenidas! Aquí te explicamos cómo participar:

### **Cómo contribuir**
1. **Fork** el repositorio.
2. **Clona** tu fork localmente.
3. **Crea una rama** para tu feature/fix:
   ```bash
   git checkout -b feature/nueva-caracteristica
   ```
4. **Instala las dependencias** y ejecuta la aplicación para verificar que todo funcione.
5. **Haz tus cambios** y asegúrate de que el código cumpla con las [guías de estilo](#guías-de-estilo).
6. **Prueba** tus cambios localmente.
7. **Commitea** tus cambios con un mensaje descriptivo:
   ```bash
   git commit -m "Añade nueva funcionalidad de búsqueda por tipo"
   ```
8. **Empuja** a tu rama:
   ```bash
   git push origin feature/nueva-caracteristica
   ```
9. **Abre un Pull Request** desde tu repositorio fork a este repositorio principal.

### **Guías de estilo**
- **TypeScript**: Usa tipos estrictos y sigue la estructura de los archivos existentes.
- **React**: Componentes funcionales con hooks y lógica separada.
- **Tailwind CSS**: Usa clases de utilidad para el diseño.
- **Commit Messages**: Sigue el formato [Conventional Commits](https://www.conventionalcommits.org/).

### **Estructura de ramas**
| Rama               | Descripción                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `main`             | Rama principal con código estable.                                          |
| `dev`              | Rama de desarrollo para features y mejoras.                                |
| `feature/*`        | Ramas para nuevas funcionalidades.                                           |
| `fix/*`            | Ramas para corrección de bugs.                                              |
| `docs/*`           | Ramas para documentación.                                                   |

---

## 📝 **Licencia**

Este proyecto está licenciado bajo la **MIT License**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 👥 **Autores & Contribuyentes**

**Luis Ángel Acuna Cárdenas** – [@compraxio](https://github.com/compraxio)

**Contribuyentes destacados**:
- [@usuario1](https://github.com/usuario1) – [Contribución](https://github.com/compraxio/BuscadorPokemon/commits/usuario1)
- [@usuario2](https://github.com/usuario2) – [Contribución](https://github.com/compraxio/BuscadorPokemon/commits/usuario2)

---

## 🐛 **Reportar Issues & Soporte**

Si encuentras un bug o tienes una sugerencia, por favor abre un **issue** en este repositorio. Para soporte rápido, puedes:
- **Unirse al chat** en [Discord](https://discord.gg/invite) (si aplica).
- **Enviar un correo** a [contacto@ejemplo.com](mailto:contacto@ejemplo.com).

### **Preguntas frecuentes (FAQ)**
1. **¿Cómo obtengo los datos de los Pokémon?**
   La aplicación usa la [PokeAPI](https://pokeapi.co/) para obtener información en tiempo real.

2. **¿Puedo personalizar los colores?**
   Sí, edita `src/styles/index.css` para ajustar los colores de tema.

3. **¿Cómo añado un nuevo tipo de Pokémon?**
   Añade el nuevo tipo en `src/shared/lib/selecTipo.tsx` y actualiza el archivo SVG de tipos.

---

## 🗺️ **Roadmap**

### **Próximas funcionalidades**
- [ ] **Añadir evolución**: Mostrar la cadena de evolución de cada Pokémon.
- [ ] **Búsqueda por generación**: Filtrar Pokémon por generación (Gen 1, Gen 2, etc.).
- [ ] **Modo offline**: Guardar datos locales para uso sin conexión.
- [ ] **Exportar datos**: Permitir exportar información de Pokémon a CSV/JSON.
- [ ] **Multilenguaje**: Soporte para más idiomas (inglés, francés, etc.).

### **Issues conocidos**
- [#123](https://github.com/compraxio/BuscadorPokemon/issues/123) – Optimizar carga de imágenes en móviles.
- [#456](https://github.com/compraxio/BuscadorPokemon/issues/456) – Mejorar manejo de errores en la API.

---

## 🚀 **¡Únete a la comunidad Pokémon!**

🌟 **Star este repositorio** si te gusta el proyecto.
💬 **Comenta en los issues** con tus sugerencias.
📢 **Comparte** tu experiencia usando BuscadorPokemon.

¡Gracias por ser parte de este proyecto! 🎮✨
```

Este README está diseñado para ser:
- **Atractivo** con emojis y un diseño visual claro.
- **Informativo** con instrucciones paso a paso y ejemplos prácticos.
- **Fácil de seguir** con una estructura lógica y bien organizada.
- **Motivador** para que los desarrolladores contribuyan y den "star" al repositorio.
- **Profesional** con buenas prácticas de documentación para GitHub.
