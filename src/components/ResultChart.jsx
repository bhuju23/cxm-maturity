import { Capable } from "../components/icon/stage/Capable"
import { Leading } from "../components/icon/stage/Leading"
import { Learning } from "../components/icon/stage/Learning"
import { Proactive } from "../components/icon/stage/Proactive"
import { Reactive } from "../components/icon/stage/Reactive"


export const ResultChart = (props) => {
    return (
        <>
            <div className="h-[260px]">
                <ul className="flex h-full justify-center gap-x-4">
                    <li className="self-end" data-stage="reactive">
                        <div
                            className={`text-center text-navy-700  ${props.range.stage.title === 'Reactive' ? 'text-reso-dark' : ''}`}
                        >
                            <div className="m-auto mb-1 inline-block">
                                <Reactive />
                            </div>
                        </div>
                        <span
                            className={`block h-0 w-[50px] rounded-t bg-navy-700 transition-all ${props.range.stage.title ==='Reactive' ? 'bg-reso-dark' : ''} !h-[90px] `}
                        ></span>
                    </li>

                    <li className="self-end" data-stage="learning">
                        <div
                             className={`text-center text-navy-700  ${props.range.stage.title === 'Learning' ? 'text-reso-dark' : ''}`}
                        >
                            <div className="m-auto mb-1 inline-block">
                                <Learning />
                            </div>
                        </div>
                        <span
                            className={`block h-0 w-[50px] rounded-t bg-navy-700 transition-all ${props.range.stage.title ==='Learning' ? 'bg-reso-dark' : ''} !h-[120px] `}
                        ></span>
                    </li>

                    <li className="self-end" data-stage="capable">
                        <div
                             className={`text-center text-navy-700  ${props.range.stage.title === 'Capable' ? 'text-reso-dark' : ''}`}
                        >
                            <div className="m-auto mb-1 inline-block">
                                <Capable />
                            </div>
                        </div>
                        <span
                            className={`block h-0 w-[50px] rounded-t bg-navy-700 transition-all ${props.range.stage.title ==='Capable' ? 'bg-reso-dark' : ''} !h-[150px] `}
                        ></span>
                    </li>

                    <li className="self-end" data-stage="proactive">
                        <div
                            className={`text-center text-navy-700  ${props.range.stage.title === 'Proactive' ? 'text-reso-dark' : ''}`}
                        >
                            <div className="m-auto mb-1 inline-block">
                                <Proactive />
                            </div>
                        </div>
                        <span
                            className={`block h-0 w-[50px] rounded-t bg-navy-700 transition-all ${props.range.stage.title ==='Proactive' ? 'bg-reso-dark' : ''} !h-[180px] `}
                        ></span>
                    </li>

                    <li className="self-end" data-stage="leading">
                        <div
                             className={`text-center text-navy-700  ${props.range.stage.title === 'Leading' ? 'text-reso-dark' : ''}`}
                        >
                            <div className="m-auto mb-1 inline-block">
                                <Leading />
                            </div>
                        </div>
                        <span
                            className={`block h-0 w-[50px] rounded-t bg-navy-700 transition-all ${props.range.stage.title ==='Leading' ? 'bg-reso-dark' : ''} !h-[210px] `}
                        ></span>
                    </li>
                </ul>
            </div>
        </>
    )
}