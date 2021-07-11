import React from 'react';
import './styles.scss';

function StudentRow(props: any) {
	return (
		<tr className="studentRow" key={props.key}>
			<td className="left">{props.item.name}</td>
			<td className="center">{props.item.cpf}</td>
			<td className="right">{props.item.email}</td>
		</tr>
	);
}

export default StudentRow;
