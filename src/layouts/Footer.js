import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const date=new Date;
const year=date.getFullYear(); 

const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      // links={[
      //   {
      //     key: 'Pro 首页',
      //     title: 'Pro 首页',
      //     href: 'https://pro.ant.design',
      //     blankTarget: true,
      //   },
      //   {
      //     key: 'github',
      //     title: <Icon type="github" />,
      //     href: 'https://github.com/ant-design/ant-design-pro',
      //     blankTarget: true,
      //   },
      //   {
      //     key: 'Ant Design',
      //     title: 'Ant Design',
      //     href: 'https://ant.design',
      //     blankTarget: true,
      //   },
      // ]}
      mixalabel = {[
        {
          type: 'label',
          title: '备案号XXXXXX',
          key: '备案号XXXXXX',
        },
        {
        type: 'link',
            key: '提交建议',
            title: '提交建议',
            href: '/user/complaintpage',
            blankTarget: false,
          },
          
        ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> {year} ❤
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
