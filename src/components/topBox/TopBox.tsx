import "./topBox.scss";
import { topScores } from "../../data";

const TopBox = () => {
    return (
    <div className="topBox"> 
    <h1>Top Scores</h1> 
    <div className="list">
        {topScores.map(user=>(
            <div className="listItem" key={user.id}>
                <div className="user">
                    <img src="/profile.svg" alt="" />
                    <div className="userTexts">
                        <span className="username">{user.username}</span>
                        <span className="email">{user.email}</span>
                        </div>
                </div>
                <span className="score">PTS {user.score}</span>
            </div>
        ))}
    </div>
    </div>
    )
}

export default TopBox