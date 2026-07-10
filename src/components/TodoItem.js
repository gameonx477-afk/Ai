import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSaveEdit = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditText(todo.text);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />

      {isEditing ? (
        <div className="todo-edit-container">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={handleKeyPress}
            onBlur={handleSaveEdit}
            className="todo-edit-input"
            autoFocus
          />
        </div>
      ) : (
        <div className="todo-content">
          <p className="todo-text">{todo.text}</p>
          <span className="todo-time">{todo.createdAt}</span>
        </div>
      )}

      <div className="todo-actions">
        {!isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="edit-button"
              title="Edit todo"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="delete-button"
              title="Delete todo"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
