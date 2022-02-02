import React from "react";
import PropTypes from "prop-types";
import image from "../../img/dog1.png";
import "../../styles/index.css";

const Card = (props) => {
	return (
		<div className="col-md-3">
			<div className="card">
				<img src={image} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{props.titleCard}</h5>
					<p className="card-text">{props.textCard}</p>
				</div>
				<div className="card-footer text-muted">
					<a
						href={props.buttonLink}
						id="buttoncard"
						className="btn btn-primary">
						{props.LabelUrl}
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	titleCard: PropTypes.string,
	textCard: PropTypes.string,
	buttonLink: PropTypes.string,
	LabelUrl: PropTypes.string,
};
export default Card;

// cuando tenemos un texto con apostrofe (') debemos encerrar el text entre llaves y luego enter comillas para que pueda aceptar el  apostrofe (').

{
	/* <p className="card-text">
	{
		"Some quick example text to build on the card title and make up the bulk of the card's content."
	}
</p> */
}

{
	/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
