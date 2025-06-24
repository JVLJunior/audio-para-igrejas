import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Clock, BookOpen, User, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { useArticles } from '../hooks/useArticles.js'
import { parseMarkdown, extractTableOfContents, formatDate } from '../utils/articleUtils.js'

// Importa todos os arquivos .md da pasta content
const markdownModules = import.meta.glob('../content/*.md', { as: 'raw' })

const ArticlePage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { getArticleById, getRelatedArticles } = useArticles()

  const [article, setArticle] = useState(null)
  const [content, setContent] = useState('')
  const [tableOfContents, setTableOfContents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true)

      const articleData = getArticleById(slug)

      if (!articleData) {
        console.warn('Artigo não encontrado!')
        setLoading(false)
        return
      }

      setArticle(articleData)

      const filePath = `../content/${articleData.contentFile}`
      const loader = markdownModules[filePath]

      if (loader) {
        try {
          const markdownContent = await loader()
          const htmlContent = parseMarkdown(markdownContent)
          const toc = extractTableOfContents(markdownContent)

          setContent(htmlContent)
          setTableOfContents(toc)
        } catch (error) {
          console.error('Erro ao carregar markdown:', error)
          setContent(`<h1>${articleData.title}</h1><p>Erro ao carregar conteúdo.</p>`)
        }
      } else {
        console.warn('Arquivo markdown não encontrado:', filePath)
        setContent(`<h1>${articleData.title}</h1><p>Conteúdo não encontrado.</p>`)
      }

      setLoading(false)
    }

    if (slug) {
      loadArticle()
    }
  }, [slug, getArticleById])

  const relatedArticles = article ? getRelatedArticles(article) : []

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando artigo...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 text-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Artigo não encontrado</h1>
          <p className="text-gray-600 mb-6">
            O artigo que você tentou acessar não existe ou foi removido.
          </p>
          <Button onClick={() => navigate('/artigos', { replace: true })} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a lista de artigos
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
        <button onClick={() => navigate('/')} className="hover:text-blue-600 transition-colors">
          Início
        </button>
        <ChevronRight className="h-4 w-4" />
        <span className="text-blue-600">{article.category}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-gray-900">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center mb-4">
          <Button onClick={() => navigate('/', { replace: true })} variant="ghost" size="sm" className="mr-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {article.title}
        </h1>

        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {article.author}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {article.readTime}
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            {formatDate(article.date)}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {tableOfContents.length > 0 && (
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Índice</h3>
              <nav className="space-y-2">
                {tableOfContents.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm hover:text-blue-600 transition-colors ${
                      heading.level === 1
                        ? 'font-medium text-gray-900'
                        : heading.level === 2
                        ? 'text-gray-700 pl-4'
                        : 'text-gray-600 pl-8'
                    }`}
                  >
                    {heading.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}

        <div className={tableOfContents.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'}>
          <article className="prose prose-lg max-w-none">
            <div
              dangerouslySetInnerHTML={{ __html: content }}
              className="article-content"
            />
          </article>

          {relatedArticles.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Artigos Relacionados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <div
                    key={relatedArticle.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => navigate(`/artigos/${relatedArticle.id}`)}
                  >
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {relatedArticle.category}
                    </span>
                    <h4 className="font-semibold text-gray-900 mt-3 mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {relatedArticle.excerpt}
                    </p>
                    <div className="flex items-center mt-4 text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {relatedArticle.readTime}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticlePage
