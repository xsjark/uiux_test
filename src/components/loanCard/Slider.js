import { useEffect, useState } from "react";

function Slider({handleLoanAmount, loanAmount}) {

    return (
        <div className="w-100 m-5">
            <p className="text-center fs-5 fw-bold">${loanAmount}</p>
            <input type="range" class="form-range" min="100" max="1000" id="loanslider" onChange={(event) => handleLoanAmount(event.target.value)}></input>
            <div className="d-flex flex-row justify-content-between">
                <div>$100</div>
                <div>$1000</div>
            </div>
        </div>
    );
}

export default Slider;