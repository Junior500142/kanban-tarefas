# Kanban de Tarefas

Uma aplicação web simples e funcional para gerenciamento de tarefas no estilo Kanban, desenvolvida em React puro com CSS puro.

## 🎯 Funcionalidades

### ✅ Funcionalidades Implementadas

- **CRUD Completo de Tarefas**
  - ✅ Criar nova tarefa
  - ✅ Editar tarefa existente
  - ✅ Excluir tarefa
  - ✅ Visualizar detalhes da tarefa

- **Sistema Kanban**
  - ✅ 3 colunas: A Fazer, Em Andamento, Concluído
  - ✅ Movimentação entre colunas via botões
  - ✅ Drag & Drop funcional
  - ✅ Contador de tarefas por coluna

- **Funcionalidades Extras**
  - ✅ Barra de pesquisa (filtra por título e descrição)
  - ✅ Botão "Limpar Tarefas Concluídas"
  - ✅ Layout responsivo (desktop, tablet, mobile)
  - ✅ Estados vazios informativos

- **Interface**
  - ✅ Logo fictício do sistema
  - ✅ Botão "Sair" (visual apenas)
  - ✅ Design limpo e profissional
  - ✅ Animações suaves

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS Puro** - Estilização sem bibliotecas externas
- **JavaScript ES6+** - Funcionalidades modernas

## 📁 Estrutura do Projeto

```
kanban-tarefas/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Cabeçalho com logo e pesquisa
│   │   ├── Column.jsx          # Coluna do Kanban
│   │   ├── TaskCard.jsx        # Card individual da tarefa
│   │   └── TaskForm.jsx        # Formulário de criação/edição
│   ├── data/
│   │   └── mockTasks.js        # Dados mock e constantes
│   ├── App.jsx                 # Componente principal
│   ├── App.css                 # Estilos principais
│   ├── main.jsx                # Ponto de entrada
│   └── index.css               # Estilos globais
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou pnpm

### Instalação

1. **Extrair o projeto**
   ```bash
   unzip kanban-tarefas.zip
   cd kanban-tarefas
   ```

2. **Instalar dependências**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Executar em modo desenvolvimento**
   ```bash
   npm run dev
   # ou
   pnpm run dev
   ```

4. **Acessar a aplicação**
   - Abra o navegador em: `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linter

## 📱 Responsividade

A aplicação foi desenvolvida com design responsivo:

- **Desktop** (1024px+): Layout em 3 colunas lado a lado
- **Tablet** (768px-1023px): Layout adaptado com espaçamento otimizado
- **Mobile** (até 767px): Layout em coluna única, empilhado verticalmente

## 🎨 Design e UX

### Cores e Tema
- **A Fazer**: Azul (#3b82f6)
- **Em Andamento**: Laranja (#f59e0b)
- **Concluído**: Verde (#10b981)
- **Background**: Cinza claro (#f5f7fa)

### Interações
- Hover effects em botões e cards
- Animações suaves de transição
- Feedback visual para drag & drop
- Estados de loading e vazios

## 🔧 Funcionalidades Técnicas

### Gerenciamento de Estado
- Estado local com `useState`
- Dados persistem durante a sessão
- Filtros em tempo real

### Drag & Drop
- Implementação nativa HTML5
- Feedback visual durante arraste
- Suporte a touch para mobile

### Pesquisa
- Busca em tempo real
- Filtra por título e descrição
- Case-insensitive

## 📋 Dados Mock

O projeto inclui 6 tarefas de exemplo:

1. **Implementar login** (A Fazer)
2. **Configurar banco de dados** (A Fazer)
3. **Criar API de usuários** (Em Andamento)
4. **Implementar autenticação JWT** (Em Andamento)
5. **Configurar ambiente de desenvolvimento** (Concluído)
6. **Documentar API** (Concluído)

## 🎯 Casos de Uso

### Criar Nova Tarefa
1. Clique em "+ Nova Tarefa"
2. Preencha título (obrigatório) e descrição
3. Selecione o status inicial
4. Clique em "Criar Tarefa"

### Mover Tarefa
**Opção 1 - Botões:**
- Use os botões direcionais nos cards (←, →)

**Opção 2 - Drag & Drop:**
- Arraste o card para a coluna desejada

### Pesquisar Tarefas
- Digite no campo de pesquisa no cabeçalho
- A filtragem acontece em tempo real

### Limpar Concluídas
- Clique em "Limpar Concluídas" no cabeçalho
- Confirme a ação no alert

## 🐛 Solução de Problemas

### Porta já em uso
Se a porta 5173 estiver ocupada:
```bash
npm run dev -- --port 3000
```

### Dependências não instaladas
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build não funciona
```bash
npm run build
npm run preview
```

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e demonstração de habilidades em React e CSS.

## 👨‍💻 Desenvolvedor

Projeto desenvolvido seguindo as especificações solicitadas:
- React puro sem bibliotecas externas de UI
- CSS puro sem frameworks
- Funcionalidades CRUD completas
- Layout responsivo
- Drag & Drop nativo
- Interface limpa e profissional

---

**Versão:** 1.0.0  
**Data:** Setembro 2025

