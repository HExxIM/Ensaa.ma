
function page({params}) {
    const name = params.name;
    return ( 
        <div>{name}</div>
     );
}

export default page;