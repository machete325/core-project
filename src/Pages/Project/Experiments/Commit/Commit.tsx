import React from 'react';

interface Props {
  data: any;
}

function Commit({ data }: Props) {
  console.log(data);
  return <div>Commit</div>;
}

export default Commit;
