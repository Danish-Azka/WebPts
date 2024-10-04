import React, { useEffect, useState } from 'react';
import { getAdmin } from '../service/apiadmin';
import { IoCloseSharp } from "react-icons/io5"

const Profile = ({ onClose, onDelete }) => {
const [data, setData] = useState()
  useEffect(() => {
    fetchAdmin()
  }, [])

  const fetchAdmin = async () => {
    getAdmin()
    .then(res => {
      setData(res);
      console.log(res);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
  <div className="bg-slate-100 w-[400px] rounded-lg shadow-lg px-3 flex flex-col justify-center relative">
    <div className="bg-white rounded-lg py-6 justify-end flex shadow-lg">
      <button
        className="bg-gray-500 text-white px-2 py-2 rounded hover:bg-red-600"
        onClick={onClose}
      >
        <IoCloseSharp />
      </button>
    </div>
    <div className='bg-slate-300 rounded-full h-24 w-24 mx-auto absolute left-1/2 top-[40%] transform -translate-x-1/2 -translate-y-1/2'>
      d
    </div>
    <div className='text-center mt-[50px]'>
      <p className='text-lg font-semibold'>Azka Rahmat</p>
      <p className='text-sm'>Azka@gmail.com</p>
    </div>
    <div className="flex justify-center gap-4 mt-4">
      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
        <a href="https://www.instagram.com/azkrmt_" target="_blank" rel="noopener noreferrer">
          {/* <IoLogoInstagram className="text-gray-800" /> */}A
        </a>
      </div>
      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
        <IoCarSport />
      </div>
      <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
        <IoCar />
      </div>
    </div>
  </div>
</div>
  );
};

{/* {data &&
        data.map((item, index) => (
          <p>{item.email}</p>
          ))} */}

export default Profile;
