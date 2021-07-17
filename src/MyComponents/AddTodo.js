import React ,{ useState } from 'react';
import { Button, Form } from 'react-bootstrap';


export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank");
        }
        addTodo(title,desc);
        setTitle("");
        setDesc("");
    }

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Todo Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="desc">
                    <Form.Label>Todo Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                </Form.Group>
                
                <Button variant="success" type="submit" className="btn btn-sm">
                    Add Todo
                </Button>
            </Form>
        </div>
    )
}
