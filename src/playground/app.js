class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {

        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data')
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        } else {
            console.log('no change')
        }
    }
    componentWillUnmount() {
        console.log('component will unmount')
    }
    handlePick () {
        console.log('in handle pick')
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleDeleteOption(optionToRemove) {
       this.setState ((prevState) =>  ({
           options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    handleDeleteOptions() {
        this.setState(() => ({ options : [] }))
           
    }
    handleAddOption(option) {
        if (!option) {
            return 'enter valid value to add item'
        } else if (this.state.options.indexOf(option.trim()) > -1) {
            return 'This option already exists'
        }

       this.setState((prevState) => ({ options : prevState.options.concat(option) }))
    }
    render() {
        const subTitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
           {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.length ===0 && <p>Please add an option to get started</p>}
            {
            props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option} 
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
            }
        </div>
    )
}



const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}
            >
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))
        if (!error) {
            e.target.elements.option.value = ''
        }

    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            </div>
        )
    }
}


// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }
// ReactDOM.render(<User name='Patrick' age={55}/>, document.getElementById('app'))

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))