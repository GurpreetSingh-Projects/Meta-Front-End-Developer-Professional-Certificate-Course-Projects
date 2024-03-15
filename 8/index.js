function Football() {
    const shoot=() => {
        alert(<h1>Goal!!</h1>)
    }
    return (
        <button onClick={()=>shoot()}>Take the Shot</button>
    )
}

ReactDOM.render(<Football/>,document.getElementById("root"))