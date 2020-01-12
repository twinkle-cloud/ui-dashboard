/*
 * @Author: duchengdong
 * @Date: 2020-01-07 11:34:12
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-10 14:16:07
 * @Description: 
 */
import React,{Component} from 'react'
import FilterOptions from '../../components/FilterOptions'
import EditModal from './tenantM/EditModal'
import Table from 'antd/es/table';
import Modal from 'antd/es/modal';
import Icon from 'antd/es/icon';
import TableOperateBox from '../../components/TableOperateBox'
import '../../styles/sys/tenantmanage.scss';

const { confirm } = Modal;

const filterData = [{
    type: 1,
    label: '租户名称：'
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

const data = [{
    id:1,
    no:1,
    code:'T00001',
    name:'上海XXXX',
    logo:'http://suo.im/6cHqIf',
    size: '0~50人',
    type:'Premium',
    contacter:'dcdong',
    status:'已启用',
    phone:'18812341234',
    industry:'制造',
},{
    id:2,
    no:2,
    code:'T00002',
    name:'上海XXXX',
    logo:'http://suo.im/6cHqIf',
    size: '0~50人',
    type:'Premium',
    contacter:'dcdong',
    status:'已启用',
    phone:'18812341234',
    industry:'制造',
}]

export default class TenantManage extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false
        }
        this.columns = [{
            title: '序号',
            dataIndex: 'no',
        },{
            title: '租户编码',
            dataIndex: 'code',
        },{
            title: '名称',
            dataIndex: 'name',
        },{
            title: 'Logo',
            dataIndex: 'logo',
            render: (value,record)=>{
                return <img className='logo' src={value}/>
            }
        },{
            title: '规模',
            dataIndex: 'size',
        },{
            title: '类型',
            dataIndex: 'type',
        },{
            title: '联系人',
            dataIndex: 'contacter'
        },{
            title: '状态',
            dataIndex: 'status'
        },{
            title: '手机号',
            dataIndex: 'phone'
        },{
            title: '行业',
            dataIndex: 'industry'
        },{
            title: '操作',
            dataIndex: 'operate',
            render: (value,record)=>{
                const TableOperateData = [{
                    txt:'编辑',
                    clickHandle: ()=>{this.showModal()}
                },{
                    txt:'删除',
                    clickHandle: ()=>{this.onDelete()}
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
    // 分页切换
    onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }
    render(){
        const {visible} = this.state
        return (
            <div className='tenantM-container'>
                <FilterOptions 
                    sourceData={filterData}
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