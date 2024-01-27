 // CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { postimg1, postimg2, postimg3, postimg4, postimg5 } from '../../assets';
import "./Calender.css"

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [moviePoster, setMoviePoster] = useState(null);

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const getMoviePosterForDate = (clickedDate) => {
    const posters = {
      '2024-01-28': postimg1,
      '2024-01-29': postimg2,
      '2024-01-19': postimg3,
      '2024-01-09': postimg4,
      '2024-01-14': postimg5,
      '2024-01-18': postimg3,
      '2024-01-01': postimg4,
      '2024-01-07': postimg5,
    };

    return posters[clickedDate.toISOString().split('T')[0]] || null;
  };

  const onDateClick = (clickedDate) => {
    setSelectedDate(clickedDate);
    const poster = getMoviePosterForDate(clickedDate);
    setMoviePoster(poster);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const poster = getMoviePosterForDate(date);
      return (
        <div className='relative w-full'>
          <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -75%)', width: "75%" }}>
            {poster && (
              <img
                src={poster}
                alt="Movie Poster"
                className='rounded-full h-full w-full'
              />
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && selectedDate && date.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0]) {
      return 'bg-blue-500 text-white rounded-full';
    }
    return null;
  };

  return (
    <div className="mx-auto mt-8 p-8 bg-gray-900 rounded shadow text-black">
      <Calendar
        onChange={onChange}
        onClickDay={(clickedDate) => onDateClick(clickedDate)}
        value={date}
        calendarType="US"
        locale="en-US"
        tileContent={tileContent}
        tileClassName={tileClassName}
        className="custom-calendar"
      />
    </div>
  );
};

export default CalendarComponent;
