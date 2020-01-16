/*
 * @Author: duchengdong
 * @Date: 2020-01-16 16:12:27
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-16 17:37:08
 * @Description: 
 */
import React,{Component} from 'react'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import Select from 'antd/es/select'
import Table from 'antd/es/table';
import Operations from '../../../components/Operations'
import '../../../styles/sys/roleM/rolemanagecreate.scss'

const { Option } = Select;
const { TextArea } = Input;


const data = [{
    id: 1,
    no: 1,
    menuCode: 'D1001',
    menuName: '元数据模板',
    menuType: '控制台菜单',
    menuIcon: '',
},{
    id: 2,
    no: 2,
    menuCode: 'D1002',
    menuName: '元数据模板',
    menuType: '控制台菜单',
    menuIcon: '',
}]

class RoleManageCreate extends Component {
    constructor(props){
        super(props)
        this.columns = [
            {
                title: '序号',
                dataIndex: 'no',
                key: 'no',
            },
            {
                title: '菜单编码',
                dataIndex: 'menuCode',
                key: 'menuCode',
            },
            {
                title: '菜单名称',
                dataIndex: 'menuName',
                key: 'menuName',
            },
            {
                title: '菜单类型',
                dataIndex: 'menuType',
                key: 'menuType',
            },
            {
                title: '图标',
                dataIndex: 'menuIcon',
                key: 'menuIcon',
            }
        ]
        this.operateData = [{
            btnType:'primary',
            txt: '确定',
            onclick: this.handleSubmit
        }, {
            type: 'route',
            txt: '取消',
            style: {
                margin: '0 16px 0 0'
            },
            path:'/sys/rolemanage'
        }]
    } 
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    } 
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
        };
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
          };
        return (
            <div className='rolem-create'>
                <div className="title">编辑角色</div>
                <Form {...formItemLayout}>
                    <Form.Item label='角色编码'>
                        {getFieldDecorator('roleCode', {
                            rules: [{ required: true, message: '角色角色编码不能为空！', whitespace: true }],
                        })(<Input placeholder={'请输入角色编码'}/>)}
                    </Form.Item>
                    <Form.Item label="角色名称">
                        {getFieldDecorator('roleName', {
                            rules: [{
                                required: true,
                                message: '角色名称不能为空！',
                            }],
                        })(<Input placeholder={'请输入角色名称'}/>)}
                    </Form.Item>
                    <Form.Item label="角色类型">
                        {getFieldDecorator('roleType', {
                            rules: [{required: true, message: '请选择角色类型！' }],
                        })(<Select placeholder={'请选择角色类型'}>
                            <Option value="1">内置</Option>
                            <Option value="2">自定义</Option>
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="描述">
                        {getFieldDecorator('remark', {
                            rules: [{message: '超过字数限制！' }],
                        })(<TextArea placeholder={'请输入描述'} rows={4} />)}
                        
                    </Form.Item>
                </Form>
                <div className="title">菜单权限列表</div>
                <div className="tableBox">
                    <Table 
                        rowKey={'id'} 
                        columns={this.columns} 
                        rowSelection={rowSelection}
                        dataSource={data}
                        pagination={false}
                    />
                </div>
                <Operations 
                    sourceData={this.operateData}
                /> 
            </div>
        )
    }
}

const RoleManageCreateForm = Form.create({ name: 'create' })(RoleManageCreate);
export default RoleManageCreateForm