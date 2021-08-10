import axios from "axios"
import React, { useState } from "react"
import SearchCriteria from "./SearchCriteria"


const SearchData = () => {
	const [res, setRes] = useState(null)
	const [startDate, setStartDate] = useState(new Date())
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

	const searchData = {
		method: "post",
		url: "http://192.168.233.134:5000/api/getRequestDetail",
		headers: { 
			"Content-Type": "application/json",
		},
		data: data,
	}

	const check = () => {
		axios(searchData)
			.then(function (response) {
				setRes(JSON.stringify(response.data))
			})
			.catch(function (error) {
				console.log(error.headers)
		})
	}
	

	return (
		<div className='content-wrapper'>
			<SearchCriteria/>
			<div className='container'>
				Result
			</div>
			
		</div>
	)
}

export default SearchData
