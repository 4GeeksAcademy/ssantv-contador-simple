import React from "react";
import Timer from "./Timer.jsx"
import Button from "./Button.jsx";

const Home = ({ timer, resetTimer, countdown, stop }) => {
	const digits = String(timer).padStart(6, "0").split("");
	return (
		<>
			<div className="row justify-content-center m-4">
				<Timer value={digits[0]} />
				<Timer value={digits[1]} />
				<Timer value={digits[2]} />
				<Timer value={digits[3]} />
				<Timer value={digits[4]} />
				<Timer value={digits[5]} />
			</div>

			<div className="d-flex justify-content-center gap-2 mb-3">
				<Button text="Reiniciar en 0" color="btn btn-success" onClick={resetTimer} />
				<Button text="Parar contador" color="btn btn-danger" onClick={stop} />
			</div>
			<div className="d-flex justify-content-center gap-2 mb-3">
				<Button text="Cuenta atrás de 5" color="btn btn-dark" onClick={() => countdown(5)} />
				<Button text="Cuenta atrás de 10" color="btn btn-secondary" onClick={() => countdown(10)} />
				<Button text="Cuenta atrás de 20" color="btn btn-outline-secondary" onClick={() => countdown(20)} />
			</div >
		</>
	)
};

export default Home;