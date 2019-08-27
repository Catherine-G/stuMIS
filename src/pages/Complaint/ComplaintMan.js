import React,{PureComponent,Fragment} from 'react';
import {connect} from 'dva';
import { formatMessage,FormattedMessage } from 'umi/locale';
import moment from 'moment';
import {Table,Row,Col,Card,Form,Input,Icon,Button,Modal,Tabs,message,Popconfirm,Transfer,Badge,Pagination,Select,InputNumber,DatePicker,Skeleton,Divider, Checkbox,Radio} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import Convert from 'ansi-to-html';
import { getOptions, getDesc }from '@/utils/createFormItem';
import Ellipsis from '@/components/Ellipsis';
import styles from './index.less';
import TextArea from 'antd/lib/input/TextArea';
import RadioGroup from 'antd/lib/radio/group';

const getAllPageSize = { 'pageSize':10000,'state':1 };
const convert = new Convert();
const FormItem = Form.Item;
const Option = Select.Option;
const TabPane = Tabs.TabPane;
const { Description } = DescriptionList;
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',');

// 画表
const CreatTable = (props) =>{
    const {complaintList,dictionaryList,sortedInfo,loading,handleTableChange,handleDetailModalVisible,detail,handleOpinionModalVisible} = props;
    
    const columns = [
        {
            title: <FormattedMessage id="tablelist.col.left" />,
            dataIndex: 'num',
            // fixed: 'left',
        },
        {
            title: <FormattedMessage id="complaint.col.title" />,
            dataIndex: 'title',
            render(val){
                return <Ellipsis length={15} tooltip>{val}</Ellipsis>
            }
        },
        {
            title: <FormattedMessage id="complaint.col.phone" />,
            dataIndex: 'telephone',
        },
        {
            title: <FormattedMessage id="tablelist.col.time" />,
            dataIndex: 'createTime',
            render(val) {
                if( !val || val == "0"){
                  return '';
                }else{
                  const time=parseInt(val);
                  return moment(time).format("YYYY-MM-DD HH:mm:ss");
                }
              },
        },
        {
            title: <FormattedMessage id="tablelist.col.state" />,
            dataIndex: 'status',
            render(val){
                return getDesc(dictionaryList.complaint_status,val);
            }
        },
        {
            title: <FormattedMessage id="tablelist.col.operate" />,
            render: (text,record) =>{
                if(record.status === 3){
                return (
                    <div>
                         <a onClick={()=>handleDetailModalVisible(true,record)}><FormattedMessage id="tablelist.col.detail" /></a>
                    </div>
                )
                }else{
                    return (
                        <div>
                            <a onClick={()=>handleDetailModalVisible(true,record)}><FormattedMessage id="tablelist.col.detail" /></a>
                            &nbsp;&nbsp;&nbsp;
                            <a onClick={()=>handleOpinionModalVisible(true,record)}><FormattedMessage id="tablelist.col.handle" /></a>                        
                        </div>
                    )
                }
            }
        },
    ];

    return (
        <Table
          loading={loading.effects['complaint/getComplaintList']}
          rowKey={record=>record.key}
          dataSource={complaintList}
          columns={columns}
          pagination={false}
          onChange={handleTableChange}
         />
      );
};
// 详情
const Detail = (props) =>{
    const {detail,loading,detailModalVisible,handleDetailModalVisible,dictionaryList} = props;
    const okHandle = () =>{
        form.validateFields((err,fieldsValue)=>{
          if(err) return;
          handleDetailModalVisible(fieldsValue);
        });
      };
      const hideModal=()=>{
        handleDetailModalVisible();
      };
      const convertTime = (val) =>{
          if( !val || val == "0"){
            return '';
          }else{
            const time=parseInt(val);
            return moment(time).format("YYYY-MM-DD HH:mm:ss");
          }
      }

      let nullstr = formatMessage({id:'complaint.detail.opinion.null'});
      const handleNull = (str) =>{
          if(str.search("null") !== -1){
              str = str.replace("null",nullstr);
              str = handleNull(str);        
          }
          return str;
      }
      const handleDash = (str) =>{
          if(str.search(">") !== -1){
              let index = str.indexOf(">");
              if(index !== -1 && ((index+1) !== str.length)){
                let first = str.substring(0,index+1);
                let second = "-".concat(str.substring(index+1));
                let third = handleDash(second); 
                str = first.concat(third);
                return str;
              }else{
                  return str;
              }
              
          }else{
              return str;
          }
      } 
        // 处理中状态的opinion
      var input = detail.opinion; //'aa<br/>bb<br/>ccccc<br/>' ;//
      if(input === undefined){
          let inputarr = {text:[]};
          var inputinfo = inputarr.text;
      }else{
          var inputinfo = input;
          inputinfo = inputinfo.toString();
          inputinfo = '-'.concat(inputinfo);
          // 处理字符串，在每个<br />后面加*  把null替换为无       
          inputinfo = handleDash(inputinfo);
          inputinfo = handleNull(inputinfo);
       
      }
        const logHtml = () => {
            // fd</br>sfsdf////nfdsjklf\n
            let html = convert.toHtml(inputinfo);
            // const htmlArr1=html.split(',');
            // html=htmlArr1.join('<br/>');
            return (html);
        }
      if(detail.status === 1){
          return (
            <Modal
            visible={detailModalVisible}
            title={[formatMessage({id:'tablelist.col.detail'})]}
            width="700px"
            onOk={okHandle}
            onCancel={hideModal}
            footer={[<Button key="back" onClick={hideModal}><FormattedMessage id="tablelist.modal.ok" /></Button>,
         ]}
        >
            <Skeleton active loading={loading.effects['complaint/getDetail']}>
            <DescriptionList size="large" col="1">
                <Description term={formatMessage({id: 'complaint.col.title'})}>{detail.title}</Description>
                <Description term={formatMessage({id: 'complaint.col.content'})}><Ellipsis length={70} tooltip>{detail.content}</Ellipsis></Description>
                <Description term={formatMessage({id: 'complaint.col.phone'})}>{detail.telephone}</Description>
                <Description term={formatMessage({id: 'tablelist.col.time'})}>{convertTime(detail.createTime)}</Description>                               
                <Description term={formatMessage({id: 'tablelist.col.state'})}>{getDesc(dictionaryList.complaint_status,detail.status)}</Description>                
            </DescriptionList> 
            </Skeleton>          
        </Modal>
          );
      }else {
            return (
                <Modal
                visible={detailModalVisible}
                title={[formatMessage({id:'tablelist.col.detail'})]}
                width="700px"
                onOk={okHandle}
                onCancel={hideModal}
                footer={[<Button key="back" onClick={hideModal}><FormattedMessage id="tablelist.modal.ok" /></Button>,
            ]}
            >
                <Skeleton active loading={loading.effects['complaint/getDetail']}>
                <DescriptionList size="large" col="1">
                    <Description term={formatMessage({id: 'complaint.col.title'})}>{detail.title}</Description>
                    <Description term={formatMessage({id: 'complaint.col.content'})}><Ellipsis length={70} tooltip>{detail.content}</Ellipsis></Description>
                    <Description term={formatMessage({id: 'complaint.col.phone'})}>{detail.telephone}</Description>
                    <Description term={formatMessage({id: 'tablelist.col.time'})}>{convertTime(detail.createTime)}</Description>                               
                    <Description term={formatMessage({id: 'tablelist.col.state'})}>{getDesc(dictionaryList.complaint_status,detail.status)}</Description>                
                    <Description term={formatMessage({id: 'complaint.handle.opinion'})}>{detail.opinion}</Description>                

                </DescriptionList> 
                <p dangerouslySetInnerHTML={{ __html: logHtml() }} style = {{width: "100%",height: "100px","overflowY":"scroll"}} />
                </Skeleton>
            </Modal>
            );         
      }
}

