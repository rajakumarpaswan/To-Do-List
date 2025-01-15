// import React from 'react'

import { useState } from 'react';
import { IconSquare, IconStar, IconPlus, IconBell, IconCalendarEvent, IconRepeat, IconX, IconTrashFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';


  const EditToDoList = ({isEditToDoListOpen, setIsEditToDoListOpen}) => {
  const [task, setTask] = useState({
    id: 1,
    title: "Buy groceries",
    isStarred: false,
    dueDate: null,
    reminder: null,
    notes: "",
    steps: []
  });

  const handleAddStep = () => {
    setTask(prev => ({
      ...prev,
      steps: [...prev.steps, { id: Date.now(), title: "", completed: false }]
    }));
  };

  const handleSetReminder = () => {
    // Implement reminder logic
  };

  const handleSetDueDate = () => {
    // Implement due date logic
  };

  const handleToggleRepeat = () => {
    // Implement repeat logic
  };

  const handleAddNotes = () => {
    // Implement notes logic
  };

  const handleDelete = () => {
    // Implement delete logic
  };
   
  return (
   
    <>
      <div className="pl-4">
        <div className=" w-full mt-10">
        <div  className=" flex justify-between items-center p-4   border-t border-[#E0E0E0]">
           <span className="flex items-center gap-2 text-xs font-extralight ">
             <IconSquare size={15}/>
             <Link >{task.title}</Link>
           </span>
           <IconStar 
             size={15}
             className={task.isStarred ? "text-yellow-400" : ""}
             onClick={() => setTask(prev => ({...prev, isStarred: !prev.isStarred}))}
           />
        </div>
        <div className="addsteps p-2 flex items-center text-xs font-extralight  border-t border-[#E0E0E0]  gap-2" onClick={handleAddStep}>
          <IconPlus size={15}/>
          <p>Add Task</p>
        </div>
        <div className="addsteps p-2 flex items-center text-xs font-extralight  border-t border-[#E0E0E0]  gap-2" onClick={handleSetReminder}>
          <IconBell size={15} />
          <p>set reminder</p>
        </div>
        <div className="p-2  border-t border-[#E0E0E0]  ">
          <div className="addsteps flex items-center text-xs font-extralight  gap-2" onClick={handleSetDueDate}>
            <IconCalendarEvent size={15}/>
            <p>add due date</p>
          </div>
          <div className="flex items-center justify-center">
            <img src="./date.png" className='h-32 w-28' alt="" />
          </div>
        </div>
        <div className="repaeat p-2 flex items-center text-xs font-extralight  border-t border-[#E0E0E0]  gap-2" onClick={handleToggleRepeat}>
          <IconRepeat size={15}/>
          <p>repeat</p>
        </div>
        <div className="p-2 flex items-center text-xs font-extralight  border-t border-[#E0E0E0]  gap-2" onClick={handleAddNotes}>
          <p>add notes</p>
        </div>

        </div>
        </div>
       
        <footer className='mt-10'>
            <div className="createdTodya flex justify-between pt-1  text-xs font-extralight pb-7 px-1 items-center border-t border-[#E0E0E0] ">
                <span onClick={()=>setIsEditToDoListOpen(false)} ><IconX size={15}/></span>
                <p>created today</p>
                <IconTrashFilled size={18} onClick={handleDelete}/>
            </div>
        </footer>
    </>
   
  )
}

export default EditToDoList