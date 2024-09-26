import React, { useState } from 'react';
import {marked} from 'marked';
//import './App.css';

const Markdown = () => {
    const [text, setText] = useState(`
# ¡Bienvenido a mi visualizador de Markdown!
## Explora las maravillas del Markdown
### Este es un espacio para aprender y compartir contenido interesante:

Este es un [enlace](https://www.freecodecamp.org) que te llevará a FreeCodeCamp, donde puedes aprender a programar y mejorar tus habilidades.

\`código en línea\`

\`\`\`
bloque de código
con múltiples líneas
Aquí puedes escribir todo el código que desees
y se mantendrá formateado.
\`\`\`

- Elemento 1
- Elemento 2
- Elemento 3

### Lista de características del visualizador:
- Interactividad: Actualiza la vista previa a medida que escribes.
- Soporte para múltiples elementos de Markdown.
- Responsive y fácil de usar.

> Cita en bloque
> "El éxito es la suma de pequeños esfuerzos repetidos día tras día." - Robert Collier

![Logo de React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)

### Ejemplo de tabla:
| Nombre    | Edad | Ciudad        |
|-----------|------|---------------|
| Juan      | 30   | Ciudad de México |
| Ana       | 25   | Guadalajara   |
| Carlos    | 35   | Monterrey     |

### Algunos emojis para añadir un toque divertido:
- 😀 Sonrisa
- 🎉 Fiesta
- 🚀 Cohete

### Características adicionales
1. **Soporte para listas anidadas:**
   - Lista principal
     - Sublista 1
     - Sublista 2

2. **Sección de código:**
   \`\`\`python
   def hello_world():
       print("¡Hola, mundo!")
   \`\`\`

3. **Más enlaces:**
   - [Documentación de React](https://react.dev/blog/2023/03/16/introducing-react-dev)
   - [GitHub](https://github.com/)

¡Espero que disfrutes creando contenido con este visualizador de Markdown!

      `);
    marked.setOptions({
      breaks: true
    })
    
    return (
      <div className="container my-4">
        <h1 className="text-center mb-4">Markdown Previewer</h1>
        <div className="row">
          {/* Editor de Markdown */}
          <div className="col-md-6">
            <h5>Editor</h5>
            <textarea id='editor' onChange={(event) => setText(event.target.value)} value={text}/>
          </div>

          {/* Vista previa del Markdown */}
          <div className="col-md-6">
            <h5>Preview</h5>
            <div className="border p-3" id = "preview" dangerouslySetInnerHTML={{
              __html:marked(text),
            }}/> 
          </div>
        </div>
      </div>
    );
  }
  
  export default Markdown;
  