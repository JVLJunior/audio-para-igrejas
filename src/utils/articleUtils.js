// Utilitários para carregar e processar conteúdo markdown
export const loadMarkdownContent = async (contentFile) => {
  try {
    // Simular carregamento de arquivo markdown
    // Em uma implementação real, isso carregaria o arquivo da pasta content
    const response = await import(`../content/${contentFile}?raw`)
    return response.default
  } catch (error) {
    console.error(`Erro ao carregar ${contentFile}:`, error)
    return null
  }
}

export const parseMarkdown = (markdown) => {
  if (!markdown) return ''
  
  // Parser básico de markdown para HTML
  let html = markdown
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-900">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-6 text-gray-900">$1</h1>')
    
    // Bold and italic
    .replace(/\*\*(.*)\*\*/gim, '<strong class="font-semibold">$1</strong>')
    .replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
    
    // Lists
    .replace(/^\* (.*$)/gim, '<li class="mb-1">$1</li>')
    .replace(/^- (.*$)/gim, '<li class="mb-1">$1</li>')
    
    // Paragraphs
    .replace(/\n\n/gim, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
    
    // Code blocks (basic)
    .replace(/`([^`]+)`/gim, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>')

  // Wrap in paragraph tags
  html = '<p class="mb-4 text-gray-700 leading-relaxed">' + html + '</p>'
  
  // Clean up empty paragraphs
  html = html.replace(/<p class="mb-4 text-gray-700 leading-relaxed"><\/p>/gim, '')
  
  // Wrap lists in ul tags
  html = html.replace(/(<li class="mb-1">.*<\/li>)/gims, '<ul class="list-disc list-inside mb-4 space-y-1">$1</ul>')
  
  return html
}

export const extractTableOfContents = (markdown) => {
  if (!markdown) return []
  
  const headings = []
  const lines = markdown.split('\n')
  
  lines.forEach((line, index) => {
    const match = line.match(/^(#{1,3})\s+(.*)$/)
    if (match) {
      const level = match[1].length
      const title = match[2]
      const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
      
      headings.push({
        id,
        title,
        level,
        line: index
      })
    }
  })
  
  return headings
}

export const formatReadTime = (readTime) => {
  return readTime || '5 min'
}

export const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

