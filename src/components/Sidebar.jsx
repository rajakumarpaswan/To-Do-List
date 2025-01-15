import { 
    IconClipboardText, 
    IconCalendarEvent, 
    IconStar, 
    IconPlus, 
    
    IconMap, 
    IconInfoCircleFilled 
} from '@tabler/icons-react';
import { useState } from 'react';
import DonutCharts from './DonutCharts';

const Sidebar = ({ setActiveCategory, isImportant, setIsImportant }) => {
    const [tasks, setTasks] = useState([
        { id: 1, icon: <IconClipboardText />, title: "All Tasks", category: "all" },
        { id: 2, icon: <IconCalendarEvent />, title: "Today", category: "today" },
        { id: 3, icon: <IconStar />, title: "Important", category: "important" },
        { id: 4, icon: <IconMap />, title: "Planned", category: "planned" },
        { id: 5, icon: <img src="./Group.png" alt="" />, title: "Assigned to me", category: "assigned" },
    ]);

   

    const [activeTaskId, setActiveTaskId] = useState(null);

    const handleTaskClick = (id, category) => {
        setActiveTaskId(id); // Track active task by ID
        setActiveCategory(category); // Update the active category in the parent component
        
        if(category==="important")
            setIsImportant(true);
        else if(category==="today")
            setIsImportant(false);
    };
   
    const [taskStats, setTaskStats] = useState({
        total: 11,
        pending: 7,
        completed: 4,
    });



    return (
        <div className="w-full bg-[#EEF6EF] mt-24 p-5 flex flex-col gap-2 md-mx:flex md-mx:flex-col md-mx:gap-2  xs-mx:p-2 xs-mx:mt-[4.5rem] xs-mx:w-full md-mx:w-9/12 md-mx:p-3 md-mx:mt-20  lg-mx:mt-16 lg-mx:p-3 lg-mx:gap-3 lg-mx:flex lg-mx:flex-col   ">
            {/* Task Categories */}
            <div className="w-full flex flex-col bg-white px-3 py-4 gap-3 mt-14 xs-mx:px-2 xs-mx:py-2 xs-mx:gap-0 xs-mx:mt-10 xs-mx:w-full xs-mx:flex xs-mx:flex-col md-mx:flex md-mx:flex-col md-mx:gap-0 md-mx:w-full md-mx:p-1 md-mx:mt-20 lg-mx:mt-16 lg-mx:p-2 lg-mx:gap-0 lg-mx:flex lg-mx:flex-col ">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`flex items-center  xs-mx:flex    xs-mx:items-center  md-mx:flex  md-mx:items-center  ${
                            activeTaskId === task.id
                                ? "bg-[#35793729] text-[#357937]"
                                : "bg-white"
                        } rounded-md p-2 gap-2 text-sm font-semibold xs-mx:p-1 xs-mx:gap-1 xs-mx:text-[10px] md-mx:p-2 md-mx:gap-1 md-mx:text-xs lg-mx:p-2 lg-mx:gap-1 lg-mx:text-sm lg-mx:font-normal `}
                        onClick={() => handleTaskClick(task.id, task.category)} // Pass category
                    >
                        <span className="xs-mx:h-3 xs-mx:w-3 xs-mx:flex xs-mx:items-center md-mx:h-6 md-mx:w-6 md-mx:flex md-mx:items-center ">{task.icon}</span>
                        <p className="">{task.title}</p>
                    </div>
                ))}
            </div>

            {/* Add Task */}
            <div className="w-full flex items-center gap-2 text-sm font-semibold bg-white px-3 py-4 xs-mx:flex xs-mx:items-center xs-mx:gap-1 xs-mx:text-[10px] xs-mx:px-2 xs-mx:py-3 md-mx:flex md-mx:items-center md-mx:gap-2 md-mx:text-sm md-mx:font-semibold md-mx:px-3 md-mx:py-4">
                <IconPlus className="xs-mx:h-3 xs-mx:w-3 xs-mx:flex xs-mx:items-center md-mx:h-6 md-mx:w-6 md-mx:flex md-mx:items-center " />
                <p >Add Task</p>
            </div>

            {/* Task Stats */}
            <div className="w-full bg-white ">
                <div className="flex justify-between p-4  border-b-[1px] border-b-[#E0E0E0] xs-mx:p-2 xs-mx:border-b-[1px] xs-mx:border-b-[#E0E0E0] md-mx:p-4 md-mx:border-b-[1px] md-mx:border-b-[#E0E0E0] ">
                    <div>
                        <p className="text-sm font-semibold xs-mx:text-xs md-mx:text-sm">Today Tasks</p>
                        <h3 className="text-lg font-semibold xs-mx:text-base md-mx:text-lg">{taskStats.total}</h3>
                    </div>
                    <IconInfoCircleFilled size={15}  className="text-[#BDBDBD]  md-mx:h-5 md-mx:w-5 xs-mx:h-4 xs-mx:w-4 " />
                </div>
                <div className="p-4 xs-mx:p-2 md-mx:p-3 ">
                   <DonutCharts/>   
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
