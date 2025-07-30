/**
 * Komponen Input General
 * @param {object} props
 * @param {string} props.divClass - Class Container Div
 * @param {string} props.labelMsg - Value Massege Label
 * @param {string} props.labelFor - For Label
 * @param {string} props.inputType - Type Input
 * @param {string} props.inputName - Name Input
 * @param {string} props.inputId  - ID Input
 * @param {string} props.inputPlaceholder - Placeholder Input
 *
 */
function Input({
  divClass,
  labelMsg,
  labelFor,
  inputType,
  inputName,
  inputId,
  inputPlaceholder,
}) {
  return (
    <>
      <div className={divClass}>
        <label htmlFor={labelFor} className="font-semibold text-base text-[#4E4B66]">{labelMsg}</label>
        <input
          type={inputType}
          name={inputName}
          id={inputId}
          placeholder={inputPlaceholder}
          className="mt-3 pl-[22px] w-full h-[64px] text-base font-normal text-[#A0A3BD] border border-border-line rounded"


        />
      </div>
    </>
  )
}

export default Input;