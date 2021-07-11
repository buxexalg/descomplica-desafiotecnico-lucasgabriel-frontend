import { gql } from '@apollo/client';

export const ADD_STUDENT = gql`
	mutation {
		addStudent($name: String, $cpf: String, $email: String) {
			name
			cpf
			email
		}
	}
`;
