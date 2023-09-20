import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    className?: string;
    title?: string;
    useFlex?: boolean;
}

function getTemplate({ className, children, title, useFlex }: Props) {
    if (useFlex) {
        return (
            <div className={className + " flex-container-item"}>
                { title && <h2>{title}</h2>}
                <div>{children}</div>
            </div>
        )
    }
    else {
        return (
            <div className={className}>
                { title && <h2>{title}</h2>}
                <div>{children}</div>
            </div>
        )
    }
}

const ResumeListItem = (props: Props) => {
    return getTemplate(props)
}

export default ResumeListItem