import RightCard from "./RightCard"

const RightContent = (props) => {
    console.log(props.users)
    return(
        <div className="h-full w-2/3 p-6 flex justify-evenly overflow-x-auto gap-10">
            {props.users.map((users,idx) => {
                return(<RightCard key={idx} index={idx + 1} users={users}/>)
            })}
        </div>
    )
}

export default RightContent