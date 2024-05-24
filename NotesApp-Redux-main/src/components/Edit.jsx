import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { edit } from '../redux/noteSlice'

function Edit() {
    const params = useParams()
    let data = useSelector((state)=>state.note)
    let dispatch = useDispatch()
    

    const [initialValues, setInitialValues] = useState({
        title: "",
        note: ""
    })

    let navigate = useNavigate()

    const getData = (index) => {
        let newValues = { ...initialValues }
        newValues.title = data[index].title
        newValues.note = data[index].note
        setInitialValues(newValues)
    }

    useEffect(() => {
        if (Number(params.id) < data.length) {
            getData(Number(params.id))
        }
        else {
            navigate("/home")
        }
    }, [])


    const handleSubmit = (values,param) =>{
        dispatch(edit({values,param}))
        navigate("/home")
    }
    
    return <>
        <div className="content-bg topbar mx-5 mt-5 mb-5 static-top shadow py-5 px-3 " style={{ height: "fit-content" }}>
            <div className='row'>
            
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values) => {handleSubmit(values,params.id)}}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <form className="mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search container-fluid"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }} >
                            <h2 className="heading-content">Add a Note</h2>
                            <div className="mb-3">
                                <input type="text" name="title" className="form-control content-bg-inp" id="exampleFormControlInput1" onChange={handleChange} onBlur={handleBlur} value={values.title} placeholder="Title" />
                            </div>
                            <div className="mb-3">

                                <textarea className="form-control content-bg-inp" name="note" onChange={handleChange} onBlur={handleBlur} value={values.note} id="exampleFormControlTextarea1" rows="3" onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSubmit();
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

export default Edit