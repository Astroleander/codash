import React, { useState, useEffect } from 'react';
import { RESULT_TYPE } from '../pojo/Solution';

const Result = ({result, params, configs}) => {
  if (configs?.outputType === RESULT_TYPE.POINTER) {
    /** 默认第一个输入是数组, 这个地方好像确实没什么办法 */
    result = params[0].slice(0, result);
  }
  return <div>
    {String(result)}
  </div>
}

const CodeBoard = ({ path }) => {
  const [solution, setSolution] = useState(null);
  const [result, setResult] = useState(null);
  const [params, setParams] = useState(null);
  const [configs, setConfigs] = useState(null);

  useEffect(() => {
    import('../code' + path).then(m => {
      const { solution, params, configs } = m.default;
      /** 注意, setState 本身对接受 function 有特殊的处理 */
      setSolution(() => solution);
      setParams(params);
      setResult(solution(...params));
      setConfigs(configs);
    });
  }, []);

  if (!solution && !result || !params ) return null;
  return (<>
    <pre>{String(solution)}</pre>
    <div>Inputs: {params.map(each => String(each))}</div>
    <Result result={result} params={params} configs={configs}></Result>
  </>);
}

/**
 * @param {string }route hash 当前指向的路径, 相较于 location.hash, 这里已经预处理删去了 "#" 号 
 */
export default ({ route }) => {
  return (<>
    <CodeBoard path={route}/>
  </>)
}