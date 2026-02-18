import { useState } from "react";

function LoginCard() {
  const [formData, setFormData] = useState({ fname: "", lname: "", pass: "" });
  const [errorData,setErrorData] = useState('');
  // function handleChange(e){
  //   setFormData({...formData,[e.target.name]:e.target.value}) 

  // }

function handleChange(e) {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

  if (e.target.name === "pass") {

    if (!regex.test(e.target.value)) {
      setErrorData(
        "At least 8 characters and contain at least one uppercase letter, one lowercase letter, and one special character."
      );
      document.getElementById("errorPass").classList.remove("hidden");
    } else {
      setErrorData('');
      document.getElementById("errorPass").classList.add("hidden");
    }

  }

  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
}




  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96">

        <h2 className="text-3xl font-bold text-center text-amber-500 mb-6">
          Form
        </h2>

        <form className="space-y-5">

          {/* First Name */}
          <div>
            <label className="block mb-2 text-amber-500 font-medium">
              First Name
            </label>
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="w-full px-4 py-2 text-cyan-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            {/* <span id="errorName" className="hidden font-mono py-2 text-red-500">{errorData}</span> */}
          </div>
          {/* Last Name */}
          <div>
            <label className="block mb-2 text-amber-500 font-medium">
              Last Name
            </label>
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="w-full px-4 text-cyan-500 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          {/* Password */}
          <div>
            <label className="block mb-2 text-amber-500 font-medium">
              Password
            </label>
            <input
              type="password"
              name="pass"
              value={formData.pass}
              onChange={handleChange}
              className="w-full text-cyan-500 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <span id="errorPass" className="hidden font-mono py-2 text-red-500">{errorData}</span>
          </div>
          <div className="data  text-amber-500 font-mono">

            <h1>First Name is : <span className="text-cyan-500">{formData.fname}</span></h1>
            <h1>Last Name is : <span className="text-cyan-500">{formData.lname}</span></h1>
            <h1>Passowrd is : <span className="text-cyan-500">{formData.pass}</span></h1>
            {/* <h1>{formData}</h1> */}

          </div>


          {/* Button */}
          {/* <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign In
          </button> */}

        </form>
      </div>
    </div>
  );
}

export default LoginCard;