// 处理modal 未处理和处理中都展示checkbox 处理中还要展示以前的opinion
const OpinionHandle = Form.create()((props) =>{
    const {form,submitOpinion,detail,loading,opinionModalVisible,handleOpinionModalVisible,dictionaryList} = props;
  
    const okHandle = () =>{
        form.validateFields((err,fieldsValue)=>{
          if(err) return;
          handleOpinionModalVisible(fieldsValue);
        });
      };
      const hideModal=()=>{
        handleOpinionModalVisible();
      };
      const convertTime = (val) =>{
          if( !val || val == "0"){
            return '';
          }else{
            const time=parseInt(val);
            return moment(time).format("YYYY-MM-DD HH:mm:ss");
          }
      }
      const handleSubmit = () =>{
          form.validateFields((err,fieldsValue) => {
              if(err) return;
              const params = fieldsValue;
              params.id = detail.id;
              params.title = detail.title;
              params.status = fieldsValue.status;
              params.opinion = detail.opinion;
              params.newOpinion = fieldsValue.newOpinion.trim(),
              submitOpinion(params);
          });
      }
      const handleNewSubmit = () =>{
        form.validateFields((err,fieldsValue) => {
            if(err) return;
            const params = fieldsValue;
            params.id = detail.id;
            params.title = detail.title;
            params.status = fieldsValue.status;
            params.opinion = detail.opinion;
            params.newOpinion = fieldsValue.newOpinion.trim(),
            submitOpinion(params);
        });
      }

      let nullstr = formatMessage({id:'complaint.detail.opinion.null'});
      const handleNull = (str) =>{
          if(str.search("null") !== -1){
              str = str.replace("null",nullstr);
              str = handleNull(str);        
          }
          return str;
      }
      const handleDash = (str) =>{
          if(str.search(">") !== -1){
              let index = str.indexOf(">");
              if(index !== -1 && ((index+1) !== str.length)){
                let first = str.substring(0,index+1);
                let second = "-".concat(str.substring(index+1));
                let third = handleDash(second); 
                str = first.concat(third);
                return str;
              }else{
                  return str;
              }
              
          }else{
              return str;
          }
      } 

      var input = detail.opinion; //'aa<br/>bb<br/>ccccc<br/>' ;//
      if(input === undefined){
          let inputarr = {text:[]};
          var inputinfo = inputarr.text;
      }else{
          var inputinfo = input;
          inputinfo = inputinfo.toString();
          inputinfo = '* '.concat(inputinfo);
          inputinfo = handleDash(inputinfo);
          inputinfo = handleNull(inputinfo);
      }
      const logHtml = () => {
        // fd</br>sfsdf////nfdsjklf\n
        let html = convert.toHtml(inputinfo);
        // const htmlArr1=html.split(',');
        // html=htmlArr1.join('<br/>');
        return (html);
    }
    const checkContent = (rule,value,callback) =>{
        const content = value.trim();
        var regName = /[`~@#$^+*&/|<>]/;
        if(content){
            // if (/\s/.test(content)) {
            //     callback(formatMessage({id:'complaint.check.content.blank'}));
            //     return;
            // }
            if(content.length > 300){
                callback(formatMessage({id:'complaint.checkcontent.count300'}));
                return;
            }else if(regName.test(content)){
                callback(formatMessage({id:'form.validate.content.specialchar'}));
                return;
            }
            callback();
        }else{
            callback(formatMessage({id:'complaint.handle.opinion.validate300'}));
            return;
        }
    }
      if(detail.status === 1){// 未处理
        return (
            <Modal
                visible={opinionModalVisible}
                title={[formatMessage({id:'complaint.form.opinion'})]}
                width="700px"
                onOk={okHandle}
                onCancel={hideModal}
                footer={[
                <Button key="back" onClick={hideModal}><FormattedMessage id="complaint.opinion.close" /></Button>,
                <Button key="submit" type="primary" onClick={handleSubmit}><FormattedMessage id="complaint.opinion.submit" /></Button>,
                    ]}
            >
                <Card >
                <Skeleton active loading={loading.effects['complaint/getDetail']}>
                <DescriptionList size="large" col="1" title={[formatMessage({id:'tablelist.col.detail'})]}>
                    <Description term={formatMessage({id: 'complaint.col.title'})}><Ellipsis length={70} tooltip>{detail.title}</Ellipsis></Description>
                    <Description term={formatMessage({id: 'complaint.col.content'})}><Ellipsis length={70} tooltip>{detail.content}</Ellipsis></Description>
                    <Description term={formatMessage({id: 'complaint.col.phone'})}>{detail.telephone}</Description>
                    <Description term={formatMessage({id: 'tablelist.col.time'})}>{convertTime(detail.createTime)}</Description>                               
                    <Description term={formatMessage({id: 'tablelist.col.state'})}>{getDesc(dictionaryList.complaint_status,detail.status)}</Description>                                
                </DescriptionList> 
                </Skeleton>
                </Card>
                <Card>
                    <FormItem label={formatMessage({id:'complaint.handle.opinion'})}>
                    {form.getFieldDecorator('newOpinion',{
                        rules:[
                            {required:true,message:formatMessage({id:'complaint.opinion.null.validate'})},
                            {validator: checkContent}
                        ],
                        validateTrigger:'onBlur',
                    })(
                    <TextArea rows={6} placeholder={[
                        formatMessage({id: 'complaint.handle.opinion.validate300'})
                        ]} />)}
                    </FormItem>
                    <FormItem label={formatMessage({id:'complaint.form.handlestatus'})}>
                        {form.getFieldDecorator('status',{
                            rules:[
                                {required:true,message:formatMessage({id:'complaint.form.handlestatus.validate'})}
                            ]
                        })(
                            <RadioGroup>
                                <Radio value={2}><FormattedMessage id="complaint.form.radio.on"></FormattedMessage></Radio>
                                <Radio value={3}><FormattedMessage id="complaint.form.radio.off"></FormattedMessage></Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                </Card>
            </Modal>
        );
      }else{ // 处理中   
        return (
            <Modal
                visible={opinionModalVisible}
                title={[formatMessage({id:'complaint.form.opinion'})]}
                width="700px"
                onOk={okHandle}
                onCancel={hideModal}
                footer={[
                <Button key="back" onClick={hideModal}><FormattedMessage id="complaint.opinion.close" /></Button>,
                <Button key="submit" type="primary" onClick={handleNewSubmit}><FormattedMessage id="complaint.opinion.submit" /></Button>,
                    ]}
            >
                <Card >
                <Skeleton active loading={loading.effects['complaint/getDetail']}>
                <DescriptionList size="large" col="1" title={[formatMessage({id:'tablelist.col.detail'})]}>
                    <Description term={formatMessage({id: 'complaint.col.title'})}><Ellipsis length={70} tooltip>{detail.title}</Ellipsis></Description>
                    <Description term={formatMessage({id: 'complaint.col.content'})}><Ellipsis length={70} tooltip>{detail.content}</Ellipsis></Description>
                    <Description term={formatMessage({id: 'complaint.col.phone'})}>{detail.telephone}</Description>
                    <Description term={formatMessage({id: 'tablelist.col.time'})}>{convertTime(detail.createTime)}</Description>                               
                    <Description term={formatMessage({id: 'tablelist.col.state'})}>{getDesc(dictionaryList.complaint_status,detail.status)}</Description>                                    
                    <Description term={formatMessage({id: 'complaint.handle.opinion'})}></Description>                                    
                </DescriptionList> 
                <p dangerouslySetInnerHTML={{ __html: logHtml() }} style = {{width: "100%",height: "100px","overflowY":"scroll"}} />
                </Skeleton>
                </Card>
                <Card>
                    <FormItem label={formatMessage({id:'complaint.handle.opinion'})}>
                    {form.getFieldDecorator('newOpinion',{
                        rules:[
                            {required:true,message:formatMessage({id:'complaint.opinion.null.validate'})},
                            {validator: checkContent}
                        ],
                        validateTrigger:'onBlur',
                    })(
                    <TextArea rows={6} placeholder={[
                        formatMessage({id: 'complaint.handle.opinion.validate300'})
                        ]} />)}
                    </FormItem>
                    <FormItem label={formatMessage({id:'complaint.form.handlestatus'})}>
                        {form.getFieldDecorator('status',{
                            rules:[
                                {required:true,message:formatMessage({id:'complaint.form.handlestatus.validate'})}
                            ]
                        })(
                            <RadioGroup>
                                <Radio value={2}><FormattedMessage id="complaint.form.radio.on"></FormattedMessage></Radio>
                                <Radio value={3}><FormattedMessage id="complaint.form.radio.off"></FormattedMessage></Radio>
                            </RadioGroup>
                        )}
                    </FormItem>
                </Card>
            </Modal>
        );       
      }
})

@connect(({complaint,loading}) => ({
    complaint,
    loading,
}))
@Form.create()
export default class TableList extends PureComponent{
    state = {
        detailModalVisible: false,
        opinionModalVisible: false,
        pages:{
            currentPage: 1,
            page: 0,
            size: 20,
        },
        formValues: {},
        sortarr: null,
        sortedInfo: {},
        dictionaryList:{
            complaint_status: [],
        },
    };
    componentDidMount(){
        this.getDictionary();
        this.handleGetTableList();
    }
    handleGetTableList = () =>{
        const {dispatch} = this.props;
        const {pages,sortarr,formValues} = this.state;
        const params = {
            ...formValues,
            ...sortarr,
            startRow: pages.page*pages.size,
            pageSize: pages.size
        };
        dispatch({
            type: 'complaint/getComplaintList',
            payload: params,
          });
    }

    getDictionary = () =>{
        const {dispatch} = this.props;
        const {dictionaryList} = this.state;
        for(let item in dictionaryList){
            let params = {"type":item};
            dispatch({
                type: 'dictionary/getDictionary',
                payload: params,
                callback: this.handleGetDictionaryCallback
            });
        }
    }
    handleGetDictionaryCallback = (obj) => {
        const { dictionaryList } = this.state;
        let dictionarys = dictionaryList;
        let dictionaryArr=[];
        for(let item in dictionarys){
          if( item == obj.type ){
            dictionarys[item]=obj.list;
          }
        }
        this.setState({
          dictionaryList: dictionarys,
        });
    }

    
    // 搜索框

    renderForm(){
        const { expandForm } = this.state;
        return expandForm ? this.renderAdvanceForm() : this.renderSimpleForm();
      }
    
    toggleForm = () =>{
    const { expandForm } = this.state;
    this.setState({
        expandForm: !expandForm,
    });
    }
    
    renderSimpleForm(){
        const {
          form: { getFieldDecorator },
        } = this.props;
        const {dictionaryList} = this.state;
        
        return (
          <Form onSubmit={this.handleSearch} layout="inline">
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={6} sm={24}>
                <FormItem label={formatMessage({id:'complaint.searchform.status'})}>
                {getFieldDecorator('status')(<Select placeholder={[
                  formatMessage({id:'complaint.searchform.status'})
                ]} 
                >
                  {getOptions(dictionaryList.complaint_status)}
                </Select>)}
                </FormItem>
              </Col>
              
            <Col md={6} sm={24}>
                  <FormItem label={formatMessage({id:'complaint.phone'})}>
                      {getFieldDecorator('telephone')(<Input placeholder={formatMessage({id:'complaint.col.phone'})} />)}
                  </FormItem>
              </Col>
    
              <Col md={6} sm={12}>
                <span className={styles.submitButtons}>
                  <Button type="primary" htmlType="submit">
                    <FormattedMessage id="complaint.searchform.btn.search"></FormattedMessage>
                  </Button>
                  <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                    <FormattedMessage id="complaint.searchform.btn.reset"></FormattedMessage>
                  </Button>
                  <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                    <FormattedMessage id="complaint.searchform.btn.toggle.down"></FormattedMessage>
                    <Icon type="down" />
                  </a>
                </span>
              </Col>
    
              </Row>
              </Form>);
      }

    renderAdvanceForm(){
        const {
            form: { getFieldDecorator },
          } = this.props;
          const {dictionaryList} = this.state;
          return (
            <Form onSubmit={this.handleSearch} layout="inline">
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
            <Col md={6} sm={24}>
                <FormItem label={formatMessage({id:'complaint.searchform.status'})}>
                {getFieldDecorator('status')(<Select placeholder={[
                  formatMessage({id:'complaint.searchform.status'})
                ]} 
                >
                  {getOptions(dictionaryList.complaint_status)}
                </Select>)}
                </FormItem>
              </Col>
              
            <Col md={6} sm={24}>
                  <FormItem label={formatMessage({id:'complaint.phone'})}>
                      {getFieldDecorator('telephone')(<Input placeholder={formatMessage({id:'complaint.col.phone'})} />)}
                  </FormItem>
              </Col>
    
              </Row>

                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                <Col md={6} sm={24}>
                  <FormItem label={formatMessage({id:'account.history.startTime'})}>
                    {getFieldDecorator('startTime',{
                        rules: [{
                            validator: (rule,value,callback)=>{
                                const endTime = this.props.form.getFieldValue('endTime');
                                var end = moment(endTime).format("YYYY-MM-DD");
                                var start = moment(value).format("YYYY-MM-DD");
                                if(end && (end < start)){
                                    callback(<FormattedMessage id="todoitemorg.searchForm.startTimeValidate"/>);
                                }else{
                                    callback();
                                }
                            }
                        }]
                    })(<DatePicker style={{ width: '100%' }} onChange={this.onStartTimeChange} placeholder={formatMessage({id: 'account.history.startTime'})} />)}                 
                  </FormItem>                 
               </Col>
                {/* <label>—</label> */}
                <Col md={6} sm={24}>
                  <FormItem label={formatMessage({id:'account.history.endTime'})}>
                    {getFieldDecorator('endTime',{
                        rules: [{
                            validator: (rule,value,callback)=>{
                                const startTime = this.props.form.getFieldValue('startTime');
                                var start = moment(startTime).format("YYYY-MM-DD");
                                var end = moment(value).format("YYYY-MM-DD");
                                if(start && (start > end)){
                                    callback(<FormattedMessage id="todoitemorg.searchForm.endTimeValidate" />);
                                }else{
                                    callback();
                                }
                            }
                        }]
                    })(<DatePicker style={{ width: '100%' }} onChange={this.onEndTimeChange} placeholder={formatMessage({id: 'account.history.endTime'})} />)}
                  </FormItem>
                </Col>
                
                <Col md={4} sm={12}>
                  <span className={styles.submitButtons}>
                    <Button type="primary" htmlType="submit" >
                        <FormattedMessage id="complaint.searchform.btn.search"></FormattedMessage>                      
                    </Button>
                    <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                        <FormattedMessage id="complaint.searchform.btn.reset"></FormattedMessage>                      
                    </Button>
                    <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                      <FormattedMessage id="complaint.searchform.btn.toggle.up"></FormattedMessage>
                      <Icon type="up" />
                    </a>                   
                  </span>
                </Col>
              </Row>
            </Form>
          );
    }
        onStartTimeChange = (value)=>{
            if(value){
                const {form} =this.props;
                const endTime = form.getFieldValue('endTime');
                var end = moment(endTime).format("YYYY-MM-DD");
                setTimeout(()=>{
                    form.validateFieldsAndScroll(['end'],{force:true});
                },0)
            }
        }
        onEndTimeChange =(value)=>{
            if(value){
                const {form} =this.props;
                const startTime = form.getFieldValue('startTime');
                var start = moment(startTime).format("YYYY-MM-DD");
                setTimeout(()=>{
                    form.validateFieldsAndScroll(['start',{force:true}]);
                },0)
                
            }
        }
     //搜索框-重置查询条件
        handleFormReset = () => {
            const { form, dispatch } = this.props;
            const { pages , sortarr} = this.state;
            form.resetFields();
            const pageValues={
            currentPage: 1,
            page: 0,
            size: pages.size,
            };
            this.setState({
            formValues: {},
            pages: pageValues,
            });
            const params = {
            ...sortarr,
            startRow: 0,
            pageSize: pages.size,
            };
            dispatch({
            type: 'complaint/getComplaintList',
            payload: params,
            });
        }
        //搜索框-条件查询
        handleSearch = (e) => {
            e.preventDefault();

            const { dispatch, form } = this.props;
            const { sortarr , pages } = this.state;
            form.validateFields((err, fieldsValue) => {
            if (err) return;
            const pageValues={
                currentPage: 1,
                page: 0,
                size: pages.size,
            };
            var start = moment(fieldsValue.startTime).format("YYYY-MM-DD");
            var end = moment(fieldsValue.endTime).format("YYYY-MM-DD");
            if(start === end){
                start = start + " 00:00:00";
                end = end + " 23:59:59";
            }
            const values = {
                status:fieldsValue.status,
                telephone: fieldsValue.telephone,
                // startTime: Date.parse(start),
                // endTime: Date.parse(end),
                //updatedAt: fieldsValue.updatedAt && fieldsValue.updatedAt.valueOf(),
            };
            // const startTime = form.getFieldValue('startTime');
            this.setState({
                formValues: values,
                pages: pageValues,
            });
            const params = {
                ...values,
                ...sortarr,
                startRow: 0,
                pageSize: pages.size,
            };
            dispatch({
                type: 'complaint/getComplaintList',
                payload: params,
            });
            });
        }

        //分页
        handlePageChange = (page,  pagesize) => {//page 第几页；pagesize 每页条目数
            const { dispatch } = this.props;
            const { formValues , sortarr} = this.state;
            const pageValues={
            currentPage: page,
            page: (page-1),
            size: pagesize,
            };
    
            this.setState({
            pages: pageValues,
            });
    
            const params = {
            ...formValues,
            ...sortarr,
            startRow: (page-1)*pagesize,
            pageSize: pagesize,
            };
            
            dispatch({
            type: 'complaint/getComplaintList',
            payload: params,
            });
        }
    
        //排序查询
        handleTableChange = (pagination, filters, sorter) => {
            const { dispatch } = this.props;
            const { formValues, sortedInfo, pages } = this.state; //查询条件
            let sortobj = {};
            let values={};
            if(typeof(sorter)!="undefined" && typeof(sorter.field)!="undefined" && typeof(sorter.order)!="undefined"){
            values.columnName = sorter.field;
            values.orderType = "asc";
            if(sorter.order.indexOf("desc")!=-1){
                values.orderType = "desc";
            }
            sortobj = {'orderList':[values]} ;
            }
            const pageValues={
            currentPage: 1,
            page: 0,
            size: pages.size,
            };
            this.setState({
            sortedInfo: sorter,
            sortarr: sortobj,
            pages: pageValues,
            });
            const params = {
            ...formValues,
            ...sortobj,
            startRow: 0,
            pageSize: pages.size,
            };
            dispatch({
            type: 'complaint/getComplaintList',
            payload: params,
            });
        }
        // modal 查看详情
        handleDetailModalVisible =(flag,record)=>{
            if(typeof(record)!=''&& typeof(record)!='undefined')
            {
                this.props.dispatch({
                    type: 'complaint/getDetail',
                    payload: {id:record.id}
                });
            }
            this.setState({
                detailModalVisible: !!flag,
            });
            // this.handleTableChange();
        }
        handleOpinionModalVisible = (flag,record) =>{
            if(typeof(record)!='' && typeof(record)!='undefined'){
                this.props.dispatch({
                    type: 'complaint/getDetail',
                    payload: {id:record.id}
                });
            }
            this.setState({
                opinionModalVisible: !!flag,
            });
        }
        submitOpinion = (fieldsValue) =>{
            this.props.dispatch({
                type: 'complaint/putOpinion',
                payload:{
                    ...fieldsValue,
                },
                callback: this.handleOpinionCallback,
            });
        }
        handleOpinionCallback = ()=>{
            this.handleOpinionModalVisible(false);
            this.handleTableChange();
        }

    render() {
        const {complaint:{complaintList,totalCount,detail},dispatch,loading} = this.props;
        const {detailModalVisible,pages,sortedInfo,dictionaryList,opinionModalVisible} = this.state;
        const dataTable =  {dictionaryList,complaintList,sortedInfo,loading,handleTableChange:this.handleTableChange,handleDetailModalVisible:this.handleDetailModalVisible,detail,
            handleOpinionModalVisible: this.handleOpinionModalVisible
        };

        const detailModalMethods = {dictionaryList,detail,loading,detailModalVisible,handleDetailModalVisible:this.handleDetailModalVisible};
        const opinionModalMethods = {opinionModalVisible,loading,dictionaryList,detail,handleOpinionModalVisible:this.handleOpinionModalVisible,submitOpinion:this.submitOpinion}

        return (
            <PageHeaderWrapper
                title = {formatMessage({id:'complaint.manage.pageHeader'})}
            >
                <Card style={{marginBottom: 30}} bordered={false}>
                    <div className={styles.tableListForm}>
                        {this.renderForm()}
                    </div>
                </Card>
                <Card bordered={false} >
                    <div className={styles.tableList}>
                        <CreatTable {...dataTable} />
                        <div className={styles.pages}>
                            <Pagination onChange={this.handlePageChange} onShowSizeChange={this.handlePageChange} defaultPageSize={pages.size} current={pages.currentPage|| 1} total={totalCount} showSizeChanger showQuickJumper hideOnSinglePage={false}/>
                        </div>
                    </div>
                </Card>
                {detailModalVisible && <Detail {...detailModalMethods}/>}
                {opinionModalVisible && <OpinionHandle {...opinionModalMethods}/>}
            </PageHeaderWrapper>
        );
    }
}