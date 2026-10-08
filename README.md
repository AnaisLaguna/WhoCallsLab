# Kaspersky Who Calls --- Security Lab

## Guía de instalación y ejecución del webinar

### 1. Descripción

**Kaspersky Who Calls --- Security Lab** es una demostración web
interactiva diseñada para acompañar un webinar sobre identificación de
llamadas y mensajes sospechosos.

El laboratorio permite mostrar dos experiencias:

-   **Llamadas:** identificación y análisis de escenarios de llamadas
    sospechosas.
-   **Mensajes:** análisis de conversaciones de WhatsApp y SMS con
    posibles señales de phishing, smishing e ingeniería social.

> La experiencia es una simulación educativa. Los escenarios, números,
> enlaces y resultados mostrados dentro del laboratorio son ficticios.

------------------------------------------------------------------------

## 2. Requisitos

Para ejecutar el laboratorio se necesita:

-   Windows, macOS o Linux.
-   Visual Studio Code.
-   Navegador web actualizado:
    -   Google Chrome
    -   Microsoft Edge
    -   Mozilla Firefox
-   Extensión **Live Server** para Visual Studio Code.

No es necesario instalar Node.js, Python, bases de datos ni un servidor
web adicional.

------------------------------------------------------------------------

## 3. Estructura de la carpeta

La carpeta debe conservar esta estructura:

``` text
WhoCallsLab/
│
├── index.html
├── style.css
├── script.js
└── who-calls-logo.png
```

### Archivos principales

**index.html** - Contiene la estructura de la página. - Contiene las
pantallas del teléfono. - Contiene los escenarios de llamadas y
mensajes.

**style.css** - Controla el diseño visual. - Colores, tarjetas,
teléfono, animaciones y distribución.

**script.js** - Controla la interacción. - Cambios de pantalla. - Reloj
del teléfono. - Flujo de llamadas. - Flujo de mensajes. - Análisis y
resultados de cada escenario.

**who-calls-logo.png** - Logo utilizado en el laboratorio. - Debe
permanecer dentro de la misma carpeta.

------------------------------------------------------------------------

# 4. Cómo abrir el laboratorio

## Paso 1 --- Abrir Visual Studio Code

Abre **Visual Studio Code**.

Después selecciona:

**File → Open Folder**

y abre la carpeta:

``` text
WhoCallsLab
```

------------------------------------------------------------------------

## Paso 2 --- Verificar los archivos

En el panel izquierdo de Visual Studio Code deben aparecer:

``` text
index.html
style.css
script.js
who-calls-logo.png
```

Si alguno de estos archivos no está en la carpeta, la experiencia puede
no funcionar correctamente.

------------------------------------------------------------------------

## Paso 3 --- Instalar Live Server

En Visual Studio Code:

1.  Abre **Extensions**.
2.  Busca:

``` text
Live Server
```

3.  Instala la extensión de Live Server.

------------------------------------------------------------------------

## Paso 4 --- Ejecutar

Abre:

``` text
index.html
```

Después haz clic derecho sobre el archivo y selecciona:

``` text
Open with Live Server
```

El navegador abrirá automáticamente el laboratorio.

La dirección normalmente tendrá una forma similar a:

``` text
http://127.0.0.1:5500/
```

o:

``` text
http://localhost:5500/
```

La dirección exacta puede variar dependiendo de la configuración de Live
Server.

------------------------------------------------------------------------

# 5. Cómo iniciar el webinar

Una vez abierta la página:

1.  Espera a que cargue completamente el laboratorio.
2.  Verifica que aparezca el encabezado **Kaspersky Who Calls ---
    Security Lab**.
3.  Verifica que el teléfono virtual aparezca correctamente.
4.  Haz clic en:

**INICIAR LABORATORIO**

También puedes entrar directamente desde los módulos disponibles en el
laboratorio.

------------------------------------------------------------------------

# 6. Flujo recomendado para la presentación

## A. Introducción

Antes de comenzar la interacción, explicar brevemente:

