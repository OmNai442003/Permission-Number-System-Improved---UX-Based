function Task3Page_Control() {

    return (
        <div className='formControl'>
            <form onSubmit>
                <input type="text" placeholder='Student Name' />
                <br />
                <input type='text' placeholder='Student Id'  />
                <br />
                <button className='task3Button' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Task3Page_Control