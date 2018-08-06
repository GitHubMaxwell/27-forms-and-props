import React from 'react'
import './form.scss';

class SearchResultList extends React.Component {
    render() {
        return (
            // Conditionally Render
            this.props.redditList ?
                <ul>
                    {this.props.redditList.map((title, i) =>
                        <li key={i}>
                            <div className="container">
                                <div className="innercontainer">
                                    <div>
                                        {title.data.title}
                                    </div>
                                    <a href={title.data.url}><p>Upvotes {title.data.ups}</p></a>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
                : null
        );
    }

}

export default SearchResultList;