import React from "react";

class Filter extends React.Component {
    state = {
        type: 'all'
    }
    render() {
            return (
                <div>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="all"
                        onClick={() => this.setState({type: 'all'})}
                        />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="movie"
                        onClick={() => this.setState({type: 'movie'})}
                        />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className="with-gap"
                        name="type"
                        type="radio"
                        data-type="series"
                        onClick={() => this.setState({type: 'series'})}
                        />
                    <span>Series only</span>
                </label>
                </div>
                    )
                }
            }

export { Filter }