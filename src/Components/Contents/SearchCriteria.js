import React, { useState } from "react";

const SearchCriteria = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="container">
             <input type="date" className="form-group"></input>
        </div>
      );
}

export default SearchCriteria