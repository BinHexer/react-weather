import React from 'react';
import db from '../libs/dateBuilder.js';

class TodayBox extends React.Component {

    render() {
        return (
            <>
                <div className="today-box">
                    <div className="date-box">
                        <div className="date">{db.longDate(new Date())}</div>
                    </div>
                    <div className="temp">
                        {Math.round(this.props.weather.main.temp)}°C
                    </div>

                    <div className="today-icon">
                        <img src={this.props.api.iconBase.replace('ICON', this.props.weather.weather[0].icon)} alt="" />
                    </div>
                    <div className="today">
                        {this.props.weather.weather[0].main}
                    </div>
                </div>
            </>
        )
    }

}

export default TodayBox;