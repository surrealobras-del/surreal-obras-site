# Surreal Construções e Reformas

Site institucional para mostrar obras e informações da empresa Surreal Construções e Reformas.

## 🚀 Stack Tecnológica

### Frontend
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização utilitária
- **Framer Motion** - Animações fluidas
- **shadcn/ui** - Componentes UI modernos
- **Swiper** - Carrosséis interativos
- **Zod** - Validação de schemas
- **nuqs** - Gerenciamento de query strings

### Backend
- **Supabase** - Banco de dados e autenticação

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp .env.local.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais do Supabase:
```
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
```

3. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 🎨 Configuração

- **Cor principal**: #FFCC00 (Amarelo)
- **Cor secundária**: #000000 (Preto)
- **Logo**: https://gukpisxmjvmfukxhkmrt.supabase.co/storage/v1/object/public/project/logo_black.png

## 📱 Seções do Site

- **Hero** - Seção inicial com call-to-action
- **Sobre** - Informações sobre a empresa
- **Serviços** - Lista de serviços oferecidos
- **Obras** - Portfolio de projetos realizados (com Swiper)
- **Contato** - Formulário e informações de contato

## 📞 Informações de Contato

- **Instagram**: [@surrealobras](https://www.instagram.com/surrealobras/)
- **Facebook**: [Surreal Obras](https://www.facebook.com/profile.php?id=61587587356248)
- **YouTube**: [Canal Surreal Obras](https://www.youtube.com/channel/UCSkZqNfTNl_PSYA9UEZbyhw)
- **Email**: surrealobras@gmail.com
- **Telefone**: (45) 9988-3622
- **Endereço**: R. Cuiabá, 4570 - Alto Alegre, Cascavel - PR, 85805-260

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📝 Estrutura do Projeto

```
surreal-obras-site/
├── app/                 # App Router do Next.js
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página inicial
│   └── globals.css      # Estilos globais
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho com navegação
│   ├── Footer.tsx      # Rodapé com informações
│   └── sections/       # Seções da página
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Portfolio.tsx
│       └── Contact.tsx
├── components/ui/       # Componentes shadcn/ui
├── lib/                 # Utilitários e configurações
│   ├── supabase.ts     # Cliente Supabase
│   └── utils.ts         # Funções utilitárias
└── public/              # Arquivos estáticos
```

## 🎯 Próximos Passos

- Integrar imagens reais das obras do Supabase
- Adicionar sistema de gerenciamento de conteúdo
- Implementar formulário de contato com Supabase
- Adicionar mais animações e interatividade
