import * as React from 'react';
import { useParams, NavLink, Link } from 'react-router-dom';
import type { IChirp } from '../utils/interfaces';



const Details: React.FC<DetailsProps> = () => {
	const { id } = useParams();

	const [chirp, setChirp] = React.useState<IChirp | null>(null); //this will union the types, it can be either null or provide the details
	React.useEffect(() => {
		(async () => {
			const res = await fetch(`/api/chirps/${id}`);
			if (res.ok) {
				const chirp = await res.json();

				setChirp(chirp);
			}
		})();
	}, [id]);

	return (
		<main className="container">
			<section className="row my-2 justify-content-center">
				<div className='col-md-12'>
					<div className="card">
						<div className="card-body">
							
							<h4 className="card-title">@{chirp?.username}</h4>
							
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-between">
								<Link to="/" className="btn btn-outline-secondary" >Go Back </Link>
								<Link to={`/editing/${id}`} className="btn btn-outline-info ml-2" >editing </Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

interface DetailsProps { }

export default Details;
