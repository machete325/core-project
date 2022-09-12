import React from 'react';

interface Props {
  data: any;
}

function Dataset({ data }: Props) {
  console.log(data);
  return <div>Dataset</div>;
}

export default Dataset;
