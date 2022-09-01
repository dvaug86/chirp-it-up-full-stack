import * as React from 'react';
import { useParams, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { IChirp } from '../utils/interfaces';

const Editing: React.FC<EditingProps> = props => {
    const {id} = useParams();
	const navigate = useNavigate();
	const [user, setUser] = React.useState<string>('');
	const [message, setMessage] = React.useState<string>('');
	
	React.useEffect(() =>{
		(async () => {
			const res = await fetch(`/api/chirps/${id}`);
			if (res.ok){
				const chirp = await res.json();
				setUser(chirp.user);
				setMessage(chirp.message);
			}
		})();
	},[id]);
	
const saveChange = async (e: React.MouseEvent<HTMLButtonElement>) => {
	e.preventDefault();
	let res = await fetch(`/api/chirps/${id}`, {
		method: "PUT",
		headers: {
			"message-type": "application/json",
		},
		body: JSON.stringify({user, message})
	});
	if (res.ok){
		navigate("/");
		}else {
			console.log("error in saveChange")
		}
	}

	const deleteChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		let res = await fetch(`/api/chirps/${id}`, {
			method: "DELETE"
		});
		if (res.ok){
			navigate("/");
			}else {
				console.log("error in deleteChirp")
			}
		};


	return (
		<main className="container">
			<section className="row my-2 justify-message-center">
				<div className='col-md-6'>
					<form action="" className="form-group p-3 border border-primary rounded">
						<label htmlFor="username">Username</label>
						<input onChange ={(e) => setUser(e.target.value)} type="text" className="form-control" />
						<label htmlFor="message">Chirp</label>
						
						<textarea value={message} onChange ={(e) =>setMessage(e.target.value) } rows={8} className="form-control" />
						
						<button onClick={saveChange} className="btn btn-secondary btn-block mx-auto w-50 mt-3">Save Edit!</button>
						<button onClick={deleteChirp} className="btn btn-secondary btn-block mx-auto w-50 mt-3">Delete Chirp!</button>
					</form>

				</div>
			</section>
		</main>
	);
};

interface EditingProps{}

export default Editing;
