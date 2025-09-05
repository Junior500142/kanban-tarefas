import React from 'react';
import { STATUS_OPTIONS } from '../data/mockTasks';

const TaskCard = ({ 
  task, 
  onEdit, 
  onDelete, 
  onMoveTask,
  onDragStart,
  onDragEnd 
}) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id);
    onDragStart && onDragStart(task.id);
  };

  const handleDragEnd = () => {
    onDragEnd && onDragEnd();
  };

  const getMoveButtons = () => {
    const buttons = [];
    
    if (task.status !== STATUS_OPTIONS.A_FAZER) {
      buttons.push(
        <button
          key="move-todo"
          className="btn btn-outline btn-small"
          onClick={() => onMoveTask(task.id, STATUS_OPTIONS.A_FAZER)}
        >
          ← A Fazer
        </button>
      );
    }
    
    if (task.status !== STATUS_OPTIONS.EM_ANDAMENTO) {
      buttons.push(
        <button
          key="move-progress"
          className="btn btn-outline btn-small"
          onClick={() => onMoveTask(task.id, STATUS_OPTIONS.EM_ANDAMENTO)}
        >
          {task.status === STATUS_OPTIONS.A_FAZER ? '→ Em Andamento' : '← Em Andamento'}
        </button>
      );
    }
    
    if (task.status !== STATUS_OPTIONS.CONCLUIDO) {
      buttons.push(
        <button
          key="move-done"
          className="btn btn-outline btn-small"
          onClick={() => onMoveTask(task.id, STATUS_OPTIONS.CONCLUIDO)}
        >
          → Concluído
        </button>
      );
    }
    
    return buttons;
  };

  return (
    <div
      className="task-card"
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <h3 className="task-title">{task.titulo}</h3>
      <p className="task-description">{task.descricao}</p>
      
      <div className="task-actions">
        {getMoveButtons()}
        
        <button
          className="btn btn-primary btn-small"
          onClick={() => onEdit(task)}
        >
          Editar
        </button>
        
        <button
          className="btn btn-danger btn-small"
          onClick={() => onDelete(task.id)}
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

