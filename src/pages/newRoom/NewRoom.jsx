import "./newRoom.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { roomInputs } from "../../formSource";
import useFetch from "../../Hooks/useFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const NewRoom = () => {
  const [info, setInfo] = useState({})
  const [hotelId, setHotelId] = useState(undefined)
  const [rooms, setRooms] = useState([])

  const { data, loading } = useFetch("/hotels")

  const navigate = useNavigate()


  const handleChange = (e) => {
    setInfo(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const roomNubmers = rooms.split(",").map(room => ({number:room}))
    try {
      await axios.post(`/rooms/${hotelId}`, {...info, roomNubmers})
      navigate("/rooms")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Room</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {roomInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleChange} />
                </div>
              ))}
              <div className="formInput">                
                <label>Rooms</label>
                  <textarea onChange={e => setRooms(e.target.value)} placeholder="give comma between room number" cols="30"></textarea>
              </div>
              <div className="formInput" >
                <label>Choose a hotel</label>
                <select id="hotelId" onChange={(e) => setHotelId(e.target.value)}>
                  {loading ? "Loading..." : data && data.map((hotel) => (
                    <option value={hotel._id}>{hotel.name}</option>
                  ))}
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRoom;
