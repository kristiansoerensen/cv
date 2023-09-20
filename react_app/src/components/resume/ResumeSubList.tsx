import { ReactNode } from "react";

interface Props {
    bulletPoints?: boolean;
    children?: ReactNode;
    className?: string;
    title?: string;
    useFlex?: boolean;
}

function getTemplate({ className, children, title, useFlex }: Props) {
    if (useFlex) {
        return (
            <div className={className + " flex-container-item"}>
                { title && <h4>{title}</h4>}
                <div>{children}</div>
            </div>
        )
    }
    else {
        return (
            <div className={className}>
                { title && <h4>{title}</h4>}
                <div>{children}</div>
            </div>
        )
    }
}

const ResumeSubList = (props: Props) => {
    return getTemplate(props)
}

export default ResumeSubList