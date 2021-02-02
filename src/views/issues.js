import React, { useEffect, useState } from 'react';
import { AiOutlineReload } from "react-icons/ai";



import {
  CBadge,
  CButton,
  CButtonToolbar,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CDataTable,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CRow
} from '@coreui/react'
import { useForm } from 'react-hook-form';
import { ToastsContainer, ToastsContainerPosition, ToastsStore } from 'react-toasts';
import { Link } from 'react-router-dom';





// const usersData = [
//   { number: 1, title: 'website not working', service: 'Icinga2Integration', created: '2018/01/01', 'assigned_to': 'Johny Bravo', priority: '', status: 'Active', breach: '', actions: '' },
//   { number: 2, title: 'website not working', service: 'Icinga2Integration', created: '2018/02/01', 'assigned_to': 'Johny Bravo', priority: '', status: 'Banned', breach: '', actions: '' },
//   { number: 3, title: 'website not working', service: 'Icinga2Integration', created: '2018/02/01', 'assigned_to': 'Johny Bravo', priority: '', status: 'Inactive', breach: '', actions: '' },
//   { number: 4, title: 'server down', service: 'Icinga2Integration', created: '2018/03/01', 'assigned_to': 'Johny Bravo', priority: '', status: 'Pending', breach: '', actions: '' },
//   { number: 5, title: 'website not working', service: 'Icinga2Integration', created: '2018/01/21', 'assigned_to': 'Johny Bravo', priority: '', status: 'Active', breach: '', actions: '' },
//   { number: 6, title: 'website not working', service: 'Icinga2Integration', created: '2018/01/01', 'assigned_to': 'Johny Bravo', priority: '', status: 'Active', breach: '', actions: '' },
//   { number: 7, title: 'server down', service: 'Icinga2Integration', created: '2018/02/01', 'assigned_to': 'Johny Bravo', priority: '', status: 'Banned', breach: '', actions: '' },
//   { number: 8, title: 'website not working', service: 'Icinga2Integration', created: '2018/02/01', 'assigned_to': 'Johny Bravo', priority: '', status: 'Inactive', breach: '', actions: '' },
//   { number: 9, title: 'website not working', service: 'Icinga2Integration', created: '2018/03/01', 'assigned_to': 'Johny Bravo', priority: '', status: 'Pending', breach: '', actions: '' },
//   { number: 10, title: 'server down', service: 'Icinga2Integration', created: '2018/01/21', 'assigned_to': 'Johny Bravo', priority: '', status: 'Active', breach: '', actions: '' },
// ]


// const getBadge = statusof => {
//   switch (statusof) {
//     case 'Active': return 'success'
//     case 'pending': return 'dark'
//     case 'Pending': return 'warning'
//     case 'cross': return 'danger'
//     case 'low': return 'danger'
//     default: return 'primary'
//   }
// }

const getAction = actions => {
  switch (actions) {
    // case 'Ack': return 'success'
    // case '': return 'dark'
    // case 'Pending': return 'warning'
    // case 'Banned': return 'danger'
    // default: return 'primary'
  }
}



const fields = ['number', 'title', 'service', 'assign_to', 'status', 'priority', 'created', 'breach', 'actions']

