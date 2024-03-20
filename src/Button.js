import React from 'react'

const Button = ({content, click}) => {
    // console.log(props);
  return (
    <div>
        <div>
            <button onClick={click} className="btn btn-dark"> {content}</button>
        </div>
    </div>
  )
}

export default Button