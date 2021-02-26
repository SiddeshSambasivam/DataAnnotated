import React, { Component } from 'react';
import {TokenAnnotator} from 'react-text-annotate';
import JSON from 'json5';

import './style.css';

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

  componentDidUpdate(){
    let cachedData = this.state.cachedData;
    cachedData.current_task.raw_data = this.state.raw_data;
    cachedData.current_task.annotated_data = this.state.annotated_data;
    
    localStorage.setItem("cachedData", JSON.stringify(cachedData));
    console.log("Annotation data updated.")    ;

    cachedData = JSON.parse(localStorage.getItem('cachedData'))
    var raw = JSON.stringify(cachedData.user_data);
    var myHeaders = new Headers();
    myHeaders.append("auth-token", cachedData.JWT);
    myHeaders.append('Access-Control-Allow-Origin', '*')
    myHeaders.append("Content-Type", "application/json");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://data-annotated.herokuapp.com/api/updateData?user="+raw, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log('Unmounted',result)

      })
      .catch(error => console.log('error', error));
  }

  handleChange = value => {
    this.setState({value})
  }

  handleTagChange = e => {
    
    this.setState({tag: e.target.id})
  }

  handleMoveRight = () => {
    let local_state = this.state.raw_data
    let sent = local_state.shift();
    console.log("SHIFT", sent)    
    let record = {
      sentence: sent,
      value: this.state.value,
    }
    this.setState({raw_data:local_state})
    this.setState({annotated_data:[...this.state.annotated_data, record]})
    this.setState({value:[]})

  }

  handleMoveLeft = () => {
    let local_state = this.state.annotated_data
    const annot = local_state.pop();
    console.log("POP", annot)    
    const sent = annot['sentence'];
    const value = annot.value;

    this.setState({raw_data:[sent, ...this.state.raw_data]});
    this.setState({annotated_data:local_state})
    this.setState({value:value})

  }

  render() {

    const TAG_COLORS = {
      ORG: '#00ffa2',
      PERSON: '#84d2ff',
    }

    const labelsOptions = this.state.tags.map( (tag) => {
      return (<a href="#" onClick={this.handleTagChange} key={tag} id={tag} style={{color: this.state.TAG_COLORS[tag]}}className="label-buttons">{tag}</a>)
    })

    return (
      <>
      <div className="basic-grid-layout">
        {labelsOptions}
      </div>
      <div className="basic-grid-layout-annotate" style={{marginTop:"3vh"}}>
      <h2 align="left">Data </h2>
      <h2  align="left">Annotated Data</h2>
      </div>
      
      <div className="basic-grid-layout-annotate" style={{marginTop:"3vh"}}>
          <div className="text-cards"> 
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
          </div>
          <div className="text-cards"> 
            <pre>{JSON.stringify(this.state.value, null, 1)}</pre>
          </div>
      </div>

      <div className="basic-grid-layout-annotate" style={{marginTop:"1vh"}}>
        
      {this.state.annotated_data.length != 0 ? <a href="#" onClick={this.handleMoveLeft} className="nav-b" align="right">&#8249;</a>:<a className="nav-b" align="right" />}
      {this.state.raw_data.length != 0 ? <a href="#" onClick={this.handleMoveRight} className="nav-b">&#8250;</a>:<a className="nav-b" />}
        
      </div>
      </>
    )

    // return (
    //   <>
      
    //   <div style={{padding: 24, color: 'white'}}>

    //     <div style={{display: 'flex', marginBottom: 24}}>
    //       <br/>
          
    //         <select 
    //           value={this.state.tag} 
    //           onChange={this.handleTagChange} 
    //           style={{
    //             margin: 6,
    //             maxHeight:20,
    //             width:100,
    //             padding: 1,
    //             borderRadius: '1rem',
    //             background:'#98c379'
    //           }}>
    //           {/* <option value="ORG">ORG</option> */}
    //           {/* <option value="PERSON">PERSON</option> */}
    //           {labelsOptions}
    //         </select>

    //       <Card>
    //         {this.state.raw_data.length == 0 ? <p>Hurray!! All the sentences are annotated</p> :<TokenAnnotator
    //           style={{
    //             fontFamily: 'IBM Plex Sans',
    //             maxWidth: 500,
    //             lineHeight: 1.5,
    //           }}
    //           tokens={this.state.raw_data[0].split(' ')}
    //           value={this.state.value}
    //           onChange={this.handleChange}
    //           getSpan={span => ({
    //             ...span,
    //             tag: this.state.tag,
    //             color: this.state.TAG_COLORS[this.state.tag],
    //           })}
    //         />}
    //       </Card>
    //     </div>

    //     <button onClick={this.confirmAnnotation}>Confirm</button>
    //     <Card>
    //       <h4>Current Value</h4>
    //       <pre>{JSON.stringify(this.state.value, null, 2)}</pre>
    //     </Card>
    //   </div>
    //   </>
    // )
  }
}

export default TextEntityAnnotation;