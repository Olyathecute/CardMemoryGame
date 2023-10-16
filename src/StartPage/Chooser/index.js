import './Chooser.css'

function Chooser({ title, chooseValue, items }) {
  return (
    <div className='block'>
      <p>{title}</p>
      <select required onChange={(event) => chooseValue(event.target.value)}>
        {items.map(({ name, value }, id) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Chooser
