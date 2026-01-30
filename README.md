# 📱 Licorería Guayabal – App Móvil

Aplicación móvil desarrollada con **React Native CLI**, utilizando el patrón de arquitectura **MVVM (Model–View–ViewModel)**.  
La app permite registro e inicio de sesión de usuarios, manejo de sesión con vistas protegidas y cierre de sesión, consumiendo una **API REST**.

---

## 🧩 Tecnologías utilizadas

- React Native CLI
- TypeScript
- Arquitectura MVVM
- Axios
- AsyncStorage
- API REST
- Git / GitHub

---

## 📁 Estructura del proyecto

src/
├── model/
├── navigation/
├── presentation/
│ ├── screens/
│ ├── styles/
│ └── theme/
├── services/
├── shared/
│ └── storage/
└── viewmodel/



---

## ⚙️ Requisitos previos

- Node.js (v16 o superior)
- npm o yarn
- React Native CLI
- Android Studio
- JDK 11 o superior
- Emulador Android o dispositivo físico

---

## 🚀 Instalación y ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/USUARIO/licoreria-guayabal.git
cd licoreria-guayabal

Instalar dependencias
npm install


o

yarn install

3️⃣ Configuración de variables de entorno (.env)

Crear un archivo .env en la raíz del proyecto:

API_URL=http://localhost:8000/api


📌 Notas:

Si se usa un dispositivo físico, reemplazar localhost por la IP del computador.

Para Android Emulator usar:

API_URL=http://10.0.2.2:8000/api

4️⃣ Ejecutar la aplicación
npx react-native run-android


Si el servidor Metro no se inicia automáticamente:

npx react-native start

🔐 Uso de variables de entorno

Ejemplo de configuración en services/api.ts:

import axios from "axios";
import { API_URL } from "@env";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

🧪 Funcionalidades principales

Registro de usuarios

Inicio de sesión

Persistencia de sesión (token)

Vistas protegidas

Cierre de sesión

Diseño profesional y coherente

Separación de responsabilidades (MVVM)

📸 Evidencias

Pantalla de Login

Pantalla de Registro

Pantalla Home (vista protegida)