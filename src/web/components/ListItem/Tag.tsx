import React from 'react';
import styles from './tag.module.less';

export default function Tag({ text } : { text: string }) {
  return (<span className={styles.tag}>
    {text}
  </span>);
}