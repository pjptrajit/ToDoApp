import React, { useContext, useState } from 'react';
import { ToDoContext } from '../context/ToDoProvider';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

function Todo() {
  const { state, dispatch } = useContext(ToDoContext);
  const [inputValue, setinputValue] = useState('');
  const navigate = useNavigate();

  return (
    <div className='w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] m-auto mt-10 shadow shadow-gray-900 p-6 sm:p-8 space-y-6'>
      <div>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>ToDo List</h1>
        <hr />
      </div>

      <div className='space-y-4'>
        <input
          type='text'
          value={inputValue}
          placeholder='Add Item'
          required
          onChange={(event) => setinputValue(event.target.value)}
          className='w-full p-2 rounded border outline-none text-sm sm:text-base'
        />
        <button
          className='w-full sm:w-auto bg-black text-white rounded px-4 py-2 text-sm sm:text-base'
          onClick={() => {
            if (inputValue.length > 0) {
              dispatch({ type: 'add', payload: { id: uuidv4(), title: inputValue } });
              setinputValue('');
            } else {
              alert('Please Enter the Value');
            }
          }}
        >
          Add
        </button>
      </div>

      <div className='border bg-gray-200 rounded-md overflow-hidden'>
        {state.length > 0 ? (
          <div className='divide-y'>
            {state.map((items) => (
              <div
                key={items.id}
                className='flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 space-y-2 sm:space-y-0'
              >
                <h1 className='text-base sm:text-lg font-medium'>
                  {items.title.charAt(0).toUpperCase() + items.title.slice(1)}
                </h1>
                <div className='flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0'>
                  <button
                    className='bg-white text-black px-3 py-1 rounded-sm border border-gray-400 text-sm'
                    onClick={() => navigate('/edittodo', { state: items })}
                  >
                    Edit
                  </button>
                  <button
                    className='bg-white text-black px-3 py-1 rounded-sm border border-gray-400 text-sm'
                    onClick={() => dispatch({ type: 'delete', payload: items.id })}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='p-4 text-center text-gray-600 font-medium'>
            <h1>No ToDo found. Please add one!</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
