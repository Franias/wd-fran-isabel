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
    'O POALAB é um laboratório de fabricação digital e está conectado à rede mundial de fab labs. Opera como um programa de extensão do IFRS campus Porto Alegre. Temos como missão popularizar o acesso e letramento na fabricação digital, funcionando como uma plataforma de criatividade, aprendizagem e invenção. Ser um Fab Lab significa estar conectado a uma comunidade mundial de alunos, educadores, técnicos, pesquisadores e inovadores e desenvolver atividades dentro da filosofia do conhecimento aberto. Em 2 anos de funcionamento a faixa etária de usuários  variou entre 5 e 76 anos... queremos avançar nos dois limites;  O objetivo do lab é o de disseminar conhecimento! Se você não tem nenhum conhecimento sobre fabricação digital, o lab foi feito pra você. Continua com dúvidas? Mande mensagem via e-mail ou via página do Facebook logo abaixo!',
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

const openDay = {
  name:"OpenDay" ,
  data: "[ 6as feiras das 14h-18h ]",
  description: "Os open days são um dos requisitos para a existência de um Fab Lab.  Nestes dias, a comunidade externa têm a possibilidade de conhecer  as ferramentas existentes no lab e aprender sobre fabricação digital.    Cada fab lab possui suas regras de open day. Temos material, equipamento, pessoal e disposição para atender a todos, independente de conhecimento; ", 
  rules: "Regras do PoaLab:",
  desc: "Não existe custo para acessar o lab ou utilizar as máquinas;  Não existe reserva de equipamento;  Os usuários são convidados a cadastrar os seus  projetos no sistema de projetos do PoaLab para  compartilhamento com a comunidade;  Os usuários devem trazer os insumos necessários  para os projetos; "
}


const skills = [
  // links can be added or removed
  // if there are no links, links section won't show up
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

export { header, about, projects, skills, contact, openDay }
