const chalk = require('chalk');
const boxen = require('boxen');

// Resume data - customize this with your information
const resume = {
  name: 'Saksham Mishra',
  title: 'Full Stack Developer',
  contact: {
    email: 'saksham7dev@gmail.com',
    phone: '+(91) (828) 770-2965',
    linkedin: 'linkedin.com/in/saksham-mishra7',
    github: 'github.com/sakshammishra5',
    website: 'https://saksham7dev.vercel.app/',
    location: 'New Delhi, Delhi, India'
  },
  summary: 'Passionate software developer with 1.5+ years of experience building scalable web applications and leading cross-functional teams. Expertise in JavaScript, React, Node.js, and cloud technologies.',
  experience: [
    {
      company: 'StartUp Solutions',
      position: 'Full Stack Developer',
      duration: 'Jun 2023 - present',
      achievements: [
        'Built responsive web applications using React and Node.js',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Collaborated with design team to improve user experience'
      ]
    }
  ],
  skills: {
    'Programming Languages': ['JavaScript', 'TypeScript', 'Python', 'Java'],
    'Frontend': ['React','Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
    'Backend': ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
    'Tools & Technologies': ['Git', 'Docker', 'AWS', 'Jenkins', 'Jest']
  },
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Dr.APj abdul Kalam Technical University',
      year: '2023',
      gpa: '7.5/10'
    }
  ],
  certifications: [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer'
  ],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: 'React, Node.js, Stripe API, MongoDB'
    },
    {
      name: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      tech: 'Vue.js, Socket.io, Express, PostgreSQL'
    }
  ]
};

// Formatting functions
function formatHeader(name, title) {
  return boxen(
    chalk.bold.cyan(name) + '\n' + chalk.gray(title),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'double',
      borderColor: 'cyan'
    }
  );
}

function formatSection(title, content) {
  return '\n' + chalk.bold.blue('■ ' + title.toUpperCase()) + '\n' + 
         chalk.gray('─'.repeat(50)) + '\n' + content + '\n';
}

function formatContact(contact) {
  return [
    `📧 ${contact.email}`,
    `📱 ${contact.phone}`,
    `💼 ${contact.linkedin}`,
    `🐙 ${contact.github}`,
    `🌐 ${contact.website}`,
    `📍 ${contact.location}`
  ].join('  |  ');
}

function formatExperience(experiences) {
  return experiences.map(exp => {
    const header = chalk.bold.white(exp.position) + chalk.gray(' @ ') + 
                   chalk.cyan(exp.company) + chalk.gray(' (' + exp.duration + ')');
    const achievements = exp.achievements.map(achievement => 
      chalk.gray('  • ') + achievement
    ).join('\n');
    return header + '\n' + achievements;
  }).join('\n\n');
}

function formatSkills(skills) {
  return Object.entries(skills).map(([category, skillList]) => {
    return chalk.bold.yellow(category + ': ') + skillList.join(', ');
  }).join('\n');
}

function formatEducation(education) {
  return education.map(edu => {
    return chalk.bold.white(edu.degree) + '\n' +
           chalk.cyan(edu.school) + chalk.gray(' (' + edu.year + ')') +
           (edu.gpa ? chalk.gray(' - GPA: ' + edu.gpa) : '');
  }).join('\n\n');
}

function formatProjects(projects) {
  return projects.map(project => {
    return chalk.bold.white(project.name) + '\n' +
           chalk.gray(project.description) + '\n' +
           chalk.yellow('Tech: ' + project.tech);
  }).join('\n\n');
}

// Main display function
function displayResume() {
  console.clear();
  
  // Header
  console.log(formatHeader(resume.name, resume.title));
  
  // Contact Info
  console.log(formatSection('Contact', formatContact(resume.contact)));
  
  // Summary
  console.log(formatSection('Summary', resume.summary));
  
  // Experience
  console.log(formatSection('Experience', formatExperience(resume.experience)));
  
  // Skills
  console.log(formatSection('Skills', formatSkills(resume.skills)));
  
  // Education
  console.log(formatSection('Education', formatEducation(resume.education)));
  
  // Certifications
  if (resume.certifications.length > 0) {
    console.log(formatSection('Certifications', 
      resume.certifications.map(cert => '• ' + cert).join('\n')
    ));
  }
  
  // Projects
  console.log(formatSection('Projects', formatProjects(resume.projects)));
  
  // Footer
  console.log(boxen(
    chalk.gray('Thank you for viewing my resume!\n') +
    chalk.blue('Connect with me: ') + chalk.underline(resume.contact.linkedin),
    {
      padding: 1,
      margin: 1,
      borderStyle: 'single',
      borderColor: 'gray',
      textAlignment: 'center'
    }
  ));
}

// Handle command line arguments
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log(chalk.bold('Resume Package Usage:'));
  console.log('npx @your-linkedin-id        Display full resume');
  console.log('npx @your-linkedin-id --help Show this help message');
} else {
  displayResume();
}