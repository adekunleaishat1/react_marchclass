import React from 'react'

const Distodo = ({ainput}) => {
    console.log(ainput);
  return (
    <div>Distodo

        {
            ainput.map((el)=>(
                <>
                <h1>{el.input}</h1>
                <h1>{el.inp}</h1>
                </>
            ))
        }
    </div>
  )
}

export default Distodo