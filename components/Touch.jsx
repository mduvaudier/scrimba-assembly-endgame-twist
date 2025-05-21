export default function Touch(props) {
  return (
    <button onClick={() => props.counter < 8 ? props.onClick(props.letter) : null} className="touch" style={{backgroundColor: props.bgColor}}>
      {props.letter}
    </button>
  );
}
