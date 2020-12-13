import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.scss';
import Navbar from 'react-bootstrap/esm/Navbar';
import { FormControl, InputGroup, Image, Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { setCountryList } from './statemanger/actions';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from './statemanger';

function App() {

  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState<any>({});
  const [properties,] = useState<any>([
    {key: 'Name', value: 'name'},
    {key: 'alpha3Code', value: 'alpha3Code'},
    {key: 'callingCodes', value: 'callingCodes', join: true},
    {key: "capital", value: "capital"},
    {key: "region", value: "region"},
    {key: "topLevelDomain", value: "topLevelDomain", join: true},
    {key: "timezones", value: "timezones"}
  ]);

  const country: any = useSelector((state: AppState) => state && state.Country)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCountryList());
  }, [dispatch])

  const handleClose = () => {
    setShowDetails({});
    setShow(false);
  }
  const handleShow = (d: any) => {
    console.log(d);
    setShowDetails(d);
    setShow(true);
  }


  const search = (e: any) => {
    if (e.target.value == null) {
      dispatch(setCountryList());
    } else {
      dispatch(setCountryList(e.target.value));
    }
  }

  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>

        <InputGroup className="mb-3">
          <InputGroup.Prepend className={"searchIcon"}>
            <FontAwesomeIcon icon={faSearch} style={{ color: '#ced4da' }} />
          </InputGroup.Prepend>
          <FormControl className={"searchInput"}
            onChange={search}
            placeholder="Search Countries.."
          />
        </InputGroup>

      </Navbar>
      {country && country.country && <h4 style={{ textAlign: "center" }}>Showing {country.country.length} Countries</h4>}
      <div className={"body row"}>
        {
          country && country.country.map((d: any, index: number) => {
            return (
              <div className={"col-md-4"} key={index} onClick={() => handleShow(d)}>
                <div className={"card"}>
                  <div className={"row"} style={{ padding: "3px 10px" }}>
                    <div className={"col-md-3"}>
                      <Image src={d.flag} fluid={true} style={{ height: '70px', width: "70px" }} rounded />
                    </div>
                    <div className={"col-md-9"} style={{ padding: '0px' }}>
                      <h4>{d.name}</h4>
                      <h6>{d.capital}</h6>
                    </div>
                    <div className={"col-md-12"} style={{ padding: "10px 20px" }}>
                      <h4>Population</h4>
                      <h6>{d.population}</h6>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showDetails && showDetails.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            properties.map((d: any, index: number) => {
              return (
                <div className="countrydetails row" key={index}> 
                  <div className={"col-md-6"} style={{textAlign: "end"}}><h5>{d.key}: </h5></div>
                  <div className={"col-md-6"}>
                  {(d.join) ? (<p>{showDetails && showDetails[d.value]}</p>) : (<p>{showDetails && showDetails[d.value]}</p>) }
                  </div>
                </div>
              )
            })
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default App;
