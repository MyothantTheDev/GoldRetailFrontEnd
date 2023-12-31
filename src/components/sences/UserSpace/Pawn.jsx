import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loader from "../../Layout/Loader";
import NotiAlert from "../../Layout/Alert";
import Title from "../../Layout/Header";
import { Label } from "@mui/icons-material";
import { MdEmail } from "@react-icons/all-files/md/MdEmail"
import { FaFilePdf } from "@react-icons/all-files/fa/FaFilePdf"
import { FcPrint } from "@react-icons/all-files/fc/FcPrint";

const initialValues = {
  name: '',
  type: '',
  weight: {weight1: 0, weight2: 0, weight3: 0},
  loan: 0,
  textLoan: '',
  remark: ''
}

const saleSchema = yup.object().shape({
  name: yup.number().required('required'),
  type: yup.string().required('required'),
  weight: yup.object().shape(
    {
      weight1: yup.number().required('required'),
      weight2: yup.number().required('required'),
      weight3: yup.number().required('required')
    }
  ),
  loan: yup.number().required('required'),
  textLoan: yup.string().required('required'),
  remark: yup.string().optional()
})

const PawnVoucher = () => {
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
        <Title title="Pawn" subtitle="Pawn Voucher" />
      </Box>
      <Box m="20px" >
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={saleSchema}>
          {({values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit} encType="application/json" >
              <Box display='grid' gap="30px" gridTemplateColumns="repeat(6, minmax(0, 1fr))"
                sx={{
                    "& > div": {gridColumn : isNonMobile ? undefined : "span 4"}
                }}>
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="အမည်"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.name} 
                  name="name" 
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                  sx={{ gridColumn: "span 1", gridRow: "row 0" }}
                />

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="အမျိုးအမည်"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.type} 
                  name="type" 
                  error={!!touched.type && !!errors.type}
                  helperText={touched.type && errors.type}
                  sx={{ gridColumn: "span 1", gridRow: "row 1" }}
                />

                {/* ===========================Weight================================ */}

                <div style={{ gridColumn: "span 1", gridRow: "row 2" }}>ကျောက်ပါရွှေချိန်</div>

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ကျပ်"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.weight.weight1}
                  name="weight.weight1" 
                  error={!!touched.weight?.weight1 && !!errors.weight?.weight1}
                  helperText={touched.weight?.weight1 && errors.weight?.weight1}
                  sx={{ gridColumn: "span 1" , gridRow: "row 3"}}
                />
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ပဲ"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.weight.weight2} 
                  name="weight.weight2" 
                  error={!!touched.weight?.weight2 && !!errors.weight?.weight2}
                  helperText={touched.weight?.weight2 && errors.weight?.weight2}
                  sx={{ gridColumn: "span 1" , gridRow: "row 3"}}
                />
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ရွေး"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.weight.weight3} 
                  name="weight.weight3" 
                  error={!!touched.weight?.weight3 && !!errors.weight?.weight3}
                  helperText={touched.weight?.weight3 && errors.weight?.weight3}
                  sx={{ gridColumn: "span 1" , gridRow: "row 3"}}
                />

                {/* ======================================================================== */}

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ယူငွေ"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.loan} 
                  name="loan" 
                  error={!!touched.loan && !!errors.loan}
                  helperText={touched.loan && errors.loan}
                  sx={{ gridColumn: "span 1" , gridRow: "row 4"}}
                />
                
                {/* ======================================================================== */}

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ယူငွေ(စာဖြင့်)"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.textLoan} 
                  name="textLoan" 
                  error={!!touched.textLoan && !!errors.textLoan}
                  helperText={touched.textLoan && errors.textLoan}
                  sx={{ gridColumn: "span 2" , gridRow: "row 4"}}
                />

                {/* ======================================================================== */}

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="မှတ်ချက်"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.remark}
                  name="remark" 
                  error={!!touched.remark && !!errors.remark}
                  helperText={touched.remark && errors.remark}
                  sx={{ gridColumn: "span 3" , gridRow: "row 5"}}
                />

              </Box>
              <Box display='flex' justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Enter
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
      <Box sx={{justifyContent: 'flex-end', display: 'flex', columnGap: '30px', marginRight: '20px'}}>
        <Button startIcon={<MdEmail/>} type="submit" color="secondary" variant="contained">Email</Button>
        <Button startIcon={<FcPrint/>} type="submit" color="secondary" variant="contained">Print</Button>
        <Button startIcon={<FaFilePdf/>} type="submit" color="secondary" variant="contained">PDF</Button>
      </Box>
    </Box>
  )
}

export default PawnVoucher