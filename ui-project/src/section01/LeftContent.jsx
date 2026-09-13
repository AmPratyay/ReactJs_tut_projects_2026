import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText'
import ArrowText from './ArrowText'

const LeftContent = () => {
    return(
        <div className="h-full flex flex-col justify-between w-2/7">
            <HeroText />
            <ArrowText />
        </div>
    )
}

export default LeftContent