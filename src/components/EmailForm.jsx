import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import imageLeader from "../images/leader.png"

const initialValues = {
    email: "",
    checkbox: false
}

export const EmailForm = (props) => {

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values)
            props.setFormSubmitted(1);
            action.resetForm();
        }
    })

    return (
        <div className="py-4 lg:py-14">
            <div className="o-container">
                <div className="grid grid-cols-12 gap-y-8">
                    <div className="col-span-12 lg:col-span-6">
                        <div className="mb-8">
                            <h2 className="mb-3 font-bold leading-tight text-yellow-500 lg:text-3xl">
                            If you don’t appreciate your customers, someone else will.
                            </h2>
                            <div className="leading-normal  text-navy-700 lg:text-base">
                            <p>
                                Far too often, many poor customer experiences go under the radar at an organisation. This can lead to higher churn, and more
                                customers for your competitors.
                              </p>
                              <p>
                                We’ve made it easy for you to see how mature your customer experience is, with a short assessment below. The results will be
                                shared straight away, to see how you stack up against key areas for a strong CX.
                              </p>
                            </div>
                        </div>

                        <div className="mb-0 rounded-md p-8 font-normal shadow-md lg:py-14 lg:px-12">
                            <form
                                className="js-cxm-form mb-0"
                                id="email-form"
                                onSubmit={formik.handleSubmit}
                            >
                                <fieldset>
                                    <div className=" relative mb-8 w-full">
                                        <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} className="m-0 w-full appearance-none rounded-none border-0 border-b border-gray-350 py-2 pl-0 text-base leading-6 text-gray-350 placeholder-gray-350 focus:outline-0" placeholder="Email*" />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="text-error absolute left-0 right-0 top-full block pt-1 text-right text-xs leading-normal">{formik.errors.email}</div>
                                        ) : null}
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
                                            <span className="block text-sm leading-tight">I accept the <a href="google.com" className=''>Privacy policy</a> & <a href="google.com" className=''>Terms of Use</a>*</span>
                                        </label>
                                        {formik.touched.checkbox && formik.errors.checkbox ? (
                                            <div className='text-error absolute left-0 right-0 top-full block pt-1 text-right text-xs leading-normal'>{formik.errors.checkbox}</div>
                                        ) : null}
                                    </div>
                                    <div className="w-full">
                                        <button
                                            type="submit"
                                            className="min-w-[208px] cursor-pointer rounded-full border-3 border-reso-orange py-2.5 px-6 text-sm font-bold leading-6 text-navy-700 transition duration-300 ease-linear lg:hover:border-navy-700"
                                        >
                                            Start the assessment
                                        </button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>

                    <div className="col-span-12 grid lg:col-span-5 lg:col-start-8 lg:flex lg:flex-wrap lg:items-center">
                        <picture className="w-full object-cover object-center">
                            <source media="(min-width:320px)" srcSet={imageLeader} />
                            <source media="(min-width:768px)" srcSet={imageLeader} />
                            <img src={imageLeader} width="488" height="533" alt="imageDesc" className="js-lazy w-full" />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    )
}





