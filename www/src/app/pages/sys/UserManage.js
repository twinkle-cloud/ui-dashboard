/*
 * @Author: duchengdong
 * @Date: 2019-12-24 16:24:57
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-15 15:18:37
 * @Description: 
 */
import React,{Component} from 'react'
import FilterOptions from '../../components/FilterOptions'
import Operations from '../../components/Operations'
import EditModal from './userM/EditModal'
import Tree from 'antd/es/tree';
import TableOperateBox from '../../components/TableOperateBox'
import Table from 'antd/es/table';
import Modal from 'antd/es/modal';
import Icon from 'antd/es/icon';

import '../../styles/sys/usermanage.scss'
const { TreeNode } = Tree;
const { confirm } = Modal;

const filterData = [{
    type: 1,
    label: '用户名：'
},{
    type: 1,
    label: '姓名：'
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
        margin: '0 0 16px 0'
    }
}]


const treeData = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0' },
            { title: '0-0-0-1', key: '0-0-0-1' },
            { title: '0-0-0-2', key: '0-0-0-2' },
          ],
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0' },
            { title: '0-0-1-1', key: '0-0-1-1' },
            { title: '0-0-1-2', key: '0-0-1-2' },
          ],
        },
        {
          title: '0-0-2',
          key: '0-0-2',
        },
      ],
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0' },
        { title: '0-1-0-1', key: '0-1-0-1' },
        { title: '0-1-0-2', key: '0-1-0-2' },
      ],
    },
    {
      title: '0-2',
      key: '0-2',
    },
  ];

  const data = [{
    id:1,
    no:1,
    username:'lalala',
    name:'上海XXXX',
    department:'XX部门',
    job:'Premium',
    role:'dcdong',
    status:'已启用',
    phone:'18812341234',
},{
    id:2,
    no:2,
    username:'lalalalala',
    name:'上海XXXX',
    department:'XX部门',
    job:'Premium',
    role:'dcdong',
    status:'已启用',
    phone:'18812341234'
}]
export default class UserManage extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            selectedKeys: [],
        }
        this.operateData = [{
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
            onclick: ()=>{
                this.showModal()
            }
        }]
        this.columns = [{
                title: '序号',
                dataIndex: 'no',
            },{
                title: '用户名',
                dataIndex: 'username',
            },{
                title: '姓名',
                dataIndex: 'name',
            },{
                title: '部门',
                dataIndex: 'department'
            },{
                title: '职位',
                dataIndex: 'job',
            },{
                title: '角色',
                dataIndex: 'role',
            },{
                title: '状态',
                dataIndex: 'status'
            },{
                title: '手机号',
                dataIndex: 'phone'
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
                    },{
                        txt:'停用',
                        clickHandle: ()=>{this.onDelete()}
                    }]
                    return <TableOperateBox data={TableOperateData}/>
                }
            },
        ];
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

    // 树render
    onSelect = (selectedKeys, info) => {
        console.log('onSelect', info);
        this.setState({ selectedKeys });
    };

    renderTreeNodes = data =>
        data.map(item => {
        if (item.children) {
            return (
                <TreeNode title={item.title} key={item.key} dataRef={item}>
                    {this.renderTreeNodes(item.children)}
                </TreeNode>
            );
        }
        return <TreeNode key={item.key} {...item} />;
    });
     // 分页切换
     onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    }
    render(){
        const {visible,selectedKeys} = this.state
        return (
            <div className='userM-container'>
                <FilterOptions 
                    sourceData={filterData}
                />
                <Operations 
                    sourceData={this.operateData}
                />
                <div className="table-box">
                    <div className="left-tree">
                        <Tree
                            showLine={true}
                            showIcon={true}
                            onSelect={this.onSelect}
                            selectedKeys={selectedKeys}
                        >
                            {this.renderTreeNodes(treeData)}
                        </Tree>
                    </div>
                    <div className="right-table">
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
                <EditModal 
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                />
            </div>
        )
    }
}