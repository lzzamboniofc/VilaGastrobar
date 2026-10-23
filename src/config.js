export const siteConfig = {
  modo: 'demonstracao',
  negocio: {
    nome: 'VILA gastrobar',
    nomeCurto: 'VILA',
    segmento: 'Gastrobar / restaurante',
    cidade: 'Itu',
    estado: 'SP',
    endereco: 'Rua Dr. Mário Costa de Oliveira, 65 - Vila Santa Terezinha, Itu - SP, 13310-330',
    enderecoConfirmado: true,
    logoOficial: null,
    logoConfirmada: false
  },
  contato: {
    telefone: '(11) 97687-3736',
    telefoneE164: '5511976873736',
    whatsappConfirmado: true,
    instagram: 'https://www.instagram.com/vilagastrobar/',
    instagramHandle: '@vilagastrobar'
  },
  horarios: [
    { dias: 'Segunda', horario: 'Fechado', confirmado: true },
    { dias: 'Terça a sábado', horario: '18h às 23h', confirmado: true },
    { dias: 'Domingo', horario: '12h às 16h', confirmado: true }
  ],
  destaques: [
    {
      titulo: 'Petiscos e pastéis',
      texto: 'Pastéis e opções para compartilhar aparecem de forma recorrente nas referências públicas do VILA.',
      confirmado: true
    },
    {
      titulo: 'Drinks e chopp',
      texto: 'Coquetéis, caipirinhas, cerveja e chopp fazem parte do perfil de bar do estabelecimento.',
      confirmado: true
    },
    {
      titulo: 'Almoço de domingo',
      texto: 'Fontes públicas recentes indicam funcionamento aos domingos no horário de almoço.',
      confirmado: true
    }
  ],
  faq: [
    {
      pergunta: 'Onde fica o VILA?',
      resposta: 'Na Rua Dr. Mário Costa de Oliveira, 65, Vila Santa Terezinha, em Itu - SP.',
      confirmado: true
    },
    {
      pergunta: 'Qual é o horário?',
      resposta: 'As fontes públicas mais recentes consultadas indicam terça a sábado das 18h às 23h e domingo das 12h às 16h. Confirme no Instagram antes da visita.',
      confirmado: true
    },
    {
      pergunta: 'Como falar com o VILA?',
      resposta: 'O telefone público encontrado é (11) 97687-3736 e há referência de atendimento pelo WhatsApp.',
      confirmado: true
    },
    {
      pergunta: 'O cardápio e os preços estão no site?',
      resposta: 'Ainda não. Esta versão evita publicar valores ou itens de cardápio sem confirmação direta do estabelecimento. O ideal é integrar o cardápio oficial quando o link atual estiver confirmado.',
      confirmado: true
    }
  ],
  imagens: {
    hero: {
      url: 'https://images.unsplash.com/photo-1766589152458-2b8ffdaae7f9?auto=format&fit=crop&fm=webp&q=82&w=1800',
      provisoria: true,
      fonte: 'https://unsplash.com/photos/1SuTQ2sR88g',
      autor: 'Diego Arenas de Rodrigo',
      alt: 'Interior de restaurante com iluminação quente e paredes escuras'
    },
    ambiente: {
      url: 'https://images.unsplash.com/photo-1761646401843-c0d2321e882b?auto=format&fit=crop&fm=webp&q=82&w=1600',
      provisoria: true,
      fonte: 'https://unsplash.com/photos/l4Vo1CR9YUY',
      autor: 'Chalo Gallardo',
      alt: 'Área externa de bar e restaurante com mesas e luzes quentes'
    },
    mesa: {
      url: 'https://images.unsplash.com/photo-1763142045723-230b56924c6a?auto=format&fit=crop&fm=webp&q=82&w=1600',
      provisoria: true,
      fonte: 'https://unsplash.com/photos/Pgu0wF6EOOE',
      autor: 'Robert | Visual Diary',
      alt: 'Mesas de restaurante à noite com iluminação acolhedora'
    }
  },
  links: {
    directions: 'https://www.google.com/maps/search/?api=1&query=Rua%20Dr.%20M%C3%A1rio%20Costa%20de%20Oliveira%2065%20Itu%20SP'
  },
  seo: {
    title: 'VILA gastrobar | Itu',
    description: 'VILA gastrobar em Itu: gastronomia, drinks e encontros na Vila Santa Terezinha.'
  }
};
