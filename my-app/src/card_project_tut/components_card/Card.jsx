const Card = (props) => {

    return(    
    <div className="card">

      {/* Top Section */}
      <div className="top">
        <img
          src={props.compData.logo}
          alt="Image logo"
        />

        <button className="save-btn">Save</button>
      </div>

      {/* Center Section */}
      <div className="center">
        <h3 className="company-name">
          {props.compData.company} <span>{props.compData.posted}</span>
        </h3>

        <h2>{props.compData.post}</h2>

        <div className="tags">
          <h4>{props.compData.tag}</h4>
          <h4>{props.compData.tag2}</h4>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom">

        <div className="salary-location">
          <h3>{props.compData.salary}</h3>
          <p>{props.compData.location}</p>
        </div>

        <button className="apply-btn">Apply Now</button>

      </div>

    </div>
    )
}

export default Card