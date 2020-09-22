import React from 'react';

function Contact() {
  return (
    <div>
      <form onSubmit>
        <label htmlFor="name">Name</label>
        <br/>
        <input
          type="text"
          id="name"
          name="name"
          value=""
          onChange=""
        /><br/>
        <label htmlFor="message">Message</label>
        <br/>
        <textarea
          placeholder="Message"
          id="message"
          name="message"
          value=""
          onChange=""
        /><br/>
        <button>Send</button>
      </form>
    </div>
  );
}

export default Contact;