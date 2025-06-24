import { Volume2, BookOpen, Mic, Settings, Headphones, Users, Mail, Github } from 'lucide-react'

const Footer = () => {
  const navigation = {
    categorias: [
      { name: 'Fundamentos', href: '#fundamentos', icon: BookOpen },
      { name: 'Equipamentos', href: '#equipamentos', icon: Mic },
      { name: 'Técnicas', href: '#tecnicas', icon: Settings },
      { name: 'Operação', href: '#operacao', icon: Headphones },
      { name: 'Gestão', href: '#gestao', icon: Users },
    ],
    recursos: [
      { name: 'Glossário de Termos', href: '#glossario' },
      { name: 'Calculadoras', href: '#calculadoras' },
      { name: 'Downloads', href: '#downloads' },
      { name: 'Links Úteis', href: '#links' },
    ],
    sobre: [
      { name: 'Sobre o Projeto', href: '#sobre' },
      { name: 'Como Contribuir', href: '#contribuir' },
      { name: 'Contato', href: '#contato' },
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Volume2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Áudio Básico</h3>
                <p className="text-sm text-gray-400">para Igrejas</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Guia completo para operação de som em ambientes de culto. Conteúdo técnico e prático para pastores, técnicos e voluntários.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              {navigation.categorias.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {navigation.recursos.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sobre */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sobre</h4>
            <ul className="space-y-2">
              {navigation.sobre.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Áudio Básico para Igrejas. Baseado em apresentação original sobre fundamentos de áudio.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desenvolvido para GitHub Pages
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

