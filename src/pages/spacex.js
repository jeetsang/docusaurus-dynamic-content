import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';

function Rockets() {
    const [rockets, setRockets] = React.useState([])
    React.useEffect(async () => {
        const res = await fetch("https://api.spacexdata.com/v3/rockets")
        const body = await res.json()
        setRockets(body);
    }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>Rocket Id</th>
                    <th>Rocket Name</th>
                    <th>Rocket Type</th>
                    <th>First Flight</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {rockets.map((rocket, i) => {
                    return (
                        <tr key={i}>
                            <td>{rocket.rocket_id}</td>
                            <td>{rocket.rocket_name}</td>
                            <td>{rocket.rocket_type}</td>
                            <td>{rocket.first_flight}</td>
                            <td>{rocket.country}</td>
                        </tr>)
                })}
            </tbody>
        </table>

    )
}

function SpaceX() {

    return (
        <Layout title="Hello">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    fontSize: '20px',
                }}>
                <BrowserOnly>
                    {() => <Rockets></Rockets>}
                </BrowserOnly>
            </div>
        </Layout>
    );
}

export default SpaceX;