/*
 * @Author: duchengdong
 * @Date: 2020-01-03 15:18:30
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-06 18:20:32
 * @Description: 
 */
import React,{Component} from 'react'
import Button from 'antd/es/button';
import Icon from 'antd/es/icon';
import { Link } from "react-router-dom";

const TYPE = 'type'
const BTN_TYPE = 'btnType'
const TXT = 'txt'
const STYLE = 'style'
const ICON = 'icon'
const ONCLICK = 'onclick'
const PATH = 'path'

export default class Operations extends Component {
    render(){
        const {sourceData,style} = this.props
        return (
            <div className='operate-box' style={style}>
                {
                    sourceData.map((v,i)=> {
                        return (
                            v[TYPE] == 'route'?
                            <Link key={i} to={v[PATH]}>
                                <Button type={v[BTN_TYPE]} style={v[STYLE]}>
                                    {v[ICON]?<Icon type={v[ICON][TYPE]} style={v[ICON][STYLE]}/>:null}
                                    {v[TXT]}
                                </Button>
                            </Link>
                            :<Button key={i} type={v[BTN_TYPE]} style={v[STYLE]} onClick={v[ONCLICK]}>
                                {v[ICON]?<Icon type={v[ICON][TYPE]} style={v[ICON][STYLE]}/>:null}
                                {v[TXT]}
                            </Button>
                        )
                    })
                }
            </div>
        )
    }
}

Operations.defaultProps = {
    style:{
        margin:'0 0 16px 0'
    }
}