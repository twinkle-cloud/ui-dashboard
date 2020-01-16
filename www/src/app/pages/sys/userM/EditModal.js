/*
 * @Author: duchengdong
 * @Date: 2020-01-07 14:34:55
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-12 17:26:59
 * @Description: 
 */
import React,{Component} from 'react'
import Modal from 'antd/es/modal'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import Select from 'antd/es/select'
import Row from 'antd/es/row'
import Col from 'antd/es/col'

const { Option } = Select;
const { TextArea } = Input;


const phoneExp = /^1\d{10}$/;
const emailExp = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 17 },
    },
};

const halfFormItemLayout1 = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
};

const halfFormItemLayout2 = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
};

class EditModal extends Component {
    handleOk=(e)=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
        this.props.onOk()
    }
    handleCancel=()=>{
        this.props.onCancel()
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        const {visible,onOk,onCancel} = this.props
        return (
            <Modal
                className='tenantM-modal'
                width='800px'
                title="编辑用户"
                visible={visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form {...formItemLayout}>
                    <Form.Item label="租户名称">
                        <span>这是一个租户名称</span>
                    </Form.Item>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="用户名" {...halfFormItemLayout1}>
                                {getFieldDecorator('username', {
                                    rules: [{required: true, message: '请输入用户名！' }],
                                })(<Input placeholder={'请输入用户名'}/>)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="性别" {...halfFormItemLayout2}>
                                {getFieldDecorator('sex', {
                                    rules: [{required: true, message: '请选择性别！' }],
                                })(<Select placeholder={'请选择性别'}>
                                    <Option value="1">男</Option>
                                    <Option value="2">女</Option>
                                </Select>)}
                            </Form.Item>
                        </Col>   
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="姓名" {...halfFormItemLayout1}>
                                {getFieldDecorator('name', {
                                    rules: [{
                                        message: '姓名不能为空！',
                                    }],
                                })(<Input placeholder={'请输入姓名'}/>)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="联系手机" {...halfFormItemLayout2}>
                                {getFieldDecorator('phone', {
                                    rules: [{
                                        pattern: phoneExp,
                                        message: '手机号格式错误！',
                                    }],
                                })(<Input placeholder={'请输入手机号码'}/>)}
                            </Form.Item>
                        </Col>
                   </Row>
                   <Row>
                        <Col span={12}>
                            <Form.Item label="所属部门" {...halfFormItemLayout1}>
                                {getFieldDecorator('belongs', {
                                    rules: [{required: true, message: '请选择部门！' }],
                                })(<Select placeholder={'请选择部门'}>
                                    <Option value="1">部门1</Option>
                                    <Option value="2">部门2</Option>
                                </Select>)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="角色" {...halfFormItemLayout2}>
                                {getFieldDecorator('role', {
                                    rules: [{required: true, message: '请选择角色！' }],
                                })(<Select placeholder={'请选择角色'}>
                                    <Option value="1">管理员角色</Option>
                                    <Option value="2">普通用户</Option>
                                </Select>)}
                            </Form.Item>
                        </Col>   
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="职位" {...halfFormItemLayout1}>
                                {getFieldDecorator('post', {
                                    rules: [{required: true, message: '请选择职位！' }],
                                })(<Select placeholder={'请选择职位'}>
                                    <Option value="1">高级</Option>
                                    <Option value="2">初级</Option>
                                </Select>)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Email" {...halfFormItemLayout2}>
                                {getFieldDecorator('email', {
                                    rules: [{
                                        pattern: emailExp, 
                                        message: '邮箱名格式错误！' }],
                                })(<Input placeholder={'请输入邮箱名'}/>)}
                            </Form.Item>
                        </Col>   
                    </Row>
                    <Form.Item label="描述">
                        {getFieldDecorator('desc', {
                            rules: [{
                                max: 200,
                                message: '超过字数限制！' 
                            }],
                        })(<TextArea placeholder={'请输入备注'} rows={4} />)}
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

const EditModalForm = Form.create({ name: 'create' })(EditModal);
export default EditModalForm