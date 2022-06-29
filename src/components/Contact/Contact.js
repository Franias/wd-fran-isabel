import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h3 className='section__title'>Contato</h3>
      <p className='p'>(51) 3930-6002</p>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Enviar E-mail
        </span>
      </a>
      
    </section>
  )
}

export default Contact
