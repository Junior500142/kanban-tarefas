import React, { useState } from 'react';
import TaskCard from './TaskCard';
import { STATUS_LABELS } from '../data/mockTasks';

const Column = ({ 
  status, 
  tasks, 
  onEditTask, 
  onDeleteTask, 
  onMoveTask,
  onDropTask,
  onDragStart,
  onDragEnd 
}) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const taskId = e.dataTransfer.getData('text/plain');
    onDropTask(parseInt(taskId), status);
  };

  const filteredTasks = tasks.filter(task => task.status === status);

  return (
    <div 
      className={`column ${status} ${isDragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="column-header">
        <h2 className="column-title">{STATUS_LABELS[status]}</h2>
        <span className="task-count">{filteredTasks.length}</span>
      </div>
      
      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📋</div>
            <div className="empty-state-text">Nenhuma tarefa</div>
            <div className="empty-state-subtext">
              {status === 'a_fazer' && 'Adicione uma nova tarefa'}
              {status === 'em_andamento' && 'Mova tarefas para cá'}
              {status === 'concluido' && 'Complete suas tarefas'}
            </div>
          </div>
        ) : (
          filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEditTask}
              onDelete={onDeleteTask}
              onMoveTask={onMoveTask}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Column;

