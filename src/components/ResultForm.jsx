import { useFormik } from "formik";
import { lastFormSchema } from "../schemas";

const initialValues = {
    name: "",
    phone: "",
    email: "",
    company: "",
    checkbox: false

}

export const ResultForm = (props) => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: lastFormSchema,
        onSubmit: (values, action) => {
            console.log(values)
            props.setTotalRadioValue(props.radioValue.reduce((a, b) => a + b))
            props.setFormSubmitted(3);
            action.resetForm();
        }
    })

    return (
        <>
            <div>
                <div className="py-4 lg:py-14">
                    <div className="o-container">
                        <div className="grid grid-cols-12 gap-y-8">
                            <div className="col-span-12 grid items-center lg:col-span-5">
                                <div>
                                    <h2 className="mb-0 font-medium leading-tight lg:text-4xl">You are almost there!</h2>
                                    <div className="lg:text-xl">Please provide some additional details to see your results.</div>
                                </div>
                            </div>
                            <div className="col-span-12 grid lg:col-start-8">
                                <div className="mb-0 w-full rounded-md p-8 font-normal shadow-md lg:py-14 lg:px-12">
                                    <form className="js-cxm-form mb-0" id="submit-result-form" onSubmit={formik.handleSubmit}>
                                        <fieldset>
                                            <div className="mb-8 w-full">
                                                <div className="relative w-full">
                                                    <label htmlFor="result-form-name" className="block mb-1  sr-only transition-opacity">
                                                        Name
                                                        *    </label>
                                                    <div className="relative w-full">
                                                        <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} placeholder="Name*" className="m-0 w-full appearance-none rounded-none border-0 border-b border-gray-350 py-2 pl-0 text-base leading-6 text-gray-350 placeholder-gray-350 focus:outline-0" />
                                                    </div>
                                                    {formik.touched.name && formik.errors.name ? (
                                                        <div className="text-error absolute left-0 right-0 top-full block pt-1 text-right text-xs leading-normal">{formik.errors.name}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="mb-8 w-full">
                                                <div className="relative w-full">
                                                    <label htmlFor="result-form-phone" className="block mb-1  sr-only transition-opacity">
                                                        Phone number
                                                        *    </label>
                                                    <div className="relative w-full">
                                                        <input type="tel" name="phone" placeholder="Phone number*" className="m-0 w-full appearance-none rounded-none border-0 border-b border-gray-350 py-2 pl-0 text-base leading-6 text-gray-350 placeholder-gray-350 focus:outline-0" />
                                                    </div>
                                                    {formik.touched.phone && formik.errors.phone ? (
                                                        <div className="text-error absolute left-0 right-0 top-full block pt-1 text-right text-xs leading-normal">{formik.errors.phone}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="mb-8 w-full">
                                                <div className="relative w-full">
                                                    <label htmlFor="result-form-email" className="block mb-1  sr-only transition-opacity">
                                                        Email
                                                        *    </label>
                                                    <div className="relative w-full">
                                                        <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Email*" className="m-0 w-full appearance-none rounded-none border-0 border-b border-gray-350 py-2 pl-0 text-base leading-6 text-gray-350 placeholder-gray-350 focus:outline-0" />
                                                    </div>
                                                    {formik.touched.email && formik.errors.email ? (
                                                        <div className="text-error absolute left-0 right-0 top-full block pt-1 text-right text-xs leading-normal">{formik.errors.email}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className="mb-8 w-full">

                                                <div className="relative w-full">
                                                    <label htmlFor="result-form-website" className="block mb-1  sr-only transition-opacity">
                                                        Company website
                                                        *    </label>
                                                    <div className="relative w-full">
                                                        <input type="text" name="company" value={formik.values.company} onChange={formik.handleChange} placeholder="Company Url*" className="m-0 w-full appearance-none rounded-none border-0 border-b border-gray-350 py-2 pl-0 text-base leading-6 text-gray-350 placeholder-gray-350 focus:outline-0" />
                                                    </div>
                                                    {formik.touched.company && formik.errors.company ? (
                                                        <div className="text-error absolute left-0 right-0 top-full block pt-1 text-right text-xs leading-normal">{formik.errors.company}</div>
                                                    ) : null}
                                                </div>
                                            </div>

                                            <div className="w-full">
                                                <div className="relative w-full">
                                                    <label htmlFor="result-form-stage" className="block mb-1  sr-only transition-opacity">
                                                        Maturity stage
                                                    </label>
                                                    <div className="relative w-full">
                                                        <input x-input="" type="hidden" name="cx_maturity_stage" placeholder="" x-model="formData['cx_maturity_stage'].value" id="result-form-stage" data-validation-name="cx_maturity_stage" className="m-0 w-full appearance-none rounded-none border-0 border-b border-gray-350 py-2 pl-0 text-base leading-6 text-gray-350 placeholder-gray-350 focus:outline-0" />
                                                    </div>
                                                    <span id="formData-cx_maturity_stage-error" className="text-error absolute left-0 right-0 top-full block pt-1 text-right text-xs leading-normal"></span>
                                                </div>
                                            </div>
                                            <div className="relative mb-8">
                                                <label className="relative flex w-auto max-w-full cursor-pointer flex-wrap pl-8">
                                                    <input type="checkbox" name="checkbox" value={formik.values.checkbox} onChange={formik.handleChange} className="peer sr-only fixed left-full top-full" />
                                                    <span
                                                        className="absolute left-0 -top-[2px] flex h-5 w-5 flex-wrap items-center justify-center border border-gray-350 bg-white peer-checked:border-reso-dark peer-checked:bg-reso-dark"
                                                    >
                                                        <span className="icon">
                                                            <svg
                                                                width="10"
                                                                height="8"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.20704 0.793031C9.39451 0.980558 9.49983 1.23487 9.49983 1.50003C9.49983 1.76519 9.39451 2.0195 9.20704 2.20703L4.20704 7.20703C4.01951 7.3945 3.76521 7.49982 3.50004 7.49982C3.23488 7.49982 2.98057 7.3945 2.79304 7.20703L0.793041 5.20703C0.610883 5.01843 0.510088 4.76583 0.512367 4.50363C0.514645 4.24143 0.619814 3.99062 0.805222 3.80521C0.990631 3.6198 1.24144 3.51463 1.50364 3.51236C1.76584 3.51008 2.01844 3.61087 2.20704 3.79303L3.50004 5.08603L7.79304 0.793031C7.98057 0.60556 8.23488 0.500244 8.50004 0.500244C8.76521 0.500244 9.01951 0.60556 9.20704 0.793031Z"
                                                                    fill="white"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span className="block text-sm leading-tight">I accept the <a href="#" className=''>Privacy policy</a> & <a href="#" className=''>Terms of Use</a>*</span>
                                                </label>
                                                {formik.touched.checkbox && formik.errors.checkbox ? (
                                                    <div className='text-error absolute left-0 right-0 top-full block pt-1 text-right text-xs leading-normal'>{formik.errors.checkbox}</div>
                                                ) : null}
                                            </div>
                                            <div className="w-full">
                                                <button type="submit" className="min-w-[208px] cursor-pointer rounded-full border-3 border-reso-orange py-2.5 px-6 text-sm font-bold leading-6 text-navy-700 transition duration-300 ease-linear lg:hover:border-navy-700">
                                                    Submit for results
                                                </button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
} 