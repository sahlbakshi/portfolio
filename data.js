import github from '@/images/github.png'
import twitter from '@/images/twitterx.png'
import goeasy from '@/images/goeasy.png'
import ford from '@/images/ford.png'
import webook from '@/images/webook.png'
import placeholder from '@/images/placeholder.png'

export const me = "Sahl Bakshi"
export const about = "Studing CS at Waterloo. Building stuff on the side."

export const textLinks = [
  { label: 'GitHub', link: 'https://github.com/sahlbakshi' },
  { label: 'Twitter', link: 'https://x.com/sahlbakshi' },
]

export const iconLinks = [
  { link: 'https://x.com/sahlbakshi', src: twitter, width: 20, height: 16, alt: 'twitter' },
  { link: 'https://github.com/sahlbakshi', src: github, width: 24, height: 24, alt: 'github' },
]

export const projects = [
  {
    name: 'Straights',
    link: 'https://github.com/sahlbakshi/straights',
    desc: 'Poker-like game called straights on the CLI',
  },
  {
    name: 'Recommendation System',
    link: 'https://github.com/sahlbakshi/RecEngine',
    desc: 'Learnt how a recommendation system works',
  },
]

export const work = [
  {
    name: 'Stealth',
    role: 'Co-Founder',
    date: '... Present',
    prefix: 'Building an app because of',
    made: [''],
    image: placeholder,
  },
  {
    name: 'Some Agency',
    role: 'Co-Founder',
    date: 'Winter 2024',
    prefix: 'Built stuff like',
    made: [
      'https://www.coldemailhackers.com/',
      'https://ustc.sa/',
      'https://www.topbot.dev/',
    ],
    image: placeholder,
  },
  {
    name: 'Goeasy',
    role: 'Software Engineer Intern, Backend',
    date: 'Fall 2023',
    stack: ['Java', 'Spring Boot'],
    image: goeasy,
  },
  {
    name: 'Ford',
    role: 'Software Engineer Intern, Platform',
    date: 'Fall 2022',
    stack: ['C++', 'Unit Tests'],
    image: ford,
  },
  {
    name: 'Webook',
    role: 'Software Engineer Intern',
    date: 'Winter 2022',
    stack: ['Javascript', 'React'],
    image: webook,
  }
]