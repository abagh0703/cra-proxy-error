import React, {Component} from 'react';
import axios from 'axios';


class Opportunities extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        axios.get('/something')
            .then(res => {
                console.log(res.data);
            })
    }


    render() {
        return (
            <div>

            </div>

        );
    }
}

export default Opportunities;
