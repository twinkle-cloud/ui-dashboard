/*
 * @Author: duchengdong
 * @Date: 2020-01-03 17:27:23
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-06 18:21:44
 * @Description: https://github.com/yiminghe/async-validator // 校验规则参考
 */
import React,{Component} from 'react'
import Form from 'antd/es/form'
import Input from 'antd/es/input'
import Tooltip from 'antd/es/tooltip'
import Icon from 'antd/es/icon'
import Select from 'antd/es/select'
import Button from 'antd/es/button'
import Operations from '../../../components/Operations'
import '../../../styles/sys/dataM/datamanagecreate.scss'

const { Option } = Select;
const { TextArea } = Input;

class DataManageCreate extends Component {
    constructor(props){
        super(props)
        this. operateData = [{
            btnType:'primary',
            txt: '确定',
            onclick: this.handleSubmit
        }, {
            type: 'route',
            txt: '取消',
            style: {
                margin: '0 16px 0 0'
            },
            path:'/sys/datamanage'
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
        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
        };
        return (
            <div className="datam-create">
                <div className="title">数据字典编辑</div>
                <Form {...formItemLayout}>
                    <Form.Item
                        label={
                            <span>
                            类型名称&nbsp;
                            <Tooltip title="帮助文字?">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                            </span>
                        }
                        >
                        {getFieldDecorator('typeName', {
                            rules: [{ required: true, message: '类型名称不能为空！', whitespace: true }],
                        })(<Input placeholder={'请输入类型名称'}/>)}
                    </Form.Item>
                    <Form.Item label="类名">
                        {getFieldDecorator('typeClass', {
                            rules: [{
                                required: true,
                                message: '类名不能为空！',
                            }],
                        })(<Input placeholder={'请输入类名'}/>)}
                    </Form.Item>
                    <Form.Item label="状态">
                        {getFieldDecorator('status', {
                            rules: [{required: true, message: '请选择状态！' }],
                        })(<Select placeholder={'请选择状态'}>
                            <Option value="1">已启用</Option>
                            <Option value="2">未启用</Option>
                            <Option value="3">暂停</Option>
                        </Select>)}
                    </Form.Item>
                    <Form.Item label="备注">
                        {getFieldDecorator('remark', {
                            rules: [{message: '超过字数限制！' }],
                        })(<TextArea placeholder={'请输入备注'} rows={4} />)}
                        
                    </Form.Item>
                </Form>
                <Operations 
                    sourceData={this.operateData}
                /> 
            </div>
        )
    }
}

const DataManageCreateForm = Form.create({ name: 'create' })(DataManageCreate);
export default DataManageCreateForm