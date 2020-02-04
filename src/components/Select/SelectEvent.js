import React from 'react'

export default function(props){
	return <>{
		props.empty 
		?
			props.open 
			?
				<div onClick={props.dropDown} className="select-event open"></div>
			:
				<div onClick={props.dropDown} className="select-event"></div> 
		: 
			<div onClick={props.clean} className="select-event notempty"></div>                             
	}</>
}