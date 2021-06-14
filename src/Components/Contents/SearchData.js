import axios from 'axios';
import React, {useState} from 'react';

const SearchData = () => {
    const [res, setRes] = useState(null);
	var data = JSON.stringify({
		employer_account: null,
		refference_id: null,
		first_name: null,
		last_name: "p",
		company_name: null,
		from_date: null,
		to_date: null,
		address: null,
		remark: null,
		department_id: null,
		create_by: "pumpo",
		update_by: null,
		ip_address: "192.168.1.3",
	})

	var config = {
		method: "post",
		url: "http://192.168.233.134:5000/getRequestDetail",
		headers: {
			"Content-Type": "application/json",
		},
		data: data,
	}

	const check = () => {
		axios(config)
			.then(function (response) {
				setRes(JSON.stringify(response.data))
			})
			.catch(function (error) {
				console.log(error.headers )
				
			})
	}

	return (
		<div>
      <button className="fetch-button" onClick={check}>
          Fetch Data
        </button>
			<h2>{res}</h2>
		</div>
	)
}

export default SearchData;