import React from "react";

export interface IExternalLinkProps {
    url: string;
}

export const Link: React.FC<IExternalLinkProps> = (props) => {
    return (
        <a
            href={props.url}
            target={"_blank"}
            rel={"noopener noreferrer"}
        >
            {props.children}
        </a>
    )
}