import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedPosts from './components/FeaturedPosts'
import Footer from './components/Footer'
import ArticlePage from './components/ArticlePage'
import ArticleList from './components/ArticleList'
import './App.css'

// Página inicial com layout completo
function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedPosts />
      </main>
      <Footer />
    </>
  )
}

// Nova página para a rota /artigos (com layout completo)
function ArticlesPage() {
  return (
    <>
      <Header />
      <main>
        <ArticleList />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter basename="/audio-para-igrejas">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artigos" element={<ArticlesPage />} />
        <Route path="/artigos/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App