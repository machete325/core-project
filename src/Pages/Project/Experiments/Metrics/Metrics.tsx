import React from 'react';

interface Props {
  data: any;
}

function Metrics({ data }: Props) {
  console.log(data);
  return <div>Metrics</div>;
}

export default Metrics;
