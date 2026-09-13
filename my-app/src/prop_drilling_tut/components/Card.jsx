import "./Card.css";

const Card = (props) => {
    
    return (
        <div className="card">
            <img
                src={props.image}
                alt="Profile picture"
            />
            <h2>Name: {props.user},{props.age}</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Totam, vero!
            </p>
            <button className="btn">View Profile</button>
        </div>
    );
};

export default Card;