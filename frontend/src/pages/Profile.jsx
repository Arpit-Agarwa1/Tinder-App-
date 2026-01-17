// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Profile() {
//   const [data, setData] = useState({
//     name: "",
//     age: "",
//     city: "",
//     gender: "",
//     lookingFor: "",
//     smoker: "",
//   });

//   useEffect(() => {
//     getProfileData();
//   }, []);

//   async function getProfileData() {
//     try {
//       const response = await axios.get("http://localhost:3000/user/profile", {
//         withCredentials: true,
//       });
//       setData({
//         name: response.data.name,
//         age: response.data.age,
//         city: response.data.city,
//         gender: response.data.gender,
//         lookingFor: response.data.lookingFor,
//         smoker: response.data.smoker,
//       });
//       console.log(response);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   function handelChange(e) {
//     const { name, value } = e.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }

//   async function handelSubmit(e) {
//     e.preventDefault();

//     try {
//       const res = await axios.put("http://localhost:3000/user/profile", data, {
//         withCredentials: true,
//       });

//       alert("Profile saved successfully");
//       console.log(res.data);
//     } catch (error) {
//       console.error(error.message);
//       alert("Something went wrong");
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={handelSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={data.name}
//             onChange={handelChange}
//           />
//         </label>

//         <label>
//           Age:
//           <input
//             type="number"
//             name="age"
//             value={data.age}
//             onChange={handelChange}
//           />
//         </label>

//         <label>
//           City:
//           <input
//             type="text"
//             name="city"
//             value={data.city}
//             onChange={handelChange}
//           />
//         </label>

//         <label>
//           Gender:
//           <select name="gender" value={data.gender} onChange={handelChange}>
//             <option value="">Select</option>
//             <option value="FEMALE">Female</option>
//             <option value="MALE">Male</option>
//             <option value="OTHERS">Others</option>
//           </select>
//         </label>

//         <label>
//           Looking For:
//           <select
//             name="lookingFor"
//             value={data.lookingFor}
//             onChange={handelChange}
//           >
//             <option value="">Select</option>
//             <option value="FEMALE">Female</option>
//             <option value="MALE">Male</option>
//             <option value="OTHERS">Others</option>
//           </select>
//         </label>

//         <label>
//           Smoker:
//           <select name="smoker" value={data.smoker} onChange={handelChange}>
//             <option value="">Select</option>
//             <option value="No">No</option>
//             <option value="Yes">Yes</option>
//           </select>
//         </label>

//         <button type="submit">Save Profile</button>
//       </form>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Profile.css";

export default function Profile() {
  const [data, setData] = useState({
    name: "",
    age: "",
    city: "",
    gender: "",
    lookingFor: "",
    smoker: "",
  });

  useEffect(() => {
    getProfileData();
  }, []);

  async function getProfileData() {
    try {
      const response = await axios.get("http://localhost:3000/user/profile", {
        withCredentials: true,
      });

      setData({
        name: response.data.name || "",
        age: response.data.age || "",
        city: response.data.city || "",
        gender: response.data.gender || "",
        lookingFor: response.data.lookingFor || "",
        smoker: response.data.smoker || "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  function handelChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  async function handelSubmit(e) {
    e.preventDefault();
    try {
      await axios.put("http://localhost:3000/user/profile", data, {
        withCredentials: true,
      });
      alert("Profile saved successfully ❤️");
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>Your Profile</h1>
        <p>Let others know the real you</p>

        <form onSubmit={handelSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handelChange}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={data.age}
              onChange={handelChange}
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={data.city}
              onChange={handelChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={data.gender} onChange={handelChange}>
              <option value="">Select</option>
              <option value="FEMALE">Female</option>
              <option value="MALE">Male</option>
              <option value="OTHERS">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label>Looking For</label>
            <select
              name="lookingFor"
              value={data.lookingFor}
              onChange={handelChange}
            >
              <option value="">Select</option>
              <option value="FEMALE">Female</option>
              <option value="MALE">Male</option>
              <option value="OTHERS">Others</option>
            </select>
          </div>

          <div className="form-group">
            <label>Smoker</label>
            <select name="smoker" value={data.smoker} onChange={handelChange}>
              <option value="">Select</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <button type="submit" className="save-btn">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}
