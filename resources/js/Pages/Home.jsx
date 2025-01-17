import Layout from "../Layouts/Layout";
function Home({name}) {
    return (
        <>
            <h1 className="title">Hello {name}</h1>
        </>
    );
}

Home.layout = page => <Layout children={page} />

export default Home;