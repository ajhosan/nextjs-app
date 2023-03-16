import { useEffect, useState } from "react"

export default function ProductList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        console.log(visible);
        if (visible) {
            setLoading(true);
            fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((result) => {
                console.log(result)
                setTimeout(() => {
                    setData(result);
                    setLoading(false);
                }, 4000)

            }).catch((err) => {
                setLoading(false);
            })
        }
    }, [visible]);

    console.log(loading, 'LOADING')
    return (
        <div>
            <h1>Product List</h1>
            {/* <button onClick={() => { setVisible(!visible); }}>Visible</button> */}

            {
                loading ? 'LOADING...' :
                    // Validasi Data
                    Array.isArray(data) && data.length > 0 &&
                    // result data
                    data.map((item) => {
                        return (
                            <div>
                                {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
                                <p>User ID : {item.userId}</p>
                                <p>ID : {item.id}</p>
                                <p>Title : {item.title}</p>
                                <p>Body : {item.body}</p>
                                <br />
                            </div>
                        )
                    })
            }
        </div>
    )
}