# YumeCraft - Ghibli AI Art Generator 

**YumeCraft** is a fullstack AI-powered web application that transforms user-uploaded photos or text prompts into Studio Ghibli-style art. It uses **React** for the frontend, **Spring Boot** for the backend, and integrates with the **Stability AI API** for both text-to-image and image-to-image generation.

---

## Features

- Convert photos into Ghibli-style images using AI
- Enter a text prompt to generate unique Ghibli-style artwork
- Backend powered by Spring Boot + OpenAPI (Swagger)
- Deployed frontend on Netlify, backend on Render
- Download and preview generated art

---

## Live Demo

- Frontend: [https://yumecraft.netlify.app](https://yumecraft.netlify.app/)  
- Backend API: [https://ghibli-deployment-latest.onrender.com](https://ghibli-deployment-latest.onrender.com)  
- Swagger Docs: [http://localhost:8080/swagger-ui/index.html](http://localhost:8080/swagger-ui/index.html)

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Spring Boot, Feign Client, Swagger (OpenAPI)
- **AI:** Stability AI API (Text-to-Image, Image-to-Image)
- **Deployment:** Netlify (frontend), Render (backend)
- **Tools:** Docker

---

## 🧪 Run Locally

### Backend (Spring Boot)
```bash
cd ghibliapi
./mvnw spring-boot:run
````

### Frontend (React)

```bash
cd gibli-art-generator
npm install
npm run dev
```
