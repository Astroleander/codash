import React, { useState, useEffect } from 'react';

const CodeBoard = ({ path }) => {
  const [solution, setSolution] = useState(null);
  const [result, setResult] = useState(null);
  const [params, setParams] = useState(null);

  useEffect(() => {
    import('../code' + path).then(m => {
      const { solution, params } = m.default;
      /** 注意, setState 本身对接受 function 有特殊的处理 */
      setSolution(() => solution);
      setParams(params);
      setResult(solution(...params));
    });
  }, []);

  if (!solution && !result || !params ) return null;
  return (<>
    <pre>{String(solution)}</pre>
    <div>Inputs: {params.map(each => String(each))}</div>
    <div>Result: {String(result)}</div>
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