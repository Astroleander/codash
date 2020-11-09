import React from 'react';
import { HomeButton, ForwardButton, BackButton, CodeButton, ReloadButton } from './buttons'
import cls from 'classnames';
import './index.less';

const Buttons = {
  forward:  ForwardButton,
  back:     HomeButton,
  code:     CodeButton,
  reload:   ReloadButton,
}

const FBG = ({
  components = ['back', 'reload',],
  style = 'react-style',
  position = ['bottom', 'right']
} = {}) => {
  return (
    <section className={cls('fb-group',...position)}>
      {
        Array.isArray(components) && components.map(buttonKey => {
          const Button = Buttons[buttonKey];
          if (Button === undefined) throw 'unmatched buttonkey : ' + buttonKey
          return <Button key={buttonKey} className={cls(style)}></Button>
        })
      }
  </section>
  )
}
export default FBG;