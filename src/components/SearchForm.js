import React from 'react';
import superagent from 'superagent'
import './form.scss'

class SearchForm extends React.Component {
    constructor(props) {
        super(props)
        this.formSubmit = this.formSubmit.bind(this);
        this.formChange = this.formChange.bind(this);
    }

    formChange(event) {
        this.props.handleChange(event)
    }
    formSubmit(event) {
        event.preventDefault();
        // console.log('searchText:',this.props.searchText)
        // console.log('searchAmount:',this.props.searchAmount)

        return superagent.get(`https://www.reddit.com/r/${this.props.searchText}.json?limit=${this.props.searchAmount}`)
        .then(response => {
            // console.log('Success THEN',response)
            const success = 'success'
            this.props.handleClass(success)
            this.props.handleSubmit(response)
        })
        .catch(err => {
            // console.log('Failure CATCH')
            const failure = 'failure'
            this.props.handleClass(failure)
        })

    }

    render() {
        return (
            <React.Fragment>
            <p> Search Form </p>
            <form onChange={this.formChange} onSubmit={this.formSubmit}>
                <input className={this.props.class} name="searchText" type="text" />
                <input className={this.props.class} name="searchNumber" type="number" min="0" max="100" />
                <input type="submit"/>
            </form>
            </React.Fragment>
        );
    }
}

export default SearchForm;