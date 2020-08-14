class VisibilityTogle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility : false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            console.log(prevState,!prevState.visibility)
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                 </button>
                 {this.state.visibility && (<div><p>Visible details</p></div> )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityTogle/>,document.getElementById('app'))

// const app = {
//     title: 'Visiblity Toggle',
    
//     subtitle: 'this is the subtitle',
//     options: []
// };

// let visability = 'false';
// const toggleVisiblity = () => {
//     visability = !visability
//     render()
// }
// const appRoot = document.getElementById('app')

// const render = () => {
//     const template = (
//         <div>
//           <h1>{app.title}</h1>
//         <button onClick={toggleVisiblity}>
//             {visability ? 'Hide Details' : 'Show Details'}
//         </button>
//         {visability && (
//             <div><p>Visible details</p></div> )
//         }
//         </div>
//       );

//       ReactDOM.render(template,appRoot)
// }

// render()