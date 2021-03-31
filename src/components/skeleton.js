import React from 'react';

export const Skeleton = () => {
    return(
        <>
        <div className="sk-head"></div>
        <div className="card-container">
            <div className="cards">
                <div className="sk-img"></div>
                <div className="sk-line1"></div>
                <div className="card-flex px10">
                    <div className="sk-line2"></div>
                    <div className="sk-line2"></div>
                </div>
                <div>
                <div className="ml-10 sk-line1"></div>
                <div className="btn mt-10 sk-line3"></div>
                </div>
            </div>
            <div className="cards">
                <div className="sk-img"></div>
                <div className="sk-line1"></div>
                <div className="card-flex px10">
                    <div className="sk-line2"></div>
                    <div className="sk-line2"></div>
                </div>
                <div>
                <div className="ml-10 sk-line1"></div>
                <div className="btn mt-10 sk-line3"></div>
                </div>
            </div>
            <div className="cards">
                <div className="sk-img"></div>
                <div className="sk-line1"></div>
                <div className="card-flex px10">
                    <div className="sk-line2"></div>
                    <div className="sk-line2"></div>
                </div>
                <div>
                <div className="ml-10 sk-line1"></div>
                <div className="btn mt-10 sk-line3"></div>
                </div>
            </div>
            <div className="cards">
                <div className="sk-img"></div>
                <div className="sk-line1"></div>
                <div className="card-flex px10">
                    <div className="sk-line2"></div>
                    <div className="sk-line2"></div>
                </div>
                <div>
                <div className="ml-10 sk-line1"></div>
                <div className="btn mt-10 sk-line3"></div>
                </div>
            </div>
        </div>
        </>
    )
}