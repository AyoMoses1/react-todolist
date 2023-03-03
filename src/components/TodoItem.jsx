import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.css';
import { useAuthContext } from '../context/AuthContext';

function TodoItem({
  itemProp, handleChange, delTodo, setUpdate,
}) {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemProp.title);
  const { user } = useAuthContext();

  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(updateInput, itemProp.id);
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input type="checkbox" onChange={() => handleChange(itemProp.id)} />
        {user && (
          <button type="button" onClick={handleEditing}>
            <AiFillEdit
              style={{ color: '#5e5e5e', fontSize: '16px' }}
            />
          </button>
        )}
        <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}>
          {updateInput}
        </span>
      </div>
      <input
        type="text"
        value={updateInput}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;
