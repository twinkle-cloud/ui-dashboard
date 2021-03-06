/*
 * @Author: duchengdong
 * @Date: 2019-11-28 17:06:03
 * @LastEditors: duchengdong
 * @LastEditTime: 2019-12-10 10:30:57
 * @Description: 
 */
import React,{Component} from "react";
import "../../../_metronic/_assets/sass/pages/demos/demo1.scss";
import joint from 'joint'

export default class DemoPage1 extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    console.log('***')
    var dom = this.refs.graphDom
    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: dom,
        model: graph,
        width: 600,
        height: 100,
        gridSize: 10,
        drawGrid: true,
        background: {
            color: 'rgba(0, 255, 0, 0.3)'
        }
    });
    paper.scale(0.5, 0.5);
    paper.translate(300, 50);
    var rect = new joint.shapes.standard.Rectangle();
    rect.position(100, 30);
    rect.resize(100, 40);
    rect.attr({
        body: {
            fill: 'blue'
        },
        label: {
            text: 'Hello',
            fill: 'white'
        }
    });
    rect.addTo(graph);
    var rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr('label/text', 'World!');
    rect2.addTo(graph);
    var link = new joint.shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.addTo(graph);
  }
  componentWillUnmount(){
    console.log('-------')
  }
  render(){
    return (
      <div className="kt-grid kt-grid--ver kt-grid--root">
          <div ref='graphDom' id="myholder"></div>
      </div>
    );
  }
}
