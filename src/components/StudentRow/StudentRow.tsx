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

function formatCPF(cpf: string) {
	cpf = cpf.replace(/[^\d]/g, '');

	return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

function StudentRow(props: studentRow) {
	const formattedCpf = formatCPF(props.item.cpf);

	return (
		<tr className="studentRow" key={props.key}>
			<td className="left">{props.item.name}</td>
			<td className="center">{formattedCpf}</td>
			<td className="right">{props.item.email}</td>
		</tr>
	);
}

export default StudentRow;
