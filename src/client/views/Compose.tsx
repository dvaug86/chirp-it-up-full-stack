import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Compose: React.FC<ComposeProps> = props => {
	const history = useNavigate();

	const [user, setUser] = React.useState<string>('');
	const [message, setMessage] = React.useState<string>('');

	const userNameset = (e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value);
	const messageSet = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value);

	const submitChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const res = await fetch('/api/chirps', {
			method: 'POST',
			headers: {
				'message-Type': 'application/json'
			},
			body: JSON.stringify({ user , message })

		});
		if (res.ok) {
			const result = await res.json();
			console.log(result);
			history(`/details/${result.chirpid}`);
		}
	}

	return (
		<main className="container">
			<section className="row my-2 justify-message-center">
				<div className='col-md-6'>
					<form action="" className="form-group p-3 border border-primary rounded">
						<label htmlFor="username">Username</label>
						<input onChange ={userNameset} type="text" className="form-control" />
						<label htmlFor="message">Chirp</label>
						<textarea value={message} onChange ={messageSet} rows={8} className="form-control" />
						<button onClick={submitChirp} className="btn btn-secondary btn-block mx-auto w-50 mt-3">Submit!</button>
					</form>

				</div>
			</section>
		</main>
	);
};

interface ComposeProps { }

export default Compose;
