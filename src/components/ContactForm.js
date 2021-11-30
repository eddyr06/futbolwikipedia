const ContactForm = () => {
  return (
    <div className="container-form">
      <form>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="First and Last Name"
        />

        <label for="Email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
        />

        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Leave a message"
          //   style="height:100px"
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
