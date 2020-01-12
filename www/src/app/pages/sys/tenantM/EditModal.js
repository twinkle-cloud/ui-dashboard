/*
 * @Author: duchengdong
 * @Date: 2020-01-07 14:34:55
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-10 14:15:30
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
                title="编辑租户"
                visible={visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form {...formItemLayout}>
                    <Form.Item label="编码">
                        {getFieldDecorator('code', {
                            rules: [{
                                required: true,
                                message: '编码不能为空！',
                            }],
                        })(<Input placeholder={'请输入编码'}/>)}
                    </Form.Item>
                    <Form.Item label="租户名称">
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true,
                                message: '租户名称不能为空！',
                            }],
                        })(<Input placeholder={'请输入租户名称'}/>)}
                    </Form.Item>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="规模" {...halfFormItemLayout1}>
                                {getFieldDecorator('size', {
                                    rules: [{required: true, message: '请选择规模！' }],
                                })(<Select placeholder={'请选择规模'}>
                                    <Option value="1">0~50人</Option>
                                    <Option value="2">50~500人</Option>
                                    <Option value="3">500人以上</Option>
                                </Select>)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="类型" {...halfFormItemLayout2}>
                                {getFieldDecorator('size', {
                                    rules: [{required: true, message: '请选择类型！' }],
                                })(<Select placeholder={'请选择类型'}>
                                    <Option value="1">Premium</Option>
                                    <Option value="2">Advanced</Option>
                                </Select>)}
                            </Form.Item>
                        </Col>   
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="联系人" {...halfFormItemLayout1}>
                                {getFieldDecorator('contacter', {
                                    rules: [{
                                        message: '联系人不能为空！',
                                    }],
                                })(<Input placeholder={'请输入联系人'}/>)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="电话" {...halfFormItemLayout2}>
                                {getFieldDecorator('phone', {
                                    rules: [{
                                        pattern: phoneExp,
                                        message: '手机号格式错误！',
                                    }],
                                })(<Input placeholder={'请输入手机号码'}/>)}
                            </Form.Item>
                        </Col>
                   </Row>
                    <Form.Item label="所属行业">
                        {getFieldDecorator('industry', {
                            rules: [{required: true, message: '请选择所属行业！' }],
                        })(<Select placeholder={'请选择所属行业'}>
                            <Option value="1">制造</Option>
                            <Option value="2">金融</Option>
                            <Option value="3">互联网</Option>
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="备注">
                        {getFieldDecorator('remark', {
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