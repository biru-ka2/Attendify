import React from 'react'
import './HorizontalCard.css'
import { ListChecks, MilestoneIcon } from 'lucide-react'

const HorizontalCard = ({ image, title, desc }) => {
    return (
        <div className='horizontal-card'>
            <div className="horizontal-card-image">
                <img src={image} alt="image" />
            </div>
            <div className="horizontal-card-content">
                <h3 className='title flex flex-inline gap-1.5'><MilestoneIcon />{title}</h3>
                <p className='desc'>{desc}</p>
            </div>
        </div>
    )
}

export default HorizontalCard

