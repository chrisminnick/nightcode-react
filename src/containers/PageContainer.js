import React from 'react';
import HelloWorld from '../components/HelloWorld';

class PageContainer extends React.Component {
    render() {
        return(
            <div>
            <HelloWorld otherthings = "bacon" text = "Everybody"/>
                <p>Wat's up?</p>
                <p>This is another paragraph.</p>
            </div>
        )
    }
}

export default PageContainer;