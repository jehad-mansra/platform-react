import React from 'react'

const Form = ({handleAddPost,setText,text,setTitle,title}) => {
  return (
    <form className="ui reply form">
    <div className="field">
      <div className="ui input" style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"} }>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          
        />
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{resize:'none' , marginTop : '10px' ,boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"}}
      
      ></textarea>
    </div>
    <div className="ui blue labeled submit icon button" onClick={handleAddPost}>
      <i className="icon edit"></i> Add Post
    </div>
  </form>
  )
}

export default Form