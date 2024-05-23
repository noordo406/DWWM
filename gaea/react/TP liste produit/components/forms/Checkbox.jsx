export function Checkbox ({id, checked, onChange, label}) {
    return <div className="form-check">
        <input id={id} type="checkbox" className="form-check-input" checked={checked} onChange = {(e) => onChange(e.target.checked)}/>
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}