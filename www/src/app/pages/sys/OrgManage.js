/*
 * @Author: duchengdong
 * @Date: 2019-12-24 16:45:18
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-10 14:06:17
 * @Description: 
 */
import React,{Component} from 'react'
import FilterOptions from '../../components/FilterOptions'
import Operations from '../../components/Operations'
import TableOperateBox from '../../components/TableOperateBox'
import Table from 'antd/es/table';
import Icon from 'antd/es/icon';
import Modal from 'antd/es/modal';
import EditModal from './orgM/EditModal'

import '../../styles/sys/orgmanage.scss'

const { confirm } = Modal;
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
        this.state = {
            visible: false
        }
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
                    const TableOperateData = [{
                        txt:'编辑',
                        clickHandle: ()=>{
                            this.showModal()
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
    
    // 编辑
    showModal = () => {
        this.setState({
          visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    // 分页
    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }
    
    render(){
        const {visible} = this.state
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
                <EditModal 
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                />
            </div>
        )
    }
}