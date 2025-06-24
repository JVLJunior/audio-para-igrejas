import { BookOpen, Mic, Settings, Headphones, Users, Cog } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { useNavigate } from 'react-router-dom'
import { useArticles } from '../hooks/useArticles.js'

const Categories = () => {
  const navigate = useNavigate()
  const { getArticlesByCategory } = useArticles()

  const categories = [
    {
      id: 'fundamentos',
      title: 'Fundamentos',
      description: 'Conceitos básicos de áudio, acústica, frequências e como o som se comporta em templos.',
      icon: BookOpen,
      color: 'bg-blue-500',
      articles: 4,
      topics: ['Conceitos de Som', 'Acústica de Templos', 'Decibéis e Volume', 'Inteligibilidade']
    },
    {
      id: 'equipamentos',
      title: 'Equipamentos',
      description: 'Guias completos sobre microfones, mesas de som, amplificadores e todos os equipamentos essenciais.',
      icon: Mic,
      color: 'bg-green-500',
      articles: 5,
      topics: ['Microfones', 'Cabos e Conectores', 'Mesas de Som', 'Amplificadores', 'Monitores']
    },
    {
      id: 'técnicas',
      title: 'Técnicas',
      description: 'Equalização, compressão, controle de ganho e todas as técnicas para obter som profissional.',
      icon: Settings,
      color: 'bg-purple-500',
      articles: 4,
      topics: ['Equalização', 'Ganho vs Volume', 'Compressão', 'Efeitos de Áudio']
    },
    {
      id: 'operacao',
      title: 'Operação',
      description: 'Técnicas práticas de mixagem, configuração de sistemas e solução de problemas comuns.',
      icon: Headphones,
      color: 'bg-orange-500',
      articles: 4,
      topics: ['Configuração', 'Mixagem', 'Solução de Problemas', 'Manutenção']
    },
    {
      id: 'aplicacoes',
      title: 'Aplicações',
      description: 'Configurações específicas para diferentes tipos de culto, gravação e streaming.',
      icon: Cog,
      color: 'bg-red-500',
      articles: 4,
      topics: ['Tipos de Culto', 'Gravação', 'Streaming', 'Eventos Especiais']
    },
    {
      id: 'gestao',
      title: 'Gestão',
      description: 'Treinamento de equipes, planejamento de orçamento e organização do ministério de áudio.',
      icon: Users,
      color: 'bg-indigo-500',
      articles: 4,
      topics: ['Treinamento', 'Orçamento', 'Segurança', 'Tendências']
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore as Categorias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conteúdo organizado por temas para facilitar seu aprendizado, desde conceitos básicos até técnicas avançadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            const firstArticle = getArticlesByCategory(category.id)[0]

            return (
              <div key={category.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`${category.color} p-3 rounded-lg mr-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-sm text-gray-500">{category.articles} artigos</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Tópicos inclusos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.topics.map((topic, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => {
                      if (firstArticle?.id) {
                        navigate(`/artigos/${firstArticle.id}`)
                      }
                    }}
                  >
                    Explorar {category.title}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categories
