# Clothing Marketplace

A full-stack e-commerce application for buying and selling clothing products, built with **React + Tailwind CSS** on the frontend and **Node.js + Express + MongoDB** on the backend.

---

## Project Structure

```
.
├── client/          # React frontend
│   ├── public/
│   └── src/
│       ├── App.js   # Main app with Navbar & Homepage
│       └── index.css
├── server/          # Node.js backend
│   └── server.js    # Express server with MongoDB connection
└── snake (3).html   # Original Snake Game
```

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/) v9+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)

---

### Running the Server

```bash
cd server
npm install
# Create a .env file and set MONGO_URI=your_mongodb_uri (optional)
npm start
```

The API will be available at `http://localhost:5000`.

**Available endpoints:**
| Method | Route | Description |
|--------|-------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/products` | List sample products |

---

### Running the Client

```bash
cd client
npm install
npm start
```

The React app will open at `http://localhost:3000`.

---

## Environment Variables (Server)

Create a `server/.env` file with the following:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/clothing_marketplace
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB (Mongoose ODM) |
| Styling | Tailwind CSS |

---

## Features (Scaffolded)
- ✅ Responsive Navbar with Login / Sign Up buttons
- ✅ Hero banner with call-to-action buttons
- ✅ Category filter row
- ✅ Featured product grid with Add to Cart buttons
- ✅ Footer
- ✅ REST API with health check and products endpoints
- ✅ MongoDB connection setup via Mongoose

---

## License

MIT
