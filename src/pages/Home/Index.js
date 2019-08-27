import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './index.less';

@connect(({ loading }) => ({
  loading
}))
export default class Monitor extends PureComponent {
  componentDidMount() {
  }
  render() {
  	return (
  		<div className={styles.exception}>
	      <div className={styles.content} style={{textAlign:'center'}}>
	        <h1>欢迎使用管理信息系统</h1>
	        <div className={styles.desc}>简洁 高效</div>
	      </div>
	    </div>
  	);
  }
}
