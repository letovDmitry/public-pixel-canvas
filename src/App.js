import React from 'react';
import GridContainer from './Components/Grid/Grid';

class App extends React.Component {
    render() {
      return (
        <>
          {/* <Grid cells={this.state.cells} currentColor={this.state.currentColor} /> */}
          <GridContainer />
        </>
        
      );
    }
}

export default App;
