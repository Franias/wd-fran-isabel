import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contato</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Envie-nos e-mail
        </span>
      </a>
      <p type='text'>(51) 3930-6002</p>
    </section>
  )
}

export default Contact
