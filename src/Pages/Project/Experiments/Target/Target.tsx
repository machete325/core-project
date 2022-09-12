import React from 'react';

interface Props {
  data: any;
}

function Target({ data }: Props) {
  console.log(data);
  return <div>Target</div>;
}

export default Target;
