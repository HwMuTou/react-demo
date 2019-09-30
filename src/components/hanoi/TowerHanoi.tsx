import React from "react";
import {LinkedList} from "typescript-collections";
import _ from "lodash";
import style from "./TowerHanoi.module.scss"
import {Message, Modal, ModalProps} from "semantic-ui-react";

type TowerHanoiProps = {
    height: number
}

type DiscState = {
    size: number
}

type TowerHanoiStates = {
    pagA: LinkedList<DiscState>,
    pagB: LinkedList<DiscState>,
    pagC: LinkedList<DiscState>,
    colors: string[],
    height: number,
    errorMessage: string,
    modalOpen: boolean
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

        const colors = _.range(1, height + 1).map(
            () => `rgba(${_.random(1, 255)},${_.random(1, 255)},${_.random(1, 255)},0.9)`
        );

        this.state = {
            pagA: pagOne,
            pagB: new LinkedList<DiscState>(),
            pagC: new LinkedList<DiscState>(),
            colors: colors,
            height: height,
            errorMessage: "",
            modalOpen: false
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
        const {colors} = this.state;
        let width = `${100 - 50 / size}%`;
        const border = `${colors[size - 1]} solid 10px`;

        return (
            <div key={size}
                 draggable={true}
                 style={{
                     width: width,
                     height: "15%",
                     border: border,
                     borderRadius: "50%",
                     cursor: "move",
                     marginBottom: "25px"
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
                this.setState({
                    modalOpen: true,
                    errorMessage: e.message
                })
            }

            if (this.win()) {
                this.setState({
                    modalOpen: true,
                    errorMessage: "恭喜你，还要再来一盘吗？"
                })
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

    closeModal = () => {
        this.setState({
            modalOpen: false,
            errorMessage: ""
        })
    };

    win = () => {
        return this.state.pagC.size() === this.state.height;
    };

    onActionClick = (event: React.MouseEvent<HTMLElement>, data: ModalProps) => {
        this.setState({
            pagA: this.state.pagC,
            pagC: new LinkedList<DiscState>()
        })
    };

    render() {

        const {pagA, pagB, pagC} = this.state;
        const actions = this.win() ? [
            {
                key: 'No',
                content: 'No'
            },
            {
                key: 'Yes',
                content: 'Yes',
                positive: true
            }
        ] : null;

        return (
            <div>
                <Message>
                    <Message.Header>背景描述</Message.Header>
                    <p>
                        河内之塔(Towersof Hanoi)是法国人M.Claus(Lucas)于1883年从泰国带至法国的，河内为越战时 北越的首都，即现在的胡志明市;1883年法国数学家
                        EdouardLucas曾提及这个故事，据说创世 纪时Benares有一座波罗教塔，是由三支钻石棒(Pag)所支撑，开始时神在第一根棒上放置64
                        个由上至下依由小至大排列的金盘(Disc) ，并命令僧侣将所有的金盘从第一根石棒移至第根三 石棒，且搬运过程中遵守大盘子在小盘子之下的原则，若每日仅搬一个盘子，则当盘子全数搬
                        运完毕之时，此塔将毁损，而也就是世界末日来临之时。
                    </p>
                </Message>

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

                <Modal open={this.state.modalOpen}
                       onClose={this.closeModal}
                       actions={actions}
                       onActionClick={this.onActionClick}
                       content={this.state.errorMessage}
                >
                </Modal>
            </div>
        );
    }
}