> "Vamos a utilizar un laboratorio interactivo para simular cómo una
> persona puede encontrarse con una llamada o mensaje sospechoso y qué
> señales pueden ayudar a tomar una decisión antes de interactuar."

------------------------------------------------------------------------

# 7. Demostración de LLAMADAS

Desde el teléfono:

``` text
Llamadas
↓
Seleccionar escenario
↓
Llamada
↓
Análisis
↓
Perfil / clasificación
↓
Señales detectadas
↓
Decisión
```

### Escenarios disponibles

-   🏦 Supuesto banco
-   📦 Servicio de paquetería
-   🎁 Centro de premios
-   🛠️ Soporte técnico
-   🔇 Llamada silenciosa

### Recomendación para el webinar

No es necesario mostrar todos los escenarios.

Se recomienda seleccionar **2 o 3** para mantener el ritmo de la
presentación.

Un orden sugerido:

1.  🏦 Supuesto banco
2.  📦 Servicio de paquetería
3.  🔇 Llamada silenciosa

Esto permite explicar diferentes tipos de señales.

------------------------------------------------------------------------

# 8. Demostración de MENSAJES

Desde el teléfono:

``` text
Mensajes
↓
WhatsApp / SMS
↓
Seleccionar mensaje
↓
Abrir conversación
↓
Analizar mensaje
↓
Análisis de 4 etapas
↓
Resultado específico
↓
Señales detectadas
↓
Objetivo probable
↓
Recomendación
```

------------------------------------------------------------------------

## WhatsApp

Escenarios disponibles:

### 🎁 Centro de Premios

Categoría:

**Fraude de premio / phishing**

Permite explicar:

-   Premio inesperado.
-   Presión de tiempo.
-   Enlace externo.
-   Posible obtención de información.

### 💳 Crédito Express

Categoría:

**Suplantación financiera**

Permite explicar:

-   Oferta financiera no solicitada.
-   Solicitud de información.
-   Enlace de validación.

### 🔐 Seguridad de cuenta

Categoría:

**Robo de credenciales**

Permite explicar:

-   Alerta inesperada.
-   Urgencia.
-   Supuesta verificación de cuenta.

### 👤 Contacto desconocido

Categoría:

**Ingeniería social**

Permite explicar:

-   Identidad no confirmada.
-   Generación de confianza.
-   Posible pretexto para una solicitud posterior.

------------------------------------------------------------------------

## SMS

### 🏦 Seguridad bancaria

Categoría:

**Smishing bancario**

Permite explicar:

-   Suplantación bancaria.
-   Actividad sospechosa.
-   Enlace de verificación.

### 📦 Servicio de paquetería

Categoría:

**Smishing de paquetería**

Permite explicar:

-   Problema de entrega.
-   Acción requerida.
-   Enlace externo.

------------------------------------------------------------------------

# 9. Cómo explicar el análisis de mensajes

La pantalla de análisis utiliza cuatro etapas:

### 01 --- Remitente y contexto

Se revisa quién envía el mensaje y cuál es el contexto de la
interacción.

### 02 --- Contenido y urgencia

Se observan frases que buscan provocar una reacción inmediata.

### 03 --- Enlace y señales

Se revisa la presencia de enlaces y otros elementos que pueden
representar señales de riesgo.

### 04 --- Objetivo y clasificación

Se determina el tipo de escenario y cuál podría ser el objetivo de la
interacción.

Después se presenta:

-   Identificación.
-   Nivel de riesgo.
-   Categoría.
-   Señales detectadas.
-   Objetivo probable.
-   Recomendación de protección.

------------------------------------------------------------------------

# 10. Recomendación para el momento del webinar

Para una demostración de aproximadamente 15--20 minutos:

### 1. Introducción --- 2 minutos

Explicar el problema y presentar el Security Lab.

### 2. Llamada bancaria --- 3 minutos

Mostrar cómo una llamada puede generar confianza mediante la
suplantación de una institución.

### 3. Llamada silenciosa --- 2 minutos

