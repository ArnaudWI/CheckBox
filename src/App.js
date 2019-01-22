import React, { Component } from 'react';

let number = 0;

class App extends Component {
    state = {
      checkall: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false
    };

  /*fonction check all pour changer les states des 4 checkbox classiques
  en fonction du state 'checkall' */
  checkedAll = () => {
    this.setState({
      checkall: !this.state.checkall
    });
      if (!this.state.checkall) {
        this.setState({
          checkbox1: true,
          checkbox2: true,
          checkbox3: true,
          checkbox4: true
        })
      } else if (this.state.checkall) {
        this.setState({
          checkbox1: false,
          checkbox2: false,
          checkbox3: false,
          checkbox4: false
        })
    }
    number = 0; //reinitialisation du compteur
  }

  /* fonction checkbox 1 avec changement du state approprié + incrémentation
  ou décrémentation de number en fonction du state 'checkbox1' + condition
  pour vérifier le compteur à 4 box pour actionner le state 'checkall'*/
  checkedClassique1 = () => {
    this.setState({
      checkbox1: !this.state.checkbox1
    })
    if(this.state.checkbox1) {
      number--;
    } else {
      number++;
    }
    if (number === 4) {
      this.setState({
        checkall: true
      })
    } else {
      this.setState({
        checkall: false
      })
    }
  }

  /* fonction checkbox 2 / explication similaire à la fonction checkbox 1 */
  checkedClassique2 = () => {
    this.setState({
      checkbox2: !this.state.checkbox2
    })
    if(this.state.checkbox2) {
      number--;
    } else {
      number++;
    }
    if (number === 4) {
      this.setState({
        checkall: true
      })
    } else {
      this.setState({
        checkall: false
      })
    }
  }

  /* fonction checkbox 3 / explication similaire à la fonction checkbox 1 */
  checkedClassique3 = () => {
    this.setState({
      checkbox3: !this.state.checkbox3
    })
    if(this.state.checkbox3) {
      number--;
    } else {
      number++;
    }
    if (number === 4) {
      this.setState({
        checkall: true
      })
    } else {
      this.setState({
        checkall: false
      })
    }
  }

  /* fonction checkbox 4 / explication similaire à la fonction checkbox 1 */
  checkedClassique4 = () => {
    this.setState({
      checkbox4: !this.state.checkbox4
    })
    if(this.state.checkbox4) {
      number--;
    } else {
      number++;
    }
    if (number === 4) {
      this.setState({
        checkall: true
      })
    } else {
      this.setState({
        checkall: false
      })
    }
  }

  render() {

    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <div>
            <input name='Check All' type='checkbox'
              checked={this.state.checkall} onChange={this.checkedAll}
            />
            <span style={styles.name}>Check All</span>
          </div>
          <div>
            <input name='Checkbox 1' type='checkbox'
              checked={this.state.checkbox1} onChange={this.checkedClassique1}
            />
            <span style={styles.name}>Checkbox 1</span>
          </div>
          <div>
            <input name='Checkbox 2' type='checkbox'
              checked={this.state.checkbox2} onChange={this.checkedClassique2}
            />
            <span style={styles.name}>Checkbox 2</span>
          </div>
          <div>
            <input name='Checkbox 3' type='checkbox'
              checked={this.state.checkbox3} onChange={this.checkedClassique3}
            />
            <span style={styles.name}>Checkbox 3</span>
          </div>
          <div>
            <input name='Checkbox 4' type='checkbox'
              checked={this.state.checkbox4} onChange={this.checkedClassique4}
            />
            <span style={styles.name}>Checkbox 4</span>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  box: {
    backgroundColor: '#d3d3d3',
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 130,
    marginTop: '15%'
  },
  boxClassique: {
    backgroundColor: '#d3d3d3',
    borderColor: '#000',
    borderWidth: 2,
    borderStyle: 'solid',
    width: 130,
    marginTop: '1%'
  },
  name: {
    fontSize: 10,
    fontStyle: 'italic'
  }
}
export default App;
