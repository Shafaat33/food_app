const ShimmerEffect = (props) => {
  return (
    <div className="res-container">
      {Array(props.cardsNumber).fill("").map((elem, index) => (
        <div key={index} className="shimmer-card"></div>
      ))}
    </div>
  )
}

export default ShimmerEffect;
