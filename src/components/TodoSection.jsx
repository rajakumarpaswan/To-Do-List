// import React from 'react'
import ListOfTasks from "./ListOfTasks"
import {fetchWeather, clearWeather} from "../store/slices/ApiSlice";
import { addTask } from "../store/slices/taskSlice";
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { IconBell, IconCalendarEvent, IconCaretDownFilled, IconRepeat } from "@tabler/icons-react"

const TodoSection = ({ viewMode, toggleViewMode, setIsEditToDoListOpen, activeCategory ,isImportant}) => {
    const dispatch = useDispatch();
    const { weatherData, loading, error } = useSelector((state) => state.weather);
    const [getWeather, setGetWeather] = useState(false);
    const [locationPermission, setLocationPermission] = useState(false);
    const [addTaskText , setAddTaskText] = useState('');
    useEffect(() => {
        if (!locationPermission && getWeather ) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    dispatch(fetchWeather({ latitude, longitude }));
                    setLocationPermission(true);
                },
                (error) => {
                    console.error('Error getting geolocation:', error.message);
                    setLocationPermission(false);
                }
            );
        }
    }, [dispatch, locationPermission, getWeather]);

    const handleClear = () => {
        dispatch(clearWeather());
    };
    const displayWeather = () => {
        setGetWeather(true);
    }
    const handleAddTask = () => {
        if(addTaskText.trim !== '') {
            const newTask = {
                id: Date.now(),
                text: addTaskText,
                completed: false,
                priority : false,
                subTasks: [],
                notes: '',
                dueDate: null,
                remainder: null,
            };
            dispatch(addTask(newTask));
            setAddTaskText(''); 
            dispatch(clearWeather());
        }
      
    }
  return (
    <div className="w-full">
      <h4 className="text-sm flex items-center gap-2 md-mx:text-base md-mx:gap-1">
        To Do <IconCaretDownFilled size={15} className="xs-mx:w-3 xs-mx:h-3 md-mx:w-4 md-mx:h-4" />
      </h4>
      <div className="w-full bg-gradient-to-t from-[rgba(53,121,55,0.1)] to-[rgba(208,255,210,0.1)] p-3 xs-mx:p-1 md-mx:p-5">
        <div className="xs-mx:text-sm md-mx:text-base">
        <input  className="w-full py-2 px-2 bg-transparent" placeholder='Add task here' value={addTaskText} onChange={(e)=>setAddTaskText(e.target.value)}/>
                {weatherData && (
                <div>
                    <h3>Location : {weatherData.location.name}</h3>
                    <p>Temperature: {weatherData.current.temp_c}°C</p>
                    <p>Weather: {weatherData.current.condition.text}</p>
                    <p>Humidity: {weatherData.current.humidity}%</p>
                </div>
            )}
        </div>
        <div className="w-full flex justify-between items-center mt-8 md-mx:mt-6">
          <div className="flex items-center gap-2 xs-mx:gap-2 md-mx:gap-4">
            <IconBell size={15} className="xs-mx:w-5 xs-mx:h-5 md-mx:w-6 md-mx:h-6" />
            <IconRepeat size={15} className="xs-mx:w-5 xs-mx:h-5 md-mx:w-6 md-mx:h-6" />
            <IconCalendarEvent size={15} className="xs-mx:w-5 xs-mx:h-5 md-mx:w-6 md-mx:h-6" />
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleAddTask} className="bg-[#35793729] text-[#357937] text-sm px-4 py-2 rounded-md xs-mx:px-2 xs-mx:py-1 xs-mx:text-xs md-mx:px-6 md-mx:py-3 md-mx:text-base md-mx:rounded-lg">
              ADD TASK
            </button>
                <button onClick={displayWeather} className="bg-[#35793729] text-[#357937] text-sm px-4 py-2 rounded-md xs-mx:px-2 xs-mx:py-1 xs-mx:text-xs md-mx:px-6 md-mx:py-3 md-mx:text-base md-mx:rounded-lg">Get Weather</button>


          </div>
        </div>
      </div>
      <ListOfTasks
        viewMode={viewMode}
        filter={activeCategory}
        toggleViewMode={toggleViewMode}
        setIsEditToDoListOpen={setIsEditToDoListOpen}
        isImportant={isImportant}
      />

      
    </div>
  );
};

export default TodoSection;
