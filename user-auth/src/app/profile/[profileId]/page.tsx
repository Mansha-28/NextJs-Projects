export default function userProfile({params}:any){
    return (
        <div>
            <h1>Profile page of the user <span>{params.profileId}</span> </h1>
        </div>
    )
}