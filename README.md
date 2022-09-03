# FED Website

### Para agregar una nueva edición
edita [este archivo](resultados/index.html#L36) y agrega esa nueva edición donde dice. 

Debería verse algo así:

```html
<div class="input-field first-wrap">
    <div class="input-select">
        <select data-trigger="" id="select" onchange="fedEditionChanged()">
        <option value="FED 1">FED 1</option>
        <option value="FED 2">FED 2</option>
        <option value="FED 3">FED 3</option>
        <!-- ADD NEW FED EDITIONS ON TOP OF HERE -->
        </select>
    </div>
</div>
```

### Para hacer esa edición la activa / agregar participantes
edita [este archivo](js/data.js). Usa el nombre *completo* del estudiante. Éste lo puedes conseguir al escribir su matrícula en [la búsqueda de Outlook](https://outlook.office365.com/people/). Usa el formato correcto para mantener compatibilidad con el código.

Debería verse algo así:

```JavaScript
const data = 
{
    "FED 0" : [
        { "ID" : "A01723738", "Name" : "Martina Rodríguez" },
        { "ID" : "A01723546", "Name" : "Carolina Mercado González" },
        { "ID" : "A01723803", "Name" : "Jorge Luis Martínez Villarreal" },
        { "ID" : "A01723810", "Name" : "Sebastián Rodríguez Ortiz" },
    ],
    "FED 1" : [
        { "ID" : "A01723833", "Name" : "Valeria Monterrubio Medina" },
        { "ID" : "A01723462", "Name" : "Natalia Treviño Ibarra" },
        { "ID" : "A01283020", "Name" : "Ximena Xuelin Cham Pérez" },
        { "ID" : "A01724365", "Name" : "Alfredo Esteban Peña Gochicoa" },
        { "ID" : "A01724440", "Name" : "Lía Midory Campos Quiñones" },
    ]
}
const defaultversion = "FED 1"
```

### Para agregar nuevas evaluaciones a la base de datos
Nombra el PDF con este formato: "A01233456.pdf", usando la matrícula del participante; y pon el archivo en el folder de su edición correspondiente [aquí](resultados/). 

Debería verse algo así la estructura de folders:

```BASH
├── resultados
    ├── FED0
    │   ├── 404.html
    │   ├── A01723546.pdf
    │   ├── A01723738.pdf
    │   ├── A01723803.pdf
    │   └── A01723810.pdf
    ├── FED1
    │   ├── 404.html
    │   ├── A01283020.pdf
    │   ├── A01723462.pdf
    │   ├── A01723833.pdf
    │   ├── A01724365.pdf
    │   └── A01724440.pdf
    ├── 404.html
    └── index.html
```