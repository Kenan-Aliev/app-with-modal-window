import React from 'react'
import { useSelector } from 'react-redux'
import ModalComponent from './modal'

const Projects = () => {
  const projectdata = useSelector((s) => s.projectData.projectData)
  return (
    <div>
      Проекты
      <div>Список проектов</div>
      <ModalComponent />
      <div className='flex flex-wrap'>
      {projectdata.map((project) => {
        return (
          <div key={project.title} className="w-2/5 mx-4">
            <img src={project.image} className="w-full" alt="some img" />
            <div>{project.title}</div>
            <div>{`${project.start_date}-${project.end_date}`}</div>
            <div>{project.admin}</div>
            <div>{project.superVisor}</div>
          </div>
        )
      })}
      </div>
    </div>
  )
}
export default Projects
