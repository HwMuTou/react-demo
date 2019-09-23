import * as React from "react";

import style from "./Flower.module.css";

export class FlowerGarden extends React.Component {

    render() {
        return (
            <div className={style.page}>
                <div className={style.header}>
                    <p>DOWNLOAD THE EXAMPLE HTML FILE AND CSS FILE</p>
                </div>

                <div className={style.content}>
                    <div className={style.mainContent}>
                        <div className={style.paragraph}>
                            <h3 className={style.preamble}>The Road to Enlightenment</h3>
                        </div>
                    </div>

                    <div className={style.sidebarContent}>

                    </div>
                </div>
            </div>
        )
    }
}