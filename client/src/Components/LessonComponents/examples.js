import React from 'react'

const examples = () =>{
  

  return(
    <>

      {/* EXAMPLE PROBLEMS AND SOLUTIONS: ROW */}
      <div className="amber darken-1 row">{/* DISPLACEMENT EXAMPLE PROBLEMS */}
          <h5 className="center white-text">Displacement: Example Problems and Solutions</h5>
          
          {/* EXAMPLE HERE */}
      </div>
    
    
      {/* EXAMPLE STRUCTURE */}
      <div className="col s12 m6 l6">{/* EX 1 */}
        <div className="card"> 
          <div className="card-content" style={{minHeight: "50vh"}}>
            <span className="card-title grey-text text-darken-4">Ex 1. Concept Name</span>
            <p style={{textIndent: "20px", fontWeight: "500"}}>Problem</p><br/>
            <p><b>A.</b> </p><br/>
            <p><b>B.</b> </p><br/>
            <p><b>C.</b> </p><br/>
            <button className="btn-small amber darken-4 activator" style={{position:"absolute", bottom:"2%", right: "2%"}}>Solution</button>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">Solution<i className="material-icons right">close</i></span>
            
          </div>
        </div>
      </div>
    
    
    
    </>
  )
}