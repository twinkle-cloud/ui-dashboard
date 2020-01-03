/*
 * @Author: duchengdong
 * @Date: 2019-12-24 16:48:09
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-03 17:57:59
 * @Description: 
 */
import React,{Component} from 'react'
import FilterOptions from '../../components/FilterOptions'
import Operations from '../../components/Operations'
import Alert from '../../components/Alert'
import Table from 'antd/es/table';
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
}, {
    txt: '批量操作',
    style: {
        margin: '0'
    }
}]

const columns = [{
        title: '序号',
        dataIndex: 'no',
    },
    {
        title: '属主',
        dataIndex: 'belongs',
    },
    {
        title: '字典',
        dataIndex: 'keyName',
    }, {
        title: '字典值',
        dataIndex: 'keyValue',
    },
    {
        title: '字典编码',
        dataIndex: 'keyCode',
    },
    {
        title: '文本名',
        dataIndex: 'keyText',
    }, {
        title: '状态',
        dataIndex: 'status',
        filters: [{
                text: '已启用',
                value: '已启用',
            },
            {
                text: '进行中',
                value: '进行中',
            },
            {
                text: '成功',
                value: '成功',
            },
            {
                text: '失败',
                value: '失败',
            },
            {
                text: '警告',
                value: '警告',
            },
        ],
        onFilter: (value, record) => record.status.indexOf(value) === 0
    },
    {
        title: '类型',
        dataIndex: 'type',
        filters: [{
                text: '系统自有',
                value: '系统自有',
            },
            {
                text: '自定义',
                value: '自定义',
            },
            {
                text: '成功',
                value: '成功',
            },
            {
                text: '失败',
                value: '失败',
            },
            {
                text: '警告',
                value: '警告',
            },
        ],
        onFilter: (value, record) => record.type.indexOf(value) === 0
    },
    {
        title: '创建时间',
        dataIndex: 'createTime',
        sorter: (a, b) => new Date(a.createTime).getTime() - new Date(b.createTime).getTime(),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: '预期完成时间',
        dataIndex: 'finishTime',
        sorter: (a, b) => new Date(a.finishTime).getTime() - new Date(b.finishTime).getTime(),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: '操作',
        dataIndex: 'operate',
        render: (value,record)=>{
            return <div style={{display:'flex',flexWrap:'wrap'}}>
                <div className='editBtn' style={{marginRight:'6px'}}>编辑</div>
                <div className='editBtn'>删除</div>
            </div>
        }
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
  };

const data = [{
    id:1,
    no:1,
    belongs:'global',
    keyName:'STATUS',
    keyValue: 1,
    keyCode:'INITIALIZE',
    keyText:'初始化',
    status:'已启用',
    type:'系统自有',
    createTime:'2018-12-21  08:50:08',
    finishTime:'2019-06-21  08:50:08'
},{
    id:2,
    no:2,
    belongs:'global',
    keyName:'STATUS',
    keyValue: 3,
    keyCode:'INITIALIZE',
    keyText:'初始化',
    status:'已启用',
    type:'系统自有',
    createTime:'2019-12-21  08:50:08',
    finishTime:'2020-06-21  08:50:08'
}]

export default class DataManage extends Component {
    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }
    render(){
        return (
            <div className='datam-container'>
                <FilterOptions 
                    sourceData={filterData}
                />
                <Operations 
                    sourceData={operateData}
                />     
                <Alert 
                    node={<span>已选择 <span className='blue'>4</span> 项   服务调用总计：<span>36.4</span> 万   <span className='blue' style={{cursor:'pointer'}}>清空</span></span>}
                />  
                <div className="table-box">
                    <Table 
                        rowKey={'id'} 
                        columns={columns} 
                        rowSelection={rowSelection}
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