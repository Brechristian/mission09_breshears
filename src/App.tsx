import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import BballTeams from './CollegeBasketballTeams.json';

interface TeamData {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <div className="text-center mb-4">
      <h1>
        <br />
        <br />
        Welcome to the website that talks about all the NCAA basketball teams
      </h1>
      <h2>Their school name, mascot, and location (city, state)</h2>
      <br />
      <br />
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div className="col-md-4 mb-4">
        <div className="card p-2">
          {' '}
          {/* Adjusted padding here */}
          <div className="card-body">
            <h5 className="card-title">{oneTeam.school}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{oneTeam.name}</h6>
            <p className="card-text">
              {oneTeam.city}, {oneTeam.state}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function AllTeamsList() {
  const teams: TeamData[] = BballTeams.teams;
  return (
    <div className="row">
      {teams.map((oneTeamblah: TeamData) => (
        <Team key={oneTeamblah.tid} {...oneTeamblah} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App container">
      <Welcome />
      <AllTeamsList />
    </div>
  );
}

export default App;
