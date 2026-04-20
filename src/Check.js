import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Check.css";


function Check() {
    const location = useLocation();
    const [selectedMobile, setSelectedMobile] = useState(null);

    useEffect(() => {
        if (location.state && location.state.mobile) {
            setSelectedMobile(location.state.mobile);
        }
    }, [location.state]);

    const downloadImage = () => {
        if (selectedMobile?.image) {
            const link = document.createElement('a');
            link.href = selectedMobile.image;
            link.download = `${selectedMobile.brand}_${selectedMobile.model}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="full">
            <div className="container">

                <div className="image-container">
                    <img
                        src={selectedMobile?.image}
                        alt={selectedMobile?.model || "Mobile"}
                        onError={(e) => e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23f0f0f0' width='200' height='200'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23999'%3EImage Not Available%3C/text%3E%3C/svg%3E"}
                    />
                    <button onClick={downloadImage} className="download-btn" >
                        ↓
                    </button>

                </div>

                <div className="detail-container">
                    <h2 style={{ marginBottom: "20px" }}>{selectedMobile?.brand} {selectedMobile?.model} - Buy From</h2>

                    {!selectedMobile && <p>Loading... Please go back and select a mobile</p>}

                    <div className="product-price">
                        <div className="amazon">
                            <img src="/images/Amazon.jpg"/>
                        </div>
                        <p>{selectedMobile?.amazon ? <a href={selectedMobile.amazon} target="_blank" rel="noopener noreferrer">Visit Amazon</a> : "N/A"}</p>
                    </div>
                    <div className="product-price">
                        <div className="flipkart">
                            <img src="/images/flipkart.jpg"/>
                        </div>
                        <p>{selectedMobile?.flipkart ? <a href={selectedMobile.flipkart} target="_blank" rel="noopener noreferrer">Visit Flipkart</a> : "N/A"}</p>
                    </div>



                </div>

            </div>
            <div className="lastDiv">


            </div>
        </div>

    );
}

export default Check;