Explicar por qué una llamada sin interlocutor también puede representar
una señal que merece atención.

### 4. WhatsApp --- 5 minutos

Mostrar:

**Centro de Premios**

y después:

**Seguridad de cuenta**

### 5. SMS --- 3 minutos

Mostrar:

**Seguridad bancaria**

o:

**Servicio de paquetería**

### 6. Cierre --- 2 minutos

Concluir con la idea:

> "La recomendación no es reaccionar más rápido, sino detenerse,
> identificar las señales y verificar antes de interactuar."

------------------------------------------------------------------------

# 11. Recomendaciones técnicas antes del webinar

Antes de iniciar la presentación:

-   Abrir el laboratorio con anticipación.
-   Verificar que Live Server esté funcionando.
-   Probar el botón **INICIAR LABORATORIO**.
-   Probar al menos una llamada.
-   Probar un escenario de WhatsApp.
-   Probar un escenario de SMS.
-   Confirmar que el reloj del teléfono se actualice.
-   Confirmar que el logo aparezca correctamente.
-   Mantener abierto Visual Studio Code por si se necesita modificar
    algún contenido.

------------------------------------------------------------------------

# 12. Si se modifica algún archivo

Cuando se modifica:

``` text
index.html
style.css
script.js
```

guardar con:

``` text
Ctrl + S
```

Después actualizar el navegador.

Si los cambios no aparecen:

``` text
Ctrl + F5
```

Esto fuerza una recarga completa de la página.

------------------------------------------------------------------------

# 13. Problemas frecuentes

## El diseño aparece sin estilos

Verificar que:

``` text
style.css
```

esté en la misma carpeta que:

``` text
index.html
```

------------------------------------------------------------------------

## El logo no aparece

Verificar que:

``` text
who-calls-logo.png
```

esté exactamente dentro de:

``` text
WhoCallsLab/
```

------------------------------------------------------------------------

## Los botones no funcionan

Verificar que:

``` text
script.js
```

esté dentro de la carpeta y que `index.html` lo cargue al final del
documento.

------------------------------------------------------------------------

## Los cambios no aparecen

Utilizar:

``` text
Ctrl + F5
```

También verificar que Live Server continúe ejecutándose.

------------------------------------------------------------------------

## Aparecen errores en la consola

En Chrome o Edge:

``` text
F12
→ Console
```

Revisar los mensajes mostrados en rojo.

------------------------------------------------------------------------

# 14. Importante durante la presentación

Este laboratorio es una **simulación educativa**.

Los escenarios incluidos:

-   No representan llamadas reales.
-   No utilizan números telefónicos reales.
-   No utilizan sitios reales de captura de información.
-   Los dominios `.example` son utilizados únicamente para la
    demostración.

La experiencia está diseñada para explicar el proceso de identificación
y análisis de amenazas de forma visual e interactiva.

------------------------------------------------------------------------

# 15. Detener el laboratorio

Cuando termine la presentación:

1.  Cierra la pestaña del navegador.
2.  Regresa a Visual Studio Code.
3.  Si deseas detener el servidor, utiliza la opción de Live Server para
    detenerlo.

Los archivos originales permanecen dentro de la carpeta:

``` text
WhoCallsLab
```

------------------------------------------------------------------------

## Resumen rápido

``` text
1. Abrir Visual Studio Code
        ↓
2. Abrir carpeta WhoCallsLab
        ↓
3. Abrir index.html
        ↓
4. Click derecho
        ↓
5. Open with Live Server
        ↓
6. Se abre el navegador
        ↓
7. INICIAR LABORATORIO
        ↓
8. Elegir Llamadas o Mensajes
        ↓
9. Ejecutar la demostración
```

------------------------------------------------------------------------

## Estructura final

``` text
WhoCallsLab/
│
├── index.html          ← Interfaz
├── style.css           ← Diseño visual
├── script.js           ← Interactividad y simulación
└── who-calls-logo.png  ← Logo
```

**Kaspersky Who Calls --- Security Lab**

Simulación educativa para demostración durante webinar.
