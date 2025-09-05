import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Column from './components/Column';
import TaskForm from './components/TaskForm';
import { mockTasks, generateId, STATUS_OPTIONS } from './data/mockTasks';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(mockTasks);
  const [searchTerm, setSearchTerm] = useState('');
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [draggedTaskId, setDraggedTaskId] = useState(null);

  // Filtrar tarefas baseado no termo de pesquisa
  const filteredTasks = tasks.filter(task =>
    task.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.descricao.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Criar nova tarefa
  const handleCreateTask = (taskData) => {
    const newTask = {
      id: generateId(),
      ...taskData
    };
    setTasks(prev => [...prev, newTask]);
    setShowTaskForm(false);
  };

  // Editar tarefa existente
  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowTaskForm(true);
  };

  // Salvar edição de tarefa
  const handleSaveEdit = (taskData) => {
    setTasks(prev => prev.map(task =>
      task.id === editingTask.id
        ? { ...task, ...taskData }
        : task
    ));
    setShowTaskForm(false);
    setEditingTask(null);
  };

  // Excluir tarefa
  const handleDeleteTask = (taskId) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      setTasks(prev => prev.filter(task => task.id !== taskId));
    }
  };

  // Mover tarefa entre colunas
  const handleMoveTask = (taskId, newStatus) => {
    setTasks(prev => prev.map(task =>
      task.id === taskId
        ? { ...task, status: newStatus }
        : task
    ));
  };

  // Limpar tarefas concluídas
  const handleClearCompleted = () => {
    const completedTasks = tasks.filter(task => task.status === STATUS_OPTIONS.CONCLUIDO);
    
    if (completedTasks.length === 0) {
      alert('Não há tarefas concluídas para limpar.');
      return;
    }

    if (window.confirm(`Tem certeza que deseja excluir ${completedTasks.length} tarefa(s) concluída(s)?`)) {
      setTasks(prev => prev.filter(task => task.status !== STATUS_OPTIONS.CONCLUIDO));
    }
  };

  // Drag and Drop handlers
  const handleDragStart = (taskId) => {
    setDraggedTaskId(taskId);
  };

  const handleDragEnd = () => {
    setDraggedTaskId(null);
  };

  const handleDropTask = (taskId, newStatus) => {
    handleMoveTask(taskId, newStatus);
  };

  // Fechar formulário
  const handleCloseForm = () => {
    setShowTaskForm(false);
    setEditingTask(null);
  };

  return (
    <div className="app">
      <Header
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onClearCompleted={handleClearCompleted}
      />
      
      <div className="controls">
        <button
          className="btn btn-primary"
          onClick={() => setShowTaskForm(true)}
        >
          + Nova Tarefa
        </button>
        
        <div>
          Total de tarefas: {filteredTasks.length}
        </div>
      </div>
      
      <main className="kanban-container">
        <div className="kanban-board">
          <Column
            status={STATUS_OPTIONS.A_FAZER}
            tasks={filteredTasks}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            onMoveTask={handleMoveTask}
            onDropTask={handleDropTask}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
          
          <Column
            status={STATUS_OPTIONS.EM_ANDAMENTO}
            tasks={filteredTasks}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            onMoveTask={handleMoveTask}
            onDropTask={handleDropTask}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
          
          <Column
            status={STATUS_OPTIONS.CONCLUIDO}
            tasks={filteredTasks}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            onMoveTask={handleMoveTask}
            onDropTask={handleDropTask}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        </div>
      </main>
      
      {showTaskForm && (
        <TaskForm
          task={editingTask}
          onSave={editingTask ? handleSaveEdit : handleCreateTask}
          onCancel={handleCloseForm}
          isEditing={!!editingTask}
        />
      )}
    </div>
  );
}

export default App;

