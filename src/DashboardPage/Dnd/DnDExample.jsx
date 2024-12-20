import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useTaskManagement } from '../../CustonHook/useTaskManagement';
import SearchIcon from '@mui/icons-material/Search';
import { IoMdClose } from "react-icons/io";


const DragDropList = () => {
  const {
    state,
    enabled,
    newTaskContent,
    isAddingTask,
    activeColumn,
    isMobileView,
    setNewTaskContent,
    setIsAddingTask,
    setActiveColumn,
    handleDragEnd,
    addNewTask,
    deleteTask,
  } = useTaskManagement();

  if (!enabled) {
    return null;
  }

  const renderColumn = (columnId) => {
    const column = state.columns[columnId];
    const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

    return (
        <div className='pl-24'>
            <div key={column.id} className={`${isMobileView ? 'w-full' : 'w-64'}`}>
                <h2 className="font-bold mb-4 text-lg">{column.title}</h2>
                <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className={`min-h-[100px] p-2 rounded-lg ${snapshot.isDraggingOver ? 'bg-blue-50' : 'bg-gray-100'
                                }`}
                        >
                            {tasks.map((task, index) => (
                                <Draggable
                                    key={task.id}
                                    draggableId={task.id}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`mb-2 p-4 rounded-lg ${snapshot.isDragging
                                                    ? 'bg-blue-200'
                                                    : 'bg-white'
                                                } shadow flex items-center gap-3`}
                                        >
                                            <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                                                {index + 1}
                                            </span>
                                            <span className="flex-grow">{task.content}</span>
                                            <button
                                                onClick={() => deleteTask(task.id, column.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                <IoMdClose />
                                            </button>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
  };

  return (
    <div className="flex justify-center px-5 pt-32 h-screen bg-custom-radial">
      <div className="w-full max-w-7xl">
        <div className="mb-4 px-24">
          {!isAddingTask ? (
            <button
              onClick={() => setIsAddingTask(true)}
              className="bg-[#baf562] text-black text-xs font-semibold hover:bg-[#96c944] text-white px-4 py-2 rounded-lg shadow w-full md:w-auto"
            >
              + Add New Task
            </button>
          ) : (
            <div className="flex flex-col md:flex-row gap-2">
                <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 icon-item rounded-full p-1" />
                    <input
                        type="text"
                        value={newTaskContent}
                        onChange={(e) => setNewTaskContent(e.target.value)}
                        placeholder="Enter task description"
                        className="px-10 py-1 w-80 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500 nav-item border-none"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              addNewTask();
                            }
                          }}
                    />
                </div>
              <div className="flex gap-2">
                <button
                  onClick={addNewTask}
                  className="flex-1 md:flex-none bg-[#baf562] hover:bg-[#96c944] text-black px-4 text-xs font-semibold rounded-lg shadow"
                >
                  Add
                </button>
                <button
                  onClick={() => {
                    setIsAddingTask(false);
                    setNewTaskContent('');
                  }}
                  className="flex-1 md:flex-none bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        {isMobileView && (
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {state.columnOrder.map((columnId) => (
              <button
                key={columnId}
                onClick={() => setActiveColumn(columnId)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                  activeColumn === columnId
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {state.columns[columnId].title}
              </button>
            ))}
          </div>
        )}

        <DragDropContext onDragEnd={handleDragEnd}>
          <div className={`${isMobileView ? 'block' : 'flex gap-4'}`}>
            {isMobileView
              ? renderColumn(activeColumn)
              : state.columnOrder.map(columnId => renderColumn(columnId))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default DragDropList;
