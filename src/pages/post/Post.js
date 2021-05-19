import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {deletePost, getPosts, setPosts, updatePost} from "../../store/Reducer";
import Postmodal from "./components/Postmodal";

function Post({posts, getPosts, setPosts, updatePost, deletePost}) {

    const [modalVisible, setModalVisible] = useState(false)
    const [edit, setEdit] = useState('')

    useEffect(() => {
        getPosts()
    }, [])

    const openModal = () => {
        setModalVisible(!modalVisible)
    }

    const savePosts = (event, error, values) => {
        let title = event.target[0].value;
        let body = event.target[1].value;

        if (edit) {
            updatePost({...values, id: edit.id})
        } else {
            setPosts({
                id: posts.length + 1,
                title,
                body
            })
        }
        openModal()
    }

    const editPost = (item) => {
        setModalVisible(true)
        setEdit(item)
    }


    return <div>
        <button onClick={openModal} className={'btn btn-success mt-2'}> + Add Post</button>

        <div className="row mt-3">
            {
                posts.map(item => (<div className={'col-md-4'}>
                    <div className="card">
                        <div className="card-header">{item.title}</div>
                        <div className="card-body">{item.body}</div>
                        <div className="card-footer">
                            <button onClick={() => editPost(item)} className={'btn btn-success'}>Edit Post</button>
                            <button onClick={() => deletePost(item.id)} className={'btn btn-danger'}>Delete Post</button>
                        </div>
                    </div>
                </div>))
            }
        </div>


        <Postmodal isOpen={modalVisible} toggle={openModal} savePosts={savePosts} edit={edit}/>
    </div>
}

export default connect(
    ({postReducer: {posts}}) => ({posts}), {getPosts, setPosts, updatePost, deletePost})(Post);
