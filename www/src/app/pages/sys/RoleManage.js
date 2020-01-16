/*
 * @Author: duchengdong
 * @Date: 2019-12-24 16:47:00
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-16 17:21:45
 * @Description: 
 */
import React,{Component} from 'react'
import FilterOptions from '../../components/FilterOptions'
import Operations from '../../components/Operations'
import TableOperateBox from '../../components/TableOperateBox'
import Table from 'antd/es/table';
import Icon from 'antd/es/icon';
import Modal from 'antd/es/modal';

import '../../styles/sys/rolemanage.scss'

const { confirm } = Modal;
const filterData = [{
    type: 1,
    label: '角色名称：'
},{
    type: 2,
    label: '状态：',
    options: [{
        displayValue:'已启用',
        value:'1'
    },{
        displayValue:'已停用',
        value:'2'
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

const operateData = [{
    type: 'route',
    btnType:'primary',
    txt: '新增',
    style: {
        margin: '0 12px 0 0'
    },
    icon: {
        type:'plus',
        style:{
            transform:'translateY(-3px)'
        }
    },
    path:'/sys/rolemanage/create'
}]

const data = [{
    id: 1,
    code: 'D1001',
    name: '研发1部',
    type: '内置',
    status: '已启用',
    desc: '',
    createTime:'2018-10-22 12:00:00'
}, {
    id: 2,
    code: 'D1002',
    name: '研发2部',
    type: '自定义',
    status: '已启用',
    desc: '',
    createTime:'2018-10-22 12:00:00'
}]

export default class RoleManage extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }
        this.columns = [
            {
                title: '角色编码',
                dataIndex: 'code',
                key: 'code',
                width: '24%',
            },
            {
                title: '角色名称',
                dataIndex: 'name',
                key: 'name',
                width: '12%',
            },
            {
                title: '角色类型',
                dataIndex: 'type',
                key: 'type',
                width: '12%',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                width: '12%',
            },{
                title: '描述',
                dataIndex: 'desc',
                key: 'desc',
                width: '12%',
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
                key: 'createTime',
                width: '12%',
            },
            {
                title: '操作',
                dataIndex: 'operate',
                width: '12%',
                render: (value,record)=>{
                    const TableOperateData = [{
                        txt:'编辑',
                        clickHandle: ()=>{
                            props.history.push('/sys/rolemanage/create/'+record.id)
                        }
                    },{
                        txt:'停用',
                        clickHandle: ()=>{
                            console.log('停用')
                        }
                    },{
                        txt:'删除',
                        clickHandle: ()=>{
                            this.onDelete()
                        }
                    }]
                    return <TableOperateBox data={TableOperateData}/>
                }
            },
        ];
    }

    // 删除
    onDelete = () => {
        confirm({
            title: '删除确认',
            content: '你确定要删除这一条记录？',
            icon: <Icon type="close-circle" style={{color: '#f5222d'}}/>,
            okText: '确定',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
        });
    }

    // 分页
    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }
    
    render(){
        return (
            <div className='role-container '>
                <FilterOptions 
                    sourceData={filterData}
                />
                <Operations 
                    sourceData={operateData}
                /> 
                <div className="table-box">
                    <Table 
                        rowKey={'id'} 
                        columns={this.columns} 
                        dataSource={data}
                        onChange={this.onChange} 
                        pagination = {{
                            total:2,
                            showTotal:total => `共 ${total} 条记录 第 1 / 80 页`,
                            showSizeChanger: true,
                            pageSizeOptions:['10','20','50'],
                            showQuickJumper: true,
                        }}
                    />
                </div>
            </div>
        )
    }
}