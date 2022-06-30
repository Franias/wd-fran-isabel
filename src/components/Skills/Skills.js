import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () =>(
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Links</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <div key={uniqid()} className='skills__list-item btn btn--plain'>
          <a href={skill.link} target='_blank' rel="noreferrer">{skill.name}</a>
          </div>
        )
        )}
      </ul>
    </section>
  )


export default Skills
