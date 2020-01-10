/*
 * @Author: duchengdong
 * @Date: 2020-01-10 10:50:50
 * @LastEditors  : duchengdong
 * @LastEditTime : 2020-01-10 13:58:14
 * @Description: 
 */
import React,{Component} from 'react'
import Popover from 'antd/es/popover';
import '../styles/components/tableOperateBox.scss';

export default class TableOperateBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
        }
    }
    hide = () => {
        this.setState({
          visible: false,
        });
    };
    
    handleVisibleChange = visible => {
        this.setState({ visible });
    };
    render(){
        const {visible} = this.state
        const {
            data
        } = this.props
        return (
            data.length>2?
            <div className='p-operateBox'>
                <div className='p-editBtn' onClick={data[0].clickHandle}>{data[0].txt}</div>
                <Popover
                    content={
                        data.slice(1).map((v,i) => {
                            return <div key={i} className='p-more-edit' onClick={()=>{
                                this.hide()
                                v.clickHandle()
                            }}>{v.txt}</div>
                        })
                    }
                    overlayClassName={"p-operateBox-overlay"}
                    placement="bottom"
                    trigger="click"
                    visible={visible}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <div className='p-editBtn'>更多操作</div>
                </Popover>
            </div>
            :<div className='p-operateBox'>
                {
                    data.map((v,i)=>(
                        <div key={i} className='p-editBtn' onClick={v.clickHandle}>{v.txt}</div>
                    ))
                }
            </div>
            
        )
    }
}