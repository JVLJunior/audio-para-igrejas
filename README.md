# Áudio Básico para Igrejas - Blog

Este é um blog completo sobre áudio para igrejas, criado a partir de uma apresentação PowerPoint sobre fundamentos técnicos e práticos para operação de som em ambientes de culto.

## 🎯 Sobre o Projeto

O blog "Áudio Básico para Igrejas" foi desenvolvido para ajudar pastores, líderes de louvor, técnicos de som e voluntários a compreenderem e implementarem sistemas de áudio eficazes em suas comunidades religiosas.

### Conteúdo Incluído

- **Fundamentos do Som**: Conceitos básicos de áudio, acústica e comportamento do som em templos
- **Equipamentos**: Guias completos sobre microfones, mesas de som, amplificadores e todos os equipamentos essenciais
- **Técnicas**: Equalização, compressão, controle de ganho e técnicas para obter som profissional
- **Operação**: Técnicas práticas de mixagem, configuração de sistemas e solução de problemas
- **Aplicações**: Configurações específicas para diferentes tipos de culto, gravação e streaming
- **Gestão**: Treinamento de equipes, planejamento de orçamento e organização do ministério de áudio

## 🚀 Deploy no GitHub Pages

### Opção 1: Deploy Direto dos Arquivos Build

1. **Faça o build da aplicação**:
   ```bash
   npm run build
   ```

2. **Crie um novo repositório no GitHub** com o nome desejado (ex: `audio-igrejas-blog`)

3. **Configure o GitHub Pages**:
   - Vá para Settings > Pages no seu repositório
   - Selecione "Deploy from a branch"
   - Escolha a branch `main` e pasta `/ (root)`

4. **Faça upload dos arquivos**:
   - Copie todo o conteúdo da pasta `dist/` para a raiz do seu repositório
   - Commit e push para o GitHub

### Opção 2: Deploy com GitHub Actions (Recomendado)

1. **Crie um novo repositório no GitHub** e faça push de todo o código fonte

2. **Crie o arquivo `.github/workflows/deploy.yml`**:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3

       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'

       - name: Install dependencies
         run: npm ci

       - name: Build
         run: npm run build

       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         if: github.ref == 'refs/heads/main'
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

3. **Configure o GitHub Pages**:
   - Vá para Settings > Pages no seu repositório
   - Selecione "Deploy from a branch"
   - Escolha a branch `gh-pages`

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ 
- npm ou pnpm

### Instalação

1. Clone o repositório:
   ```bash
   git clone <seu-repositorio>
   cd audio-igrejas-blog
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   pnpm run dev
   ```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Faz o build para produção
- `npm run preview` - Visualiza o build de produção localmente

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Cabeçalho e navegação
│   ├── Hero.jsx        # Seção principal da homepage
│   ├── Categories.jsx  # Seção de categorias
│   ├── FeaturedPosts.jsx # Artigos em destaque
│   ├── ArticlePage.jsx # Página individual de artigos
│   ├── Footer.jsx      # Rodapé
│   └── ui/            # Componentes UI (shadcn/ui)
├── content/           # Conteúdo dos artigos em Markdown
├── assets/           # Assets estáticos
├── App.jsx          # Componente principal
├── App.css          # Estilos principais
└── main.jsx         # Ponto de entrada
```

## 🎨 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **Framer Motion** - Animações (disponível)

## 📝 Personalização

### Adicionando Novos Artigos

1. Crie um novo arquivo Markdown em `src/content/`
2. Adicione os dados do artigo no componente `ArticlePage.jsx`
3. Atualize a lista de artigos em destaque se necessário

### Modificando o Design

- Cores e temas: Edite as variáveis CSS em `src/App.css`
- Layout: Modifique os componentes em `src/components/`
- Responsividade: Use as classes do Tailwind CSS

## 📄 Licença

Este projeto foi desenvolvido como uma ferramenta educacional para igrejas. Sinta-se livre para usar, modificar e distribuir conforme necessário para fins ministeriais.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tem sugestões de melhorias ou novos conteúdos sobre áudio para igrejas, sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abrir um Pull Request

## 📞 Suporte

Para dúvidas sobre o conteúdo técnico ou uso da aplicação, abra uma issue no repositório do GitHub.

---

**Desenvolvido com ❤️ para o ministério de áudio em igrejas**

