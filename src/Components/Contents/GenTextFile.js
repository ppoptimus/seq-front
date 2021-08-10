import React, { useState, useEffect } from "react"
import axios from "axios"

export default function GenTextFile() {
	const [resBody, setResBody] = useState([])
	
	let request_code = "64003"
	
	const getData = () => {
		axios({
			url: "http://localhost:5000/api/getDataToExport",
			method: "POST",
			headers: { "Content-Type": "application/json" },
			data: JSON.stringify({
				request_code: request_code,
				document_set_no: "รง-00013",
				ip_address: "192.168.1.3",
				user_name: "pumpo",
			}),
		}).then((res) => {
			if (res.status == 204) {
				handleClick(request_code);
			}
		})
	}

	const handleClick = (request_code) => {
		console.log(request_code)
		let url = `http://localhost:5000/api/download?request_code=${request_code}`
		console.log(url)
		window.open(url);
	  };

	return (
		<div className='container-fluid wrapper'>
			<div className='content-wrapper'>
				<button className='btn bg-primary' onClick={getData}>
					GET
				</button>
				
			</div>
		</div>
	)
}
