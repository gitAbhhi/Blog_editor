import React, { useState } from 'react'

const Blogeditor = () => {
    const [feedbacks,setFeedbackData]=useState([])
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        message:""
    })
    
    const handleChange=()=>{


    }
    const handleSubmit=()=>{

    }
  return (
    <>
     <div className='bg-gradient-to-b from-yellow-200 to-gray-200 min-h-screen flex flex-col items-center justify-center'>
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="form flex flex-col w-[85vw] sm:w-[60vw] ">
          <h1 className='text-center  text-2xl md:text-4xl font-light'>Blog Editor</h1>

          <label htmlFor="" className='text-xl md:text-2xl font-extralight m-3'>Title</label>
          <input required value={formData.name} onChange={handleChange} className='name-input bg-white pl-[30px] shadow-md 
            focus:outline-none focus:ring-1 focus:ring-yellow-300 rounded-full font-extralight h-[50px] mb-4' type="text" placeholder='Enter blog title' name="name" id="" />

          <label htmlFor="" className='text-xl md:text-2xl font-extralight m-3'>Tags</label>
          <input required value={formData.email} onChange={handleChange} className='email-input bg-white pl-[30px] shadow-md 
            focus:outline-none focus:ring-1 focus:ring-yellow-300 rounded-full font-extralight h-[50px] mb-4' type="email" placeholder='Enter tags' name='email' />

          <label htmlFor="" className='text-xl md:text-2xl font-extralight  m-3'>Content</label>
          <textarea required value={formData.message} onChange={handleChange} className='txt-input bg-white p-[20px] shadow-md 
            focus:outline-none focus:ring-1 focus:ring-yellow-300 font-extralight rounded-4xl h-[250px]' name="message" placeholder='Enter blog content' id=""></textarea>

          <div className='flex justify-between'>
            <button className='contact-submit rounded-full h-[50px]  hover:shadow-lg w-[200px] font-extralight mt-3 bg-amber-300' type='submit'>Save as Draft</button>
            <button className='contact-submit rounded-full h-[50px]  hover:shadow-lg w-[200px] font-extralight mt-3 bg-amber-300' type='submit'>Publish</button>

            {/* <AnchorLink href='#feedback-section'>

              <button onClick={showfeedback} type='button' className='contact-submit rounded-full h-[50px]  hover:shadow-lg w-[200px] font-extralight mt-3 border-black border-2'>Submited Feedback</button>
            </AnchorLink> */}
          </div>

        </form>
      </div>



      {/* Show Feedbacks */}
      {/* {feedbacks.length >= 0 && (
        <div id='feedback-section' className='flex flex-col justify-center bg-gradient-to-b from-gray-200 to-yellow-200 min-h-screen px-[10%] md:px-[15%] py-[30px]'>
          <h1 className='text-center text-2xl md:text-4xl font-light mb-[40px]'>Submitted Feedback</h1>

          <div className='feedback-container grid gap-[20px] grid-cols-1 md:grid-cols-2'>
            {feedbacks.map((fb, index) => (
              <div key={index} className='flex flex-col items-center '>
                <div className='h-[300px] md:h-[250px] md:w-[33vw] w-[80vw] p-[30px] rounded-3xl flex flex-col bg-white shadow-md'>
                  <span className='text-[15px] mb-1 font-extralight'>{fb.timestamp}</span>
                  <h1 className='mb-1 text-[16px] font-light block md:flex justify-between items-center'><span className=''>Name: {fb.name}</span></h1>
                  <h1 className='text-[16px] mb-1 font-light'>Email : <span>{fb.email}</span></h1>
                  <h2 className='text-[16px] font-light'>Message :</h2>
                  <p className='overflow-y-auto font-light'>{fb.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )} */}
    </>
  )
}

export default Blogeditor
