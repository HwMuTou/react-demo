import React, {Component, ReactNode} from "react";

export interface LinkProps {
    active: boolean
    children: ReactNode
    onClick: () => void
}

export class Link extends Component<LinkProps> {

    public render() {
        if (this.props.active) {
            return <span>{this.props.children}</span>
        } else {
            return (
                <a
                    href=""
                    onClick={e => {
                        e.preventDefault();
                        this.props.onClick()
                    }}
                >
                    {this.props.children}
                </a>
            )
        }
    }
}
