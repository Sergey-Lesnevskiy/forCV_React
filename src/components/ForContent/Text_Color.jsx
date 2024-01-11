function TEXT_COLOR({ text, color }) {
  return (
    <div style={{fontSize:"24px", color: color, width:"100px"}}>
      {text}
    </div>
  );
}

export default TEXT_COLOR;
