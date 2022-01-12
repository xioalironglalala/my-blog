import React from "react";
import './typeWriter.css'

const typingRate = 250;
class TypeWriter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            //打字出的文字
            textAreaShow: "",
            // 是否在打字中
            isTyping: false,
            //等待被打字的数组
            waitToType: ["打字的效果,","博客的首页啦,","又是为了生存的一天。"],
            //延迟时间
            delayTime: this.props.delayTime || 1,
        }
    }
    componentDidMount() {
        let waitToType = this.state.waitToType;
        if (waitToType.length > 0) {
            let stringInput = waitToType.shift();
            setTimeout(() => this.typing(stringInput, stringInput[0], 0), typingRate);
            this.setState({
                waitToType: waitToType
            })
        }
    }


    componentWillReceiveProps(nextProps) {
        let textArea = nextProps.textArea;
        let befTextArea = this.props.textArea || [];
        let waitToType = JSON.parse(JSON.stringify(this.state.waitToType));
        let stringAll;
        // 切换时，重置
        if (textArea.length === 0) {
            this.setState({
                textAreaShow: "",
                waitToType: [],
            })
        }

        console.log("textArea ", textArea);

        if (this.state.textAreaShow === "" && this.state.delayTime && textArea.length > 0 && textArea.length > befTextArea.length) {

            stringAll = textArea[textArea.length - 1];
            // waitToType.push(stringAll);
            setTimeout(() => this.typing(stringAll, stringAll[0], 0), typingRate + this.state.delayTime);

        } else if (textArea.length > 0 && textArea.length > befTextArea.length) {
            stringAll = textArea[textArea.length - 1];
            if (this.state.isTyping) {
                waitToType.push(stringAll);
                this.setState({
                    waitToType: waitToType
                })
            } else {
                setTimeout(() => this.typing(stringAll, stringAll[0], 0), typingRate);
            }
        }

    }
    typing(stringAll, char, nowLength) {
        if (nowLength < stringAll.length) {
            // isTyping = true;
            let textAreaShow = this.state.textAreaShow + char;
            // let textArea = this.refs.textArea;
            // this.refs.textArea.innerText = textAreaShow;
            this.setState({
                textAreaShow: textAreaShow,
                isTyping: true,
            }, () => {
                setTimeout(() => this.typing(stringAll, stringAll[nowLength + 1], nowLength + 1), typingRate);
            }, this)
        } else if (nowLength >= stringAll.length) {
            this.setState({
                isTyping: false,
            }, () => {
                let waitToType = this.state.waitToType;
                if (waitToType.length > 0) {
                    let stringInput = waitToType.shift();
                    setTimeout(() => this.typing(stringInput, stringInput[0], 0), typingRate);
                    this.setState({
                        waitToType: waitToType
                    })
                }
            }, this)
        }
    }

    render() {
        const {
            textAreaShow
        } = this.state;
        return (
            <div className='text-content'>
                <div ref="textArea" className="textArea">{textAreaShow}</div>
            </div>
        );
    }
}

export default TypeWriter;