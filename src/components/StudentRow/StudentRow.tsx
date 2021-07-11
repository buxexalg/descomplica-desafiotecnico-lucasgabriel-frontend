import React from 'react';
import './styles.scss';

interface studentRow {
	key: number;
	item: Item;
}

interface Item {
	name: string;
	cpf: string;
	email: string;
}

function StudentRow(props: studentRow) {
	return (
		<tr className="studentRow" key={props.key}>
			<td className="left">{props.item.name}</td>
			<td className="center">{props.item.cpf}</td>
			<td className="right">{props.item.email}</td>
		</tr>
	);
}

export default StudentRow;
