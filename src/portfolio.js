const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://fabfoundation.org/getting-started/#fablabs-full',
  title: 'fabfoundation.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'POALAB',
  role: '!Atenção! Mudamos de sala!',
  description:
    'O POALAB é um laboratório de fabricação digital e está conectado à rede mundial de fab labs.    Opera como um programa de extensão do    IFRS campus Porto Alegre.        Temos como missão popularizar o acesso    e letramento na fabricação digital,    funcionando como uma plataforma de criatividade,    aprendizagem e invenção.        Ser um Fab Lab significa estar conectado    a uma comunidade mundial de alunos, educadores,    técnicos, pesquisadores e inovadores e desenvolver    atividades dentro da filosofia do conhecimento aberto.',
  resume: 'https://www.poalab.net.br/',
  social: {
    youtube: 'https://www.youtube.com/channel/UCWZzR8M4KKD6l7hpOZb9viA',
    facebook: 'https://www.facebook.com/poalab',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Equipamento 0',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    image: 'assets/braille.png',
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Equipamento 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Equipamento 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Impressora Braille 3D',
  'Thingiverse',
  'Instructables',
  'Opendesk',
  'MakerCase',
  'Inkscape',
  'Projeto Nativos Fabbers',
  'Fab Academy',
  'Fab City',
  'Fab Foundation',
  'tinkercad',
  'maker faire POA',
  'Make magazine'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: ['poalabifrs@gmail.com','andre.peres@poa.ifrs.edu.br']
}

export { header, about, projects, skills, contact }
