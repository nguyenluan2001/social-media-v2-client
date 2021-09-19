import React, { useContext, useState } from 'react'
import {
    Container,
    Search, Logo,
    Links, Notifications,
    User, OtherSections, ListUser
} from "./style"
import { FaUserAlt, FaComment, FaBell, FaSearch } from "react-icons/fa"
import { Link, useHistory } from "react-router-dom"
import { AuthContext } from "../../services/context/Auth"
import { search } from "../../graphql-client/user/mutation"
import { useMutation } from "@apollo/client"
function Header() {
    const { authUser, setIsAuthenticated } = useContext(AuthContext)
    const [togglePannel, setTogglePannel] = useState(false)
    const [toggleUpdateProfile, setToggleUpdateProfile] = useState(false)
    const [toggleListUser, setToggleListUser] = useState(false)
    const [listUser, setListUser] = useState([])
    const [keyword, setKeyword] = useState("")
    const [searchMutation, dataMutation] = useMutation(search)
    const history = useHistory()
    function handleLogout() {
        localStorage.removeItem("token")
        setIsAuthenticated(false)
        history.push("/login")
    }
    function handleChangeSearch(e) {
        if (e.target.value) {
            setToggleListUser(true)
            searchMutation({
                variables: {
                    keyword: e.target.value
                },
                update: (cache, { data: searchMutation }) => {
                    console.log("search", searchMutation)
                    setListUser(searchMutation.search)
                }
            })
        }
        else {
            setToggleListUser(false)
        }
    }
    return (
        <Container>
            <Logo to="/">MySocial</Logo>
            <Search>
                <input type="text" onChange={(e) => handleChangeSearch(e)} />
                <div className="icon">
                    <FaSearch></FaSearch>
                </div>
                {toggleListUser && <ListUser>
                    {
                        listUser.map(item => {
                            return <li>
                                <Link to={`/user/${item.id}`} onClick={()=>setToggleListUser(false)}>
                                    <div className="avatar">
                                        <img src={item.avatar} alt="" />
                                    </div>
                                    <span className="username">{item.username}</span>
                                </Link>
                            </li>
                        })
                    }

                </ListUser>}
            </Search>
            <OtherSections>
                <Links>
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/">Timeline</Link>
                    </li>
                </Links>
                <Notifications>
                    <li>
                        <span><FaUserAlt></FaUserAlt></span>
                    </li>
                    <li>
                        <span><FaComment></FaComment></span>
                    </li>
                    <li>
                        <span><FaBell></FaBell></span>
                    </li>
                </Notifications>
                <User>
                    <div className="avatar" onClick={() => setTogglePannel(pre => !pre)}>
                        {
                            authUser?.avatar
                                ? <img src={authUser?.avatar} />
                                :
                                <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" />
                        }
                    </div>
                    {togglePannel && <div className="pannel">
                        <Link to={`/user/${authUser.id}`}>
                            {
                                authUser?.avatar
                                    ? <img src={authUser?.avatar} />
                                    :
                                    <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" />
                            }
                            <div className="wp-username">
                                <p className="username">{authUser?.username}</p>
                                <p>View your profile</p>
                            </div>
                        </Link>
                        <hr />
                        <button onClick={() => handleLogout()}>Log out</button>
                    </div>}
                </User>

            </OtherSections>

        </Container>
    )
}

export default Header
