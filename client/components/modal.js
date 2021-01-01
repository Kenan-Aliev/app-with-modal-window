import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'

const ModalComponent = () => {
  const [projectTitle, setProjectTitle] = useState('')
  const [superVisorName, setSuperVisorName] = useState('')
  const [adminName, setAdminName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [image,setImage]=useState('')
  const dispatch = useDispatch()
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '40%'
    }
  }

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button
        type="button"
        className="  inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white bg-pink-500 hover:text-blue-500 mr-4 lg:mt-0 focus:outline-none active:bg-pink-700 "
        onClick={openModal}
      >
        Добавить проект
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="flex flex-col">
          <input
            placeholder="название проекта"
            className="border-b-2 outline-none border-black m-1"
            type="text"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
          <div className="flex justity-center">
            <input
              className="flex flex-start mr-3"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            -
            <input
              className="flex flex-end"
              type="date"
              onChange={(e) => setEndDate(e.target.value)}
              value={endDate}
            />
          </div>

          <input
            placeholder="имя руководителя"
            className="border-b-2 border-black m-1 outline-none"
            type="text"
            value={superVisorName}
            onChange={(e) => setSuperVisorName(e.target.value)}
          />
          <input
            placeholder="имя администаратора"
            className="border-b-2 border-black m-1 outline-none"
            type="text"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />
          <input type='file' value={image}onChange={(e)=>setImage(e.target.value)} />
        </form>
        <button
          type="button"
          onClick={() =>{
            dispatch({
              type: 'PROJECTDATA',
              projectData: {
                title: projectTitle,
                admin: adminName,
                superVisor: superVisorName,
                start_date: startDate,
                end_date: endDate,
                image
              }
            })
            setProjectTitle('')
            setStartDate('')
            setEndDate('')
            setAdminName('')
            setSuperVisorName('')
            setImage('')
          }
          
          }
          className="  inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white bg-pink-500 hover:text-blue-500 mr-4 lg:mt-0 focus:outline-none active:bg-pink-700 "
        >
          Add project
        </button>
        <button
          type="button"
          onClick={() => closeModal()}
          className="  inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white bg-pink-500 hover:text-blue-500 mr-4 lg:mt-0 focus:outline-none active:bg-pink-700 "
        >
          close
        </button>
      </Modal>
    </div>
  )
}
export default ModalComponent
