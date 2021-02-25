import React, { Component } from 'react';
import {TokenAnnotator} from 'react-text-annotate';
import JSON from 'json5';

const TEXT = `On Monday night , Mr. Fallon will have a co-host for the first time : The rapper Cardi B , who just released her first album, " Invasion of Privacy . "`

class TextEntityAnnotation extends Component{

  state = {
    cachedData:{},
    value: [],
    tag: 'PERSON',
    annotated_data: [],
    raw_data: [`On Monday night , Mr. Fallon will have a co-host for the first time : The rapper Cardi B , who just released her first album, " Invasion of Privacy . "`, `My name is siddesh and its been a great way to talk and quick brown fox jumps over the lazy dog`],
    TAG_COLORS: {},
    tags: []
  }
  
  componentDidMount(){
    
    let cachedData = JSON.parse(localStorage.getItem('cachedData'))
    // console.log("Text entity component (cached data): ", cachedData)

    this.setState({cachedData: cachedData})

    const colors = ["#00ffa2", "#84d2ff", "#A7226E", "#EC2049", "#F26B38", "#F7DB4F", "#2F9599"];
    let color = null;
    let labels2color = {};

    for(var i=0; i<cachedData.current_task.labels.length; i++){
      if(i>= colors.length){
        color = colors[colors.length-1];
      }
      else{
        color = colors[i];
      }
      labels2color[cachedData.current_task.labels[i]] = color;
    }

    this.setState({
      raw_data: cachedData.current_task.raw_data,
      annotated_data: cachedData.current_task.annotated_data,
      TAG_COLORS: labels2color,
      tags: cachedData.current_task.labels
    })

  }

  componentWillUnmount(){
    let cachedData = this.state.cachedData;
    cachedData.current_task.raw_data = this.state.raw_data;
    cachedData.current_task.annotated_data = this.state.annotated_data;
    
    localStorage.setItem("cachedData", JSON.stringify(cachedData));
    console.log("Annotation data updated.")
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

    let cachedData = this.state.cachedData;
    cachedData.current_task.raw_data = this.state.raw_data;
    cachedData.current_task.annotated_data = this.state.annotated_data;
    
    localStorage.setItem("cachedData", JSON.stringify(cachedData));
    console.log("Annotation data updated.", this.state.annotated_data, cachedData.current_task.annotated_data)

  }

  render() {
    console.log(this.state.annotated_data)
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
    );

    const TAG_COLORS = {
      ORG: '#00ffa2',
      PERSON: '#84d2ff',
    }

    const labelsOptions = this.state.tags.map( (tag) => {
      return (<option key={tag} value={tag}>{tag}</option>)
    })

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
              {/* <option value="ORG">ORG</option> */}
              {/* <option value="PERSON">PERSON</option> */}
              {labelsOptions}
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
                color: this.state.TAG_COLORS[this.state.tag],
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