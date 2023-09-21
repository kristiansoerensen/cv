import { ReactNode } from "react";

interface Props {
    title: string;
    children?: ReactNode;
    modelId: string;
}

function getTemplate({ title, children, modelId }: Props) {
    return (
        <div className="modal" tabIndex={-1}  id={modelId} aria-labelledby={modelId} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

const TimelineItemModal = (props: Props) => {
    return getTemplate(props)
}

export default TimelineItemModal