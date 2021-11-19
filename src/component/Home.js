import { useEffect, useState } from 'react'
import PassengerInput from './PassengerInput'
import ListPassenger from './ListPassenger'
import Header from './Header'
import useGetPassengerAll from '../Hooks/useGetPassengerAll'
import useGetPassengerByID from '../Hooks/useGetPassengerByID'
import useInsertPassenger from '../Hooks/useInsertPassenger'
import useUpdatePassenger from '../Hooks/useUpdatePassenger'
import useDeletePassenger from '../Hooks/useDeletePassenger'
import useSubscribePassenger from '../Hooks/useSubscribePassenger'
import Loading from './Loading'

export default function Home() {
    const [userID, setUserID] = useState("")
    const [passenger, setPassenger] = useState()

    const { data, loading, error, subscribePassenger } = useGetPassengerAll()
    const { dataSearch, getPassenger, loadingSearch, errorSearch } = useGetPassengerByID()
    const { insertPassenger, loadingInsert } = useInsertPassenger()
    const { updatePassenger, loadingUpdate } = useUpdatePassenger()
    const { deletePassenger, loadingDelete } = useDeletePassenger()
    const { dataSubs, loadingSubs, errorSubs } = useSubscribePassenger()

    useEffect(() => {
        if (!loading && !dataSearch && userID === "") {
            subscribePassenger()
            setPassenger(dataSubs?.anggota)
        }
        if (dataSearch && userID !== "") {
            setPassenger(dataSearch?.anggota)
        }
    }, [subscribePassenger, loading, dataSubs, dataSearch, userID])

    if (error || errorSearch || errorSubs) {
        console.log(error)
        console.log(errorSearch)
        console.log(errorSubs)
        return null
    }

    if (loading || loadingSearch || loadingInsert || loadingDelete || loadingUpdate || loadingSubs) {
        return <Loading />
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
        // getPassenger({
        //     variables: {
        //         id: userID === "" ? 0 : userID,
        //     },
        // })
        if (userID === "") {
            setPassenger(() => {
                return data.anggota;
            })
        } else {
            getPassenger({
                variables: {
                    id: userID,
                },
            })
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
            <form form onSubmit={onGetData}>
                <label>Search By ID </label>
                <input value={userID} onChange={onChangeID} placeholder="input id here..."></input>
            </form><br />
            <ListPassenger passenger={passenger} editPengunjung={editPengunjung} hapusPengunjung={hapusPengunjung} />
            <PassengerInput tambahPengunjung={tambahPengunjung} />
        </div>
    );

}
