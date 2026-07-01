import React from 'react'
import { Dropdown, DropdownButton, Button, ButtonGroup } from 'react-bootstrap';

const WeatherButton = ({selectedCity, cities, setCity}) => {
  return (
    <div className="weather-button-group">
        <Button className="weather-button" 
                variant={selectedCity?'warning':'light'}
                onClick={() => setCity(null)}>
                    Current Location
        </Button>

        <DropdownButton className="weather-button"
                        variant={selectedCity?'light':'warning'} 
                        as={ButtonGroup}
                        title="Cities">
                {cities.map((item, index) => {
                    return <Dropdown.Item as={Button} eventKey={index} key={index} 
                                className={selectedCity===item ? 'selected' : ''}
                                onClick={() => setCity(item)}>
                                {item}
                            </Dropdown.Item>
                })}
        </DropdownButton>
        <div className="city-button-group">
            {cities.map((item, index) => {
                return <Button className="weather-button" key={index}
                            variant={selectedCity===item ? 'light' : 'warning'}
                            onClick={() => setCity(item)}>
                            {item}
                        </Button>
            })}
        </div>
    </div>
  )
}

export default WeatherButton
