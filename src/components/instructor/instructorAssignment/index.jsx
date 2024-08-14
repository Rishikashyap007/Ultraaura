import React ,{useState} from 'react'
import { InstructorHeader } from "../header";
import InstructorSidebar from "../sidebar";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const InstructorAssignment = () => {
  const mobileSidebar = useSelector(
    (state) => state.sidebarSlice.expandMenu
  );
  const [setPrivacy] = useState(null);
  const options = [
    { label: "All", value: "All" },
    { label: "Javascript Course ", value: "Javascript Course" },
    { label: "Fullstack Web Developer", value: "Fullstack Web Developer" },
    { label: "UI/UX Design", value: "UI/UX Design" },
  ];
  const options1 = [
    { label: "Default", value: "Defalut" },
    { label: "Newest", value: "Newest" },
    { label: "Oldest", value: "Oldest" },
  ];
  const options2 = [
    { label: "Paid", value: "Paid" },
    { label: "UnPaid", value: "Unpaid" },
   
  ];
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: mobileSidebar === 'disabled' ? "white":"#131022",
      border:"none",
      width: "100%",
      height: "40px",
      color: "black",
      minHeight: "40px",
      paddingLeft: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        cursor: "pointer",
      },
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "0px" }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided) => ({
      ...provided,
      backgroundColor:  mobileSidebar === 'disabled' ? "#fff" : "#000",
      color:mobileSidebar === 'disabled'? '#000':'#fff',
      fontSize: "14px",
      "&:hover": {
        backgroundColor:mobileSidebar === 'disabled'? "#FFDEDA":"#2b2838",
        // #dddddd
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
      display:"none"
    }),
    
  };
  return (
    <div className="main-wrapper">
        <InstructorHeader />
        <>
  {/* Breadcrumb */}
  <div className="breadcrumb-bar breadcrumb-bar-info">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12">
          <div className="breadcrumb-list">
            <h2 className="breadcrumb-title">Assignments</h2>
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/home">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Assignments
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Page Content */}
  <div className="page-content">
    <div className="container"> 
      <div className="row">
        {/* sidebar */}
        <InstructorSidebar />
        {/* /Sidebar */}
        {/* Instructor Quiz */}
        <div className="col-xl-9 col-lg-9">
          <div className="settings-widget card-details">
            <div className="settings-menu p-0">
              <div className="profile-heading">
                <h3>Assignments</h3>
              </div>
              <div className="checkout-form">
                <div className="announcement-filter-head">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="input-block customticket">
                        <label className="form-label">Courses</label>
                        <Select
                          className="form-select select country-select ticket-select"
                          
                                name="sellist1"
                                options={options}
                                defaultValue={options[0]}
                                placeholder="All"
                                onChange={setPrivacy}
                                styles={style}
                              ></Select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-block customticket">
                        <label className="form-label">Sort By</label>
                        <Select
                          className="form-select select country-select ticket-select"
                                name="sellist1"
                                options={options1}
                                defaultValue={options1[0]}
                                placeholder="Default"
                                onChange={setPrivacy}
                                styles={style}
                              ></Select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-block customticket">
                        <label className="form-label">Sort By Offer</label>
                        <Select
                          className="form-select select country-select ticket-select"
                                name="sellist1"
                                options={options2}
                                defaultValue={options2[1]}
                                placeholder="Paid"
                                onChange={setPrivacy}
                                styles={style}
                              ></Select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive custom-table">
                  {/* Referred Users*/}
                  <table className="table table-nowrap mb-0">
                    <thead>
                      <tr>
                        <th>Assignment Name</th>
                        <th>Total Marks</th>
                        <th>Total Submit</th>
                        <th />
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="announcement-table-data">
                            <h6>Building Your First Landing Page</h6>
                            <p>
                              Course: Sketch from A to Z (2024): Become an app
                              designer
                            </p>
                          </div>
                        </td>
                        <td>80</td>
                        <td>2</td>
                        <td>
                         
                          <Link to="#" className="d-flex align-items-center tab-title"><i className="bx bx-edit me-2"></i>Edit</Link>

                        </td>
                        <td>
                        <Link to="#" class="d-flex align-items-center tab-title"><i className="bx bx-trash me-2"></i>Delete</Link>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="announcement-table-data">
                            <h6>Building a Basic Angular Application</h6>
                            <p>
                              Course: Learn Angular Fundamentals Beginners Guide
                            </p>
                          </div>
                        </td>
                        <td>60</td>
                        <td>4</td>
                        <td>
                        <Link to="#" className="d-flex align-items-center tab-title"><i className="bx bx-edit me-2"></i>Edit</Link>

                        </td>
                        <td>
                        <Link to="#" class="d-flex align-items-center tab-title"><i className="bx bx-trash me-2"></i>Delete</Link>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="announcement-table-data">
                            <h6> Basic Arithmetic Operations</h6>
                            <p>
                              Course: Learn JavaScript and Express to become a
                              Expert
                            </p>
                          </div>
                        </td>
                        <td>30</td>
                        <td>3</td>
                        <td>
                        <Link to="#" className="d-flex align-items-center tab-title"><i className="bx bx-edit me-2"></i>Edit</Link>

                        </td>
                        <td>
                        <Link to="#" class="d-flex align-items-center tab-title"><i className="bx bx-trash me-2"></i>Delete</Link>

                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="announcement-table-data">
                            <h6> Basic Calculations</h6>
                            <p>
                              Course: Introduction to Programming- Python &amp;
                              Java
                            </p>
                          </div>
                        </td>
                        <td>50</td>
                        <td>5</td>
                        <td>
                        <Link to="#" className="d-flex align-items-center tab-title"><i className="bx bx-edit me-2"></i>Edit</Link>

                        </td>
                        <td>
                          
                          <Link to="#" class="d-flex align-items-center tab-title"><i className="bx bx-trash me-2"></i>Delete</Link>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="dash-pagination">
            <div className="row align-items-center">
              <div className="col-6">
                <p>Page 1 of 2</p>
              </div>
              <div className="col-6">
                <ul className="pagination">
                  <li className="active">
                    <Link to="#">1</Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="bx bx-chevron-right" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Instructor Quiz */}
      </div>
    </div>
  </div>
  {/* /Page Content */}
</>

    </div>
  )
}

export default InstructorAssignment