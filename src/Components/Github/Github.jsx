import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
  fetch('https://api.github.com/users/kamalnathdhekwar')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setData(data)
  })
    }, [])
  return (
    <div className=' bg-slate-700 text-4xl text-white'> 
    <h1 className="text-center font-serif pt-5">Github Profile </h1>
    <div className="flex items-center justify-around mt-3 md:flex-row flex-col p-8">
    <img className='h-[300px] w-[300px] mt-5 rounded-full shadow-2xl shadow-white hover:shadow-xl hover:shadow-red-600 duration-500'  src={data.avatar_url} alt="" />
    <ul className=" text-left text-2xl p-6 flex flex-col space-y-4 ">
        <li className="">Name: {data.name}</li>
        <li className="">Bio: {data.bio}</li>
        <li className="">Followers : {data.followers}</li>
        <li className="">Following : {data.following}</li>
    </ul>
    </div>
    </div>
  )
}

export default Github