import { useState, useEffect } from 'react';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-4'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export const useTaskManagement = () => {
  const [state, setState] = useState(initialData);
  const [enabled, setEnabled] = useState(false);
  const [newTaskContent, setNewTaskContent] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      setState({
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    setState({
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
  };

  const addNewTask = () => {
    if (!newTaskContent.trim()) return;

    const taskId = `task-${Date.now()}`;
    const newTask = { id: taskId, content: newTaskContent };
    
    const newTaskIds = Array.from(state.columns['column-1'].taskIds);
    newTaskIds.push(taskId);

    setState({
      ...state,
      tasks: {
        ...state.tasks,
        [taskId]: newTask,
      },
      columns: {
        ...state.columns,
        'column-1': {
          ...state.columns['column-1'],
          taskIds: newTaskIds,
        },
      },
    });

    setNewTaskContent('');
    setIsAddingTask(false);
  };

  const deleteTask = (taskId, columnId) => {
    const column = state.columns[columnId];
    const newTaskIds = column.taskIds.filter(id => id !== taskId);

    const newState = {
      ...state,
      tasks: { ...state.tasks },
      columns: {
        ...state.columns,
        [columnId]: {
          ...column,
          taskIds: newTaskIds,
        },
      },
    };

    delete newState.tasks[taskId];
    setState(newState);
  };

  const updateTaskContent = (taskId, newContent) => {
    if (!newContent.trim()) return;

    setState({
      ...state,
      tasks: {
        ...state.tasks,
        [taskId]: {
          ...state.tasks[taskId],
          content: newContent,
        },
      },
    });
  };

  return {
    state,
    enabled,
    newTaskContent,
    isAddingTask,
    setNewTaskContent,
    setIsAddingTask,
    handleDragEnd,
    addNewTask,
    deleteTask,
    updateTaskContent,
  };
};