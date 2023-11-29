
import { Box, Center } from "@chakra-ui/react";
import axios from "axios"
import { useFormik } from "formik"
import * as Yup from 'yup';


export default function Register(props){


    const formik = useFormik({
        initialValues:{
            username: '',
            email:'',
            password:''
        },
        validationSchema:Yup.object({
            username:Yup.string().min(6, "Must be 6 characthers or more").required("User Name must be filled"),
            email:Yup.string().email("Must use valid email format").required("Email must be filled"),
            password:Yup.string().min(6, "Must be 6 characthers or more").matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character").required("pasword must be filled")
        }),
        onSubmit:(values) => {
            axios.post("http://localhost:8080/users",{
                username:values.username,
                email:values.email,
                password:values.password
            })
            .then(res => {
                alert(JSON.stringify(values, null, 2))
                props.getDatas();
                console.log(res)

            })
            .catch((err) => {
                alert(err.message)
            })
            
        }

    })
    return(
        <form  style={{ width:"100%", height:"100%"}} onSubmit={formik.handleSubmit}>
            <Center display="flex" w={"100%"} h={"100%"} p={"3%"} backgroundColor={"#95A1A7"}>

            <div>
                <label> Username </label>
                <input 
                    type="text" 
                    name="username" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                    ></input>
                {formik.touched.username && formik.errors.username ? 
                (<div style={{ color:'red'}}>{formik.errors.username}</div>) : null}
            </div>

            <div>
                <label>Email</label>
                <input 
                    type="text" 
                    name="email" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                ></input>
                {formik.touched.email && formik.errors.email ? 
                (<div style={{ color:'red'}}>{formik.errors.email}</div>) : null}
            </div>

            <div>
                <label> Password </label>
                <input 
                    type="text" 
                    name="password" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                ></input>
                {formik.touched.password && formik.errors.password ? 
                (<div style={{ color:'red'}}>{formik.errors.password}</div>) : null}
            </div>

            <button type="submit"  style= {{backgroundColor:"white", margin:"15px" }}onClick={console.log("submited")}> Submit </button>
            </Center>
        </form>
    )
}