import React, { useState, useEffect } from 'react';
import { RESULT_TYPE, INPUT_TYPE } from '../pojo/Solution';
import FloatButtonGroup from '@/web/components/FloatButtonGroup/index';

import './styles/layout_solution.less';

const Solution = ({solution}) => (
  <section className='solution'>
    <h1>Solution</h1>
    <pre>{String(solution)}</pre>
  </section>
)

const Result = ({result, params, configs}) => {
  if (configs?.outputType === RESULT_TYPE.POINTER) {
    /** 默认第一个输入是数组, 这个地方好像确实没什么办法 */
    result = params[0].slice(0, result);
  }
  return <section className='result'>
    <h1>Result</h1>
    {JSON.stringify(result)}
  </section>
}

const Inputs = ({params, configs}) => {
  return <section className='inputs'>
    <h1>Inputs</h1>
    <div className='content'>
      {
        params.map((each, idx) => (
          <div key={idx}>
            <h2>arguments[{idx}]</h2>
            <pre key={idx}>{JSON.stringify(each)}</pre>
          </div>
        ))
      }
    </div>
  </section>
}

const CodeBoard = ({ path }) => {

  const [solution, setSolution] = useState(null);
  const [result, setResult] = useState(null);
  const [params, setParams] = useState(null);
  const [originParams, setOriginParams] = useState(null);
  const [configs, setConfigs] = useState(null);

  useEffect(() => {
    import('../code' + path).then(m => {
      const { solution, params, configs } = m.default;
      /** 注意, setState 本身对接受 function 有特殊的处理 */
      setSolution(() => solution);
      setParams(params);
      setOriginParams(JSON.parse(JSON.stringify(params)));
      setResult(solution(...params));
      setConfigs(configs);
    }).catch(e => {
      if (e.message.startsWith('Cannot find module')) {
        window.location.hash = '';
      } else {
        console.error(e)
      }
    });
  }, []);

  if (!solution && !result || !params ) return null;
  const inputs = configs?.inputType === INPUT_TYPE.MUTABLE ? originParams : params;
  return (<>
    <Solution solution={solution}></Solution>
    <Inputs params={inputs} configs={configs}></Inputs>
    <Result params={inputs} configs={configs} result={result} ></Result>
  </>);
}

/**
 * @param {string }route hash 当前指向的路径, 相较于 location.hash, 这里已经预处理删去了 "#" 号 
 */
export default ({ route }) => {
  return (<>
    <CodeBoard path={route}/>
    <FloatButtonGroup />
  </>)
}