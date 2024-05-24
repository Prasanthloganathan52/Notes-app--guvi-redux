import React from 'react'
import {  useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { add } from '../redux/noteSlice'

function Contentarea() {
  let dispatch = useDispatch()

  return <>
    <div className="content-bg topbar ms-5 me-4 mt-5 mb-5 static-top shadow py-5 px-3 " style={{ height: "fit-content" }}>
      <div className='row'>
        <Formik
          initialValues={{
            title: "",
            note: ""
          }}
          onSubmit={(values, { resetForm }) => {
            dispatch(add(values))
            resetForm();
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <form className="mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search container-fluid"
              onSubmit={(e) => {
                e.preventDefault();
                if (values.title !== "" && values.note !== "") {
                  handleSubmit();
                }

              }}>
              <h2 className="heading-content">Add a Note</h2>
              <div className="mb-3">
                <input type="text" name="title" className="form-control content-bg-inp" id="exampleFormControlInput1" onChange={handleChange} onBlur={handleBlur} value={values.title} placeholder="Title" />
              </div>
              <div className="mb-3">
                <textarea className="form-control content-bg-inp" name="note" onChange={handleChange} onBlur={handleBlur} value={values.note} id="exampleFormControlTextarea1" rows="3" onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (values.title !== "" && values.note !== "") {
                      handleSubmit();
                    }
                  }
                }} style={{ maxHeight: "5em", minHeight: "5em", fontSize: "24px" }} placeholder='Take a Note'></textarea>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>

  </>

}

export default Contentarea