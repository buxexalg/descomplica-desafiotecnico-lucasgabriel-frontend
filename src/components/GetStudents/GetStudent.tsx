import React from 'react';
import './styles.scss';
import { useQuery } from '@apollo/client';
import { GET_STUDENT } from '../../graphql/Queries';
import Loader from 'react-loader-spinner';
import { validate } from 'email-validator';
import { isCpf } from 'validator-brazil';
import StudentRow from '../StudentRow/StudentRow';

const checkIfNameCpfOrEmail = (value: string) => {
	if (validate(value)) {
		return 'email';
	} else if (isCpf(value)) {
		return 'cpf';
	} else {
		return 'name';
	}
};

export function GetStudent(props: any) {
	type Student = {
		name: string;
		cpf: string;
		email: string;
	};

	const [student, setStudent] = React.useState<Student[]>([]);
	const [localError, setError] = React.useState<boolean>(false);

	const variable = checkIfNameCpfOrEmail(props.formData.dadosDoAluno);

	const variableGQL: any = {
		email: '',
		cpf: '',
		name: '',
	};

	if (variable === 'email') {
		variableGQL['email'] = props.formData.dadosDoAluno;
	} else if (variable === 'cpf') {
		variableGQL['cpf'] = props.formData.dadosDoAluno;
	} else {
		variableGQL['name'] = props.formData.dadosDoAluno;
	}

	const { loading, data } = useQuery(GET_STUDENT, {
		variables: variableGQL,
	});

	React.useEffect(() => {
		setStudent([]);
		setError(false);
		if (!loading && !data) {
			setError(true);
		}
		if (data) {
			if (!data.getStudent[0]) {
				setError(true);
			}
			setStudent(data.getStudent);
		}
	}, [data]);

	return (
		<>
			{loading && (
				<div className="spinLoader">
					<Loader type="TailSpin" color="#FFF" height={80} width={80} />
				</div>
			)}

			{student[0] && (
				<section className="studentList">
					<table>
						<tbody>
							{student.map((item, i) => {
								return <StudentRow key={i} item={item} />;
							})}
						</tbody>
					</table>
				</section>
			)}

			{localError && (
				<section className="errorText">
					<h1>Infelizmente não encontramos nenhum aluno com esses dados :(</h1>
				</section>
			)}
		</>
	);
}
