function Football() {
    const shoot = (a, b)=>{
        alert(b.type);
    }
  
    return (<button onClick={(event) => shoot("Goal", event)} > Take this goal</button >);
    
}
ReactDOM.render(<Football />, document.getElementById("root"));