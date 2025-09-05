// Mock de dados das tarefas
export const mockTasks = [
  {
    id: 1,
    titulo: "Implementar login",
    descricao: "Criar tela de login simples com validação de usuário e senha",
    status: "a_fazer"
  },
  {
    id: 2,
    titulo: "Configurar banco de dados",
    descricao: "Configurar conexão com PostgreSQL e criar tabelas iniciais",
    status: "a_fazer"
  },
  {
    id: 3,
    titulo: "Criar API de usuários",
    descricao: "Desenvolver endpoints para CRUD de usuários",
    status: "em_andamento"
  },
  {
    id: 4,
    titulo: "Implementar autenticação JWT",
    descricao: "Adicionar sistema de tokens JWT para autenticação",
    status: "em_andamento"
  },
  {
    id: 5,
    titulo: "Configurar ambiente de desenvolvimento",
    descricao: "Configurar Docker e scripts de desenvolvimento",
    status: "concluido"
  },
  {
    id: 6,
    titulo: "Documentar API",
    descricao: "Criar documentação completa da API usando Swagger",
    status: "concluido"
  }
];

// Função para gerar novo ID
export const generateId = () => {
  return Date.now() + Math.random();
};

// Status disponíveis
export const STATUS_OPTIONS = {
  A_FAZER: 'a_fazer',
  EM_ANDAMENTO: 'em_andamento',
  CONCLUIDO: 'concluido'
};

// Labels dos status
export const STATUS_LABELS = {
  [STATUS_OPTIONS.A_FAZER]: 'A Fazer',
  [STATUS_OPTIONS.EM_ANDAMENTO]: 'Em Andamento',
  [STATUS_OPTIONS.CONCLUIDO]: 'Concluído'
};

