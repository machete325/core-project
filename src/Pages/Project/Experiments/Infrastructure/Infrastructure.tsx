import React from 'react';

interface Props {
  data: any;
}

function Infrastructure({ data }: Props) {
  console.log(data);
  return <div>Infrastructure</div>;
}

export default Infrastructure;
