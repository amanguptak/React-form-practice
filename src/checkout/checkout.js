import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import './checkout.css'

export default function Checkout() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const validationSchema = yup.object().shape({
        firstname: yup.string()
            .min(8, 'FirstName is too short')
            .required('FirstName cannot be left blank'),
        lastname:yup.string()
            .min(8, 'LastName is too short')
            .required('LastName cannot be left blank'),
     
        City:yup.string()
            .required('City cannot be left blank'),
        Zip:yup.string()
            .required('Zip cannot be left blank')
            .max(6, "Zip cod is invalid"),
        Country:yup.string()
            .required('Country cannot be left blank'),

            AddressLine1:yup.string()
            .required("This filled is required")
    })
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            AddressLine1:'',
            AddressLine2:'',
            City:"",
            Region :"",
            Zip:'',
            Country:"",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values));

         },
        validationSchema: validationSchema
    
       
    
    });
  

  return (
    <div>
        <form onSubmit={formik.onSubmit}>
         <Card className="card" >
             <h1 className="heading">Checkout</h1>
         <CardContent
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
         >
             <h3 className="address"> Shipping Address</h3>
                <TextField
                id="firstName"
                name="firstName"
                label="First Name*"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                variant="standard"
                className="content"
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
                onBlur={formik.handleBlur}
                
                />
                <TextField
                id="lastName"
                name="lastName"
                label="Last Name*"
                value={formik.values.lastName}
                variant="standard"
                className="content"
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                
                helperText={formik.touched.lastName && formik.errors.lastName}
                />

                <div>

                <TextField
                id="AddressLine1"
                name="AddressLine1"
                label="Address Line1*"
                value={formik.values.AddressLine1}
                variant="standard"
                className="addressline"
                onChange={formik.handleChange}
                
                /> 

            <TextField
                id="AddressLine2"
                name="AddressLine2"
                label="Address Line2"
                value={formik.values.AddressLine2}
                variant="standard"
                className="addressline"
                onChange={formik.handleChange}
                
                /> 
                </div>


                <TextField
                id="City"
                name="City"
                label="City*"
                value={formik.values.City}
                variant="standard"
                className="content"
                onChange={formik.handleChange}
                
                />
                <TextField
                id="Region"
                name="Region"
                label="State/Provience/Region"
                value={formik.values.Region}
                variant="standard"
                className="content"
                onChange={formik.handleChange}
                
                />

            <TextField
                id="Zip"
                name="Zip"
                label="Zip/ Postal code *"
                value={formik.values.Zip}
                variant="standard"
                className="content"
                onChange={formik.handleChange}
                
                />
                <TextField
                id="Country"
                name="Country"
                label="Country*"
                value={formik.values.Country}
                variant="standard"
                className="content"
                onChange={formik.handleChange}
                
                />

<Checkbox {...label} defaultChecked className="check" style ={{  width:"10px"}} />
<h5  style ={{display:"inline"}} > Use this address for payment details</h5> 
       
<Button variant="contained" type="submit" style ={{marginLeft:"350px" ,marginTop:"30px" ,width:"10px"}}>Next</Button>
         </CardContent>
    </Card>

    </form>

    </div>
  )
}
