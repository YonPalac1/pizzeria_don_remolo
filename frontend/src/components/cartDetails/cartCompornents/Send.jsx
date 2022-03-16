import React from 'react'

export const Send = ({type}) => {
  return (
    <> 
        <h5>Envio</h5>
        {
            type === "" ?
                <span>Se calculará en el siguinte paso</span>
                :
                type !== "local" ?
                    <p>$ 130</p>
                    :
                    <span>gratis (se retira por local)</span>

        }
    </>
  )
}
 