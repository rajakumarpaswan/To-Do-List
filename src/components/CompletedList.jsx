// import React from 'react'

import { IconSquareCheckFilled, IconStar } from "@tabler/icons-react";

const CompletedList = () => {
  // Sample data - in real app this would come from props or state
  const completedTasks = [
    { id: 1, title: "Buy groceries", isStarred: false },
    { id: 2, title: "Pay bills", isStarred: true },
    { id: 3, title: "Call dentist", isStarred: false },
    { id: 4, title: "Schedule meeting", isStarred: true },
  ];

  return (
    <div className="w-full">
      <p className="text-sm xs-mx:text-[12px] md-mx:text-base">Completed</p>
      {completedTasks.map((task) => (
        <div
          key={task.id}
          className={`w-full flex justify-between items-center p-4 border-t border-[#E0E0E0] ${
            task.id === 1 ? "mt-6 xs-mx:mt-2 md-mx:mt-4" : ""
          } xs-mx:p-2 xs-mx:flex xs-mx:justify-between xs-mx:items-center xs-mx:border-t xs-mx:border-[#E0E0E0] md-mx:p-3 md-mx:border-t md-mx:border-gray-300`}
        >
          <span className="flex items-center line-through gap-2 text-xs font-extralight xs-mx:gap-1 xs-mx:text-[10px] md-mx:text-sm md-mx:gap-3">
            <IconSquareCheckFilled
              className="text-[#357937] "
              size={15}
            />
            <p>{task.title}</p>
          </span>
          <IconStar
            size={15}
            className={`${
              task.isStarred ? "text-yellow-400" : ""
            } xs-mx:w-4 xs-mx:h-4 md-mx:w-5 md-mx:h-5`}
          />
        </div>
      ))}
    </div>
  );
};

export default CompletedList;
