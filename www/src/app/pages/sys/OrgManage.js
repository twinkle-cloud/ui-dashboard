/*
 * @Author: duchengdong
 * @Date: 2019-12-24 16:45:18
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-08 20:58:48
 * @Description: 
 */
import React,{Component} from 'react'
import FilterOptions from '../../components/FilterOptions'
import Operations from '../../components/Operations'
import Table from 'antd/es/table';

import '../../styles/sys/orgmanage.scss'

const filterData = [{
    type: 1,
    label: '部门名称：'
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
    path:'/sys/datamanage/create'
}]

const data = [
    {
      id: 1,
      code: 'D1001',
      name:'研发1部',
      level: '1级',
      parent: null,
      status: '已启用',
      desc: '',
      children: [
        {
            id: 2,
            code: 'D1002',
            name:'研发2部',
            level: '2级',
            parent: 1,
            status: '已启用',
            desc: '',
        },
        {
            id: 3,
            code: 'D1003',
            name:'研发3部',
            level: '2级',
            parent: 1,
            status: '已启用',
            desc: '',
            children: [
                {
                    id: 4,
                    code: 'D1004',
                    name:'研发4部',
                    level: '3级',
                    parent: 3,
                    status: '已启用',
                    desc: '',
                },
            ],
        },
        {
            id: 5,
            code: 'D1005',
            name:'研发5部',
            level: '2级',
            parent: 1,
            status: '已启用',
            desc: '',
            children: [
                {
                    id: 6,
                    code: 'D1006',
                    name:'研发6部',
                    level: '3级',
                    parent: 5,
                    status: '已启用',
                    desc: '',
                    children: [
                        {
                            id: 7,
                            code: 'D1007',
                            name:'研发7部',
                            level: '4级',
                            parent: 6,
                            status: '已启用',
                            desc: '',
                        },
                        {
                            id: 8,
                            code: 'D1008',
                            name:'研发8部',
                            level: '4级',
                            parent: 6,
                            status: '已启用',
                            desc: '',
                        },
                    ],
                },
            ],
        },
      ],
    },
    {
        id: 9,
        code: 'D1009',
        name:'研发9部',
        level: '1级',
        parent: null,
        status: '已启用',
        desc: '',
    },
];
  
export default class OrgManage extends Component {
    constructor(props){
        super(props)
        this.state = {}
        this.columns = [
            {
                title: '部门编码',
                dataIndex: 'code',
                key: 'code',
                width: '24%',
            },
            {
                title: '部门名称',
                dataIndex: 'name',
                key: 'name',
                width: '12%',
            },
            {
                title: '部门级别',
                dataIndex: 'level',
                key: 'level',
                width: '12%',
            },{
                title: '上级部门',
                dataIndex: 'parent',
                key: 'parent',
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
                title: '操作',
                dataIndex: 'operate',
                width: '12%',
                render: (value,record)=>{
                    return <div style={{display:'flex',flexWrap:'wrap'}}>
                        <div className='editBtn' style={{marginRight:'6px'}}>编辑</div>
                        <div className='editBtn' onClick={this.onDelete}>删除</div>
                    </div>
                }
            },
        ];
    }
    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }
    render(){
        return (
            <div className='orgm-container'>
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
                {/* <EditModal 
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                /> */}
            </div>
        )
    }
}