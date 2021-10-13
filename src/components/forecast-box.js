import React from 'react';
import db from '../libs/dateBuilder.js';

class ForecastBox extends React.Component {

    render() {

        const days = this.props.fcDaily.map((day) =>
            <div className="wrapper">
                <div className="date">{db.shortDate(new Date(day.dt * 1000))}</div>
                <div className="temp">{`${Math.round(day.temp.day)}°C`}</div>
                <div className="icon"><img src={this.props.api.iconBase.replace('ICON', day.weather[0].icon)} alt="" /></div>
            </div>
        );

        return (
            <>
                <div className="forecast-box">
                    <div className="container">
                        {days}
                    </div>
                </div>
            </>
        )
    }

}
export default ForecastBox;