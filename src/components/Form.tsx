import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";

export default function Form({ db }: any) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    message: message,
  };

  const addDoc = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      // Validate the form data before writing to the database
      if (!firstname || !lastname || !email || !message) {
        throw new Error("Please fill out all fields");
      }

      // Generate a unique document ID using doc()
      const newDocRef = doc(collection(db, "hC41wCQpNuCLf2Xplglb"), "contact");
      await setDoc(newDocRef, data);
      console.log("Data written to database:", data);

      // Clear the form inputs after submitting
      setFirstname("");
      setLastname("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error writing to database:", error);
      // Display an error message to the user
      alert("Failed to submit form. Please try again.");
    }
  };
  return (
    <div className="flex justify-center items-center flex-col mt-10 mb-10 h-full">
      <div className="w-8/12 md:w-10/12">
        <h2 className="text-2xl text-white pb-2 lg:text-center">
          Vous souhaitez prendre contacte c'est par ici !
        </h2>
      </div>
      <div className="flex justify-center items-center w-5/12 md:w-10/12">
        <form className="w-full " onSubmit={addDoc}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="firstname"
              >
                Prénom
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                name="firstname"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="lastname"
              >
                Nom
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                name="lastname"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-low-purple hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="send"
              >
                Soumettre
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
