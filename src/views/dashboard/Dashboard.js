import React, { useEffect } from 'react'



const Dashboard = ({ setAuth }) => {


 


  const getProfile = async () => {
  try {
      const res = await fetch("http://164.52.201.141:3005/dashboard", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      // toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <>
   <div className><h1 className="text-black">heloo</h1>
   
   </div>

  </>
    
  )
}

export default Dashboard
