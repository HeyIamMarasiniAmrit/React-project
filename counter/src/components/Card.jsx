import React from 'react'

function Card({username, btnText="Visit me"}) {
    console.log(username);
    
  return (
    <div> <section className="px-2 py-10 md:px-0">
    <div className="mx-auto max-w-4xl rounded-md ">
      <div className="md:flex md:items-center md:justify-center md:space-x-14">
        <div className="relative h-48 w-48 flex-shrink-0">
          <img
            className="relative h-48 w-48 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt=""
          />
        </div>
        <div className="mt-10 md:mt-0">
          <blockquote>
            <p className="text-xl text-white">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              aliquam repellat laborum minima tempore deserunt explicabo placeat!
              Fugit, molestias nesciunt.”
            </p>
          </blockquote>
          <p className="mt-7 text-lg font-semibold text-white">{username}</p>
          <p className="mt-1 text-base text-gray-600 text-white">Frontend Developer at DevUI</p>
          < button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>
            {btnText }
             </button>
        </div>
      </div>
    </div>
  </section> 
      
    </div>
  )
}

export default Card
