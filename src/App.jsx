import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import './App.css'
import { useContext } from 'react'
import { CartProvider } from './contexts/CartContext'
import Carrinho from './pages/Carrinho'
import ProdutoDetalhes from './pages/ProdutoDetalhes'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>

function AppConteudo(){
  const { interruptor } = useContext(ThemeContext)
  return (
    <div style={{
      backgroundColor: interruptor ? 'white' : '#2C2F33',
      color: interruptor ? '#2C2F33' : 'white',
      minHeight: '100vh'
    }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/carrinho" element={<PrivateRoute> <Carrinho /> </PrivateRoute>} />
          <Route path="/produto/:id" element={<ProdutoDetalhes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AuthProvider>
          <AppConteudo />
        </AuthProvider>
      </CartProvider>
    </ThemeProvider>
  )
}

export default App