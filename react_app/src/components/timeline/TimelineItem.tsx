import { ReactNode } from "react";

interface Props {
    right?: boolean;
    title: string;
    children?: ReactNode;
}

function getTemplate({ right, title, children }: Props) {
    return (
        <div className={right ? "timeline-container right" : "timeline-container left"}>
            <div className="content">
                <h5>{title}</h5>
                <hr className="mb-2 mt-1"/>
                {children}
            </div>
        </div>
    )
}

const TimelineItem = (props: Props) => {
    return getTemplate(props)
}

export default TimelineItem