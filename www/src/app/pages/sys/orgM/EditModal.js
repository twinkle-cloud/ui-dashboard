/*
 * @Author: duchengdong
 * @Date: 2020-01-07 14:34:55
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-10 14:25:28
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
            this.props.onOk()
          }else{
              
          }
        });
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
                title="编辑部门"
                visible={visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <Form {...formItemLayout}>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="部门名称" {...halfFormItemLayout1}>
                                {getFieldDecorator('name', {
                                    rules: [{
                                        required: true,
                                        message: '部门名称不能为空！',
                                    }],
                                })(<Input placeholder={'请输入部门名称'}/>)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="编码" {...halfFormItemLayout2}>
                                {getFieldDecorator('code', {
                                    rules: [{
                                        required: true,
                                        message: '编码不能为空！',
                                    }],
                                })(<Input placeholder={'请输入编码'}/>)}
                            </Form.Item>
                        </Col>
                   </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item label="上级部门" {...halfFormItemLayout1}>
                                {getFieldDecorator('parent', {
                                    rules: [{
                                        message: '请选择上级部门！' 
                                    }],
                                })(<Select placeholder={'请选择上级部门'}>
                                    <Option value="1">技术部门1</Option>
                                    <Option value="2">技术部门2</Option>
                                    <Option value="3">技术部门3</Option>
                                </Select>)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="级别" {...halfFormItemLayout2}>
                                {getFieldDecorator('level', {
                                    rules: [{ message: '请选择级别！' }],
                                })(<Select placeholder={'请选择级别'}>
                                    <Option value="1">1级</Option>
                                    <Option value="2">2级</Option>
                                </Select>)}
                            </Form.Item>
                        </Col>   
                    </Row>
                    <Form.Item label="描述">
                        {getFieldDecorator('desc', {
                            rules: [{
                                max: 200,
                                message: '超过字数限制！' 
                            }],
                        })(<TextArea placeholder={'请输入'} rows={4} />)}
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

const EditModalForm = Form.create({ name: 'create' })(EditModal);
export default EditModalForm