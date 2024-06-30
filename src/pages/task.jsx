import React, { useState } from 'react'
import TicketModal from './ticketModal'
// import fetchProtectedData from  '../Services/AxiosBuilder'
import AxiosBuilder from '../Services/AxiosBuilder'

const Task = () => {

 const  fetchProtectedData =  AxiosBuilder()
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSave =  (values) => {
    console.log('Form Data:', JSON.stringify(values, null, 2));

    try {
      const data =  fetchProtectedData('/task/addTask', 'POST',values);
      console.log('Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
    handleCloseModal();
  };


  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item d-flex flex-wrap justify-content-between align-items-center">
          <div className="col-12 col-md-2">512</div>
          <div className="col-12 col-md-2">tskname</div>
          <div className="col-12 col-md-2">status</div>
          <div className="col-12 col-md-2">due Date</div>
          <div className="col-12 col-md-1">
            <i className="bi bi-pencil-square text-primary"></i>
          </div>
          <div className="col-12 col-md-1">
            <i className="bi bi-trash text-danger"></i>
          </div>
        </li>
        {/* Add more <li> elements here */}
        <li className="list-group-item d-flex flex-wrap justify-content-between align-items-center">
          <div className="col-12 col-md-2">512</div>
          <div className="col-12 col-md-2 text-nowrap overflow-hidden text-truncate">tsknameaaaaaa aaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaa aa aaaaa aa  aaaaa aaaaaaaa aaaaaaa aaaaaaa aaaaaaaaaa</div>
          <div className="col-12 col-md-2">status</div>
          <div className="col-12 col-md-2">due Date</div>
          <div className="col-12 col-md-1">
            <i className="bi bi-pencil-square text-primary"></i>
          </div>
          <div className="col-12 col-md-1">
            <i className="bi bi-trash text-danger"></i>
          </div>
        </li>
      </ul>
      <TicketModal show={showModal} handleClose={handleCloseModal} handleSave={handleSave} />
      <button onClick={handleOpenModal} className="btn btn-primary add-button rounded rounded-circle position-fixed addbutton ">
        <i className="bi bi-plus fs-1 d-flex justify-content-center align-items-center"></i>
      </button>
    </div>
  )
}

export default Task