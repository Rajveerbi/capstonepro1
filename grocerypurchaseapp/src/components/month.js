import React from 'react';

class month extends React.Component {

    constructor() {
        super()
        this.state = {
            currentMonth: new Date().getMonth()
        }
    }
    render() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const monthstyle={
            color: "black",
            padding: "113px",
            textAlign: "center",
            margintop: "1em",
            font: "35px Arial",
            
                
        }
        return (
            <div style={monthstyle}>
                <h1 >
                    Plan for the month of {monthNames[this.state.currentMonth]}
                </h1>
            </div>
        );
    }

}
export default month