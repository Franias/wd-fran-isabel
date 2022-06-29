import { openDay } from '../../portfolio'
import './OpenDay.css'

const OpenDay = () => {
  const { name, description, data, rules, desc } = openDay

  return (
    <div className='openDay center'>
      {name && (
        <h1>
          <span className='openDay__name'>{name}</span>
        </h1>
      )}

      {data && <h2 className='openDay__data'> {data}</h2>}
      <p className='openDay__desc'>{description && description}</p>
      {rules && <h4 className='openDay__rules'> {rules}</h4>}
      <p className='openDay__desc'>{desc && desc}</p>

    </div>
  )
}

export default OpenDay
