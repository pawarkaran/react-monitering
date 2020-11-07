import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const AdminUserDetails = ( { match }) => {

    const { id } = useParams();

    const fields = ['title', 'assign_to']

    const [allIssues, setAllIssues] = useState([]); // storing all fetched users
    const [issues, setIssues] = useState([]);
    // ------------------------------------
    const getProfile = async () => {
      try {
        const res = await fetch(`http://164.52.201.141:3005/admin/users/issues/${id}`, {
          method: "GET",
          // headers: { jwt_token: localStorage.token }
        });
  
        const parseData = await res.json();
 
        setAllIssues(parseData);
        console.log(parseData);
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
      setIssues(allIssues);
    }, [allIssues]);


    return (
        <div>
            <h1> hello {id} </h1>
            <div>
            <CRow>
                <CCol>
                    <CCard>
                        <CCardHeader>
                            Users Issues
            </CCardHeader>
                        <CCardBody>
                            <CDataTable
                                items={issues}
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
                                    'title':
                                        (item) => (
                                            <td>
                                                <p>
                                                    {item.title}
                                                </ p>
                                            </td>
                                        ),
                                    'assign_to':
                                        (item) => (
                                            <td>
                                                <p >
                                                    {item.assign_to}
                                                </ p>
                                            </td>
                                        ),
                                    'issues':
                                        (item) => (
                                            <td>
                                                <p >
                                                    {item.issuecount}
                                                    
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
   
        </div>
    )
}

export default AdminUserDetails
