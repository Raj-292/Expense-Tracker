import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
  //here since <div> is an pre-defined HTML Tag className will take effect
};

export default Card;
