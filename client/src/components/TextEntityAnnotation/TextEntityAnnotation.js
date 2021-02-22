import React, { Component } from 'react';
import {TokenAnnotator} from 'react-text-annotate';

const TEXT = `On Monday night , Mr. Fallon will have a co-host for the first time : The rapper Cardi B , who just released her first album, " Invasion of Privacy . "`

const TAG_COLORS = {
  ORG: '#00ffa2',
  PERSON: '#84d2ff',
}

const Card = ({children}) => (
  <div
    style={{
      margin: 6,
      maxWidth: 500,
      padding: 16,
      background: '#23232e',
      borderRadius: "1.5rem"
    }}
  >
    {children}
  </div>
)

class TextEntityAnnotation extends Component{
  state = {
    value: [],
    tag: 'PERSON',
    annotated_data: [],
    raw_data: [`On Monday night , Mr. Fallon will have a co-host for the first time : The rapper Cardi B , who just released her first album, " Invasion of Privacy . "`, `My name is siddesh and its been a great way to talk and quick brown fox jumps over the lazy dog`],
  }

  handleChange = value => {
    this.setState({value})
  }

  handleTagChange = e => {
    this.setState({tag: e.target.value})
  }

  confirmAnnotation = e => {
    let sent = this.state.raw_data.shift();
    console.log(this.state.value)
    let record = {
      sentence: sent,
      value: this.state.value,
    }
    this.setState({annotated_data:[...this.state.annotated_data, record]})
    this.setState({value:[]})
  }

  render() {

    // console.log('Annotated Data: ', this.state.annotated_data)
    return (
      <div style={{padding: 24, color: 'white'}}>

        <div style={{display: 'flex', marginBottom: 24}}>
          <br/>
          
            <select 
              value={this.state.tag} 
              onChange={this.handleTagChange} 
              style={{
                margin: 6,
                maxHeight:20,
                width:100,
                padding: 1,
                borderRadius: '1rem',
                background:'#98c379'
              }}>
              <option value="ORG">ORG</option>
              <option value="PERSON">PERSON</option>
            </select>

          <Card>
            {this.state.raw_data.length == 0 ? <p>Hurray!! All the sentences are annotated</p> :<TokenAnnotator
              style={{
                fontFamily: 'IBM Plex Sans',
                maxWidth: 500,
                lineHeight: 1.5,
              }}
              tokens={this.state.raw_data[0].split(' ')}
              value={this.state.value}
              onChange={this.handleChange}
              getSpan={span => ({
                ...span,
                tag: this.state.tag,
                color: TAG_COLORS[this.state.tag],
              })}
            />}
          </Card>
        </div>

        <button onClick={this.confirmAnnotation}>Confirm</button>
        <Card>
          <h4>Current Value</h4>
          <pre>{JSON.stringify(this.state.value, null, 2)}</pre>
        </Card>
      </div>
    )
  }
}

export default TextEntityAnnotation;