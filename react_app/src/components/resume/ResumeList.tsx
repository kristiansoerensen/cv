import { ReactNode } from "react";

interface Props {
    noIndent?: boolean;
    children?: ReactNode;
    title?: string;
    titleClass: string;
    useFlex?: boolean;
}

function getTemplate({ noIndent, children, title, useFlex, titleClass }: Props) {
    if (useFlex) {
        return (
            <div className="flex-container-item">
                <div className="card w-auto h-100">
                    { title && <div className="card-header"><p className={titleClass}>{title}</p></div>}
                    <div className="card-body">{children}</div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="mb-4">
                { title && <p className={titleClass}>{title}</p>}
                <div className={!noIndent ? "ms-3": ""}>{children}</div>
            </div>
        )
    }
}

const ResumeList = (props: Props) => {
    return getTemplate(props)
}

export default ResumeList