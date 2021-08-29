const settings = {
  header: {
    alert: 'Press <code>CTRL+P</code> for Windows or <code>CMD+P</code> for Mac to <i class="fa fa-print"></i> print.',
    name: 'John Doe',
    position: 'Position',
    profilePic: 'images/professional-circle-420.png'
  },
  contact: [
    {
      title: 'davina-devs.com',
      icon: '<i class="fa fa-envelope fa-fw" title="email"></i>',
      href: 'mailto:davina-devs.com',
      newTab: true
    },
    {
      title: '+65 9369 3752',
      icon: '<i class="fa fa-mobile-alt fa-fw" title="mobile"></i>',
      href: 'tel:6593693752',
      newTab: true
    },
    {
      title: 'Singapore, West, Bukit Gombak',
      icon: '<i class="fa fa-home fa-fw"></i title="home">',
      href: '',
      newTab: false
    },
    {
      title: 'linkedin.com/in/davina',
      icon: '<i class="fab fa-linkedin fa-fw" title="linkedin"></i>',
      href: 'https://www.linkedin.com/in/davina',
      newTab: true
    },
    {
      title: 'davina-devs.com',
      icon: '<i class="fa fa-globe fa-fw" title="website"></i>',
      href: 'https://www.davina-devs.com/',
      newTab: true
    }
  ],
  description: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
  skills: {
    programming: {
      items: 5,
      text: 'PHP / Laravel'
    },
    design: {
      items: 3,
      text: 'PhotoShop'
    },
    languages: {
      items: 2,
      text: 'English'
    },
  },
  rating: {
    min: 0,
    max: 5
  },
  hobbies: {
    items: 5,
    text: 'Videogames'
  },
  experience: {
    items: 5,
    title: {
      start: 'May 2021',
      end: 'Present',
      name: 'Company Name',
      subtitle: 'Position'
    },
    details: {
      min: 1,
      max: 5,
      text: 'Quisque velit nisi, pretium ut lacinia in, elementum id enim.'
    }
  },
  education: {
    items: 4,
    title: {
      start: 'May 2021',
      end: 'Present',
      name: 'Institution',
      subtitle: 'Qualification'
    }
  }
};