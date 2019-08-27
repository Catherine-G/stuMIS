import React, { Component, PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import moment from 'moment';
import Link from 'umi/link';
import { Button,Card,Table,Pagination,Modal,Skeleton, Input,Form,Col,Row} from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import { verifyCode }from '@/utils/createFormItem';

import Result from '@/components/Result';
// import Login from '@/components/Login/LoginItem';
import styles from './index.less';

const getAllPageSize = { 'pageSize':10000,'state':1 };
const { Description } = DescriptionList;
const FormItem = Form.Item;
const { TextArea } = Input;


const CreateModal = (props) =>{
    const {handleModalVisible,loading,visible} = props;
    const hideModal = () => {
        handleModalVisible();
    };
    return (
        <Modal
            visible={visible}
            width="700px"
            title={formatMessage({id:'complaint.result'})}
            onOk={hideModal}
            onCancel={hideModal}
            footer={[<Button key="back" onClick={hideModal}><FormattedMessage id="tablelist.modal.ok" /></Button>,
         ]}
        >
            <FormattedMessage id="complaint.info"></FormattedMessage>
        </Modal>
    );
}

@connect(({complaint,loading}) => ({
    complaint,
    loading
}))
@Form.create()
export default class Complaint extends Component {
    state={
        visible: false,
        verifyCode: verifyCode+"?"+(new Date()).valueOf(),
    };

    // 1-100字符
    checkTitle(rule,value,callback){
        const title = value;
        // var regName =/.{100}/;
        if (title){
            if (/\s/.test(name)) {
                callback(formatMessage({ id: 'account.auth.blankSpace.message' }));
                return;
            }
            else if(title.length > 100){
                callback(formatMessage({id:'complaint.checktitle.count'}));
                return;
            }
            callback();
        }else{
            callback("");
            return;
        }
    }
    checkContent(rule,value,callback){
        const content = value;
        var regName = /[ \\`\\~\\@\#\\$\\^\\+\\*\\&\\\\\\/\\|\\<\\>"]/;
        if(content){
            if(content.length > 400){
                callback(formatMessage({id:'complaint.checkcontent.count400'}));
                return;
            }else if(content.length < 5){
                callback(formatMessage({id:'complaint.checkcontent.count'}));
                return;
            }
            callback();
        }else{
            callback("");
            return;
        }
    }
    checkPhone(rule,value,callback){
        const phone = value;// 11位 也可以是固定电话 所以需要约束是数字
        var regName = /^1\d{10}$/;
        if(phone){
            if(!regName.test(phone)){
                callback(formatMessage({id:'complaint.checkphone.count'}));
                return;
            }
            callback();
        }else{
            callback("");
            return;
        }

    }
    onGetCaptchaImg = () =>{
        this.setState({
          verifyCode: verifyCode+"?"+(new Date()).valueOf(),
        });
      }

    

    renderForm = () => {
        const {
            form:{getFieldDecorator},loading,dispatch
        } = this.props;
        const {verifyCode} = this.state;
        return (
            <div className={styles.main}>
                <h3><FormattedMessage id="complaint.page"></FormattedMessage></h3>
            <Form onSubmit={this.handleSubmit} layout="vertical" >
            <Row>
             <Col >
                <FormItem label={formatMessage({id:'complaint.title'})}>
                    {getFieldDecorator('title',{
                        rules: [
                            {required: true,message: formatMessage({id:'complaint.rule.title'})},
                            {validator: this.checkTitle}
                        ],
                        validateTrigger:'onBlur',
                    })(<Input size="large" placeholder={formatMessage({id:'complaint.placeholder.title'})} />)}
                </FormItem>
             </Col>
            </Row>
                <Row><Col>
                <FormItem label={formatMessage({id:'complaint.content'})}>
                {getFieldDecorator('content',{
                        rules: [
                            {required: true,
                            message: formatMessage({id:'complaint.rule.content'})},
                                {validator: this.checkContent}
                        ],
                        validateTrigger:'onBlur',
                    })(<TextArea rows={6} placeholder={formatMessage({id:'complaint.placeholder.content'})} />)}
                </FormItem></Col></Row>
                <Row><Col>
                <FormItem label={formatMessage({id:'complaint.phone'})}>
                {getFieldDecorator('telephone',{
                        rules: [
                            {required: true,message: formatMessage({id:'complaint.rule.phone'})},
                            {validator: this.checkPhone},                            
                        ],
                        validateTrigger:'onBlur',
                    })(<Input size="large" placeholder={formatMessage({id:'complaint.placeholder.phone'})} />)}
                </FormItem></Col></Row>
                <FormItem>
                    <Row gutter={8}>
                        <Col span={16}>
                        {getFieldDecorator('graphicVerificationCode', {
                        rules: [
                            {
                            required: true,
                            message: formatMessage({ id: 'validation.verification-code.required' }),
                            },
                            {
                            whitespace: true,
                            message: formatMessage({ id: 'validation.whitespace.required' }),
                            },
                        ]
                        })(
                        <Input size="large" placeholder={formatMessage({ id: 'form.verification-code.placeholder' })} />
                        )}
                        </Col>
                        <Col span={8}>
                        <img style={{'width': '100%', 'height': '39px', 'verticalAlign':'top'}} src={verifyCode} onClick={this.onGetCaptchaImg}/>
                        </Col>
                    </Row>
                </FormItem>
                
                <Row>
                <FormItem>
                    <Button type="primary" htmlType="submit" loading={loading.effects['complaint/submitComplaintInfo']}>
                        <FormattedMessage id="complaint.ok"></FormattedMessage>
                    </Button>
                    <Link className={styles.login} to="/user/login">
                        <FormattedMessage id="complaint.to.login" />
                    </Link>
                </FormItem></Row>
            </Form>
            </div>
        );
    }
    handleSubmit = (e) =>{
        e.preventDefault();      
        const {  dispatch, form } = this.props;
        form.validateFields((err,fieldsValue) =>{
            if(err) return;
            const values = {
                ...fieldsValue,
            };
            dispatch({
                type: 'complaint/submitComplaintInfo',
                payload: values,
                callback: this.handleSubmitResult,
              });
        });
    }

    handleSubmitResult = (code) => {
        if(code === 200){
            this.handleModalVisible(true);
        }else{
            this.onGetCaptchaImg();
        }
      }
      handleModalVisible=(flag)=>{
          const { form, dispatch } = this.props;
          this.setState({
            visible: !!flag,
          });
          form.resetFields();
      }

    render() {
        const {form:{getFieldDecorator},loading,dispatch} = this.props;
        const {visible} = this.state;
        const modalMethods = {
            loading,visible,
            handleModalVisible:this.handleModalVisible,
        };
        return (
            // <PageHeaderWrapper title={formatMessage({id:'complaint.page'})}>
            <div>
                
                    <div>{this.renderForm()}</div>
                
                {visible && <CreateModal {...modalMethods} />}
                </div>
            // </PageHeaderWrapper>
        );
    }
}