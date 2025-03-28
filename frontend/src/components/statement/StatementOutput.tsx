import React from 'react';
import {SessionStatement} from '../../client/types';
import {CodeBlock} from 'react-code-blocks';

const StatementOutput: React.FC<{output?: SessionStatement['output']}> = ({output}) => {
  if (output?.traceback) {
    return <CodeBlock showLineNumbers={false} text={output.traceback} />;
  }

  if (!output?.data) {
    return null;
  }

  const text = String(Object.values(output.data)[0]);
  if (!text) {
    return null;
  }

  return <CodeBlock showLineNumbers={false} text={text} />;
};

export default StatementOutput;
