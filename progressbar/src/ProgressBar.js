const ProgressBar = (props) => {

  return (
    <div data-testid="wrapper">
      <div data-testid="progress">  
        <progress id="file" value={props.percent} max="100"> </progress>
      </div>
    </div>
  );
};

export default ProgressBar;