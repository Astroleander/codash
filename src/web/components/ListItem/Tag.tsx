import React from 'react';
import styles from './tag.module.less';
import cls from 'classnames';

console.log(styles)

export default function Tag({ text } : { text: string }) {
  
  return (<span className={cls(styles.tag, styles['tag-' + text])}>
    {text.replace(/_/g, ' ')}
  </span>);
}