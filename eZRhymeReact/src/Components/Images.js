import React from 'react';

function Images(props) {
  return <p className={props.className} style={{ backgroundImage: `url('${props.src}')` }} />;
}

export default Images;
