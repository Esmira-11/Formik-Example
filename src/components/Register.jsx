import React from 'react'
// import { Formik,Form } from 'formik'
import { useFormik } from 'formik';;
import * as Yup from "yup";


function Register() {

    
    const addValidationSchema = Yup.object().shape({
        name: Yup.string().max(50, 'Too Long!').required("Name field cannot be empty!"),
        gender:Yup.string().required("Please choose one"),
        email: Yup.string().email().required("Email field cannot be empty!"),
        password: Yup.string().min(8, 'Too Short!').required("Password field cannot be empty!"),
        confirmPassword: Yup.string().required("Password field cannot be empty!").when("password", {
            is: password => (password && password.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref("password")], "Password doesn't match")
          }),

      });

    const formik = useFormik({
        initialValues: {
            name:'',
            email:'',
            password:'',
            confirmPassword:''
        },
        validationSchema: addValidationSchema,
        onSubmit: values => {
          alert("Success");
        },
      });

  return (
    <>
   
    <form onSubmit={formik.handleSubmit} style={{display:'flex' , flexDirection:'column'}}>
        
       <label htmlFor="name" style={{fontSize:20}}>Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
         style={{width:300, padding:10, borderRadius:15}}
       />
        <p style={{ color: "red" }}>{formik.errors?.name}</p>

       <div className="gender-box" style={{display:'flex',justifyContent:'space-between'}}>
            <div className="gender-box-left">
                <label htmlFor="gender" >Female</label>
                <input
                    id="female"
                    name="gender"
                    type="radio"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
            <div className="gender-box-right">
                <label htmlFor="gender" >Male</label>
                <input
                    id="male"
                    name="gender"
                    type="radio"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>
       </div>
       
       <label htmlFor="email" style={{fontSize:20}}>Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         style={{width:300, padding:10, borderRadius:15}}
       />
        <p style={{ color: "red" }}>{formik.errors?.email}</p>

       <label htmlFor="password" style={{fontSize:20}}>Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
         style={{width:300, padding:10, borderRadius:15}}
       />
        <p style={{ color: "red" }}>{formik.errors?.password}</p>

       <label htmlFor="confirmPassword" style={{fontSize:20}}>Confirm Password</label>
       <input
         id="confirmPassword"
         name="confirmPassword"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
         style={{width:300, padding:10, borderRadius:15}}
       />
        <p style={{ color: "red" }}>{formik.errors?.confirmPassword}</p>


       <button type="submit">Submit</button>
     </form>

    </>
  )
}

export default Register