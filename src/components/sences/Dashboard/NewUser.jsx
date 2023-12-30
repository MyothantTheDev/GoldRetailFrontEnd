import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../../Layout/Loader";
import NotiAlert from "../../Layout/Alert";
import Title from "../../Layout/Header";

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  role: ''
}

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const studentSchema = yup.object().shape({
  firstName: yup.string().optional(),
  lastName: yup.string().optional(),
  email: yup.string().matches(emailRegExp).required('required'),
  username: yup.string().required('required'),
  password: yup.string().required('required'),
  role: yup.string().required('required'),
})

const NewUser = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values, { resetForm } ) => {
    // dispatch(register(values));
    resetForm({
      values: initialValues
    })
  }

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Title title="Create User" subtitle="Create New User" />
      </Box>
      <Box m="20px" >
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={studentSchema}>
          {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit} encType="application/json" >
              <Box display='grid' gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                    "& > div": {gridColumn : isNonMobile ? undefined : "span 4"}
                }}>
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="First Name" 
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.firstName} 
                  name="firstName" 
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="Last Name" 
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.lastName} 
                  name="lastName" 
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="Email" 
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.email} 
                  name="email" 
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="Username" 
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.username} 
                  name="username" 
                  error={!!touched.username && !!errors.username}
                  helperText={touched.username && errors.username}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="Password" 
                  type="password" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.password} 
                  name="password" 
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{ gridColumn: "span 2" }}
                />
                  <FormControl>
                    <InputLabel id="Role-label">Role</InputLabel>
                    <Select
                      labelId="Role-label" 
                      variant="filled"
                      value={values.role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      fullWidth
                      label="Role"
                      name="Role"
                      error={!!touched.role && !!errors.role}
                      sx={{gridColumn: "span 2"}}>
                      <MenuItem key="1" value="ADMIN" >ADMIN</MenuItem>
                      <MenuItem key="2" value="USER" >USER</MenuItem>
                    </Select>
                  </FormControl>
              </Box>
              <Box display='flex' justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Create User Account
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

export default NewUser