//댓글 입력창 comp

import React, { useState, FormEvent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface Comment {
  id: number;
  text: string;
}

const Comment: React.FC = () => {
  const [input, setInput] = useState<string>(''); // 입력창 값
  const [comments, setComments] = useState<Comment[]>([]); // 

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      text: input,
    };

    setComments([newComment, ...comments]);
    setInput('');
  };

  const handleDelete = (id: number) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <>
    <Container>
        <Row>
            <Col lg={12} md={12} sm={12}>
                <form 
                    onSubmit={handleSubmit}
                    style={{ 
                        width:'100%', 
                        margin:'0 auto',
                    }}    
                >
                <div className="mb-3 d-flex">
                    <textarea
                    className="form-control"
                    rows={2} // 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="내용을 입력하세요"
                    style={{borderRadius:'15px', resize:'none'}}
                    
                    />
                </div>
                <div
                    style={{display:'flex', justifyContent:'flex-end'}}>
                    <button type="submit" 
                        className="btn primary-dark-btn nav-small mb-3"
                        style={{borderRadius:'50px'}}
                    >등록</button>
                </div>
                <ul className="list-group">
                    {comments.map(comment => (
                    <li
                        key={comment.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                        style={{ border: 'none' }}
                        >
                        {comment.text}
                        <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(comment.id)}
                        style={{ borderRadius: '30px' }}
                        >삭제</button>
                    </li>
                    ))}
                </ul>
                </form>
            </Col>
        </Row>
    </Container>
</>
  );
};

export default Comment;