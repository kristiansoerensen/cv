import { ReactNode } from "react";

interface Props {
    title?: string;
    skillValue: number;
    extraClassName?: string;
    imgSrc?: string;
}

function getTemplate({ imgSrc, extraClassName, skillValue, title }: Props) {
    const SkillBarStyle:React.CSSProperties = {
        width: skillValue.toString() + '%'
    };

    const ProgressStyle:React.CSSProperties = {
        height: "10px"
    };

    let skillBarBG:string = "";
    if (skillValue > 75){
        skillBarBG = "bg-success";
    }
    else if (skillValue > 50){
        skillBarBG = "bg-primary";
    } 
    else if (skillValue > 25){
        skillBarBG = "bg-primary";
    } 
    else {
        skillBarBG = "bg-info";
    }

    return (
    <div className="mt-3 ps-2 pe-2">
        <div className="mb-1">
            { imgSrc && <img className='img-fluid me-2' width={"30px"} src={imgSrc} /> }
            { title && <p className={"d-inline-block pb-0 mb-0"}><strong>{title}</strong></p>}
        </div>
        <div className="progress" style={ProgressStyle}>
            <div style={SkillBarStyle} className={extraClassName ? "progress-bar " + skillBarBG + " " + extraClassName : "progress-bar"} role="progressbar" aria-valuenow={skillValue} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
    </div>)
}

const ResumeSkillBar = (props: Props) => {
    return getTemplate(props)
}

export default ResumeSkillBar