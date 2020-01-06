/*
 * @Author: duchengdong
 * @Date: 2020-01-03 15:41:47
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-03 15:59:48
 * @Description: 
 */
import React,{Component} from 'react'
import Alert  from 'antd/es/alert'

export default class Alerts extends Component {
    render(){
        const {node,showIcon,type} = this.props
        return (
            <Alert message={node} type={type} showIcon={showIcon} />
        )
    }
}

Alerts.defaultProps = {
    type:'info',
    showIcon:true
}