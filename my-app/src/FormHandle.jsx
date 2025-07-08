import React, { useState } from 'react';

function FormHandle() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [gender, setGender] = useState('');
  const [fullName, setFullName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // local copies to build full name before updating state
    let tempFname = fname;
    let tempLname = lname;
    let tempGender = gender;

    if (name === "fname") {
      tempFname = value;
      setFname(value);
    }

    if (name === "lname") {
      tempLname = value;
      setLname(value);
    }

    if (name === "gender") {
      tempGender = value;
      setGender(value);
    }

    let modifiedFname = tempFname;
    if (tempGender === "male") {
      modifiedFname = tempFname + " Kumar";
    } else if (tempGender === "female") {
      modifiedFname = tempFname + " Kumari";
    }

    setFullName(modifiedFname + " " + tempLname);
  };

  return (
    <div>
      <form>
        <label>First Name:
          <input type="text" name="fname" onChange={handleChange} />
        </label><br/>

        <label>Last Name:
          <input type="text" name="lname" onChange={handleChange} />
        </label><br/>

        <label>Gender:
          <select name="gender" onChange={handleChange} defaultValue="">
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label><br/>
      </form>

      <h2>Full Name: {fullName}</h2>
    </div>
  );
}

export default FormHandle;
