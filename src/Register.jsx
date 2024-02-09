import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from "yup";
import {Link } from 'react-router-dom'

export default function Register() {
    const registerValidationSchema = yup.object({
        username:yup.string().required(),
        email: yup.string().required(),
        password:yup.string().required(),
    })
    const formik = useFormik({
        initialValues: {
            username:"",
            email : "",
            password : ""
        },
        validationSchema: registerValidationSchema,

        onSubmit: (values) => {
            console.log("Form values",values);
        }
    })
    return (
        <>
            <form className='add-form' onSubmit={formik.handleSubmit}>
                <h1>Register</h1>
                <TextField
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    placeholder='Username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    name='password'
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && formik.errors.username}
                    helperText={formik.touched.username && formik.errors.username ? formik.errors.username : null}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    placeholder='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && formik.errors.email}
                    helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    placeholder='Password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name='password'
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && formik.errors.password}
                    helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                />
                <Button variant="contained" type='submit'>Register</Button>
                <Link to="/portal/movie">Watch Movie</Link>
                <Link to="/">Login</Link>

            </form>
        </>
    )
}