import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-3/12 flex flex-col bg-black h-screen ">
      <nav className="flex flex-col h-screen bg-purple-800 w-11/12 ml-auto pt-10">
        <Link to="/tasks" className="text-white ml-3">
          Задачи и работы
        </Link>
        <Link to="/projects" className="text-white mt-4 ml-3">
          Проекты
        </Link>
        <Link to="/calendar" className="text-white mt-4 ml-3">
          Календарь
        </Link>
        <Link to="/opportunities" className="text-white mt-4 ml-3">
          Возможности
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
