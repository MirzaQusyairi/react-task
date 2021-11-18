import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useLazyQuery, useMutation } from "@apollo/client";
import { GetPassengerAll, GetPassengerByID } from '../GraphQL/Query'
import { InsertPassenger, UpdatePassenger, DeletePassenger } from '../GraphQL/Mutation'
import Loading from './Loading';

export default function Home() {
    const [getPassengerList, { data, loading, error }] =
        useLazyQuery(GetPassengerAll);

    const [getPassenger, { loading: loadingSearch, error: errorSearch }] =
        useLazyQuery(GetPassengerByID, {
            fetchPolicy: "network-only",
            onCompleted: (data) => {
                setPassenger(data.anggota);
            },
        });

    const [insertPassenger, { loading: loadingInsert }] = useMutation(
        InsertPassenger,
        {
            refetchQueries: [GetPassengerAll],
            awaitRefetchQueries: true,
            onCompleted: (data) => {
                setPassenger(data.anggota);
            },
        }
    );

    const [deletePassenger, { loading: loadingDelete }] = useMutation(
        DeletePassenger,
        {
            refetchQueries: [GetPassengerAll],
            awaitRefetchQueries: true,
            onCompleted: (data) => {
                setPassenger(data.anggota);
            },
        }
    );

    const [updatePassenger, { loading: loadingUpdate }] = useMutation(
        UpdatePassenger,
        {
            refetchQueries: [GetPassengerAll],
            awaitRefetchQueries: true,
            onCompleted: (data) => {
                setPassenger(data.anggota);
            },
        }
    );

    const [userID, setUserID] = useState("");
    const [passenger, setPassenger] = useState();

    useEffect(() => {
        getPassengerList();
        if (data && typeof passenger === "undefined") {
            setPassenger(data.anggota);
        }
    }, [data, passenger, getPassengerList]);

    if (error || errorSearch) {
        console.log(error);
        console.log(errorSearch);
        return null;
    }

    if (
        loading ||
        loadingSearch ||
        loadingInsert ||
        loadingDelete ||
        loadingUpdate
    ) {
        return <Loading />;
    }

    const hapusPengunjung = (id) => {
        deletePassenger({
            variables: {
                id,
            },
        });
        return data?.anggota;
    };

    const editPengunjung = (id, newData) => {
        updatePassenger({
            variables: {
                id,
                nama: newData.nama,
                umur: newData.umur,
                jenis_kelamin: newData.jenis_kelamin,
            },
        });
    };

    const tambahPengunjung = (newUser) => {
        const newPassenger = {
            id: uuidv4(),
            ...newUser,
        };
        insertPassenger({
            variables: {
                nama: newPassenger.nama,
                umur: newPassenger.umur,
                jenis_kelamin: newPassenger.jenisKelamin,
            },
        });
        return data?.anggota;
    };

    const onGetData = () => {
        if (userID === "") {
            setPassenger(() => {
                getPassengerList();
                return data.anggota;
            });
        } else {
            getPassenger({
                variables: {
                    id: userID,
                },
            });
        }
    };

    const onChangeID = (e) => {
        if (e.target) {
            setUserID(e.target.value);
        }
    };

    return (
        <div>
            <Header />
            <input value={userID} onChange={onChangeID} placeholder="input id here..."></input>
            <button onClick={onGetData}>Get Data</button><br /><br />
            <ListPassenger passenger={passenger} editPengunjung={editPengunjung} hapusPengunjung={hapusPengunjung} />
            <PassengerInput tambahPengunjung={tambahPengunjung} />
        </div>
    );

}
