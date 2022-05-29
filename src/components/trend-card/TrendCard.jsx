import React from 'react'
import "./TrendCard.css"
import {TrendData} from "../../data/TrendData"

const TrendCard = () => {
  return (
    <div className='trend-card'>

      <h3>Trends for you</h3>
      
      {
            TrendData.map((trend,index)=>{
              return(
                <div key={index} className="trend">
                  <span>#{trend.name}</span>
                  <span>{trend.shares}k shares</span>
                </div>
              )
            })
      }
    </div>
  )
}

export default TrendCard