import React from 'react';
import InputForm from './InputForm';
import OutputTable from './OutputTable';

class PageContainer extends React.Component {


    render() {
        return(
            <div>
                <InputForm />
                <OutputTable />
            </div>
        )
    }
}

export default PageContainer;