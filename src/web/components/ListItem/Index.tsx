import React from 'react';
import styles from './index.module.less';
import cls from 'classnames';

const Number = ({ letter }: {letter: string}) => {
  return <span className={styles.letter}>{letter}</span>
}

const Index = ({ text, level }: {text: string, level: string}) => {
  let letters = text;
  if (text.length < 4) {
    letters = ' '.repeat(4 - text.length).concat(text);
  }
  if (level !== 'easy' && level !== 'hard' && level !== 'medium') {
    level = 'unknown'
  }
  return (
  <span className={cls(styles['index'], styles[level])}>
    {Array.from(letters).map((each, idx) => <Number key={idx} letter={each}/>)}
  </span>
  );
}

export default Index;