import { Link } from 'react-router-dom'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 'fundamentos-som',
      title: 'Entendendo o Som: Conceitos Básicos para Igrejas',
      excerpt: 'Aprenda os fundamentos do som, incluindo frequência, amplitude e timbre, e como estes conceitos se aplicam na prática em ambientes de culto.',
      category: 'Fundamentos',
      readTime: '15 min',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 'microfones',
      title: 'Microfones para Igrejas: Guia Completo de Escolha e Uso',
      excerpt: 'Tudo sobre microfones dinâmicos vs condensadores, aplicações específicas para pastores, cantores e instrumentos, e técnicas de uso correto.',
      category: 'Equipamentos',
      readTime: '20 min',
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 'equalizacao',
      title: 'Equalização para Igrejas: Moldando o Som Perfeito',
      excerpt: 'Domine a arte da equalização para obter clareza na voz do pastor, presença nos instrumentos e um som equilibrado em todo o culto.',
      category: 'Técnicas',
      readTime: '18 min',
      image: '/api/placeholder/400/250',
      featured: true
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Artigos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comece sua jornada com nossos artigos mais populares e fundamentais para qualquer operador de som em igrejas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/artigos/${post.id}`}
              className={`block bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <div className={`bg-gradient-to-br from-blue-500 to-indigo-600 ${index === 0 ? 'h-64' : 'h-48'} flex items-center justify-center`}>
                <BookOpen className={`text-white ${index === 0 ? 'h-16 w-16' : 'h-12 w-12'}`} />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center ml-auto text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className={`font-bold text-gray-900 mb-3 ${index === 0 ? 'text-2xl' : 'text-xl'}`}>
                  {post.title}
                </h3>

                <p className={`text-gray-600 mb-4 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                  {post.excerpt}
                </p>

                <span className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Ler artigo completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/artigos">
            <Button size="lg" variant="outline" className="px-8 py-3">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts
