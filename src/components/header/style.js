import { Link } from "react-router-dom"
import styled from "styled-components"
export const Container = styled.div`
display:flex;
align-items:center;
background:rgba(45,136,255);
color:white;
padding:1% 3%;
position:sticky;
top:0;
z-index:10;
left:0;
right:0;
box-sizing:border-box;
// width:100%;
`
export const Logo = styled(Link)`
margin:0;
font-size:1.5rem;
font-weight:bold;
width:calc(100%/3);
color:white;
text-decoration:none;
`
export const Search = styled.div`
width:calc(100%/3);
position:relative;
.icon{
    height:100%;
    position:absolute;
    top:0%;
    left:2%;
    display:flex;
    align-items:center;
    svg{
        color:black;
    }

}
input{
    width:100%;
    border-radius:20px;
    padding:0.3rem 6%;
    outline:none;
    border:none;
    box-sizing:border-box;

}
@media screen and (max-width:800px)
{
    display:none;
}
`
export const Links = styled.ul`
&{
    list-style-type:none;
    display:flex;
    margin:0;
    a{
        text-decoration:none;
        color:white;
    }
    li+li{
        margin-left:5%;
    }
}
@media screen and (max-width:800px)
{
    display:none;
}
`
export const Notifications = styled.ul`
&{
    list-style-type:none;
    display:flex;
    margin:0;
    li{
        cursor:pointer;
    }
    li+li{
        margin-left:6%;
    }
}
`
export const User = styled.div`
position:relative;
.avatar
{
    width:40px;
    height:40px;
    overflow:hidden;
    border-radius:50%;
    img{
        width:100%;
    }

}
.pannel{
    position:absolute;
    background:white;
    right:40%;
    width:120%;
    padding:0.5rem;
    border-radius:10px;
    height:fit-content;
    & a{
        display:flex;
        text-decoration:none;
        color:black;
        padding:0.5rem;
        border-radius:10px;
        cursor:pointer;
        &:hover{
            background:rgb(240,242,245);
        }
        .wp-username
        {
            padding-left:0.5rem;
            p{
                margin:0;
            }
            .username{
                font-weight:bold;
            }
        }
    }
    & button{
        border:none;
        border-radius:10px;
        width:100%;
        padding:0.5rem 0rem;
        background:white;
        cursor:pointer;
        &:hover{
            background:rgb(240,242,245);
        }
    }
    
}
@media screen and (max-width:800px)
{
    display:none;
}

`
export const OtherSections = styled.div`
display:grid;
grid-template-columns:repeat(3,1fr);
justify-content:space-between;
align-items:center;
`
export const ListUser=styled.ul`
position:absolute;
background:white;
width:100%;
list-style-type:none;
padding:1rem;
border-radius:5px;
box-shadow:1px 1px 1px 1px rgba(0,0,0,0.3);
li{
    a{
        display:block;
        padding:0.5rem 0.5rem;
        color:black;
        text-decoration:none;
        &:hover{
            background:rgb(237,239,242);
        }
        border-radius:5px;
        display:flex;
        align-items:center;
        .avatar{
            width:40px;
            height:40px;
            border-radius:50%;
            overflow:hidden;
            img{
                width:100%;
            }
        }
        .username{
            margin-left:1rem;
            font-weight:bold;
        }
    }
}
`
export const ResponsiveMenu=styled.div`
@media screen and (min-width:800px)
{
    display:none;
}
& > svg{
    position:absolute;
    right:30px;
    top:30%;
}
.menu{
    list-style-type:none;
    padding:0;
    position:absolute;
    left:0;
    background:white;
    width:100%;
    li{
        a{
            padding:0.5rem 1rem;
            display:block;
            text-decoration:none;
            color:black;
            box-sizing:border-box;
            svg{
                margin-right:5%;
            }
        }
        &:hover{
            background:rgba(0,0,0,0.1);
        }
    }
}
`