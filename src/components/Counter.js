import React,{ Component } from 'react'
import $ from '../../static/jquery.min.js'
import ReactDOM,{ findDOMNode }from 'react-dom'
class Counter extends Component {
    constructor(props){
        super(props)
    }
    cut() {
        var a = $('#list').css('display');
        if (a == 'block') {
            $('#list').css('display', 'none');
            $('#btn').html('▼')
        } else {
            $('#list').css('display', 'block');
            $('#btn').html('▲')
        }
    }
    select(e) {
        var content = e.target.innerText;
        $('#type').html(content)
    }
    computed() {
        var obj = {};
        var value1 = $('#valOne').val(),
            value2 = $('#valTwo').val(),
            type = $('#type').html();
        obj.type = type;
        obj.value1 = value1;
        obj.value2 = value2;
        this.props.onIncrement(obj)
    }
    render() {
        const spanStyle = {
            width: "40px",
            height: "30px",
            textAlign: "center",
            display: "inline-block",
            vertical: "middle",
            lineHeight: "30px",
            border: "1px solid #000"
        };
        const spanStyle1 = {
            width: "40px",
            height: "30px",
            textAlign: "center",
            display: "inline-block",
            vertical: "middle",
            lineHeight: "30px",
            border: "1px solid #000",
            borderLeft: "none",
            cursor: "pointer"
        };
        const spanStyle2 = {
            width: "40px",
            height: "30px",
            textAlign: "center",
            display: "inline-block",
            vertical: "middle",
            lineHeight: "30px",
            fontSize: "20px"
        };
        const ulStyle = {
            width: "80px",
            height: "160px",
            listStyle: "none",
            marginLeft: "174px",
            padding: "0",
            display: "block"

        };
        const liStyle = {
            width: "100%",
            height: "40px",
            lineHeight: "25px",
            textAlign: "center",
            fontSize: "20px",
            border: "1px solid #000",
            cursor: "pointer"
        };
        return (
            <div>
                <h1>计算器</h1>
                <input id="valOne" type="text"/>
                <span style={ spanStyle } id="type">+</span>
                <span style={ spanStyle1} onClick={ this.cut.bind(this)} id="btn">▲</span>
                <input id="valTwo" type="text"/>
                <button className="btn btn-primary" onClick={ this.computed.bind(this)}>=</button>
                <span style={ spanStyle2 }>{ this.props.state }</span>
                <ul style={ ulStyle } ref="list" id="list">
                    <li style={ liStyle } className="btn btn-success" onClick={ this.select.bind(this)}>+</li>
                    <li style={ liStyle } className="btn btn-success" onClick={ this.select.bind(this)}>-</li>
                    <li style={ liStyle } className="btn btn-success" onClick={ this.select.bind(this)}>*</li>
                    <li style={ liStyle } className="btn btn-success" onClick={ this.select.bind(this)}>/</li>
                </ul>
            </div>
        )
    }
}
Counter.propTypes = {};
export default Counter