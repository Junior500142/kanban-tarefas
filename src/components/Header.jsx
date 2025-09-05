import React from 'react';

const Header = ({ searchTerm, onSearchChange, onClearCompleted }) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">K</div>
        <h1 className="app-title">Kanban de Tarefas</h1>
      </div>
      
      <div className="header-right">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar tarefas..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        
        <button 
          className="btn btn-danger btn-small"
          onClick={onClearCompleted}
          title="Limpar tarefas concluídas"
        >
          Limpar Concluídas
        </button>
        
        <button className="btn btn-secondary btn-small">
          Sair
        </button>
      </div>
    </header>
  );
};

export default Header;

