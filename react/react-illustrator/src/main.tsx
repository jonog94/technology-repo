// css
import './index.css';
import '@fortawesome/fontawesome-free/css/all.css';
// js
import Room from '@src/pages/Room'
import Login from '@src/pages/Login'
import Register from '@src/pages/Register'
import Collab from '@src/pages/Collab.tsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

const root = document.getElementById("root")!

createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="room" element={<Room />} />
            <Route path="collab" element={<Collab />} />
        </Routes>
    </BrowserRouter>
)