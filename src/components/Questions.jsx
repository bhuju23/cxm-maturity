import { QuestionRadio } from "./QuestionRadio";
import { questionRadioSchema } from "../schemas";
import { useFormik } from 'formik';

export const Questions = (props) => {
    
    const handlePrev = () => {
        props.setCount(props.count - 1)
        props.setBar(props.bar - 1)
        props.radioValue.pop()
    }

    const question = props.questions[props.count]


    const formik = useFormik({
        initialValues: { 
            option: ''
        },
        validationSchema: questionRadioSchema,
        onSubmit: (values, action) => {
            props.setRadioValue([...props.radioValue, values.option])
            
            if (props.count < props.questions.length-1) {
                props.setCount(props.count + 1)
                props.setBar(props.bar + 1)
            }
            else if (props.count === props.questions.length - 1) {
                props.setFormSubmitted(2)
                props.setBar(props.bar + 1)
            }
            action.resetForm();
        }
    })

    return (
        <>
            <div className="w-full">
                <div className="o-container">
                    <div className="py-4 lg:py-14">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="grid grid-cols-12 text-black">
                                <div className="relative col-span-12  grid items-center lg:col-span-5">
                                    <h2 className="mt-5 font-medium leading-tight lg:text-4xl">{question.questiontitle}</h2>
                                </div>

                                <div className="col-span-12 grid lg:col-start-8">
                                    {question.options.map((item, index) => (
                                        <QuestionRadio
                                            key={index}
                                            text={item.text}
                                            name={question.name}
                                            value={item.value}
                                            checked={formik.values.option === item.value}
                                            onChange={() => formik.setFieldValue('option', item.value)}
                                        />
                                    ))}
                                    {formik.touched.option && formik.errors.option ? (
                                        <div className='text-error  left-0 right-0 top-full block pt-1 text-right text-xs leading-normal'>{formik.errors.option}</div>
                                    ) : null}
                                </div>
                            </div>

                            <div className="relative grid grid-cols-12 text-black">
                                <div className="col-span-12 grid lg:col-start-8">
                                    <div className="relative mt-4 lg:mt-12">
                                        <button type="submit" className="min-w-[208px] cursor-pointer rounded-full border-3 border-reso-orange py-2.5 px-6 text-sm font-bold leading-6 text-navy-700">
                                            Go to next question
                                        </button>

                                        <div className={`mt-6 flex items-center text-navy-700 ${props.count > 0 ? 'block' : 'hidden'}`}>
                                            <button type="button" className="flex items-center pl-4" onClick={handlePrev} >
                                                <span className="desk:group-hover:translate-x-2">
                                                    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H26V7H1V9Z" fill="black"></path>
                                                    </svg>
                                                </span>
                                                <span className="pl-2 text-xs font-semibold">Previous question</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}