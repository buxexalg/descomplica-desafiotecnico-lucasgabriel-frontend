import React from 'react';
import './styles.scss';
import { useForm } from 'react-hook-form';
import logo from '../../assets/logos/logo.svg';
import { GetStudent } from '../../components/GetStudents/GetStudent';
import SearchButton from '../../components/SearchButton/SearchButton';

type StudentData = {
	dadosDoAluno: string;
};

function Homepage() {
	const { register, handleSubmit } = useForm<StudentData>();

	const onSubmit = handleSubmit((data) => setFormData(data));

	const [formData, setFormData] = React.useState<StudentData>();

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

					<SearchButton />
				</form>
			</section>

			{formData && <GetStudent formData={formData} />}
		</section>
	);
}

export default Homepage;
