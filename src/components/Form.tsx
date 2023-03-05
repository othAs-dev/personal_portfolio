import { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
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
  const [isVerified, setIsVerified] = useState(false);
  const data: Idata = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    message: message,
  };
  const handleVerify = () => {
    setIsVerified(true);
  };

  const submitData = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isVerified) {
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
    } else {
      alert("Please verify that you are not a robot.");
    }
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
            <div className="md:w-1/3">
              {isVerified ? (
                <button
                  className="shadow bg-low-purple hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  value="send"
                  onClick={submitData}
                >
                  Soumettre
                </button>
              ) : (
                <ReCAPTCHA
                  sitekey="6LdUPNQkAAAAAI_pzNEQJE9CUuuTl4pRcc5uv5gh"
                  onChange={handleVerify}
                />
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
