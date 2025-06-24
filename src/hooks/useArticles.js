// Hook para gerenciar artigos
import { useState, useEffect } from 'react'
import articlesData from '../data/articles.json'

export const useArticles = () => {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      setArticles(articlesData.articles)
      setCategories(articlesData.categories)
      setLoading(false)
    } catch (err) {
      setError('Erro ao carregar artigos')
      setLoading(false)
    }
  }, [])

  const getArticleById = (id) => {
    return articles.find(article => article.id === id)
  }

  const getArticlesByCategory = (categoryId) => {
    return articles.filter(article => 
      article.category.toLowerCase().replace(/\s+/g, '-') === categoryId ||
      article.category.toLowerCase() === categoryId
    )
  }

  const getFeaturedArticles = () => {
    return articles.filter(article => article.featured)
  }

  const searchArticles = (query) => {
    if (!query) return articles
    
    const lowercaseQuery = query.toLowerCase()
    return articles.filter(article =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.excerpt.toLowerCase().includes(lowercaseQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }

  const getRelatedArticles = (currentArticle, limit = 3) => {
    return articles
      .filter(article => 
        article.id !== currentArticle.id && 
        (article.category === currentArticle.category ||
         article.tags.some(tag => currentArticle.tags.includes(tag)))
      )
      .slice(0, limit)
  }

  return {
    articles,
    categories,
    loading,
    error,
    getArticleById,
    getArticlesByCategory,
    getFeaturedArticles,
    searchArticles,
    getRelatedArticles
  }
}

