import React from 'react';
import cls from 'classnames';
import './button.less';

export const CodeButton = ({ className }) => <div
  id='code'
  onClick={()=>{}}
  className={cls(className, "fb-button")}
>
{"</>"}
</div>

export const HomeButton = ({ className }) => <div
  id='home'
  onClick={()=> location.hash = ''}
  className={cls(className, "fb-button")}
>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
    <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
      L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
      c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
      l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
      L284.286,256.002z"/>
  </svg>
</div>;

export const ForwardButton = ({ className }) => <div
    id='forward'
    onClick={(e) => history.go(1)}
    className={cls(className, "fb-button")}
  >
    {">"}
  </div>

export const BackButton = ({ className }) => <div
    id='back'
    onClick={(e) => history.go(-1)}
    className={cls(className, 'fb-button')}
  >
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 512 512">
        <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
          L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
          c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
          l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
          L284.286,256.002z"/>
    </svg>
  </div>

export const ReloadButton = ({ className }) => <div
  id='reload'
  onClick={(e) => location.reload()}
  className={cls(className, 'fb-button')}
  >
    <svg xmlns="http://www.w3.org/2000/svg" 
        viewBox={"0 0 24 24"} fillRule="evenodd" clipRule="evenodd">
        <path d="M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z"/>
    </svg>
  </div>
