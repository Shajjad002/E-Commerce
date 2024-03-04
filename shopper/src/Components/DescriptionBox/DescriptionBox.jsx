import React from 'react'
import './DescriptionBox.css';

function DescriptionBox() {
    return (
        <div className='descriptionBox'>
            <div className="descriptionBox-navigator">
                <div className="descriptionBox-nav-box">Description Box</div>
                <div className="descriptionBox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionvox-description">
                <p>An E-Commerce website is an online platfrom that facilitate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat repellendus maiores enim eveniet obcaecati nesciunt saepe, aliquid hic dicta voluptates non reprehenderit. Quam nam enim qui, quo veritatis impedit.
                </p>
                <p>E-Commerce websites typically display products or services a detailed descriptions,images,prices,and any available</p>
            </div>

        </div>
    );
}

export default DescriptionBox;