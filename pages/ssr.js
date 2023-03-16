export default function SSR({ data }) {
    console.log(data)
    return (
        <div>
            <h1>Server Side Rendering</h1>
            <p>Simulasi Server Side Rendering next.js</p>
            <div className={'w-full space-y-6'}>
                {
                    data.map((item) => {
                        return (
                            <div className={'w-full bg-gray-100 p-4'}>
                                {/* <pre>{JSON.stringify(item, null, 2)}</pre> */}
                                <p>User ID : {item.userId}</p>
                                <p>ID : {item.id}</p>
                                <p>Title : {item.title}</p>
                                <p>Body : {item.body}</p>
                                {/* <br /> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    let data = []

    await fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json()).then((response) => {
        data = response;
    }).catch((err) => {
        data = []
    })
    return {
        props: {
            data
        }
    }
}