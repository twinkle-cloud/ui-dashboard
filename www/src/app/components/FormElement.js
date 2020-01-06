/*
 * @Author: duchengdong
 * @Date: 2020-01-06 10:19:54
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-06 16:48:47
 * @Description: 
 */
import React,{Component} from 'react'
import Input from 'antd/es/input';
import Tooltip from 'antd/es/tooltip';
import Icon from 'antd/es/icon'

export class FormInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        const {style,hasHelp,promptTxt,label} = this.props
        return (
            <div className='form-input'>
                <div className="form-label">
                    {
                        hasHelp
                        ?<Tooltip title={promptTxt}>
                            <Icon type="question-circle" />
                        </Tooltip>:null
                    }
                    <span>{label}</span>
                </div>
                <Input placeholder="请输入"  style={style}/>
            </div>  
        )
    }
}

FormInput.defaultProps = {
    label: '表单label',
    style: {
        width: '300px'
    },
    promptTxt:'帮助文字',
    hasHelp: true
}