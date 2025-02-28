import React, { useState } from "react";
import ModalInfo from "./modal";
import "./timeTable.scss";

const timeTable = [
  {
    id:1,
    lessonHour: '9:00 - 11:00',
    dayWeek: [
      {
        id:1,
        teacher: 'Aliyev Vali',
        group: 'Group 001',
        room: 'Xona 11'
      },
      {
        id:2,
        teacher: 'Karimov Dovron',
        group: 'Group 002',
        room: 'Xona 12'
      },
      {
        id:3,
        lessonHour: '9:00 - 11:00',
        teacher: 'Jo`rayeva Asila',
        group: 'Group 003',
        room: 'Xona 13'
      },
      {
        id:4,
        lessonHour: '9:00 - 11:00',
        teacher: 'Qurbonov Bekzod',
        group: 'Group 004',
        room: 'Xona 14'
      },
      {
        id:5,
        lessonHour: '9:00 - 11:00',
        teacher: 'Hasanova Kamola',
        group: 'Group 005',
        room: 'Xona 15'
      },
      {
        id:6,
        lessonHour: '9:00 - 11:00',
        teacher: 'Berdiyev Javohir',
        group: 'Group 006',
        room: 'Xona 16'
      },
      {
        id:6,
        lessonHour: '9:00 - 11:00',
        teacher: 'Berdiyev Javohir',
        group: 'Group 006',
        room: 'Xona 16'
      },
    ]
  }
]
const teachers = [
  {
      id: "1",
      name: "Ali Valiyev"
  },
  {
      id: "2",
      name: "Valiyev Ali",
  },
  {
      id: "3",
      name: "Jurayeva Sabina",
  },
]
const courses = [
  {
      id: "1",
      speciality: "Frontend"
  },
  {
      id: "2",
      speciality: "Backend"
  },
  {
      id: "3",
      speciality: "Flutter"
  },
]
const rooms = [
  {
      id: "1",
      room: "Xona 1"
  },
  {
      id: "2",
      room: "Xona 2"
  },
  {
      id: "3",
      room: "Xona 3"
  },
]
 
const TimeTable = () => {
  
  return (
    <div className="time__parent">
      <div className="d-flex justify-content-between align-center timetable">
        <div className="btitle">Dars jadvali</div>
        < ModalInfo teachers={teachers} courses={courses} rooms={rooms}/> 
      </div>

      <div className="">
        <h1 className="btitle">O'qituvchining dars jadvali</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Dushanba</th>
              <th>Seshanba</th>
              <th>Chorshanba</th>
              <th>Payshanba</th>
              <th>Juma</th>
              <th>Shanba</th>
              <th>Yakshanba</th>
            </tr>
          </thead>
          <tbody>
            {timeTable.map( table => (
                  <tr key={table.id}>
                      <td>{table.lessonHour}</td>
                      
                      {table?.dayWeek?.map((day, id) => (
                          <td key={id}>
                            <div className="name">{day.teacher}</div>
                            <div className="name">{day.group}</div>
                            <div className="name">{day.room}</div>
                          </td>
                      ))}
                  </tr>   
            ))}
          </tbody>
        </table>
    </div>

    </div>
  );
};

export default TimeTable;
