import React, {Component} from 'react';
import { render } from 'react-dom';
import './style.css';
import { WithContext as ReactTags } from 'react-tag-input';


const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


class AnnotationLabels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [{ id: 'Person', text: 'Person' }, { id: 'Place', text: 'Place' }],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
   this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleTagClick(index) {
    console.log('The tag at index ' + index + ' was clicked');
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <ReactTags
          tags={tags}
          delimiters={delimiters}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleTagClick={this.handleTagClick}
        />
      </div>
    );
  }
}
export default AnnotationLabels;