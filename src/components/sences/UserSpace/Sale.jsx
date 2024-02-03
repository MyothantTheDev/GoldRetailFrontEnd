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

const initialValues = {
  price: 0,
  weight: {weight1: 0, weight2: 0, weight3: 0},
  encount: {weight1: 0, weight2: 0, weight3: 0},
  gemWeight: {weight1: 0, weight2: 0, weight3: 0},
  gold: 0,
  fee: 0,
  gem: 0,
  polish: 0,
  total: 0,
  discount: 0,
  net: 0
}

const saleSchema = yup.object().shape({
  buyerName: yup.string().required('required'),
  price: yup.number().required('required'),
  weight: yup.object().shape(
    {
      weight1: yup.number().required('required'),
      weight2: yup.number().required('required'),
      weight3: yup.number().required('required')
    }
  ),
  encount: yup.object().shape(
    {
      weight1: yup.number().required('required'),
      weight2: yup.number().required('required'),
      weight3: yup.number().required('required')
    }
  ),
  gemWeight: yup.object().shape(
    {
      weight1: yup.number().required('required'),
      weight2: yup.number().required('required'),
      weight3: yup.number().required('required')
    }
  ),
  gold: yup.number().required('required'),
  fee: yup.number().required('required'),
  gem: yup.number().required('required'),
  polish: yup.number().required('required'),
  total: yup.number().required('required'),
  discount: yup.number().required('required'),
  net: yup.number().required('required')
})

const SaleVoucher = () => {
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
        <Title title="Sale" subtitle="Sale Voucher" />
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
                  label="စျေးနှုန်း"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.price} 
                  name="price" 
                  error={!!touched.price && !!errors.price}
                  helperText={touched.price && errors.price}
                  sx={{ gridColumn: "span 1", gridRow: "row 0" }}
                />

                {/* ===========================Weight================================ */}

                <div style={{ gridColumn: "span 1", gridRow: "row 1" }}>အလေးချိန်</div>

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
                  sx={{ gridColumn: "span 1" , gridRow: "row 2"}}
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
                  sx={{ gridColumn: "span 1" , gridRow: "row 2"}}
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
                  sx={{ gridColumn: "span 1" , gridRow: "row 2"}}
                />

                {/* ==========================EnterCounter========================== */}

                <div style={{ gridColumn: "span 1", gridRow: "row 3" }}>လျော့တွက်</div>

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ကျပ်"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.encount.weight1} 
                  name="encount.weight1" 
                  error={!!touched.encount?.weight1 && !!errors.encount?.weight1}
                  helperText={touched.encount?.weight1 && errors.encount?.weight1}
                  sx={{ gridColumn: "span 1" , gridRow: "row 4"}}
                />
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ပဲ"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.encount.weight2} 
                  name="encount.weight2" 
                  error={!!touched.encount?.weight2 && !!errors.encount?.weight2}
                  helperText={touched.encount?.weight2 && errors.encount?.weight2}
                  sx={{ gridColumn: "span 1" , gridRow: "row 4"}}
                />
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ရွေး"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.encount.weight3} 
                  name="encount.weight3" 
                  error={!!touched.encount?.weight3 && !!errors.encount?.weight3}
                  helperText={touched.encount?.weight3 && errors.encount?.weight3}
                  sx={{ gridColumn: "span 1" , gridRow: "row 4"}}
                />

                {/* ============================Gem=================================== */}
                
                <div style={{ gridColumn: "span 1", gridRow: "row 5" }}>ကျောက်ချိန်</div>

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ကျပ်"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.gemWeight.weight1} 
                  name="gemWeight.weight1" 
                  error={!!touched.gemWeight?.weight1 && !!errors.gemWeight?.weight1}
                  helperText={touched.gemWeight?.weight1 && errors.gemWeight?.weight1}
                  sx={{ gridColumn: "span 1" , gridRow: "row 6"}}
                />
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ပဲ"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.gemWeight.weight2} 
                  name="gemWeight.weight2" 
                  error={!!touched.gemWeight?.weight2 && !!errors.gemWeight?.weight2}
                  helperText={touched.gemWeight?.weight2 && errors.gemWeight?.weight2}
                  sx={{ gridColumn: "span 1" , gridRow: "row 6"}}
                />
                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ရွေး"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.gemWeight.weight3} 
                  name="gemWeight.weight3" 
                  error={!!touched.gemWeight?.weight3 && !!errors.gemWeight?.weight3}
                  helperText={touched.gemWeight?.weight3 && errors.gemWeight?.weight3}
                  sx={{ gridColumn: "span 1" , gridRow: "row 6"}}
                />

                {/* ======================================================================== */}

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ရွှေဘိုး"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.gold} 
                  name="gold" 
                  error={!!touched.gold && !!errors.gold}
                  helperText={touched.gold && errors.gold}
                  sx={{ gridColumn: "span 1" , gridRow: "row 7"}}
                />
                
                {/* ======================================================================== */}

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="လက်ခ"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.fee} 
                  name="fee" 
                  error={!!touched.fee && !!errors.fee}
                  helperText={touched.fee && errors.fee}
                  sx={{ gridColumn: "span 1" , gridRow: "row 7"}}
                />

                {/* ======================================================================== */}

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ကျောက်ဘိုး"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.gem}
                  name="gem" 
                  error={!!touched.gem && !!errors.gem}
                  helperText={touched.gem && errors.gem}
                  sx={{ gridColumn: "span 1" , gridRow: "row 7"}}
                />

                {/* ======================================================================== */}

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="အရောင်တင်ခ"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.polish} 
                  name="polish" 
                  error={!!touched.polish && !!errors.polish}
                  helperText={touched.polish && errors.polish}
                  sx={{ gridColumn: "span 1" , gridRow: "row 7"}}
                />

                {/* ======================================================================== */}

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="စုစုပေါင်း"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.total} 
                  name="total" 
                  error={!!touched.total && !!errors.total}
                  helperText={touched.total && errors.total}
                  sx={{ gridColumn: "span 1" , gridRow: "row 8"}}
                />

                {/* ======================================================================== */}

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="လျော့ငွေ"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.discount} 
                  name="discount" 
                  error={!!touched.discount && !!errors.discount}
                  helperText={touched.discount && errors.discount}
                  sx={{ gridColumn: "span 1" , gridRow: "row 8"}}
                />

                {/* ======================================================================== */}

                <TextField 
                  fullWidth 
                  variant="filled" 
                  label="ကျသင့်ငွေ"
                  type="text" 
                  onBlur={handleBlur} 
                  onChange={handleChange} 
                  value={values.net} 
                  name=".net" 
                  error={!!touched.net && !!errors.net}
                  helperText={touched.net && errors.net}
                  sx={{ gridColumn: "span 1" , gridRow: "row 8"}}
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
    </Box>
  )
}

export default SaleVoucher