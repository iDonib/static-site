const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1>Contact US</h1>

        <form action="">
          <div>
            <label>Name</label>
            <input type="text" required placeholder="John Doe" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="abc@email.com" />
          </div>

          <div>
            <label>Message</label>
            <input type="text" required placeholder="Leave your message..." />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};
export default Contact;
