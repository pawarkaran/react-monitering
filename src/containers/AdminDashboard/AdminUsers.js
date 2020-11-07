import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const AdminUsers = () => {

    const fields = ['name', 'email', 'issues'];


  const [allUsers, setAllUsers] = useState([]); // storing all fetched users
  const [users, setUsers] = useState([]);
  // ------------------------------------
  const getProfile = async () => {
    try {
      const res = await fetch("http://164.52.201.141:3005/admin/users", {
        method: "GET",
        // headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();

      setAllUsers(parseData);
// console.log(parseData);
      // setName(parseData[0].user_firstname);
    } catch (err) {
      console.error(err.message);
    }
  };


  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    setUsers(allUsers);
  }, [allUsers]);

    return (
        <div>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            Users
            </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={users}
                                fields={fields}
                                hover
                                // striped
                                tableFilter
                                columnFilterSlot
                                clickableRows
                                itemsPerPageSelect
                                // itemsPerPageSelect
                                sorter
                                bordered
                                size="lg"
                                itemsPerPage={5}
                                pagination
                                scopedSlots={{
                                    'name':
                                        (item) => (
                                            <td>
                                               <Link to={`/users/details/${item.user_id}`} className="text-decoration-none text-muted">
                                               <p className="text-decoration-none text-muted">
                                                    {item.user_firstname}
                                                </p>
                                                </Link>
                                            </td>
                                        ),
                                    'email':
                                        (item) => (
                                            <td>
                                                <Link to={`/users/details/${item.user_id}`} className="text-decoration-none text-muted">
                                                <p className="text-decoration-none text-muted">
                                                    {item.user_email}
                                                </p>
                                                </Link>
                                            </td>
                                        ),
                                    'issues':
                                        (item) => (
                                            <td>
                                                <p >
                                                    {item.issuecount}
                                                    {/* <Link to={`/users/details/${item.user_id}`}></Link> */}
                                                </ p>
                                            </td>
                                        ),
                              

                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

                            
        </div>
    )
}
