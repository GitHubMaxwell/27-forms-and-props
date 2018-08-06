import React from 'react'
import ReactDOM from 'react-dom'
import SearchForm from './components/SearchForm.js';
import SearchResultList from './components/SearchResultList.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redditList : [],
            loading : false,
            searchText : '',
            searchAmount : 0,
            className : 'success'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClass = this.handleClass.bind(this)
    }

    handleChange(event) {
        event.preventDefault();
        let content = event.target.value
        let source = event.target.name
        // console.log('handleChange:',content)

        if(source === 'searchText') {
            // console.log('handleChange:',content)
            this.setState({
                searchText : content
            })
        } else if(source === 'searchNumber') {
            // console.log('handleChange:',content)
            this.setState({
                searchAmount : content
            })
        }
    }

    handleSubmit(response) {
        console.log('handleSubmit:',response.body.data.children)

        this.setState({
            redditList : response.body.data.children,
        });
    }

    handleClass(response) {
        if(response === 'success') {
            this.setState({
                className : 'success'
            });
        } else if(response === 'failure') {
            this.setState({
                className : 'failure'
            })
        }
    }

    render() {
        return(
            <React.Fragment>
                <h1>Search Reddit</h1>
                <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClass = {this.handleClass} searchText={this.state.searchText} searchAmount={this.state.searchAmount} class= {this.state.className} />
                < SearchResultList redditList={this.state.redditList}/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))