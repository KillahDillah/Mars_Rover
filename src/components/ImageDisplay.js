import React, { Component } from 'react'

class ImageDisplay extends Component {
  static defaultProps = {
    images:[]
  }
  render() {
    return(
      <div>
        <ul>
          {this.props.images.map(function(image, i){
            return(
              <li key={"photo"+i}><img src={image.img_src}/></li>
              )
          })}
        </ul>
      </div>
    )
  }
}

export default ImageDisplay