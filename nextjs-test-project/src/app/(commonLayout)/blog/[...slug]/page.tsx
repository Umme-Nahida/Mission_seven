// "use-client"
const CatchAllRoute = async({params}:{params:Promise<string[]>}) => {

    console.log(await params)
    return (
        <div>
            <h1 className="text-3xl">catch all route </h1>
        </div>
    );
};

export default CatchAllRoute;