import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import SingleHeader from "../components/singleHeader";
import Footer from "../components/footer";
import { FaArrowCircleLeft } from "react-icons/fa";
import Card from "../components/card";

export default function SinglePage() {
    const { theme } = useTheme();
    const { slug } = useParams(); // Get slug from the URL
    const [language, setLanguage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setLoading(true);  // Ensure loading is true each time the slug changes
        fetch(`https://siitecch.onrender.com/api/languages/${slug}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to load data');
                }
                return response.json();
            })
            .then((data) => {
                setLanguage(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setLoading(false);
                setErrorMessage('No data yet, check back later please.');
            });
    }, [slug]);  // Fetch data again when the `slug` changes


    if (loading) {
        return (
            <div className="loading-container">
                <img
                    src="/images/siitecch.png"
                    alt="Loading..."
                    className="loading-image"
                />
                <p>Loading...</p>
            </div>
        );
    }

    if (errorMessage) {
        return (
            <div className="no-data-container">
                <img
                    src="/images/No-Data.svg"
                    alt="No Data Found"
                    className="no-data-image"
                />
                <p>{errorMessage}</p>
                <Link to="/"><button className="buttonback"><FaArrowCircleLeft /></button></Link>
            </div>
        );
    }

    return (
        <>
            <SingleHeader />
            <section className={`singleDisplay ${theme}`}>
                <div className="introduction">
                    <h1>{language.name}</h1>
                    <div className="javaScript">
                        <p>{language.description}</p><br />
                        <p>{language.more}</p>
                    </div>
                </div>
                <br />
                <section className="single-container">
                    {language.categories.map((category) => (
                        <Card
                            key={category.id}
                            title={category.name}
                            youtubeUrl={category.video_link} // Pass YouTube URL dynamically
                        >
                            <div className="category-content">
                                <div className="content1">
                                    <p>{category.description}</p>
                                </div>

                                <div className="content2">
                                    <p>{category.content}</p>
                                    <p>{category.answer1}</p>
                                    <p>{category.answer2}</p>
                                    <p>{category.answer3}</p>
                                </div>

                                <div className="content3">
                                    <p>{category.content1}</p>
                                    <p>{category.description1}</p>
                                    <p>{category.answer4}</p>
                                    <p>{category.answer5}</p>
                                    <p>{category.answer6}</p>
                                    <p>{category.answer7}</p>
                                </div>
                                <div className="content4">
                                    <p>{category.description2}</p>
                                    <p>{category.content2}</p>
                                </div>


                                {category.examples.map((example, idx) => (
                                    <div key={idx} className="example">
                                        <h3>{example.title}</h3>

                                        <p>{example.description}</p>
                                        <p>{example.code}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </section>
            </section>
            <Footer />
        </>
    );
}
