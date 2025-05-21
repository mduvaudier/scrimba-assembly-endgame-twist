export default function Lang(props) {
  return (
    <div className="lang-container">
      {props.dead && <div
        className="lang lang-top"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1}}
      >💀</div>}
      <div
        className="lang lang-bottom"
        style={{backgroundImage: `url(${props.image})`}}
      > 
      </div>
    </div>
  );
}
