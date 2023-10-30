import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AccountDetail = () => {
    const { id } = useParams();

    const [account, setAccount] = useState({});

    useEffect(() => {
        axios.get(`https://localhost:7198/api/Accounts/${id}`)
            .then(res => setAccount(res.data));
    }, []);

    return (
        <>
            <dl>
                <dt>Tên đăng nhập:</dt>
                <dd>{account.username}</dd>

                <dt>Họ tên:</dt>
                <dd>{account.fullName}</dd>

                <dt>Email:</dt>
                <dd>{account.email}</dd>
            </dl>
        </>
    );
}

export default AccountDetail;