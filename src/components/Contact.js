const Contact = () =>{
    return (
        <div>
            <h1 className="font-bold text-4xl p-4 mt-20 text-center">CONTACT US</h1>
            <h5 className="mt-9 font-serif text-5xl text-center">DROP YOUR MESSAGE</h5>
            <form className="flex flex-col items-center m-[50px]">
                <input type="text" placeholder="Name" className="border-2 border-sky-500 text-center p-3 m-2 rounded-xl"></input>
                <input type="text" placeholder="Email_id" className="mt-5  border-2 border-sky-500 text-center p-3 m-2 rounded-xl w-[260px]"></input>
                <input type="text" placeholder="Message" className="mt-5 h-[200px] w-[500px]  border-2 border-sky-500 text-center p-2 m-2 
                rounded-xl"></input>
                <button onClick={(e)=>e.preventDefault()} className="mt-5 border-2 border-sky-500 text-center p-3 m-2 w-20 rounded-xl">Submit</button>
            </form>
        </div>
    )
}
export default Contact;