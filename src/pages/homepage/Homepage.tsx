import React from 'react';
import './styles.scss';
import { useForm } from 'react-hook-form';
import logo from '../../assets/logos/logo.svg';

type StudentData = {
	dadosDoAluno: string;
};

function Homepage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<StudentData>();
	const onSubmit = handleSubmit((data) => console.log(data, errors));

	return (
		<section className="homepage">
			<header className="homepageHeader">
				<a href="#">
					<img src={logo} className="homepageLogo" alt="logo" />
				</a>
			</header>
			<section className="homeMainContainer">
				<form onSubmit={onSubmit} className="studentForm">
					<div className="inputDiv">
						<label>Clique em Consultar para listar todos os alunos</label>
						<input
							{...register('dadosDoAluno')}
							placeholder="Ou insira um Nome, CPF ou E-mail para buscar."
						/>
					</div>

					<button className="searchStudentButton" type="submit">
						Consultar
					</button>
				</form>
			</section>
		</section>
	);
}

export default Homepage;
