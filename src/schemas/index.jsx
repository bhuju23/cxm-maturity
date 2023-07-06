import * as Yup from 'yup';


export const signUpSchema = Yup.object({
    email: Yup.string().email("please enter a valid email").required("Please enter your email address"),
    checkbox: Yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
}) 

export const lastFormSchema = Yup.object({
    name: Yup.string().min(2).max(20).required("Please enter your name"),
    phone: Yup.string()
    .matches(
      /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!dd[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/,
      'Invalid phone number'
    ),
    email: Yup.string().email("please enter a valid email").required("Please enter your email address"),
    checkbox: Yup.boolean().oneOf([true], 'Please accept the terms and conditions'),
    company: Yup.string().url('Invalid URL').required("Please enter your company Url")
})

export const questionRadioSchema = Yup.object({
  option: Yup.string().required('Please select an option'),
})