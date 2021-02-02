import React, { useEffect } from 'react'


// /home/karan/React Js/ui/coreui-free-react-admin-template-master/src/views/Home/home.scss
const Dashboard = ({ setAuth }) => {


 


  const getProfile = async () => {
  try {
      const res = await fetch("http://localhost:5000/dashboard", {
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
   <div className><h1 className="text-black">heloo</h1></div>

  </>
    
  )
}

export default Dashboard
