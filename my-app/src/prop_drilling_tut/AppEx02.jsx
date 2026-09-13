import './AppEx02.css'
import Card from './components/Card'

function AppEx02() {

  return (
    <div className="parent">
      <Card user="Pratyay" age={27} image="https://i.pravatar.cc/300?img=1" />
      <Card user="Rahul" age={25} image="https://i.pravatar.cc/300?img=2" />
      <Card user="Amit" age={29} image="https://i.pravatar.cc/300?img=3" />
    </div>
  )
}

export default AppEx02
