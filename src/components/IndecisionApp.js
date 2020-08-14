import React from 'react'


import AddOption  from './AddOption'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'


class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options : [] }))
    };
    handlePick  = () => {
        console.log('in handle pick')
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({
            selectedOption: option
        }))
        //alert(option)
    };
    handleAddOption = (option) => {
        if (!option) {
            return 'enter valid value to add item'
        } else if (this.state.options.indexOf(option.trim()) > -1) {
            return 'This option already exists'
        }

       this.setState((prevState) => ({ options : prevState.options.concat(option) }))
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState ((prevState) =>  ({
            options: prevState.options.filter((option) => optionToRemove !== option)
         }))
     };
    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
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
    };
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate')
        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data')
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        } else {
            console.log('no change')
        }
    };
    componentWillUnmount() {
        console.log('component will unmount')
    };
    render() {
        const subTitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0}
                        handlePick = {this.handlePick}
                    />
                    <div className="widget">
                        <Options options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                  </div>

                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    };
}

export default IndecisionApp;