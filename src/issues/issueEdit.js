import React, { useEffect, useState } from 'react'
import {
    CButton,
    CCard, CCardBody, CCardText, CCol, CContainer, CDataTable, CFormGroup, CInput, CLabel, CNav,
    CNavItem, CNavLink, CRow, CTabContent, CTabPane, CTabs
} from '@coreui/react'
import './issueEdit.scss';
import { useForm } from 'react-hook-form';


export const IssueEdit = () => {

    const fields = ['incident', 'message', 'integration', 'time', 'alert']


    const [allIssues, setAllIssues] = useState([]);
    const [issues, setIssues] = useState([]);
    // ------------------------------------
    const getProfile = async () => {
        try {
            const res = await fetch("http://164.52.201.141:3005/issues", {
                method: "GET",
                headers: { jwt_token: localStorage.token }
            });

            const parseData = await res.json();
            // console.log(parseData);
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

    // ------------------------ NOTES DATA ---------------

    const [inputnote, setInputnote] = useState({
        notes: ""
    });
    const { notes } = inputnote;

    const { register, handleSubmit, errors } = useForm();

    const onSubmitNote = async (data, e) => {
        e.preventDefault();
        console.log(data);
    }

    const changeHandler = e =>
        setInputnote({ ...inputnote, [e.target.name]: e.target.value });

    // --------------------------------------------------------

    // ------------------------ Responder DATA ---------------

    const {
        register: registerResponder,
        errors: errorsResonder,
        handleSubmit: handleSubmitResponder
    } = useForm();

    const [inputresponder, setInputresponder] = useState({
        responder: ""
    });
    const { responder } = inputresponder;

    const onSubmitResponder = async (data, e) => {
        e.preventDefault();
        console.log(data);
    }

    const changeHandlerResponder = e =>
        setInputresponder({ ...inputresponder, [e.target.name]: e.target.value });

    // --------------------------------------------------------

    // ----------------------- Task Data -------------------

    const {
        register: registerTasks,
        errors: errorsTasks,
        handleSubmit: handleSubmitTasks
    } = useForm();

    const [inputtasks, setInputtasks] = useState({
        title: "",
        assignee: "",
        description: "",
    });
    const { title, assignee, description } = inputtasks;

    const onSubmitTasks = async (data, e) => {
        e.preventDefault();
        console.log(data);
    }

    const changeHandlerTasks = e =>
        setInputtasks({ ...inputtasks, [e.target.name]: e.target.value });

    // -----------------------------------------------------

    return (
        <div className="issue-edit-bg color-black">

            <div className="issue-edit-upper">
                <h3>Issue # 5 <span className="text-danger">[Triggered]</span><span> - title</span></h3>

            </div>

            <CTabs activeTab="home" className="active-tab2">
                <CNav variant="tabs" className="active-tab">
                    <CNavItem className="active-tab1">
                        <CNavLink data-tab="home" className="text-dark">
                            Details
                </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink data-tab="alerts" className="text-dark">
                            Alerts
                </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink data-tab="timeline" className="text-dark">
                            Timeline
                </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink data-tab="notes" className="text-dark">
                            Notes
                </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink data-tab="responders" className="text-dark">
                            Responders
                </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink data-tab="context" className="text-dark">
                            Context
                </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink data-tab="tasks" className="text-dark">
                            Tasks
                </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink data-tab="roles" className="text-dark">
                            Roles
                </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink data-tab="similar-incidents" className="text-dark">
                            Similar Incidents
                </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink data-tab="stakeholders" className="text-dark">
                            Stakeholders
                </CNavLink>
                    </CNavItem>
                </CNav>

                {/* -------------- Tab Contents--------------------- */}

                <CTabContent>
                    <CTabPane data-tab="home">
                        <div className="my-3">
                            <CContainer fluid>
                                <CRow>
                                    <CCol sm="6">
                                        <CCard className="summary-card border-secondary border-radius-none">
                                            <CCardBody>
                                                <CCardText>
                                                    <p className="summary-para m-0 p-0">Summary</p>
                                                </CCardText>
                                                <hr />
                                                <CCardText>
                                                    <p className="summary-para m-0 p-0">Summary</p>
                                                </CCardText>

                                            </CCardBody>

                                        </CCard>
                                    </CCol>
                                    <CCol sm="6">

                                        <table class="table table-borderless">
                                            {/* items={issues} */}
                                            <thead>
                                                <tr>

                                                    {/* <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {/* <th scope="row">1</th> */}
                                                    <td className="font-weight-bold">Urgency</td>
                                                    <td className="text-info">High {issues.title}

                                                    </td>

                                                </tr>
                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td className="font-weight-bold">Service</td>
                                                    <td className="text-info">Sample Service</td>

                                                </tr>

                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td className="font-weight-bold">Assigned To</td>
                                                    <td className="text-info">John</td>

                                                </tr>

                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td className="font-weight-bold">Comms</td>
                                                    <td>Thornton</td>

                                                </tr>

                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td className="font-weight-bold">SLA</td>
                                                    <td>Thornton</td>

                                                </tr>

                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td className="font-weight-bold">Escalation Policy</td>
                                                    <td>Thornton</td>

                                                </tr>

                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td className="font-weight-bold">Priority</td>
                                                    <td>Thornton</td>

                                                </tr>

                                                <tr>
                                                    {/* <th scope="row">2</th> */}
                                                    <td className="font-weight-bold">Tags</td>
                                                    <td>Thornton</td>

                                                </tr>

                                            </tbody>
                                        </table>

                                    </CCol>
                                </CRow>
                            </CContainer>
                        </div>
                    </CTabPane>

                    {/* --------------------- Tab Alerts ---------------------- */}

                    <CTabPane data-tab="alerts">

                        <CRow>
                            <CCol>
                                <CCard className="summary-card border-secondary border-radius-none">
                                    {/* <CCardHeader>
                                        Issues
            </CCardHeader> */}
                                    <CCardBody>
                                        <CDataTable
                                            // items={}
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
                                                'incident':
                                                    (item) => (
                                                        <td>
                                                            <p >
                                                                {/* {item.issue_id} */}
                                                            </ p>
                                                        </td>
                                                    ),
                                                'message':
                                                    (item) => (
                                                        <td>
                                                            <p >
                                                                {/* {item.title} */}
                                                            </ p>
                                                        </td>
                                                    ),
                                                'integration':
                                                    (item) => (
                                                        <td>
                                                            <p >
                                                                {/* {item.services} */}
                                                            </ p>
                                                        </td>
                                                    ),
                                                'time':
                                                    (item) => (
                                                        <td>
                                                            <p >
                                                                {/* {item.assign_to} */}
                                                            </ p>
                                                        </td>
                                                    ),
                                                'alert':
                                                    (item) => (
                                                        <td>
                                                            {/* <CBadge color={getBadge(item.statusof)}>
                          {item.statusof}
                        </ CBadge> */}
                                                        </td>
                                                    ),


                                            }}
                                        />
                                    </CCardBody>
                                </CCard>
                            </CCol>
                        </CRow>
                    </CTabPane>

                    {/* -------------- Tab Timeline ------------------ */}

                    <CTabPane data-tab="timeline">
                        789
            </CTabPane>

                    {/* -------------------- Tab Notes ------------ */}

                    <CTabPane data-tab="notes">
                        <CRow className="m-3">
                            <CCol md="12" className="">
                                <form
                                    className='need-validation'
                                    onSubmit={handleSubmit(onSubmitNote)}
                                    noValidate
                                >
                                    <div className="form-group ">
                                        {/* <label className="label-form" >
                Service:
          <span className="text-danger">*</span>
              </label> */}
                                        <textarea
                                            type="text"
                                            onChange={changeHandler}
                                            value={notes}
                                            className="form-control input lg bg-transparent border-2 outline-none rounded-sm   "
                                            name="notes"
                                            placeholder="notes"
                                            required
                                            minLength="2"
                                            maxLength="150"
                                            ref={register({
                                                required: "Please Provide Missing Field",
                                            })}
                                        />
                                        {errors.notes && <p className="text-danger pt-1">{errors.notes.message}</p>}
                                    </div>
                                    <div className="mb-3 text-right">
                                        <CButton type="submit" className="btn btn-info ">Add Note</CButton>
                                    </div>
                                </form>
                            </CCol>
                        </CRow>
                    </CTabPane>

                    {/* ------------------ Tab resonders ------------------ */}

                    <CTabPane data-tab="responders">
                        <CRow className="m-3">
                            <CCol md="12" className="">
                                <form
                                    className='need-validation'
                                    onSubmit={handleSubmitResponder(onSubmitResponder)}
                                    noValidate
                                >
                                    <div className="form-group ">
                                        <label className="label-form" >
                                            Add Responder:
          {/* <span className="text-danger">*</span> */}
                                        </label>
                                        <textarea
                                            type="text"
                                            onChange={changeHandlerResponder}
                                            value={responder}
                                            className="form-control input lg bg-transparent border-2 outline-none rounded-sm   "
                                            name="responder"
                                            placeholder="Add Responder"
                                            required
                                            minLength="2"
                                            maxLength="150"
                                            ref={registerResponder({
                                                required: "Please Provide Missing Field",
                                            })}
                                        />
                                        {errorsResonder.responder && <p className="text-danger pt-1">{errorsResonder.responder.message}</p>}
                                    </div>
                                    <div className="mb-3 text-right">
                                        <CButton type="submit" className="btn btn-info ">Add Note</CButton>
                                    </div>
                                </form>
                            </CCol>
                        </CRow>
                    </CTabPane>

                    {/* ------------------------- Tab Context ----------------- */}

                    <CTabPane data-tab="context">
                        
                    <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date Input</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>
                <input type="date" id="date-input" name="date-input" placeholder="date" className="text-muted border-dark m-3" />
            </CTabPane>

                    {/* ---------------------------- Tab Tasks ---------------------- */}

                    <CTabPane data-tab="tasks" className="">
                        <div className="m-3">
                            <CContainer fluid className="d-flex justify-content-center" >
                                {/* <CRow className="15"> */}
                                <CCol md="5" className="">
                                    <form
                                        className='need-validation'
                                        onSubmit={handleSubmitTasks(onSubmitTasks)}
                                        noValidate
                                    >
                                        <div className="form-group">
                                            <label className="" >
                                                Title:
          {/* <span className="text-danger">*</span> */}
                                            </label>
                                            <input
                                                type="text"

                                                onChange={changeHandlerTasks}
                                                value={title}
                                                className="form-control input lg bg-transparent border-2 outline-none rounded-sm   "
                                                name="title"
                                                placeholder="Add Title"
                                                // required
                                                minLength="2"
                                                maxLength="50"
                                                ref={registerTasks({
                                                    required: "Please Provide Missing Field",
                                                })}
                                            />
                                            {errorsTasks.title && <p className="text-danger pt-1">{errorsTasks.title.message}</p>}
                                        </div>

                                        <div className="form-group ">
                                            <label className="" >
                                                Assignee:
          {/* <span className="text-danger">*</span> */}
                                            </label>
                                            <input
                                                type="text"

                                                onChange={changeHandlerTasks}
                                                value={assignee}
                                                className="form-control input lg bg-transparent border-2 outline-none rounded-sm   "
                                                name="assignee"
                                                placeholder="Add Assignee"
                                                // required
                                                minLength="2"
                                                maxLength="50"
                                                ref={registerTasks({
                                                    required: "Please Provide Missing Field",
                                                })}
                                            />
                                            {errorsTasks.assignee && <p className="text-danger pt-1">{errorsTasks.assignee.message}</p>}
                                        </div>

                                        <div className="form-group ">
                                            <label className="" >
                                                Description:
          {/* <span className="text-danger">*</span> */}
                                            </label>
                                            <textarea
                                                type="text"

                                                onChange={changeHandlerTasks}
                                                value={description}
                                                className="form-control input lg bg-transparent border-2 outline-none rounded-sm   "
                                                name="description"
                                                placeholder="Add Description"
                                                // required
                                                minLength="2"
                                                maxLength="50"
                                                ref={registerTasks({
                                                    required: "Please Provide Missing Field",
                                                })}
                                            />
                                            {errorsTasks.description && <p className="text-danger pt-1">{errorsTasks.description.message}</p>}
                                        </div>


                                        <div className="mb-3 text-right">
                                            <CButton type="submit" className="btn btn-info ">Add Task</CButton>
                                        </div>
                                    </form>
                                </CCol>
                                {/* </CRow> */}
                            </CContainer>
                        </div>
                    </CTabPane>

                    {/* ------------------------- Tab Roles ----------------------- */}

                    <CTabPane data-tab="roles">
                        <CContainer fluid className="d-flex justify-content-center mt-3">
                            <CRow>
                                <CCol md="12" className="text-center">
                            <h4>Assign Users to <span className="text-info">Roles</span></h4>
                            </CCol>
                           
                            <CCol md="12" className="">
                            <span className="incident-comm ml-5 pl-1 pr-1">Incident Commisioner</span>
                                <p className="ml-5 mr-5">The incident commander is the person responsible for all aspects of the incident response,
                                including quickly developing incident objectives, managing all incident operations, application of resources
                                as well as responsibility for all persons involved.
                                The incident commander sets priorities and defines the organization of the incident response teams
                                     and the overall incident action plan.</p>
                            </CCol>
                            

                            </CRow>
                        </CContainer>                        
                    </CTabPane>

                    {/* ------------------ Tab Similar Incidents ------------------- */}

                    <CTabPane data-tab="similar-incidents">
                        Similar Incidents
            </CTabPane>

                    {/* ------------------------ Tab Stake Holders ----------------------- */}

                    <CTabPane data-tab="stakeholders">
                        Stack Holders
            </CTabPane>

                </CTabContent>
            </CTabs>
        </div>
    )
}

export default IssueEdit