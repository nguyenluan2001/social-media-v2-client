import styled from "styled-components";
export const Container = styled.div`
background:white;
border-radius:10px;
padding:0.5rem 1rem;
margin-top:3%;
box-sizing:border-box;
.interact-info{
    display:flex;
    justify-content:space-between;
    margin-bottom:3%;
    & div{
        cursor:pointer;
    }
    & div:hover{
        text-decoration:underline;
    }
    .likes{
        display:flex;
        align-items:center;
        img{
            width:25px;
        }
    }
}
.post-content
{
    img,video{
        width:100%;
    }
}
`
export const UserInfo = styled.div`
display:flex;
align-items:center;
.avatar{
    margin-right:3%;
    width:50px;
    height:50px;
    overflow:hidden;
    border-radius:50%;
    img{
        width:100%;
    }

}
.wp-name{
    display:flex;
    flex-direction:column;
    .name{
        font-weight:bold;
    }
    a{
        text-decoration:none;
        color:black;
        &:hover{
            text-decoration:underline;
        }
    }
}
`
export const InteractSection = styled.div`



`
export const ListAction = styled.ul`
list-style-type:none;
display:grid;
grid-template-columns:1fr 1fr 1fr;
padding:0;
padding:1% 0;
margin:0;
border-top:1px solid black;
li{
    width:100%;
    padding:0.5rem 0rem;
    border-radius:5px;
    color:rgb(122,103,110);
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    font-weight:bold;
    svg{
        margin-right:5%;
    }
    &:hover{
        background:rgb(240,242,245);
    }
    span
    {
        @media screen and (max-width:800px)
        {
            // display:none;
        }
    }
}
.liked{
    color:rgb(45,136,255);
}
`
export const CommentSection=styled.li`
& form{
    display:flex;
    height:40px;
    width:100%;
    input{
        width:100%;
        border:none;
        outline:none;
        background:rgb(240,242,245);
        border-radius:50px;
        padding-left:5%;
        height:100%;
    }
}
`
export const ListComment=styled.ul`
list-style-type:none;
padding:0;
padding-top:3%;
border-top:1px solid black;
margin:0;
li{
    display:flex;
    .avatar
    {
        width:40px;
        height:40px;
        overflow:hidden;
        border-radius:50%;
        img{
            width:100%;
            margin-right:3%;
        }
    }
    .wp-comment-content{
        display:flex;
        flex-direction:column;
        background:rgb(240,242,245);
        border-radius:10px;
        padding:0.5rem;
        .username{
            font-weight:bold;
        }
    }
}
li+li{
    margin:2% 0%;
}
`
export const TopSection=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
.setting{
    position:relative;
    .icon{
        cursor:pointer;
    }
    .list-settings{
        list-style-type:none;
        position:absolute;
        width:200px;
        right:0;
        border:1px solid black;
        border-radius:10px;
        background:white;
        padding:1rem;
        li{
            padding:0.5rem;
            font-weight:bold;
            border-radius:5px;
            cursor:pointer;
            &:hover{
                background:rgb(237,239,242);
            }
        }

    }
}
`