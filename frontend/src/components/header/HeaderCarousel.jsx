import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { indexAction } from "../../redux/dataReducer";
import pizza from "../../assets/images/pizza-circle.png";
import empanadas from "../../assets/images/empanadas-circle.png";
import postre from "../../assets/images/postre-circle.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const HeaderCarousel = ({ carouselData }) => {
    const dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const [info, setInfo] = useState("active1");
    const [rotate, setRotate] = useState("");
    const [sateliteUno, setSateliteUno] = useState("uno");
    const [sateliteDos, setSateliteDos] = useState("dos");
    const [sateliteTres, setSateliteTres] = useState("tres lastSatelite");

    const lastSatelite = document.querySelector(".tres")
    const secondSatelite = document.querySelector(".dos")
    
    useEffect(() => {
    }, [lastSatelite])

    const indexChange = (index) => {
        if (index === 0) {
            setSateliteUno("uno");
            setSateliteDos("dos");
            setSateliteTres("tres");
            setInfo("active1");
            dispatch(indexAction(0));
        } else if (index === 1) {
            setSateliteUno("tres");
            setSateliteDos("uno");
            setSateliteTres("dos");
            setInfo("active2");
            dispatch(indexAction(1));
        } else if (index === 2) {
            setSateliteUno("dos");
            setSateliteDos("tres");
            setSateliteTres("uno");
            setInfo("active3");
            dispatch(indexAction(2));
        }
    };

    const increase = (index) => {
        if (index < 2) {
            index = index + 1;
            setIndex(index);
        } else {
            index = 0;
            setIndex(index);
        }
        indexChange(index);
    };
    const decrease = (index) => {
        if (index > 0) {
            index = index - 1;
            setIndex(index);
        } else {
            index = 2;
            setIndex(index);
        }
        indexChange(index);
     };

    const handleNextCarousel = () => {
        lastSatelite.classList.add("lastSatelite")
        
        setRotate("rotate");
        setTimeout(() => {
            setRotate("");
            increase(index);
        }, 500);
    };
    const handleBackCarousel = () => {
        secondSatelite.classList.add("secondSatelite")
        
        setRotate("rotatereverse");
        setTimeout(() => {
            setRotate("");
            decrease(index);
        }, 500);
    };

    return (
        <header className="header">
            <section className="header-column_titles">
                <div className={`titles fadeIn ${info}`}>
                    <h1>Sabores caseros</h1>
                    <h3>{carouselData.subtitle}</h3>
                    <p>{carouselData.description}</p>
                </div>
            </section>

            <section className="header-column_carousel">
                <div className={`circle-bg ${carouselData.color}`}></div>
                <div className="header-column_circle">
                    <div className="circle_pricipal">
                        <img src={carouselData.image} ></img>
                    </div>

                    <div className={`satelites ${rotate} `}>
                        <img className={`satelite ${sateliteUno}`} src={pizza}></img>
                        <img className={`satelite ${sateliteDos}`} src={empanadas}></img>
                        <img className={`satelite ${sateliteTres}`} src={postre}></img>
                    </div>

                    <div className="buttons">
                        <button onClick={handleBackCarousel} className="back">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button onClick={handleNextCarousel} className="next">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </section>
        </header>
    );
};
