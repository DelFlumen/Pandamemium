import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from "../../assets/images/user2.png";



const Users = (props) => {

    const img3 = "data:image/jpeg;base64,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"

    let avatars = {
        img1: "https://static.espreso.tv/uploads/article/2748929/images/im578x383-klichko4.png",
        img2: "https://i.ytimg.com/vi/1JDeGsSQ5Hs/hqdefault.jpg",
        img3: img3,
        img4: "https://habrastorage.org/files/861/240/a8a/861240a8a14047eea780a44e4c7debb1.jpg",
        img5: "https://uznayvse.ru/images/stories2016/uzn_1471512346.jpg"
    }

    const initialState = {
        users: [
            // { id: 1, img: avatars.img1, friend: true, fullName: "Виталий Кличко", status: "Сегодня в завтрашний день не все могут смотреть", location: { country: "Ukraine", city: "Kiev" } },
            // { id: 2, img: avatars.img2, friend: true, fullName: "Сергій Коваленко", status: "Эта нонсенс", location: { country: "Ukraine", city: "Іванівка" } },
            // { id: 3, img: avatars.img3, friend: true, fullName: "Игорь Лысак", status: "Попал в катавасию", location: {country: "Ukraine", city: "Kiev"} },
            // { id: 4, img: avatars.img4, friend: false, fullName: "ReactoCat", status: "React-разработчик, создатель Пандамемиума", location: { country: "Ukraine", city: "Kiev" } },
            // { id: 5, img: avatars.img5, friend: false, fullName: "Леонид Якубович", status: "Если сбрею усы, жена жить со мной не будет", location: { country: "Russia", city: "Moscow" } },

        ]
    }

    let getUsers = () => {
        
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then((result) => {
                props.setUsers(result.data.items);
            }).catch((err) => {
                console.log(err);
            });
            // props.setUsers(initialState.users);
        }
    }
    return (
        <div>
            
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(user => <div key={user.id}>
                    
                <span>
                    <div>
                        <img alt="ava"
                            src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.photo} />
                    </div>
                    <div>
                        {user.friend ?
                            <button
                                onClick={() => {
                                    props.delFriend(user.id)
                                }}
                            >Удалить из друзей</button> :
                            <button
                                onClick={() => {
                                    props.addFriend(user.id)
                                }}
                            >Добавить в друзья</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"user.location.country"}</div>
                        <div>{"user.location.city"}</div>
                    </span>

                </span>
            </div>)
            }
        </div>
    );
}

export default Users;