export const QuestionRadio = (props) => {
    return (
        <>
            <label className="relative mb-2 flex cursor-pointer items-center rounded-md p-2 pl-[72px] shadow-sm last:mb-0 lg:mb-6 lg:py-4" key={props.value}>
                <input type="radio" className="peer fixed left-full top-full" name={props.name} value={props.value} checked={props.checked} onChange={props.onChange}/>
                <span className="absolute left-6 h-6 w-6 rounded-full border border-[#EFEFEF] bg-[#EFEFEF] before:absolute before:left-1/2 before:top-1/2 before:h-[18px] before:w-[18px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-yellow-500 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] peer-checked:bg-white peer-checked:before:opacity-100"></span>
                <span className="block text-sm leading-8 text-black lg:text-xl">{props.text}</span>
            </label>
        </>
    )
}