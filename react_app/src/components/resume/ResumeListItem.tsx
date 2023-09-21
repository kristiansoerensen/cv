import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    title?: string;
    iconEntity?: string;
    imgSrc?: string;
}

function getTemplate({ iconEntity, imgSrc, children, title }: Props) {
    return (
        <div className="row mb-2">
            <div className="col-1">
                <div className="resume-icon">
                    { imgSrc && <img className='img-fluid' src={imgSrc} /> }
                    { iconEntity && <span className='h4'>{iconEntity}</span> }
                </div>
            </div>
            <div className="col-11">
                <h6 className='d-inline-block'>{title}</h6>
                {children}
            </div>
        </div>
    )
}

const ResumeListItem = (props: Props) => {
    return getTemplate(props)
}

export default ResumeListItem