/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @returns 
 */

import { forwardRef, useId } from "react"

export const Input = forwardRef(function Input ({placeholder, value, onChange, label}, ref) {
    const id = useId()
    return <div>
        <label className="form-label" htmlFor={id}>{label}</label>
        <input
        ref={ref}
        id={id}
        type="text"
        className="form-control"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)} />
    </div>
})

// export function Input ({placeholder, value, onChange, label, inputRef, wrapperRef, labelRef}) {
//     const id = useId()
//     return <div ref={wrapperRef}>
//         <label ref={labelRef} className="form-label" htmlFor={id}>{label}</label>
//         <input
//         ref={inputRef}
//         id={id}
//         type="text"
//         className="form-control"
//         value={value}
//         placeholder={placeholder}
//         onChange={(e) => onChange(e.target.value)} />
//     </div>
// }