import react, {Component} from 'react'
//import autoBind from 'react-autobind'

export default class Example extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
       // autoBind(this)
    }
    render (){
        return(
            <div>{this.state.counter}</div>
        )
    }
}
