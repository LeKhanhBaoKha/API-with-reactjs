import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Table, Button, Modal, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const AccountList = () => {
    const [accounts, setAccounts] = useState([]);

    const [show, setShow] = useState(false);

    const [selectedAccount, setSelectedAccount] = useState();
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setSelectedAccount(accounts.find(a => a.id === id));
        setShow(true);
    }

    useEffect(() => {
        axios.get(`https://localhost:7198/api/Accounts`)
            .then(res => setAccounts(res.data));
    }, []);

    return (
        <>

            <Link to="/create">
                <Button>
                    create
                </Button>
            </Link>

            <Table>
                <thead className="table-dark">
                    <tr className="row">
                        <th className="col">Tên đăng nhập</th>
                        <th className="col">Hình ảnh</th>
                        <th className="col">Email</th>
                        <th className="col">SĐT</th>
                        <th className="col">Họ tên</th>
                        <th className="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accounts.map(item => {
                            return (
                                <tr className="row">
                                    <td className="col">{item.username}</td>
                                    <td className="col-2"><img src={`https://localhost:7198/images/avatar/${item.avatar}`} class="img-fluid" alt="img"></img></td>
                                    <td className="col">{item.email}</td>
                                    <td className="col">{item.phone}</td>
                                    <td className="col">{item.fullName}</td>
                                    <td className="col">
                                        <Button onClick={() => handleShow(item.id)}>
                                            <FontAwesomeIcon icon={faUser} />
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <Modal show={show} size="lg" onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={4}>
                            <img src={`https://localhost:7198/images/avatar/${selectedAccount?.avatar}`} class="img-fluid" alt="img"></img>
                        </Col>
                        <Col md={4}>
                            <h3>{selectedAccount?.fullName}</h3>
                            <p>{selectedAccount?.email}</p>
                            <p>{selectedAccount?.username}</p>
                        </Col>

                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AccountList;