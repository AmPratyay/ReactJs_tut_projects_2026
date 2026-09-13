import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page01Content = (props) => {
    
    return(
        <div className="py-10 h-[90vh] flex items-center gap-10"> 
            <LeftContent />
            <RightContent users={props.users}/>
        </div>
    )
}

export default Page01Content