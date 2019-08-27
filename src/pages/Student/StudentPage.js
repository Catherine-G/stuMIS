import React,{PureComponent,Fragment} from 'react';
import {connect} from 'dva';
import { formatMessage,FormattedMessage } from 'umi/locale';
import moment from 'moment';
import {Table,Row,Col,Card,Form,Input,Icon,Button,Modal,Tabs,message,Popconfirm,Transfer,Badge,Pagination,Select,InputNumber,DatePicker,Skeleton,Divider, Checkbox,Radio} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import { getOptions, getDesc }from '@/utils/createFormItem';
import Ellipsis from '@/components/Ellipsis';
import styles from './index.less';

const FormItem = Form.Item;
const { Description } = DescriptionList;
// 画表
const CreateTable = (props) => {
    const {studentList,sortedInfo,loading,handleTableChange,handleDetailModalVisible,onEdit} = props;

    const columns = [
        {
            title: "编号",
            dataIndex: 'num',
        },
        {
            title: "姓名",
            dataIndex: 'name',
        },
        {
            title: "性别",
            dataIndex: 'sex',
        },
        {
            title: "学号",
            dataIndex: 'snumber',
        },
        {
            title: "专业",
            dataIndex: 'professional',
        },
        {
            title: "操作",
            render: (text,record) =>{
                return (
                    <div>
                    <a onClick={()=>handleDetailModalVisible(true,record)}>详情</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a onClick={()=>onEdit(record)}>编辑</a>
                    </div>
                );
               
            }
        }
    ];
    return (
        <Table
         loading={loading.effects['student/getStuList']}
         rowKey={record=>record.key}
         dataSource={studentList}
         columns={columns}
         pagination={false}
         onChange={handleTableChange}
         />
    );
}
// 详情modal
const Detail = (props) =>{
    const {detail,loading,detailModalVisible,handleDetailModalVisible} = props;
    const hideModal=()=>{
        handleDetailModalVisible();
    };
    return (
        <Modal
        visible={detailModalVisible}
        title="学生详细信息"
        width="700px"
        onCancel={hideModal}
        footer={[<Button key="back" onClick={hideModal}>关闭</Button>,]}
        >
            <Skeleton active loading={loading.effects['student/getDetail']}>
                <DescriptionList size="large" col="1">
                    <Description term="学号">{detail.snumber}</Description>
                    <Description term="姓名">{detail.name}</Description>
                    <Description term="性别">{detail.sex}</Description>
                    <Description term="年龄">{detail.age}</Description>
                    <Description term="专业">{detail.professional}</Description>
                </DescriptionList>
            </Skeleton>
        </Modal>
    );
}
// edit Modal
const FormModal = Form.create()(props =>{
    const {editModalVisible,modalformValues,form,formTitle,handleAdd,handleEdit,handleEditModalVisible} = props;

    const okHandle = () =>{
        form.validateFields((err,fieldsValue) =>{
            if(err) return;
            form.resetFields();
            if(formTitle === '新增学生信息'){
                handleAdd(fieldsValue);
            }else{
                handleEdit(fieldsValue);
            }
        });
    }

    return (
        <Modal
        title={formTitle}
        visible={editModalVisible}
        onOk={okHandle}
        onCancel={()=>handleEditModalVisible()}
        >
            <FormItem labelCol={{span:5}} wrapperCol={{ span: 10 }} label="学号">
                {form.getFieldDecorator('snumber',{
                    rules: [{ required: true,message: 'Please input snumber' }],
                    initialValue: modalformValues.snumber,
                })(<Input placeholder="请输入学号" />)}
            </FormItem>
            <FormItem label="姓名" labelCol={{span: 5}} wrapperCol={{span: 10}}>{form.getFieldDecorator('name',{initialValue: modalformValues.name})(<Input placeholder="请输入姓名" />)}</FormItem>
            <FormItem label="性别" labelCol={{span: 5}} wrapperCol={{span: 10}}>{form.getFieldDecorator('sex',{initialValue: modalformValues.sex})(<Input placeholder="请输入性别，男/女" />)}</FormItem>
            <FormItem label="年龄" labelCol={{span: 5}} wrapperCol={{span: 10}}>{form.getFieldDecorator('age',{initialValue: modalformValues.age})(<Input placeholder="请输入年龄" />)}</FormItem>
            <FormItem label="专业" labelCol={{span: 5}} wrapperCol={{span: 10}}>{form.getFieldDecorator('professional',{initialValue: modalformValues.professional})(<Input placeholder="请输入专业" />)}</FormItem>
        </Modal>
    );
});
@connect(({student,loading}) => ({
    student,
    loading,
}))
@Form.create()
export default class StuList extends PureComponent{
    state = {
        pages: {
            currentPage: 1,
            page: 0,
            size: 20,
        },
        formValues: {},
        sortarr: null,
        sortedInfo: {},
        detailModalVisible: false,
        editModalVisible: false,
        modalformValues:{
            snumber:'',
            sex: '',
            age: '',
            name: '',
            professional: '',
        },
        formTitle: null,
    };
    componentDidMount(){
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
            type: 'student/getStuList',
            payload: params,
        });
    }
    // 搜索框
    renderForm(){
        const {
            form: { getFieldDecorator },
        } = this.props;

        return (
            <Form onSubmit={this.handleSearch} layout="inline">
                <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
                    <Col md={6} sm={24}>
                        <FormItem label="学号">
                            {getFieldDecorator('snumber')(<Input placeholder="学号" />)}
                        </FormItem>
                    </Col>
                    <Col md={6} sm={24}>
                        <FormItem label="姓名">
                            {getFieldDecorator('name')(<Input placeholder="姓名" />)}
                        </FormItem>
                    </Col>
                    <Col md={4} sm={12}>
                        <span className={styles.submitButtons}>
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
                        </span>
                    </Col>
                </Row>
            </Form>
        );
    }
    // 搜索框-条件查询
    handleSearch = (e) =>{
        e.preventDefault();
        const { dispatch, form } = this.props;
        const { sortarr, pages } = this.state;
        form.validateFields((err, fieldsValue) => {
            if(err) return;
            const pageValues = {
                currentPage: 1,
                page: 0,
                size: pages.size,
            };
            const values = {
                snumber: fieldsValue.snumber,
                name: fieldsValue.name,
            };
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
                type: 'student/getStuList',
                payload: params,
            });
        });
    }
    // 搜索栏-重置查询条件
    handleFormReset = () =>{
        const { form, dispatch } = this.props;
        const { pages, sortarr } = this.state;
        form.resetFields();
        const pageValues = {
            currentPage: 1,
            page: 0,
            size: pages.size,
        };
        this.setState({
            formValues: {},
            pages: pageValues,
        })
        const params = {
            ...sortarr,
            startRow: 0,
            pageSize: pages.size,
        };
        dispatch({
            type: 'student/getStuList',
            payload: params,
        });
    }
    // 分页
    handlePageChange = (page, pagesize) => {//page 第几页；pagesize 每页条目数
        const { dispatch } = this.props;
        const { formValues, sortarr } = this.state;
        const pageValues = {
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
            type: 'student/getStuList',
            payload: params,
        });
    }

    // 排序查询
    handleTableChange = (pagination, filters, sorter) =>{
        const {dispatch} = this.props;
        const { formValues, sortedInfo, pages } = this.state;//查询条件
        let sortobj = {};
        let values = {};
        if(typeof(sorter)!="undefined" && typeof(sorter.field)!="undefined" && typeof(sorter.order)!="undefined"){
            values.columnName = sorter.field;
            values.orderType = "asc";
            if(sorter.order.ndexOf("desc") != -1){
                values.orderType = "desc";
            }
            sortobj = {'orderList': [values]};
        }
        
        const pageValues = {
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
            type: 'student/getStuList',
            payload: params,
        });
    }

    // modal 查看详情
    handleDetailModalVisible = (flag,record) =>{
        if(typeof(record)!=='' && typeof(record)!=='undefined'){
            this.props.dispatch({
                type: 'student/getDetail',
                payload: {id:record.id}
            });
        }
        this.setState({
            detailModalVisible: !!flag,
        });
    }
    // modal 编辑信息
    handleEditModalVisible = (flag) =>{
        // if(typeof(record)!==''&& typeof(record)!=='undefined'){
        //     this.props.dispatch({
        //         type: 'student/getDetail',
        //         payload: {id:record.id}
        //     })
        // }
        this.setState({
            editModalVisible: !!flag,
        });
    }
    onEdit = (record) =>{
        this.handleEditModalVisible(true);

        this.setState({
            modalformValues: record,
            formTitle: '编辑学生信息',
        })
    }
    onAdd = () =>{
        this.handleEditModalVisible(true);
        this.setState({
            modalformValues: '',
            formTitle: '新增学生信息',
        })
    }
    handleAdd = (fields) =>{
        const {dispatch} = this.props;
        const params = {
            snumber: fields.snumber,
            name: fields.name,
            sex: fields.sex,
            age: fields.age,
            professional: fields.professional,
        };
        dispatch({
           type: 'student/addStuinfo',
           payload: params,
           callback: () =>{
               this.handleEditModalVisible(false);
               this.handleGetTableList();
           }
        });
    }
    handleEdit = (fields) =>{
        const {dispatch} = this.props;
        const params = {
            snumber: fields.snumber,
            name: fields.name,
            sex: fields.sex,
            age: fields.age,
            professional: fields.professional,
        };
        dispatch({
          type: 'student/editStuinfo',
          payload: params,
          callback: ()=>{
            this.handleEditModalVisible(false);
            this.handleGetTableList();
            this.setState({
                modalformValues: '',
            });
          },
        });
    }

    render(){
        const {student:{studentList,totalCount,detail},dispatch,loading} = this.props;
        const {pages,sortedInfo,detailModalVisible,editModalVisible,modalformValues,formTitle} = this.state;
        const dataTable = {
            sortedInfo,loading,studentList,
            handleTableChange: this.handleTableChange,
            handleDetailModalVisible: this.handleDetailModalVisible,
            onEdit: this.onEdit,
        };
        const detailModalMethods = {
            detail,loading,detailModalVisible,
            handleDetailModalVisible: this.handleDetailModalVisible,
        };
        const editModalMethods = {
            editModalVisible,modalformValues,formTitle,
            handleAdd: this.handleAdd,handleEdit: this.handleEdit,
            handleEditModalVisible:this.handleEditModalVisible
        };
        return (
            <PageHeaderWrapper title="学生信息表">
                <Card style={{marginBottom: 30}} bordered={false}>
                    <div className={styles.tableListForm}>
                        {this.renderForm()}
                    </div>
                </Card>
                <Card bordered={false}  title="学生信息列表" extra={<Button type="primary" onClick={() => this.onAdd()}>新增学生</Button>}>
                    <div className={styles.tableList}>
                        <CreateTable {...dataTable} />
                        <div className={styles.pages}>
                            <Pagination onChange={this.handlePageChange} onShowSizeChange={this.handlePageChange} defaultPageSize={pages.size} currentPage={pages.currentPage||1} total={totalCount} showSizeChanger showQuickJumper hideOnSinglePage={false} />
                        </div>
                    </div>
                </Card>
                {detailModalVisible && <Detail {...detailModalMethods} />}
                {editModalVisible && <FormModal {...editModalMethods} />}
            </PageHeaderWrapper>
        );
    }
}