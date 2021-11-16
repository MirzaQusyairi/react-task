import { React, useEffect, useState } from 'react'
import { Navbar, Card } from '../../Components'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

function News() {
    // const URL = "https://api.thenewsapi.com/v1/news/top?api_token=5wGlgJmd3lz24x83eZJb8gPWAElDbPl3W3sNubeW"
    const URL = "https://newsapi.org/v2/top-headlines?country=id&apiKey=aa9d267d836649b69cbe650b35cc8764"

    const [news, setNews] = useState([]);
    const [err, setError] = useState("");

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        const handleFetch = async () => {
            let result;
            try {
                result = await axios.get(URL, { cancelToken: source.token });
                setNews(result.data.articles);
            } catch (error) {
                setError(error);
            }
        };
        handleFetch();
        return () => {
            source.cancel();
        };
    }, []);


    return (
        <div className="text-center">
            <Navbar />
            <div style={{ top: '150px', paddingTop: '125px' }}><h2>News Today</h2></div>
            <div className="container-fluid d-flex justify-content-center position-absolute p-5" style={{ top: '150px' }}>

                <div className="row">
                    {news.map((item) => (
                        <div className="col-md-4 mb-5">
                            <Card key={uuidv4()}
                                title={item.title}
                                content={item.description}
                                url={item.url}
                                image={item.image_url} />
                        </div>
                    ))
                    }
                    {news.length === 0 && <h5>{err}</h5>}
                </div>

                {console.log(news)}
            </div>
        </div>
    )
}

export default News
