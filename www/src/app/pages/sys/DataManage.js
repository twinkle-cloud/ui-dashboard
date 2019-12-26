/*
 * @Author: duchengdong
 * @Date: 2019-12-24 16:48:09
 * @LastEditors  : duchengdong
 * @LastEditTime : 2019-12-26 17:55:07
 * @Description: 
 */
import React,{Component} from 'react'
import FilterOptions from '../../components/FilterOptions'
import Button from 'antd/es/button';
import Icon from 'antd/es/icon';
import '../../styles/sys/datamanage.scss';

const filterData = [{
    type: 1,
    label: '属主：'
},{
    type: 1,
    label: '字典：'
},{
    type: 2,
    label: '类型：',
    options: [{
        displayValue:'Jack',
        value:'jack'
    },{
        displayValue:'Lucy',
        value:'lucy'
    },{
        displayValue:'yiminghe',
        value:'Yiminghe'
    }]
},{
    type: 3,
    txt: '查询',
    btnType:'primary',
    style: {
        margin: '0 12px 16px 0'
    }
},{
    type: 3,
    txt: '重置',
    style: {
        margin: '0 0 16px 0'
    }
}]
export default class DataManage extends Component {
    render(){
        return (
            <div className='datam-container'>
                <FilterOptions 
                    sourceData={filterData}
                />
                <Button type="primary">
                    <Icon type='plus' style={{transform:'translateY(-3px)'}}/>
                    新增
                </Button>
                
            </div>
        )
    }
}