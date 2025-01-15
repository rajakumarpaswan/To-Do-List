import { createSlice } from '@reduxjs/toolkit';


const loadTasksFromStorage = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [
        {
            'id': 1736952605779,
            'text': 'Attend team meeting',
            'completed': false,
            'priority': true,
            'subTasks': [],
            'notes': '',
            'dueDate': null,
            'remainder': null
        },{
            'id': 1736952605778,
            'text': 'Sports practise',
            'completed': false,
            'priority': false,
            'subTasks': [],
            'notes': '',
            'dueDate': null,
            'remainder': null
        },{
            'id': 1736952605777,
            'text': 'Complete project documentation',
            'completed': true,
            'priority': true,
            'subTasks': [],
            'notes': '',
            'dueDate': null,
            'remainder': null
        },{
            'id': 1736952605776,
            'text': 'Prepare presentation slides',
            'completed': true,
            'priority': false,
            'subTasks': [],
            'notes': '',
            'dueDate': null,
            'remainder': null
        }
    ];
};


const saveTasksToStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: loadTasksFromStorage(),
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = { id: Date.now(), ...action.payload };
            state.tasks.push(newTask);
            saveTasksToStorage(state.tasks);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            saveTasksToStorage(state.tasks);
        },
        updateTaskPriority: (state, action) => {
            const { id, priority } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.priority = priority;
                saveTasksToStorage(state.tasks);
            }
        },
        updateTaskCompletion: (state, action) => {
            const { id, completed } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.completed = completed;
                saveTasksToStorage(state.tasks);
            }
        },
        updateTaskContent: (state, action) => {
            const { id } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.notes = action.payload.notes;
                task.dueDate = action.payload.dueDate;
                task.remainder = action.payload.remainder;
                saveTasksToStorage(state.tasks);
            }
        }
    },
});

export const { addTask, deleteTask, updateTaskPriority, updateTaskCompletion, updateTaskContent } = tasksSlice.actions;
export default tasksSlice.reducer;
