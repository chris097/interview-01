import React from "react"
import img from "../img/pexels-tim-douglas-6210977.jpg"


export const Cards = ({data}) => {
    return(
        <div className="card-container">
            {data.map(data => (
                <div className="cards">
                    <div><img src={img} alt=""/></div>
                    <div className="px10">{data.name}</div>
                    <div className="card-flex px10">
                        <div className="initial">Initail Price:{data.currency} {data.initialAmount}</div>
                        <div>Discount Price:{data.curremcy} {data.discountAmount}</div>
                    </div>
                    <div>
                    <div>Store: {data.store}</div>
                    <div className="btn mt-10"><a href={data.url}>Read More</a></div>
                    </div>
                </div>
            ))}
        </div>
    )
}