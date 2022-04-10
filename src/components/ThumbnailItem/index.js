import {Component} from 'react'

import './index.css'

class Thumbnailltem extends Component {
    const {eachImage} = this.props
    const {imageUrl,thumbnailUrl,imageAltText,thumbnailAltText} = eachImage

    render () {
        return(
            <li>
                
                <img src={imageUrl} alt={imageAltText} className="image"/>
                <br/>
                <img src={thumbnailUrl} alt={thumbnailAltText} className="thumbnail-image" />
            </li>

        )
    }
}

export default Thumbnailltem