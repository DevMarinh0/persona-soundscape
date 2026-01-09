# persona-soundscape

Uma biblioteca musical interativa para as trilhas sonoras dos jogos *Persona 1, 2, 3, 4 e 5*, inspirada no design do site oficial do 30º aniversário da série. Explore músicas por jogo, categoria ou compositor, e ouça trechos diretamente do Spotify ou YouTube — tudo em um site público.


## 🚀 Funcionalidades

- Navegação fluida por jogos (P1, P2, P3, P4 e P5)
- Busca global por título, compositor ou categoria
- Player contínuo: a música não para ao mudar de página
- Integração com Spotify e YouTube via embeds oficiais
- Design responsivo com identidade visual da série Persona
- Totalmente público — sem cadastro, sem autenticação

## 🛠️ Stack Tecnológica

### Frontend
- **Framework**: Vue.js 3 (Composition API)
- **Gerenciamento de Estado**: Pinia
- **Roteamento**: Vue Router
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion (`motion-vue`)
- **Build**: Vite

### Backend
- **Framework**: ASP.NET Core 8 (Minimal API)
- **Dados**: JSON embutido (`persona-music.json`)
- **Cache**: `IMemoryCache` (opcional)
- **Documentação**: Swagger/OpenAPI

### Hospedagem
- **Frontend**: Vercel ou Netlify  
- **Backend**: Render, Railway ou Azure App Service

## 📁 Estrutura do Projeto

```
persona-soundscape/
├── frontend/                  # Aplicação Vue.js
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── views/
│   │   ├── stores/
│   │   ├── router/
│   │   └── services/
│   └── vite.config.js
│
└── backend/                   # API em ASP.NET Core
    ├── PersonaSoundscape.Api/
    │   ├── Data/
    │   ├── Models/
    │   ├── Services/
    │   ├── Endpoints/
    │   └── Program.cs
    └── persona-soundscape.sln
```

##  Como Executar Localmente

### Pré-requisitos
- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [Node.js 18+](https://nodejs.org/)
- npm ou pnpm

### 1. Iniciar o Backend
```bash
cd backend/PersonaSoundscape.Api
dotnet run

```

### 2. Iniciar o Frontend
```bash
cd frontend
npm install
npm run dev

```



## 📡 Endpoints da API

| Método | Rota                     | Descrição                          |
|--------|--------------------------|------------------------------------|
| GET    | `/api/games`             | Lista todos os jogos               |
| GET    | `/api/music/{gameId}`    | Retorna músicas de um jogo         |
| GET    | `/api/search?q={query}`  | Busca músicas por termo            |
| GET    | `/swagger`               | Documentação interativa (dev only) |

## 🎨 Design

- **Cores por jogo**:
  - Persona 3: `#252a7d`
  - Persona 4: `#f9a825`
  - Persona 5: `#d32f2f`
- **Tipografia**: `Segoe UI`, `Inter`, `Noto Sans JP`
- **Layout**: Mobile-first, responsivo, com carrossel horizontal inspirado no site oficial

## 📄 Licença

Este projeto é de código aberto e destinado a uso pessoal e educacional.  
As trilhas sonoras são propriedade da Atlus / Sega. Este site não hospeda áudio — apenas integra plataformas oficiais por meio de embeds públicos.
