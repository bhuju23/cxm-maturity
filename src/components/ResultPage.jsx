import { ResultChart } from "./ResultChart";

export const ResultPage = (props) => {
    // const rangeArray = props.maturityMatrix.filter((item) => {
    //     let stage;
    //     // console.log('totalScore', totalScore);
    //     // console.log('min', item.stage.range[0]);
    //     // console.log('max', item.stage.range[1]);
    //     if (props.totalRadioValue >= item.stage.range[0] && props.totalRadioValue <= item.stage.range[1]) {
    //         stage = item;
    //     }
    //     return stage;
    // });
    // const range = rangeArray[0];

    // const acclerateItems = range.acclerate.map((i) => {
    //     const a = props.acclerate.filter((item) => {
    //         let check;
    //         if (i === item.title) {
    //             check = item;
    //         }
    //         return check;
    //     })
    //     return a[0];
    // });

    return (
        <>
            <section className="my-16">
                <div className="o-container">
                    <div className="grid grid-cols-12 gap-y-8">
                        <div className="col-span-12 md:col-span-4 md:col-start-2">
                            <div className="text-center text-xl font-semibold">
                                <span className="text-navy-700" >{props.range.stage.number}:</span>
                                <span className="text-reso-dark" >{props.range.stage.title}</span>
                            </div>
                            <div className="pt-5">
                                <ResultChart range={props.range} />
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 md:col-start-7">
                            <h2 className="mb-6 font-semibold leading-8 text-navy-700">Your focus should be:</h2>
                            <ul className="text-base leading-[1.3] text-navy-700 lg:text-xl">
                                {props.range.focus.map((item, index) => (
                                    <li className="relative mb-8 flex pl-[60px]" key={index}>
                                        <div className="absolute left-0 top-0 w-12 text-center text-4xl font-bold leading-none lg:text-6xl">{index + 1}</div>
                                        <span className="block">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-20">
                <div className="o-container">
                    <div>
                        <h2 className="mb-8 font-semibold leading-8 text-navy-700">How we can help you to accelerate:</h2>
                        <div className="md:grid md:grid-cols-3 md:gap-x-12 xl:gap-x-28">
                            {props.acclerateItems.map((item, index) => (
                                <div className="mb-8" key={index}>
                                    <div className="mb-5">
                                        <div className="mb-2">
                                            <img src={item.logo} />
                                        </div>
                                        <div className="text-reso-dark">
                                            <h3 className="mb-5 mr-8 text-2xl font-semibold leading-9 md:min-h-[72px] lg:text-[28px]">{item.title}</h3>
                                            <div className="leading-6 text-navy-700">{item.summary}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-16" id="book-a-consultant">
                <div className="o-container">
                    <div
                        className="grid grid-cols-12 rounded-2xl bg-navy-700 p-8 text-white lg:py-16 lg:px-0"
                    >
                        <div className="col-span-12 lg:col-span-6 lg:pl-16">
                            <h2 className="mb-3 font-semibold leading-tight lg:text-4xl">
                            Book a consultation
                            </h2>
                            <div>
                            Speak to one of our CX strategists about how to supercharge your CX maturity.<br/>
                            This session can be booked at a time that suits you and your team and is the next step to progressing your businesses’ CX maturity strategy.
                            </div>
                        </div>
                        <div className="col-span-12 mt-4 lg:col-span-5 lg:col-start-8 lg:pr-16">
                            <div className="js-book-consulting-form-wrapper">
                                <div className="js-final-submit-message hidden text-center text-reso-dark">Thank you for submitting the form.</div>
                                <form
                                    className="js-cxm-form js-book-consulting-form mb-0"
                                    id="book-consultation-form"
                                    data-form-name="bookConsultationForm"
                                >
                                    <fieldset>
                                        <div className="invisible relative h-0 w-0 opacity-0">
                                            <label className="relative flex w-auto max-w-full cursor-pointer flex-wrap pl-8">
                                                <input
                                                    type="checkbox"
                                                    data-is-boolean="true"
                                                    value="false"
                                                    className="peer sr-only fixed left-full top-full"
                                                />

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

                                                <span className="block text-sm leading-tight">title</span>
                                             
                                            </label>

                                        </div>
                                        <div className="relative mb-8 w-full">
                                            <div className="relative w-full">
                                                <label
                                                    
                                                    className="block mb-1 text-sm font-semibold transition-opacity {{ isLight ? 'text-white' ? '' }}"
                                                >
                                                    What is your number one biggest CX challenge?
                                                </label>

                                                <div className="relative w-full">
                                                    <textarea
                                                        placeholder=""
                                                        className="m-0 h-28 w-full rounded border-b border-gray-200 bg-gray-200 py-2 px-4 text-base leading-6 text-navy-700 placeholder-gray-350 focus:outline-0"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative mb-8">
                                            <div
                                                className="mb-2 block text-sm font-semibold leading-none text-white"
                                            >
                                                How would you like us to get in touch?
                                            </div>
                                            <div className="-mb-2 flex flex-wrap">
                                                <div className="pr-2 pb-2">
                                                    <label
                                                        className="relative flex min-w-[90px] cursor-pointer items-center pl-6 lg:min-w-[115px]"
                                                        for="book-consulting-form-method-phone"
                                                    >
                                                        <input
                                                            x-input
                                                            type="radio"
                                                            id="book-consulting-form-method-phone"
                                                            name="preferred_contact_method"
                                                            className="peer absolute left-0 top-0 h-0 w-0"
                                                            data-validation-name="preferred_contact_method"
                                                            x-model="formData['preferred_contact_method'].value"
                                                            value="Phone"
                                                            checked="checked"
                                                        />
                                                        <span
                                                            className="absolute left-0 top-0 h-4 w-4 rounded-full border border-gray-200 bg-white before:absolute before:left-1/2 before:top-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-yellow-500 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] peer-checked:before:opacity-100"
                                                        ></span>
                                                        <span className="mt-0.5 text-sm leading-none">Phone</span>
                                                    </label>
                                                </div>
                                                <div className="pr-2 pb-2">
                                                    <label
                                                        className="relative flex min-w-[90px] cursor-pointer items-center pl-6 lg:min-w-[115px]"
                                                        for="book-consulting-form-method-email"
                                                    >
                                                        <input
                                                            type="radio"
                                                            id="book-consulting-form-method-email"
                                                            name="preferred_contact_method"
                                                            className="peer absolute left-0 top-0 h-0 w-0"
                                                            data-validation-name="preferred_contact_method"
                                                            value="Email"
                                                        />
                                                        <span
                                                            className="absolute left-0 top-0 h-4 w-4 rounded-full border border-gray-200 bg-white before:absolute before:left-1/2 before:top-1/2 before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-yellow-500 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] peer-checked:before:opacity-100"
                                                        ></span>
                                                        <span className="mt-0.5 text-sm leading-none">Email</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <button
                                                type="submit"
                                                className="min-w-[208px] cursor-pointer rounded-full border-3 border-reso-orange py-2.5 px-6 text-sm font-bold leading-6 text-white transition duration-300 ease-linear lg:hover:border-white"
                                            >
                                                Let’s talk
                                            </button>
                                        </div>
                                    </fieldset>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}