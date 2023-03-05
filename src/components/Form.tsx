import { useState } from "react";
import axios from "axios";
interface Idata {
  firstname: string;
  lastname: string;
  email: string;
  message?: string;
}
export default function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  const data: Idata = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    message: message,
  };

  const submitData = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/sendContact", data);
      console.log(res.data);
      setSuccessMessage(
        "Votre message à bien été reçu, vous recevrez un mail de confirmation dans les plus brefs délais."
      );
    } catch (error) {
      console.error(error);
    }
    setFirstname("");
    setLastname("");
    setEmail("");
    setMessage("");
  };
  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
    setCanSubmit(parseInt(e.target.value) === 4);
  };
  return (
    <div className="flex justify-center items-center flex-col mt-10 mb-10 h-full">
      <div className="w-8/12 md:w-10/12">
        <h2 className={`text-3xl text-white pb-2 text-center `}>
          Vous souhaitez prendre contacte c'est par ici !
        </h2>
      </div>
      <div className="flex justify-center items-center w-5/12 md:w-10/12">
        <form className="w-full " onSubmit={submitData}>
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
                required
                aria-label="firstname"
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
                required
                aria-label="lastname"
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
                required
                aria-label="E-mail"
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
                required
                aria-label="message"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:flex-col">
            <div className={canSubmit ? `md:w-1/3` : `w-full`}>
              {!canSubmit && (
                <div className="flex flex-col">
                  <label
                    className={`block uppercase tracking-wide text-white text-xs font-bold mb-2`}
                    htmlFor="test"
                  >
                    Quel est le résultat de 2 + 2 ?
                  </label>
                  <input
                    type="number"
                    value={answer}
                    onChange={handleAnswerChange}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    style={{ color: "black" }}
                    name="test"
                  />
                </div>
              )}
              {canSubmit && (
                <div className="md:flex md:flex-col">
                  <div className="md:w-1/3">
                    <button
                      className="shadow bg-low-purple hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      value="send"
                    >
                      Soumettre
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className={`mt-5`}>
              {successMessage !== "" && (
                <p className="text-white">{successMessage}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
