/*
 * @Author: duchengdong
 * @Date: 2019-12-24 16:48:09
 * @LastEditors  : duchengdong
 * @LastEditTime : 2019-12-26 17:17:35
 * @Description: 
 */
import React,{Component} from 'react'
import Input from 'antd/es/input';
import Select from 'antd/es/select';
import Button from 'antd/es/button';
import '../styles/components/filterOptions.scss';
const { Option } = Select;

// 元数据类型定义，方便修改
const TYPE_INPUT = 1
const TYPE_SELECT = 2
const TYPE_BUTTON = 3

// 元数据字段定义，方便修改
const TYPE = 'type'
const LABEL = 'label'
const TXT = 'txt'
const BTN_TYPE = 'btnType'
const STYLE = 'style'
const OPTIONS = 'options'
const DISPLAY_VALUE = 'displayValue'
const VALUE = 'value'

export default class DataManage extends Component {
    render(){
        const {sourceData} = this.props
        return (
            <div className="filter-Box">
                {
                    sourceData.map((v,i) => {
                        if(v[TYPE]==TYPE_INPUT){
                            return (
                                <div key={i} className="filter-option">
                                    <span className="filter-label">{v[LABEL]}</span>
                                    <Input 
                                        className='filter-input'
                                        placeholder="请输入" 
                                    />
                                </div>
                            )
                        }else if(v[TYPE]==TYPE_SELECT){
                            return (
                                <div key={i} className="filter-option">
                                    <span className="filter-label">{v[LABEL]}</span>
                                    <Select placeholder={'请选择'} style={{ width: 200 }}>
                                        {
                                            v[OPTIONS].map((v,index) => (
                                                <Option key={index} value={v[VALUE]}>{v[DISPLAY_VALUE]}</Option>
                                            ))
                                        }
                                    </Select>
                                </div>
                            )
                        }else if(v[TYPE]==TYPE_BUTTON){
                            return (
                                <Button key={i} type={v[BTN_TYPE]} style={v[STYLE]}>{v[TXT]}</Button>
                            ) 
                        }
                    })
                }
                
                {/* <div className="filter-option">
                    <span className="filter-label">字典：</span>
                    <Input 
                        className='filter-input'
                        placeholder="请输入" 
                    />
                </div>
                <Button type="primary" style={{margin:'0 12px 16px 0'}}>查询</Button>
                 */}
            </div>
        )
    }
}