import React from 'react'

function Input({divClass, labelMsg, labelFor, inputType, inputName, inputId, inputPlaceholder}) {
  return (
  <>
    <div className={divClass}>
          <label htmlFor={labelFor}>{labelMsg}</label>
          <input
            type={inputType}
            name={inputName}
            id={inputId}
            placeholder={inputPlaceholder}
          />
    </div>
  </>
  )
}

export default Input