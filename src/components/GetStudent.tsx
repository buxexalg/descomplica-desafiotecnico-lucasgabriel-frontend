import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_STUDENT } from '../graphql/Queries';
import Loader from 'react-loader-spinner';

export function GetStudent(props: any) {
	type Student = {
		name: string;
		cpf: string;
		email: string;
	};

	const [student, setStudent] = React.useState<Student[]>([]);

	const { error, loading, data } = useQuery(GET_STUDENT, {
		variables: props.studentVariables,
	});

	React.useEffect(() => {
		console.log(error, loading, data);

		if (data) {
			setStudent(data.getStudent);
		}
		console.log(student);
	}, [data]);

	return (
		<>
			<div>
				{loading && (
					<Loader type="TailSpin" color="#FFF" height={80} width={80} />
				)}
			</div>

			<div>
				{student && (
					<section className="uepa">
						{student.map((item) => {
							return (
								<>
									<span>{item.name}</span>
									<span>{item.cpf}</span>
									<span>{item.email}</span>
								</>
							);
						})}
					</section>
				)}
			</div>
		</>
	);
}
