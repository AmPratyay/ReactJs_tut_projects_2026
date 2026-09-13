import Section01 from "./section01/Section01.jsx"
import Section02 from "./section02/Section02.jsx"

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
      title: 'Meaningful Work',
      intro: 'Collaborate with talented people and create meaningful work Lorem ipsum dolor sit amet.',
      tag: 'Teamwork',
    },
    {
      img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72',
      title: 'Creative Thinking',
      intro: 'Turn ideas into impactful solutions through creativity and innovation Lorem ipsum dolor sit amet.',
      tag: 'Innovation',
    },
    {
      img: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      title: 'Continuous Growth',
      intro: 'Keep learning, growing, and building skills for the future Lorem ipsum dolor sit amet.',
      tag: 'Growth',
    },
  ]


  return(
    <>
    <Section01 users={users}/>
    <Section02 />
    </>
    )
}

export default App