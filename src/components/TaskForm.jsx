import React, { useState, useEffect } from 'react';
import { STATUS_OPTIONS, STATUS_LABELS } from '../data/mockTasks';

const TaskForm = ({ task, onSave, onCancel, isEditing = false }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    status: STATUS_OPTIONS.A_FAZER
  });

  useEffect(() => {
    if (isEditing && task) {
      setFormData({
        titulo: task.titulo,
        descricao: task.descricao,
        status: task.status
      });
    }
  }, [task, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.titulo.trim()) {
      alert('O título é obrigatório!');
      return;
    }

    onSave(formData);
    
    if (!isEditing) {
      setFormData({
        titulo: '',
        descricao: '',
        status: STATUS_OPTIONS.A_FAZER
      });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2 className="modal-title">
            {isEditing ? 'Editar Tarefa' : 'Nova Tarefa'}
          </h2>
          <button className="close-btn" onClick={onCancel}>
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="titulo">
              Título *
            </label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              className="form-input"
              value={formData.titulo}
              onChange={handleChange}
              placeholder="Digite o título da tarefa"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="descricao">
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              className="form-input form-textarea"
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Digite a descrição da tarefa"
              rows="4"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              name="status"
              className="form-input"
              value={formData.status}
              onChange={handleChange}
            >
              {Object.entries(STATUS_OPTIONS).map(([key, value]) => (
                <option key={value} value={value}>
                  {STATUS_LABELS[value]}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Salvar Alterações' : 'Criar Tarefa'}
            </button>
            <button type="button" className="btn btn-outline" onClick={onCancel}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;

