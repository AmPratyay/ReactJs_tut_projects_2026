import Card from "../card_project_tut/components_card/Card.jsx";
import CompanyData from "./CompanyData.jsx"
import "./AppCardProj.css";

const AppCardProj = () => {

  return(<>
    {CompanyData.map((elem, index) => {
      return <Card key={index} compData={elem} />;
    })}
  </>)
};

export default AppCardProj;