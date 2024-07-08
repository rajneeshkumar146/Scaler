import React from 'react'
import { message, Table } from "antd"
import { HideLoading, ShowLoading } from '../../redux/loaderSlice';

function TheatreTable() {
    const [theatres, setTheatres] = useState([]);
    const dispatch = useDispatch();

    const getData = async () => {
        try {
            dispatch(ShowLoading());

        } catch (err) {
            dispatch(HideLoading());
            message.error(err.message);
        }
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Owner",
            dataIndex: "owner",
            render: (text, data) => {
                return data.owner && data.owner.name;
            },
        },
        {
            title: "Phone Number",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (status, data) => {
                if (data.isActive) {
                    return "Approved";
                } else {
                    return "Pending/ Blocked";
                }
            },
        },
        {
            title: "Action",
            dataIndex: "action",
            render: (text, data) => {
                return (
                    <div className="d-flex align-items-center gap-10">
                        {data.isActive ? (
                            <Button onClick={() => handleStatusChange(data)}>Block</Button>
                        ) : (
                            <Button onClick={() => handleStatusChange(data)}>Approve</Button>
                        )}
                    </div>
                );
            },
        },
    ];

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {theatres && theatres.length > 0 && (
                <Table dataSource={theatres} columns={columns} />
            )}
        </>
    );
}

export default TheatreTable