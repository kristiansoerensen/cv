import { ReactNode } from "react";
import '../../assets/scss/Timeline.scss'

interface Props {
    children: ReactNode;
    title: string;
}

function getTemplate({ children, title }: Props) {
    return (
        <div className="mb-5">
            <h2 className="text-center">{title}</h2>
            <hr className="mt-4"/>
            <div className="timeline">
                {children}
            </div>
        </div>
    )
}

const Timeline = (props: Props) => {
    return getTemplate(props)
}

export default Timeline