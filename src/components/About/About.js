import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'> {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              POALAB
            </span>
          </a>
        )}

        {social && (
          <>
            {social.facebook && (
              <a
                href={social.facebook}
                aria-label='github'
                className='link link--icon'
              >
                <FacebookIcon />
              </a>
            )}

            {social.youtube && (
              <a
                href={social.youtube}
                aria-label='youtube'
                className='link link--icon'
              >
                <YouTubeIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
