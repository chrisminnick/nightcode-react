import React from 'react';
import HelloWorld from '../components/HelloWorld';
import NewComponent from '../components/NewComponent';

class PageContainer extends React.Component {


    render() {
        return(
            <div>
            <HelloWorld otherthings = "bacon" text = "Everybody"/>
            <NewComponent />

            </div>
        )
    }
}

export default PageContainer;