import { ProgressBar } from "./ProgressBar"

export const Banner = (props) => {
    return (
        <>
         <div
        className="flex min-h-[80px] flex-wrap items-end bg-navy-700 pt-24 pb-4 text-white lg:min-h-[250px] lg:pb-8"
      >
        <div className="w-full">
          <div className="o-container">
            <h1 className="relative pb-3 font-semibold leading-relaxed lg:text-4xl">
              CX Maturity Assessment
              <span className="absolute left-0 bottom-0 block h-0.5 w-[72px] bg-yellow-600"></span>
            </h1>
          </div>
        </div>
      </div>
      {props.formSubmitted !==0 && <ProgressBar count={props.count} questions={props.questions} bar={props.bar}/>}   
        </>
    )
}