const Issues = ({ setAuth }) => {


  const getBadge = statusof => {

    switch (statusof) {
      case 'resloved': return 'success'
      case 'resolved': return 'success'
      case 'Cross': return 'success'
      case '1': return 'warning'
      case 'warning': return 'warning'
      case '2': return 'danger'
      case 'critical': return 'danger'
      default: return 'dark'
    }
  }



  const [allIssues, setAllIssues] = useState([]);
  const [issues, setIssues] = useState([]);
  // ------------------------------------
  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/issues/", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();

      setAllIssues(parseData);

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

  // --------------------------------------------------------------------
  // const [issueAction, setIssueAction] = useState(issues.title)
  const changeIssue = async e => {
    //e.preventDefault();
    // alert(e)
    const body = { statusof: 'resolved', id: `${e}` }
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("jwt_token", localStorage.token);
    const response = await fetch(
      "http://localhost:5000/issues/kappa",
      {
        method: "PATCH",
        headers: myHeaders,

        body: JSON.stringify(body)
      }
    );

    window.location.href = "/#/issues"


  }
  // useEffect(() => {
  //   changeIssue();
  // }, [getProfile()]);

  // ---------------------- Modal -------------------------
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }

  const [inputs, setInputs] = useState({
    services: "",
    assign_to: "",
    title: "",
    urgency: "",
    summary: "",
    statusof: "",
  });

  const { services, assign_to, title, urgency, summary, statusof } = inputs;

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    // console.log(data)
    e.target.className += " was-validated";
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("jwt_token", localStorage.token);

      const body = { services, assign_to, title, urgency, statusof };
      // ToastsStore.success("Issue Created")
      const response = await fetch(
        "http://localhost:5000/issues",
        {
          method: "POST",
          headers: myHeaders,

          body: JSON.stringify(body)
        }
      );
      // console.log("11");
      ToastsStore.success("Issue Created")
      setInputs({
        services: "",
        assign_to: "",
        title: "",
        urgency: "",
        summary: "",
        statusof: "",
      });
      setModal(false)
      const parseRes = await response.json();
      console.log(parseRes);
      // setInputs("");
      console.log("done");
      // ToastsStore.success("Issue Created")
      // if (parseRes.jwtToken) {
      //   localStorage.setItem("token", parseRes.jwtToken);
      // toast.success("Register Successfully");
      // setAuth(true);
      // toast.success("Register Successfully");
      // } else {
      // toast.error(parseRes);
      // setAuth(false);
      // toast.error(parseRes);
      // }
    } catch (err) {
      console.error(err.message);
    }
  }


  const changeHandler = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });


  // ---------------------------



  // ---------------------------------------
  // -----------------------------


  return (
    <div>



      {/* ------------------------------ Modal ---------------------- */}
      <CModal
        centered
        show={modal}
        onClose={toggle}
      >
        <CModalHeader closeButton>Create A New Issue</CModalHeader>
        <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />

        <CModalBody>
          {/* <CRow className="justify-content-center p-4"> */}
          {/* <CCol md="12" > */}
          {/* <CCard className="mx-4">
      <CCardBody className="p-4"> */}
          <form
            className='needs-validation'
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >




            <div className="form-group ">
              <label className="label-form" >
                Service:
          <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                onChange={changeHandler}
                value={services}
                className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                name="services"
                placeholder="Services"
                required
                minLength="2"
                maxLength="30"
                ref={register({
                  required: "Please Provide Missing Field",
                })}
              />
              {errors.services && <p className="text-danger pt-1">{errors.services.message}</p>}
            </div>


            <div className="form-group ">
              <label className="label-form" >
                Assign To:
          <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                onChange={changeHandler}
                value={assign_to}
                className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                name="assign_to"
                placeholder="Assign to"
                required
                minLength="2"
                maxLength="30"
                ref={register({
                  required: "Please Provide Missing Field",
                })}
              />
              {errors.assign_to && <p className="text-danger pt-1">{errors.assign_to.message}</p>}
            </div>

            <div className="form-group ">
              <label className="label-form" >
                Title:
          <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                onChange={changeHandler}
                value={title}
                className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                name="title"
                placeholder="Title"
                required
                minLength="2"
                maxLength="45"
                ref={register({
                  required: "Please Provide Missing Field",
                })}
              />
              {errors.title && <p className="text-danger pt-1">{errors.title.message}</p>}


            </div>


            <div className="form-group ">
              <label className="label-form" >
                Urgency:
          <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                onChange={changeHandler}
                value={urgency}
                className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                name="urgency"
                placeholder="Urgency"
                required
                minLength="2"
                maxLength="30"
                ref={register({
                  required: "Please Provide Missing Field",
                })}
              />
              {errors.urgency && <p className="text-danger pt-1">{errors.urgency.message}</p>}


            </div>

            <div className="form-group ">
              <label className="label-form" >
                Summary:
                            <span className="text-danger">*</span>
              </label>
              <textarea
                type="text"
                onChange={changeHandler}
                value={summary}
                className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                name="summary"
                placeholder="Summary"
                required
                // minLength="5"
                maxLength="100"
                ref={register({
                  required: "Please Provide Missing Field",
                })}
              />
              {errors.summary && <p className="text-danger pt-1">{errors.summary.message}</p>}
            </div>

            <div className="form-group ">
              <label className="label-form" >
                Status Of:
          {/* <span className="text-danger">*</span> */}
              </label>
              <select
                onChange={changeHandler}
                value={statusof}
                name="statusof"
                className="form-control input  bg-transparent border-2 outline-none rounded-sm"
              >
                <option value="Triggered" selected>Triggered</option>
                <option value="Acknowledged" >Acknowledged</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>

            {/* <div className="form-group ">
              <label className="label-form" >
                Status:
                         
              </label>
              <input
                type="text"
                onChange={changeHandler}
                value={statusof}
                className="form-control input  bg-transparent border-2 outline-none rounded-sm   "
                name="statusof"
                placeholder="Status of"
                required
                maxLength="50"
         
              />
          
            </div> */}

            <CButton type="submit" className="btn btn-info">Submit Incident</CButton>
          </form>



          {/* </CCol> */}
          {/* </CRow> */}
        </CModalBody>
        <CModalFooter>
          {/* <CButton color="primary">Do Something</CButton>{' '} */}
          {/* <CButton
            color="secondary"
            onClick={toggle}
          >Cancel</CButton> */}
        </CModalFooter>
      </CModal>

      {/* -------------------------------------------------------- */}

      <CContainer fluid>
        <CRow>
          <CCol sm="3" className="text-center">
            Open Incidents
          <h5 className="font-weight-bold">2</h5>
          </CCol>
          <CCol sm="3" className="text-center">
            Open-unacknowledged
          <h5 className="font-weight-bold">2</h5>
          </CCol>
          <CCol sm="3" className="text-center">
            Assigned to you
          <h5 className="font-weight-bold">2</h5>
          </CCol>
          <CCol sm="3" className="text-center">
            Unacknowledged by you
          <h5 className="font-weight-bold">2</h5>
          </CCol>
        </CRow>
      </CContainer>


      <CContainer fluid className="p-4">
        <CRow >

          <button type="button" className="btn btn-outline-dark px-4" onClick={() => { window.location.href = "/#/issues" }}><AiOutlineReload /><Link to="dashboard" refresh="true" className="text-muted">Refresh</Link></button>
          <CButtonToolbar className="px-5">
            <CButton type="radio" className="btn btn-outline-dark px-3">Triggered</CButton>
            <CButton type="radio" className="btn btn-outline-dark px-4">Open</CButton>
            <CButton type="radio" className="btn btn-outline-dark px-3">Acknowledged</CButton>
            <CButton type="radio" className="btn btn-outline-dark px-3">Resolved</CButton>
            <CButton type="radio" className="btn btn-outline-dark ">All</CButton>
          </CButtonToolbar>
          <button type="button" className="btn btn-outline-dark">Assigned to me</button>
        </CRow>
      </CContainer>


      <CContainer fluid className="pr-4 pb-2 pl-0 d-flex justify-content-end "> <div>

        {/* <div class="btn-group btn-group-toggle px-3 " data-toggle="CButtons btn-dark">

          <input className="form-control mr-sm" type="search" placeholder="Search Issues" aria-label="Search" />
        </div> */}
        <CButton type="button" className="btn btn-info px-4" onClick={toggle} >New Issue</CButton>

      </div>
      </CContainer>

      {/* ------------------------------- Table For all Issues ------------------- */}

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Issues
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
                  'number':
                    (item, index) => (
                      <td>
                        <p >
                          {/* {item.issue_id} */}
                          {`${index + 1}`}
                        </ p>
                      </td>
                    ),
                  'title':
                    (item) => (
                      <td>
                        <p >
                          {item.title}
                        </ p>
                      </td>
                    ),
                  'service':
                    (item) => (
                      <td>
                        <p >
                          {item.services}
                        </ p>
                      </td>
                    ),
                  'Assign to':
                    (item) => (
                      <td>
                        <p >
                          {item.assign_to}
                        </ p>
                      </td>
                    ),
                  'status':
                    (item) => (
                      <td>
                        <CBadge className="text-capitalize" style={{ fontSize: "12px", width: "85px" }} color={getBadge(item.statusof)}>
                          {item.statusof}
                        </ CBadge>
                      </td>
                    ),
                  'priority':
                    (item) => (
                      <td>
                        <p >
                          {item.priorities}
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
                  'breach':
                    (item) => (
                      <td>
                        <p >
                          {item.breach}
                        </ p>
                      </td>
                    ),
                  'actions':
                    (item) => (
                      <td className="px-1">

                        <Link to="dashboard" refresh="true" className="text-muted">
                          <CButton type="submit" className="btn-outline-dark m-1 text-capitalize" size="sm" color={getAction(item.actions)} onClick={() => changeIssue(item.issue_id)} > Resolve
                          {/* {item.actions} */}

                          </CButton >
                        </Link>
                        {/* <CButton className="btn-outline-dark m-1" size="sm" color={getAction(item.actions)  }>Resolve
                          {item.actions}

                        </CButton > */}
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

export default Issues






