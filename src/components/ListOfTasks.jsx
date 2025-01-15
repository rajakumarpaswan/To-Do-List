import { IconSquare, IconSquareCheckFilled, IconStar } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskCompletion, updateTaskPriority } from "../store/slices/taskSlice";

const ListOfTasks = ({ viewMode, setIsEditToDoListOpen, filter = "all" ,isImportant}) => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const dispatch = useDispatch();
  const handleStatusUpdate = (statusType,task) => {
    if(statusType === "COMPLETION")
      dispatch(updateTaskCompletion(task));
    else if(statusType === "PRIORITY")
      dispatch(updateTaskPriority(task));
  };

  // Filter tasks based on the filter prop
 

  return (
    <>
    <div className="w-full bg-white">
      <div
        className={`grid xs-mx:grid ${
          viewMode === "grid"
            ? "grid-cols-4 gap-4 p-2 xs-mx:p-1 xs-mx:grid xs-mx:grid-cols-2 xs-mx:gap-2 md-mx:grid-cols-3 md-mx:gap-3 md-mx:p-3"
            : ""
        }`}
      >
        {isImportant ? tasks.filter(task=>task.priority==true).map((task) => (
          <div
            key={task.id}
            className={`${
              viewMode === "grid"
                ? "flex justify-between items-center p-4 border xs-mx:p-2 xs-mx:flex xs-mx:justify-between xs-mx:items-center xs-mx:border md-mx:p-3 md-mx:border-gray-300"
                : "flex justify-between items-center p-4 border-t border-[#E0E0E0] xs-mx:border-t xs-mx:border-[#E0E0E0] xs-mx:p-2 xs-mx:flex xs-mx:justify-between xs-mx:items-center md-mx:p-3 md-mx:border-t md-mx:border-gray-300"
            }`}
          >
            <span className="flex items-center gap-2 text-xs font-extralight xs-mx:gap-1 xs-mx:text-[10px] md-mx:text-sm md-mx:gap-3">
              <input
              onClick={()=>handleStatusUpdate("COMPLETION",{id:task.id, completed:true})}
                type="checkbox"
                name=""
                id=""
                className="xs-mx:w-3 xs-mx:h-3 md-mx:w-4 md-mx:h-4"
              />
              <span onClick={() => setIsEditToDoListOpen(true)}>{task.text}</span>
            </span>
            <span className="">
              <IconStar
              onClick={()=>handleStatusUpdate("PRIORITY",{id:task.id, priority:!task.priority})}
                size={15}
                className={`${
                  task.priority ? "text-yellow-400" : ""
                } xs-mx:w-3 xs-mx:h-3 md-mx:w-5 md-mx:h-5`}
              />
            </span>
          </div>
        )) : tasks.filter(task=>task.completed==false).map((task) => (
          <div
            key={task.id}
            className={`${
              viewMode === "grid"
                ? "flex justify-between items-center p-4 border xs-mx:p-2 xs-mx:flex xs-mx:justify-between xs-mx:items-center xs-mx:border md-mx:p-3 md-mx:border-gray-300"
                : "flex justify-between items-center p-4 border-t border-[#E0E0E0] xs-mx:border-t xs-mx:border-[#E0E0E0] xs-mx:p-2 xs-mx:flex xs-mx:justify-between xs-mx:items-center md-mx:p-3 md-mx:border-t md-mx:border-gray-300"
            }`}
          >
            <span className="flex items-center gap-2 text-xs font-extralight xs-mx:gap-1 xs-mx:text-[10px] md-mx:text-sm md-mx:gap-3">
              <input
              onClick={()=>handleStatusUpdate("COMPLETION",{id:task.id, completed:true})}
                type="checkbox"
                name=""
                id=""
                className="xs-mx:w-3 xs-mx:h-3 md-mx:w-4 md-mx:h-4"
              />
              <span onClick={() => setIsEditToDoListOpen(true)}>{task.text}</span>
            </span>
            <span className="">
              <IconStar
              onClick={()=>handleStatusUpdate("PRIORITY",{id:task.id, priority:!task.priority})}
                size={15}
                className={`${
                  task.priority ? "text-yellow-400" : ""
                } xs-mx:w-3 xs-mx:h-3 md-mx:w-5 md-mx:h-5`}
              />
            </span>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full">
    <p className="text-sm">Completed</p>
    {tasks.filter(task=>task.completed==true).map(task => (
      <div key={task.id} className={`w-full flex justify-between items-center p-4 border-t border-[#E0E0E0] ${task.id === 1 ? 'mt-6' : ''}`}>
        <span className="flex items-center line-through gap-2 text-xs font-extralight ">
          <IconSquareCheckFilled className="text-[#357937]" onClick={()=>handleStatusUpdate("COMPLETION",{id:task.id, completed:false})} size={15}/> 
          <p className="cursor-pointer">{task.text}</p>
        </span>
        <IconStar onClick={()=>handleStatusUpdate("PRIORITY",{id:task.id, priority:!task.priority})} size={15} className={task.priority ? "text-yellow-400" : ""}/>
      </div>
    ))}
  </div>
  </>
  );
};

export default ListOfTasks;
