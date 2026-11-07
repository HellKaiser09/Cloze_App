# Conectores Cloze: cómo subirla a GitHub Pages

## 1. Crear el repositorio
1. Entra a https://github.com/new
2. Nombre: `conectores-cloze` (o el que quieras).
3. Elige **Public** (GitHub Pages gratis lo pide).
4. Toca **Create repository**.

## 2. Subir los archivos
1. En el repositorio nuevo, toca **uploading an existing file**.
2. Descomprime el zip y arrastra **todo lo que hay dentro** (los archivos y la carpeta `fonts`), no la carpeta del zip.
   En la raíz deben quedar `index.html`, `sw.js`, `manifest.webmanifest`, `fonts.css`, los íconos y la carpeta `fonts`.
3. Toca **Commit changes**.

## 3. Encender GitHub Pages
1. En el repositorio: **Settings → Pages**.
2. En *Source* elige **Deploy from a branch**.
3. Branch: **main**, carpeta **/ (root)** → **Save**.
4. Espera 1 o 2 minutos. Tu app queda en:
   `https://TU-USUARIO.github.io/conectores-cloze/`

## 4. Instalarla
- **Android (Chrome):** abre el link → menú ⋮ → **Instalar app** (o *Agregar a pantalla de inicio*).
- **iPhone (Safari):** abre el link → botón Compartir → **Agregar a inicio**.
- **Compu (Chrome o Edge):** abre el link → ícono de instalar en la barra de direcciones (una pantallita con flecha).

Ábrela **una vez con internet**. Desde ahí funciona sin internet.

## 5. Pasar tu progreso entre celular y compu
En la app: **Progreso → Exportar** → copia el código → mándatelo → en el otro dispositivo **Progreso → Importar** → pégalo.
Se combina con lo que ya tengas, así que no se pierde nada aunque importes el mismo código dos veces.

Consejo: exporta de vez en cuando como respaldo. Si borras los datos del navegador, el progreso de ese dispositivo se borra.

## Si después cambias algo
Sube los archivos nuevos y en `sw.js` cambia `cloze-v1` por `cloze-v2` (v3, v4…). Así cada dispositivo descarga la versión nueva la próxima vez que abra la app con internet.
