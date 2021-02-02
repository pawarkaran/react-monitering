import { CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CDataTable, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import './users.scss';




const AdminUserDetails = ({ match }) => {

    const { id } = useParams();

    const fields = ['title', 'assign_to', 'created']

    const [allIssues, setAllIssues] = useState([]); // storing all fetched users
    const [issues, setIssues] = useState([]);

    const [name, setName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const [email, setEmail] = useState([]);
    const [company, setCompany] = useState([]);
    const [domain, setDomain] = useState([]);
    const [mobile, setMobile] = useState([]);

    const [user_role, setUser_role] = useState([]);


    const [roler, setRoler] = useState({ role: '' });
    const { role } = roler;
    // const [role, setrole] = useState({
    //     role:''
    // })



    // ------------------------------------
    const getProfile = async () => {
        try {
            const res = await fetch(`http://localhost:5000/admin/users/issues/${id}`, {
                method: "GET",
                headers: { jwt_token_admin: localStorage.token_admin }
            });

            const parseData = await res.json();

            setAllIssues(parseData);
            // console.log(parseData);
            //   console.log(parseData);
            setName(parseData[0].user_firstname);
            setLastName(parseData[0].user_lastname);
            setEmail(parseData[0].user_email)
            setCompany(parseData[0].user_companyname)
            setDomain(parseData[0].user_domainname)
            setMobile(parseData[0].user_mobile)

            setUser_role(parseData[0].user_role);



            // console.log(parseData[0].user_firstname);
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




    const onSubmito = async (e) => {
        e.preventDefault();
        console.log("edit pressed");
        // e.target.className += " was-validated";
        try {
            const myHeaders = new Headers();

            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("jwt_token_admin", localStorage.token_admin);
            const body = { role };
            const response = await fetch(
                `http://localhost:5000/admin/users/details/${id}`,
                {
                    method: "PATCH",
                    headers: myHeaders,
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json();

            // localStorage.setItem("token", parseRes.jwtToken);
            ToastsStore.success("Role Edited ")
            // ToastsStore.error(parseRes);
            // ToastsStore.error(parseRes);

        } catch (err) {
            console.error(err.message);
        }
    };

    const changeHandler = e =>
        setRoler({ ...roler, [e.target.name]: e.target.value });

    return (
        <div>
            <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
            {/* <h1> Name: {name} {lastName} ( Role:- {role} )</h1> */}
            <div>


                <div>
                    <CRow className='m-auto'>
                        <CCol md="7" className=" py-3">

                            <h2 className="heading-name "> name: {name} {lastName}  <span >(Role:- {user_role})</span></h2>


                        </CCol>
                        {/* <CCol md="4" className="bg-warning py-3">
                                 col-md-4
                         </CCol> */}

                    </CRow>
                </div>


                {/* ------------ Detais ------------- */}
                <div>

                    <CRow className=" p-4">
                        <CCol lg="5" >
                            <CCol className="card11 border border-radius-lg rounded"  >
                                <div className="container1 ">


                                    <div className="form-group row mt-3 border-radius-sm">
                                        <label className="col-sm-2 col-form-label">Name:</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control bg-muted" placeholder="Email" value={name} readOnly />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputPassword3" className="col-sm-2 col-form-label">Company:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control bg-muted" value={company} readOnly />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputPassword3" className="col-sm-2 col-form-label">Domain:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control bg-muted" value={domain} readOnly />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputPassword3" className="col-sm-2 col-form-label">Email:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control bg-muted" value={email} readOnly />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="inputPassword3" className="col-sm-2 col-form-label">Phone:</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control bg-muted" value={mobile} readOnly />
                                        </div>
                                    </div>
                                    <form
                                        className='needs-validation'
                                        onSubmit={onSubmito}
                                        noValidate
                                    >
                                        <div className="form-group row">
                                            <label for="inputPassword3" className="col-sm-2 col-form-label">Role:</label>
                                            <div className="col-sm-10">
                                                <select
                                                    onChange={changeHandler}
                                                    value={role}
                                                    name="role"
                                                    className="form-control bg-white input  border-2 outline-none rounded-sm"
                                                >
                                                    <option value={user_role} > Current Role: {user_role} </option>
                                                    <option value="technician" >Technician </option>
                                                    <option value="developer" >Developer</option>
                                                    <option value="managment">Managment</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <CButton type="submit" className="btn btn-info pl-5 pr-5" >Submit Role</CButton>
                                        </div>
                                    </form>
                                </div>
                            </CCol>
                            {/* <CCard className="mx-4">
              <CCardBody className="p-4"> */}

                        </CCol>
                    </CRow>

                </div>
                {/* ------------------- */}
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
                                        'created':
                                            (item) => (
                                                <td>
                                                    <p >
                                                        {item.time_now}

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
