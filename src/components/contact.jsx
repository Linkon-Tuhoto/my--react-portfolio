import React from 'react'

function Contact() {
  return (
    <div>
        <h2>Contact Me</h2>
        <form action="POST">
            <div>
                <input type="text" placeholder='Full Name'/>
                <input type="email" id="mail" placeholder='Email Address' />
            </div>
            <div>
                <input type="number" placeholder='Phone Number' />
                <input type="text" placeholder='Email Subject' />
            </div>
            <textarea name="" id="" rows="10" cols="30"></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact