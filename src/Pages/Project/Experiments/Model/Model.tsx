import React from 'react';

interface Props {
  data: any;
}

function Model({ data }: Props) {
  console.log(data);
  return <div>Model</div>;
}

export default Model;
