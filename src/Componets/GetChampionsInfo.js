import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination'
import 'bootstrap/dist/css/bootstrap.min.css';


const GetChampionsInfo = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [version, setVersion] = useState('10.11.1');
    const [champions, setChampions] = useState([]);


    useEffect(() => {
        fetch("http://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion.json")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(Object.keys(result.data));
                    setIsLoaded(true);
                    setChampions(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    const championsTableData = Object.values(champions).map((champ) =>
        <tr>
            <td>
                {champ.key}
            </td>
            <td>
                {champ.name}
            </td>
            <td>
                {champ.title}
            </td>
        </tr>
    );


    return (
        <Pagination size="sm">
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {championsTableData}
                </tbody>
            </Table>
        </Pagination>

    );
}

// const GetVersions = () => {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [version, setVersion] = useState([]);

//     useEffect(() => {
//       fetch("https://ddragon.leagueoflegends.com/api/versions.json")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             setIsLoaded(true);
//             setVersion(result.values().next().value);
//           },
//           (error) => {
//             setIsLoaded(true);
//             setError(error);
//           }
//         )
//     }, [])

//     return version;
//   }

export default GetChampionsInfo;
