import bookTableBanner from "../../assets/images/book-table-banner.png";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { toast } from "sonner";

const BookTable = () => {
  const [value, setValue] = useState({
    startDate: null,
  });
  const handleSendMail = (e) => {
    e.preventDefault();

    const name = e.target.elements["name"].value;
    const email = e.target.elements["email"].value;
    const people = e.target.elements["people"].value;
    const message = e.target.elements["message"].value;
    const reservationDate = value.startDate
      ? formatDate(value.startDate)
      : "No date";

    const sendEmail = () => {
      console.log({
        name,
        email,
        people,
        message,
        reservationDate,
      });
      return emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name,
            email,
            people,
            message,
            reservationDate,
          },
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            e.target.reset();
            document.querySelector(".form-datepicker input").value = "";
            // toast.success("Message Sent!");
          },
          (error) => {
            toast.error(`Error: ${error.text}`);
          }
        );
    };

    toast.promise(sendEmail(), {
      loading: "Booking Table...",
      success: "Reservation Complete!",
      error: (error) => `Error: ${error}`,
    });
  };
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bookTableBanner})` }}
    >
      <div className="max-w-screen-xl xl:mx-auto mx-8 pt-8">
        <p className="text-[#BD1F17] xl:font-bold">&#9642; Book Now</p>
        <h1 className="uppercase text-5xl text-white">book your table</h1>
        <p className="text-white roboto">
          Reserve your spot now for an unforgettable dining experience. Secure
          your table today and savor every moment with us!
        </p>
        <div className="mt-16 grid grid-cols-1 xl:grid-cols-3 xl:gap-20 roboto">
          <form
            onSubmit={handleSendMail}
            className="xl:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-y-5 xl:gap-x-10"
          >
            <label className="form-control w-full">
              <input
                id="name"
                type="text"
                placeholder="Your Name *"
                className="input bg-transparent border-2 rounded-none text-white placeholder:text-white border-white focus:border-white"
                required
              />
            </label>
            <label className="form-control w-full">
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="input bg-transparent border-2 rounded-none text-white placeholder:text-white border-white focus:border-white"
              />
            </label>
            <div className="form-datepicker border-2 border-white">
              <Datepicker
                inputClassName="input bg-transparent w-full rounded-none text-white placeholder:text-white border-white focus:border-white"
                placeholder="Reservation Date"
                useRange={false}
                asSingle={true}
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </div>
            <label className="form-control w-full">
              <input
                id="people"
                type="number"
                placeholder="Total People"
                className="input bg-transparent border-2 rounded-none text-white placeholder:text-white border-white focus:border-white"
              />
            </label>
            <label className="form-control xl:col-span-2 w-full">
              <textarea
                id="message"
                className="textarea bg-transparent border-2 border-white rounded-none text-white placeholder:text-white focus:border-white text-base resize-none"
                placeholder="Type your message here"
                rows={11}
              ></textarea>
            </label>
            <div className="xl:col-span-2 pb-8">
              <input
                type="submit"
                value="BOOK NOW"
                className="btn rounded-none bg-custom-yellow hover:bg-custom-yellow-dark border-none roboto"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
