import React from "react";
import {LinkedList} from "typescript-collections";
import _ from "lodash";
import style from "./TowerHanoi.module.scss"

type TowerHanoiProps = {
    height: number
}

type DiscState = {
    size: number
}

type TowerHanoiStates = {
    pagA: LinkedList<DiscState>,
    pagB: LinkedList<DiscState>,
    pagC: LinkedList<DiscState>
}

export class TowerHanoi extends React.Component<TowerHanoiProps, TowerHanoiStates> {

    public constructor(props: TowerHanoiProps) {
        super(props);

        const height = props.height | 3;

        const pagOne = new LinkedList<DiscState>();
        _.range(1, height + 1).forEach((size) => {
            pagOne.add({
                size: size
            })
        });

        this.state = {
            pagA: pagOne,
            pagB: new LinkedList<DiscState>(),
            pagC: new LinkedList<DiscState>()
        }
    }

    moveDisc = (from: LinkedList<DiscState>, to: LinkedList<DiscState>) => {
        const moveDisc = from.first();
        const toFirst = to.first();

        if (moveDisc && toFirst && toFirst.size < moveDisc.size) {
            throw Error("必须从小到达的排列。")
        }

        if (moveDisc) {
            from.remove(moveDisc);
            to.add(moveDisc, 0);

            this.setState({});
        }
    };

    discRender = (size: number, pag: string) => {
        let width = `${200 + size * 50}px`;
        const top = `${size * 50}px`;
        const border = `rgba(${_.random(1, 255)},${_.random(1, 255)},${_.random(1, 255)},0.9) solid 10px`;

        return (
            <div key={size}
                 draggable={true}
                 style={{
                     width: width,
                     height: "100px",
                     border: border,
                     borderRadius: "50%",
                     top: top,
                     cursor: "move"
                 }}
                 onDragStart={(event) => this.onDragStart(event, pag)}
            />
        )
    };

    onDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const target = event.target as HTMLDivElement;

        if (target) {
            const fromName = event.dataTransfer.getData("from");
            const toName = target.id;

            try {
                const from = this.getDistByName(fromName);
                const to = this.getDistByName(toName);
                this.moveDisc(from, to);
            } catch (e) {
                alert(e)
            }

        }
    };

    getDistByName = (name: string): LinkedList<DiscState> => {
        switch (name) {
            case "A":
                return this.state.pagA;
            case "B":
                return this.state.pagB;
            case "C":
                return this.state.pagC;
        }

        throw Error(`名字错误 ${name}`)
    };

    onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    onDragStart = (event: React.DragEvent<HTMLDivElement>, pag: string) => {
        event.dataTransfer.setData("from", pag);
    };

    render() {

        const {pagA, pagB, pagC} = this.state;

        return (
            <div className={style.content} onDrop={this.onDrop}>
                <div id={"A"} onDragOver={this.onDragEnter}>
                    {pagA.toArray().map(disc => this.discRender(disc.size, "A"))}
                </div>
                <div id="B" onDragOver={this.onDragEnter}>
                    {pagB.toArray().map(disc => this.discRender(disc.size, "B"))}
                </div>
                <div id="C" onDragOver={this.onDragEnter}>
                    {pagC.toArray().map(disc => this.discRender(disc.size, "C"))}
                </div>
            </div>
        );
    }
}