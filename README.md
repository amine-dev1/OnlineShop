
# 🛠️ Fullstack App – React + Express + PostgreSQL

Ce projet est une application fullstack construite avec **React** (frontend) et **Express.js** (backend), connectée à une base de données **PostgreSQL**. Il inclut également des composants UI modernes avec **Tailwind CSS**, **DaisyUI** et **shadcn/ui**.

---

## 🧩 Stack utilisée

### Front-End (React)
- ⚛️ React
- 🎨 Tailwind CSS
- 🧩 shadcn/ui
- 📦 Axios

### Back-End (Express.js)
- 🚀 Express
- 🔐 Bcrypt
- 🌍 CORS
- 🌱 Dotenv
- 🧵 PostgreSQL (via `pg`)
- 🛡️ Express-rate-limit
- ♻️ Nodemon (dev)

---

## 📁 Structure du projet

```
/client         --> React frontend
/server         --> Express backend
/server/.env    --> Variables d’environnement
```

---

## 📦 Installation des dépendances

### 🔷 Frontend (React)

```bash
cd client
npm install
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
npm install axios
npx shadcn@latest init
npx shadcn@latest add button
```

> 💡 Le frontend utilise Vite. Assure-toi d’avoir Node.js ≥ 16.

---

### 🔶 Backend (Express)

```bash
cd server
npm install
npm install express cors dotenv bcrypt pg express-rate-limit
npm install --save-dev nodemon
```

---

## 🚀 Démarrer le projet

### Frontend (client)

```bash
cd client
npm run dev
```

### Backend (server)

```bash
cd server
npm run dev
```

Assure-toi que le fichier `.env` contient les bonnes variables, par exemple :

```env
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/ma_base
JWT_SECRET=ton_secret
```

---

## 🧪 Scripts utiles

### Frontend (`client/package.json`)
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### Backend (`server/package.json`)
```json
"scripts": {
  "dev": "nodemon index.js"
}
```

---

## ✅ Fonctionnalités prévues

- Authentification sécurisée
- Connexion à une base PostgreSQL
- Gestion des utilisateurs
- UI moderne et responsive
- Sécurité des API (rate limiting, CORS)

---

## 📌 À faire

- [ ] Mise en place de la base de données PostgreSQL
- [ ] Création des routes API
- [ ] Intégration frontend/backend
- [ ] Déploiement (Railway, Render, Vercel, etc.)

---

## 🧑‍💻 Développeur

**Amine Abouelouafa Elidrissi**  
Développeur Full Stack  
[LinkedIn](#) • [GitHub](#) • [Email](#)

---
