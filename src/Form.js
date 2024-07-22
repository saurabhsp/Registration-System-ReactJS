import React, { useEffect, useState } from "react";

function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    console.log("Registered");
  }, [flag]);
  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("Please Fill All the Information");
    } else {
      setFlag(true);
    }
  };
  return (
    <>
      <pre>
        {flag ? (
          <h2 className="ui-define">
            Hello {inputData.name}, You've Registered Successfully{" "}
          </h2>
        ) : (
          ""
        )}
      </pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        <div>
          <input
            type="text"
            value={inputData.name}
            onChange={handleData}
            placeholder="Enter Your Name"
            name="name"
          />
        </div>
        <div>
          <input
            type="email"
            value={inputData.email}
            onChange={handleData}
            placeholder="Enter Your email"
            name="email"
          />
        </div>
        <div>
          <input
            type="password"
            value={inputData.password}
            onChange={handleData}
            placeholder="Enter Password"
            name="password"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
