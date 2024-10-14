class ClickB3 extends React.Component {
    constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
    this.setState({ clicked: true });
    }
    render() {
    return (
    <div>
    <h1>The Button was  
  
    {this.state.clicked ? 'clicked' : 'not clicked'}
  
    </h1>
    <button key ={1} onClick={this.handleClick}>button1{this.props.key}</button>
    <button key ={2} onClick={this.handleClick}>button2{this.props.key}</button>
    <button key ={3} onClick={this.handleClick}>button3{this.props.key}</button>
    </div>
    );
    }
   } 
  export default ClickB3;
