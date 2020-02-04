import React, { useState } from 'react';

import Select from './components/Select';

function App() {
	let [board, setBoard] = useState('');
	let data = {
	    Personal: [
	      {name: "Goals", id: "003", groupName: "Personal"},
	      {name: "Daily", id: "004", groupName: "Personal"},
	      {name: "Production", id: "005", groupName: "Personal"},
	      {name: "Family", id: "006", groupName: "Personal"},
	      {name: "Films", id: "007", groupName: "Personal"},
	      {name: "To-do", id: "008", groupName: "Personal"},
	      {name: "Pet project", id: "009", groupName: "Personal"},
	      {name: "Startup", id: "010", groupName: "Personal"},
	    ],
	    Company: [
	      {name: "Daily", id: "011", groupName: "Company"},
	      {name: "Meetings", id: "012", groupName: "Company"},
	      {name: "Work", id: "013", groupName: "Company"}
	    ],
	    Niko: [
	      {name: "Daily", id: "014", groupName: "Niko"},
	      {name: "Work", id: "015", groupName: "Niko"}
	    ]
	}
  return (
  	<>
      <Select 
      	label="Select a board:"
      	placeholder="Select or type..."
      	notFound="Not found"
      	selected={(a)=>{setBoard(a)}}
      	disable={false}
      	data = {data}
      />
      <p className="text-center">{board}</p>
     </>
  );
}

export default App;
