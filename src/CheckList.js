import './css/CheckList.css';
import Task from "./Components/Task/task";

function CheckList() {
    return (
        <section className="check-list">
            <h1>Check List</h1>
            <div className="check-list__table">
                <div className="active-task">
                    <h2>In progress</h2>
                    <ol>
                        <Task/>
                    </ol>
                </div>
                <div className="complete-task">
                    <h2>Done</h2>
                    <ol>

                    </ol>
                </div>
            </div>
        </section>
    );
}
export default CheckList;
