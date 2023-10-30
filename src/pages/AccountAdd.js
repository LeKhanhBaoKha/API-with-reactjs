import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AccountAdd = () => {
    const [account, setAccount] = useState({ isAdmin:false, avatar:'', status:true});

    const navigate = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setAccount(prev => ({ ...prev, [name]: value }));
    }

    const handleCheck = (e) =>{
        let name = e.target.name;
        let value = e.target.checked;
        setAccount(prev => ({ ...prev, [name]: value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://localhost:7198/api/Accounts`, account)
            .then(() => {
                navigate("/");
            });
    }

    return (
        <>
            <Form className="col-md-4" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Tên đăng nhập:</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>SDT</Form.Label>
                    <Form.Control type="number" name="phone" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Họ tên</Form.Label>
                    <Form.Control type="text" name="fullname" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Địa chỉ</Form.Label>
                    <Form.Control type="text" name="address" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Hình ảnh</Form.Label>
                    <Form.Control type="file" name="avatar" onChange={handleChange} />
                </Form.Group>
                <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="Là admin" name="isAdmin"
                />
                 <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    label="trạng thái" checked name="status"
                />
                 <div className="mt-2">
                    <Button type="submit" variant="success" onClick={handleSubmit}>Thêm</Button>
                </div>
            </Form>
        </>
    );
}

export default AccountAdd;