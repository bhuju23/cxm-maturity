export const ProgressBar = (props)=>{

    const calculateProgress = ()=>{
        const progress = ((props.bar) / (props.questions.length)) * 100;
        return progress;
    }
    return(
        <div className="bg-navy-700 pb-4 lg:pb-14">
  <div className="o-container">
    <div className=" text-white" id="progressBar" >
      <div className="relative h-[6px] w-full bg-[#EFEFEF]">
        <div
          className="transition-width absolute left-0 top-0 bottom-0 w-0 bg-yellow-600 duration-500 ease-in-out"
          style={{width:`${calculateProgress()}%`}}
        ></div>
      </div>
    </div>
  </div>
</div>

    )
}