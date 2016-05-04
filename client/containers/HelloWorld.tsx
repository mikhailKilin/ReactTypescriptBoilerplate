import * as React from 'react'
import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld'


class NavBar extends React.Component<{},{}>{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="global-container">
                <HelloWorld/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(NavBar);