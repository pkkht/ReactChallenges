/* eslint-disable react/prop-types */
import { Alert } from "react-bootstrap";

const GreenAlert = (props) => {

const incrScore = () =>{
    props.onScore();
}
return (
    <>
          <Alert key="success" variant="success" className="card-body d-flex" onClick={incrScore}></Alert> 
    </>
  );
};
export default GreenAlert;
