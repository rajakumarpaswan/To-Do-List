import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TodoSection from "../components/TodoSection";
import { useState } from "react";

import EditToDoList from "../components/EditToDoList";

import { useRef } from "react";
import { IconX } from "@tabler/icons-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ToDoDashboard = () => {
  const [viewMode, setViewMode] = useState("list");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEditToDoListOpen, setIsEditToDoListOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isImportant, setIsImportant] = useState(false);
  const sidebarRef = useRef(null);
  const todoSectionRef = useRef(null);
  const editToDoListRef = useRef(null);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "list" ? "grid" : "list"));
  };

  useGSAP(() => {
    if (isSidebarOpen) {
      gsap.to(sidebarRef.current, {
        display: "block",
        transform: "translatex(0)",
      });
    } else {
      gsap.to(sidebarRef.current, {
        display: "none",
        transform: "translatex(-100%)",
      });
      gsap.to(todoSectionRef.current, {
        width: "100%",
        padding: "15px",
      });
      gsap.to(editToDoListRef.current, {
        width: "50%",
      });
    }
  }, [isSidebarOpen]);

  useGSAP(() => {
    if (isEditToDoListOpen) {
      gsap.to(editToDoListRef.current, {
        display: "block",
        transform: "translatex(-0)",
      });
    } else {
      gsap.to(editToDoListRef.current, {
        display: "none",
        transform: "translatex(100%)",
      });
      gsap.to(todoSectionRef.current, {
        width: "100%",
        padding: "15px",
      });
      gsap.to(sidebarRef.current, {
        width: "50%",
      });
    }
  }, [isEditToDoListOpen]);

  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Navbar
        toggleViewMode={toggleViewMode}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="w-full flex">
        <div
          ref={sidebarRef}
          className="relative w-1/4 md-mx:w-1/3 2xl-mx:w-1/4   lg-mx:w-1/4 lg-mx:p-3 md-mx:p-0 md-mx:h-full md-mx:fixed md-mx:top-0 md-mx:overflow-y-auto md-mx:overflow-x-hidden md-mx:left-0 md-mx:hidden xs-mx:hidden xs-mx:p-0 xs-mx:w-full xs-mx:fixed xs-mx:top-0 xs-mx:left-0 xs-mx:h-full xs-mx:overflow-y-auto xs-mx:overflow-x-hidden"
        >
          <div className="absolute top-10 left-20 2xl-mx:left-24 md-mx:left-16 lg-mx:left-20 lg-mx:top-10 md-mx:top-8 xs-mx:left-12 xs-mx:top-9 xs-mx:flex xs-mx:flex-col xs-mx:gap-0 xs-mx:items-center flex flex-col gap-2 items-center">
            <img
              src="./profile.png"
              className="w-24 h-24 md-mx:w-[90%] md-mx:h-[90%] 2xl-mx:w-28 2xl-mx:h-28 xs-mx:h-14 xs-mx:w-14 rounded-full"
              alt=""
            />
            <p className="xs-mx:text-sm md-mx:text-md md-mx:font-semibold lg-mx:text-lg lg-mx:font-semibold">
              John Doe
            </p>
          </div>
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-28 right-3 2xl-mx:right-5 2xl-mx:top-[8rem] xs-mx:right-1 xs-mx:top-[5rem] md-mx:right-24 md-mx:top-[6rem] lg-mx:right-5 lg-mx:top-[7.5rem]"
          >
            <IconX size={20} className="xs-mx:h-4 xs-mx:w-4" />
          </div>

          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setActiveCategory={setActiveCategory}
            isImportant={isImportant}
            setIsImportant={setIsImportant}
          />
        </div>
        <div
          ref={todoSectionRef}
          className="w-1/2 md-mx:w-full 2xl-mx:w-1/2 md-mx:px-5 xs-mx:px-5 xs-mx:w-full lg-mx:w-1/2 lg-mx:px-10"
        >
          <TodoSection
            viewMode={viewMode}
            activeCategory={activeCategory}
            toggleViewMode={toggleViewMode}
            setIsEditToDoListOpen={setIsEditToDoListOpen}
            isImportant={isImportant}
          />
        </div>
        <div
          ref={editToDoListRef}
          className="w-1/4 bg-[#EEF6EF] 2xl-mx:w-1/4 md-mx:w-1/3 md-mx:fixed md-mx:top-0 md-mx:right-0 md-mx:hidden xs-mx:hidden xs-mx:w-full xs-mx:fixed xs-mx:top-0 xs-mx:right-0 lg-mx:w-1/4 "
        >
          <EditToDoList
            isEditToDoListOpen={isEditToDoListOpen}
            setIsEditToDoListOpen={setIsEditToDoListOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDoDashboard;
