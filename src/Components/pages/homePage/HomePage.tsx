import React, {useEffect, useState} from "react";
import ListOfTasks from "../../../Helper/ListofTasks/ListOfTasks";
import axios from "axios";
const HomePage = () => {

    const [newListOfTasks, setNewListOfTasks] = useState([]);

    useEffect(() => {
        axios.get('http://backend.local/')
            .then(response => setNewListOfTasks(response.data));
    });

    return (
        <div className={"home-page"}>
            <h2>
                To do list
            </h2>
            <div className="home-page__to-do-list-container">
                <div className="active-tasks">
                    <ol>
                        <ListOfTasks status={"active"} list={newListOfTasks}/>
                    </ol>
                </div>
                <div className="line"></div>
                <div className="closed-tasks">
                    <ol>
                        <ListOfTasks status={"closed"} list={newListOfTasks}/>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default HomePage;