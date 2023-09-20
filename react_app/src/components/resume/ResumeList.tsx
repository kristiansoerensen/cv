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
            <div className={className + " flex-container"}>
                { title && <h2>{title}</h2>}
                <div>{children}</div>
            </div>
        )
    }
    else {
        return (
            <div className={className}>
                { title && <h3>{title}</h3>}
                <div>{children}</div>
            </div>
        )
    }
}

const ResumeList = (props: Props) => {
    return getTemplate(props)
}

export default ResumeList