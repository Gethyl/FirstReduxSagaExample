import React from "react"
import ReactDOM from "react-dom"

var outputArray = new Array()

export default class TestComponent extends React.Component{
	render(){
		outputArray.push(this.props.output)
		console.dir(outputArray)

		return(
			<div className="container">
				<hr/>
				<h2>Redux-Saga MiddleWare</h2>
				<div>
					<button id="async" onClick={ () => {
						this.props.asyncButtonClicked()

					  }
					}>Click To Fetch Async Data</button>
				</div>
                <div>MiddleWare Testing :</div>
            	{/*   <div>
					<textarea  placeholder="Dummy Data" readOnly ref="output" value={this.props.output}></textarea>
				</div>
				*/}
				<hr/>
				<div>
					<ul>
						{outputArray.map((item,i) => { return <li key={i}>{item}</li>})}
					</ul>
				</div>
				<hr/>
			</div>
		);
	}
}