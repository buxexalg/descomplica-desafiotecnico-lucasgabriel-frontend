import { gql } from '@apollo/client';

export const GET_STUDENT = gql`
	query getStudent($name: String, $cpf: String, $email: String) {
		getStudent(name: $name, cpf: $cpf, email: $email) {
			name
			cpf
			email
		}
	}
`;
