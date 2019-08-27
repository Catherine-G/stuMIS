import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

const GlobalFooter = ({ className, links, copyright, mixalabel }) => {
  const clsString = classNames(styles.globalFooter, className);
  let keyid = 0;
  return (
    <footer className={clsString}>
      {links && (
        <div className={styles.links}>
          {links.map(link => (
            <a
              key={link.key}
              title={link.key}
              target={link.blankTarget ? '_blank' : '_self'}
              href={link.href}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
      {copyright && <div className={styles.copyright}>{copyright}</div>}

      {mixalabel && (
        <div>
          {mixalabel.map(params => {
            if(params.type == 'link'){
              return (
              <span className={styles.links} key={"div_"+ keyid++}>
                <a
              key={params.key}
              title={params.title}
              target={params.blankTarget ? '_blank' : '_self'}
              href={params.href}
              // onClick={params.onClick}
            >
              {params.title}&nbsp;&nbsp;
            </a>
            </span>)
            }else{
              return (
              <span className={styles.label} key={"div_"+ keyid++}>
              <label  key={params.key}>{params.title}&nbsp;&nbsp;</label>
               </span>
              )
            }
          })}
        </div>
      )}
      
    </footer>
  );
};

export default GlobalFooter;
